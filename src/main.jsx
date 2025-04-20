import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { TodoProvider } from './context/TodoContext'
import ErrorBoundary from './components/ErrorBoundary'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ChakraProvider>
        <TodoProvider>
          <App />
        </TodoProvider>
      </ChakraProvider>
    </ErrorBoundary>
  </React.StrictMode>
)