import { Box, ChakraProvider, Flex } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box w={"100vw"} h={"100vh"} bg={"#282c34"}>
        <Flex position={"relative"}></Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
