import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import ImageItem from "./components/atoms/image-item";

function App() {
  return (
    <ChakraProvider>
      <Box w={"100vw"} h={"100vh"} bg={"#282c34"}>
        <Flex position={"relative"} w={"100%"} h={"100%"}>
          <ImageItem />
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
