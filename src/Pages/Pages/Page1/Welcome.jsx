import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <Box p="6" textAlign="center" bg="gray.100" minH="100vh">
      <Heading mb="6">Welcome to Your To-Do List App!</Heading>
      <Text fontSize="xl" mb="6">
        Stay organized and boost productivity by managing your tasks efficiently.
      </Text>
      <Button 
        colorScheme="blue" 
        size="lg"
        onClick={() => navigate("/dashboard")}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default Welcome;
