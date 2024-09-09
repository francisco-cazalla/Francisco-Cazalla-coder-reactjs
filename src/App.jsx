import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ItemListContainer from "../src/item/item";

const App = () => {

  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer greeting="Hola a todos, esta es mi tienda!!" />
    </ChakraProvider>
  );
};

export default App;
