import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import LeftSection from "./components/organisms/left-side";
import RightSection from "./components/organisms/right-side";

function App() {
  return (
    <ChakraProvider>
      <Box w={"100vw"} h={["200vh", "100vh"]} bg={"#282c34"} p={"5%"}>
        <Flex
          alignItems={"center"}
          position={"relative"}
          w={"100%"}
          h={"100%"}
          flexDirection={["column", "row"]}
          justifyContent={["space-around", "space-between"]}
        >
          <LeftSection />
          <RightSection />
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
