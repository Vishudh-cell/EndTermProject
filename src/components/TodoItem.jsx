import { Box, Text, HStack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useTodo } from "../context/TodoContext";

const TodoItem = ({ list }) => {
  const navigate = useNavigate();
  const { deleteTodoList } = useTodo();

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" width="100%" bg="white">
      <HStack justifyContent="space-between">
        <Text fontSize="lg" fontWeight="bold">{list.name}</Text>
        <HStack spacing={2}>
          <Button 
            colorScheme="blue" 
            size="sm"
            onClick={() => navigate(`/view-todo/${list.id}`)}
          >
            View Tasks
          </Button>
          <Button
            colorScheme="red"
            size="sm"
            onClick={() => deleteTodoList(list.id)}
          >
            Delete List
          </Button>
        </HStack>
      </HStack>
      <Text color="gray.600" mt={2}>
        {list.items.length} tasks
      </Text>
    </Box>
  );
};

export default TodoItem;