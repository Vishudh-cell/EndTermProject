import { useTodo } from "../../../context/TodoContext";
import { Box, Button, VStack, Heading, Grid, Text, useColorModeValue } from "@chakra-ui/react";
import TodoItem from "../../../components/TodoItem";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { todoLists } = useTodo();
  const navigate = useNavigate();
  const bgColor = useColorModeValue("gray.50", "gray.700");

  return (
    <Box p="6" minH="100vh" bg={bgColor}>
      <Box maxW="1200px" mx="auto">
        <Heading mb="6" textAlign="center">Your To-Do Dashboard</Heading>
        
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6}>
          {todoLists.length === 0 ? (
            <Box p={6} textAlign="center" gridColumn="1/-1">
              <Text fontSize="lg" mb={4}>You don't have any todo lists yet.</Text>
              <Button 
                colorScheme="blue"
                onClick={() => navigate("/new-todo")}
              >
                Create Your First List
              </Button>
            </Box>
          ) : (
            todoLists.map((list) => (
              <TodoItem key={list.id} list={list} />
            ))
          )}
        </Grid>
        
        {todoLists.length > 0 && (
          <Box mt={8} textAlign="center">
            <Button
              colorScheme="blue"
              size="lg"
              onClick={() => navigate("/new-todo")}
            >
              Create New List
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Dashboard;
