import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todoLists, setTodoLists] = useState([]);

  const addTodoList = (name) => {
    const newList = {
      id: Date.now(),
      name,
      items: []
    };
    setTodoLists([...todoLists, newList]);
  };

  const addTodoItem = (listId, text) => {
    setTodoLists(todoLists.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          items: [...list.items, { id: Date.now(), text, completed: false }]
        };
      }
      return list;
    }));
  };

  const toggleTodoItem = (listId, itemId) => {
    setTodoLists(todoLists.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          items: list.items.map(item => 
            item.id === itemId 
              ? { ...item, completed: !item.completed }
              : item
          )
        };
      }
      return list;
    }));
  };

  const deleteTodoItem = (listId, itemId) => {
    setTodoLists(todoLists.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          items: list.items.filter(item => item.id !== itemId)
        };
      }
      return list;
    }));
  };

  const deleteTodoList = (listId) => {
    setTodoLists(todoLists.filter(list => list.id !== listId));
  };

  return (
    <TodoContext.Provider value={{
      todoLists,
      addTodoList,
      addTodoItem,
      toggleTodoItem,
      deleteTodoItem,
      deleteTodoList
    }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};