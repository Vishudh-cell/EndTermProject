import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TodoProvider } from "./context/TodoContext";
import Welcome from "./Pages/Pages/Page1/Welcome";
import Dashboard from "./Pages/Pages/Page2/Dashboard";
import ViewTodo from "./Pages/Pages/Page3/ViewTodo";
import NewTodo from "./Pages/Pages/Page4/NewTodo";

function App() {
  return (
    <Box>
      <TodoProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/view-todo/:id" element={<ViewTodo />} />
            <Route path="/new-todo" element={<NewTodo />} />
          </Routes>
        </Router>
      </TodoProvider>
    </Box>
  );
}

export default App;