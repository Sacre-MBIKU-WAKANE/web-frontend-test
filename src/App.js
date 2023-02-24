import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import LeftSection from "./components/organisms/left-side";
import RightSection from "./components/organisms/right-side";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";

function App() {
  return (
    <ChakraProvider>
      <Box
        w={"100%"}
        h={["200vh", "115vh"]}
        bg={"#282c34"}
        px={"5%"}
        pt={"2%"}
        position={"relative"}
      >
        <Box position={"absolute"} left={6}>
          <ArrowBackIcon color={"#6b6c6f"} w={8} h={8} />
        </Box>
        <Box position={"absolute"} right={6}>
          <ArrowForwardIcon color={"#6b6c6f"} w={8} h={8} />
        </Box>
        <Flex
          alignItems={"flex-start"}
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
