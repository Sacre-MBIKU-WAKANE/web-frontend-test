import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import ImagesList from "./components/molecules/images-list";

function App() {
  return (
    <ChakraProvider>
      <Box w={"100vw"} h={"100vh"} bg={"#282c34"}>
        <Flex position={"relative"} w={"100%"} h={"100%"}>
          <ImagesList />
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
