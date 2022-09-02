import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Header from './Components/Header/Header'

function App() {
  return (
    <ChakraProvider>
      <Header />
    </ChakraProvider>
  );
}

export default App;
