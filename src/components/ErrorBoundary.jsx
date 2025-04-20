import React from 'react';
import { Box, Heading, Text, Button } from "@chakra-ui/react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box p={8} textAlign="center">
          <Heading mb={4} color="red.500">Oops! Something went wrong</Heading>
          <Text mb={4}>We apologize for the inconvenience. Please try refreshing the page.</Text>
          <Button
            colorScheme="blue"
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </Button>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;