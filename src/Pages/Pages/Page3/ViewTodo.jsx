import { useParams, useNavigate } from "react-router-dom";
import { Box, Button, Input, VStack, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useTodo } from "../../../context/TodoContext";

const ViewTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newTask, setNewTask] = useState("");
  const { todoLists, addTodoItem } = useTodo();

  const currentList = todoLists.find(list => list.id === Number(id));

  if (!currentList) {
    return (
      <Box p="6" textAlign="center">
        <Text>List not found</Text>
        <Button onClick={() => navigate("/dashboard")} mt="4">
          Back to Dashboard
        </Button>
      </Box>
    );
  }

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) {
      alert("Task cannot be empty!");
      return;
    }
    addTodoItem(currentList.id, newTask);
    setNewTask("");
  };

  return (
    <Box p="6">
      <Heading mb="4">{currentList.name}</Heading>
      <VStack spacing="4" align="stretch">
        {currentList.items.map((item) => (
          <Text key={item.id} textDecoration={item.completed ? "line-through" : "none"}>
            {item.text}
          </Text>
        ))}
        <form onSubmit={handleAddTask}>
          <Input 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
            placeholder="Add a task..." 
          />
          <Button type="submit" colorScheme="blue" mt="2" width="full">
            Add Task
          </Button>
        </form>
        <Button onClick={() => navigate("/dashboard")} mt="4" variant="outline">
          Back to Dashboard
        </Button>
      </VStack>
    </Box>
  );
};

export default ViewTodo;
