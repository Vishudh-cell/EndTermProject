import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Input, VStack, Heading } from "@chakra-ui/react";
import { useTodo } from "../../../context/TodoContext";

const NewTodo = () => {
  const navigate = useNavigate();
  const [listName, setListName] = useState("");
  const { addTodoList } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!listName.trim()) {
      alert("List name cannot be empty!");
      return;
    }
    addTodoList(listName);
    navigate("/dashboard");
  };

  return (
    <Box p="6">
      <Heading mb="6">Create New Todo List</Heading>
      <VStack spacing="4" as="form" onSubmit={handleSubmit}>
        <Input
          value={listName}
          onChange={(e) => setListName(e.target.value)}
          placeholder="Enter list name..."
          size="lg"
        />
        <Button type="submit" colorScheme="blue" width="full">
          Create List
        </Button>
        <Button 
          onClick={() => navigate("/dashboard")} 
          variant="outline" 
          width="full"
        >
          Cancel
        </Button>
      </VStack>
    </Box>
  );
};

export default NewTodo;
