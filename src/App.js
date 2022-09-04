import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Header from './Components/Header/Header'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Footer from './Components/Footer/Footer'

function App() {
  const greeting = "Hola usuario de mi página"

  return (
    <ChakraProvider>
      <Header />
      <ItemListContainer greeting={greeting}/>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
