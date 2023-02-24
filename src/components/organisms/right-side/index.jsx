import { Flex } from "@chakra-ui/react";
import RightSideHeader from "../../molecules/right-side-header";
import FormalWears from "../formal-wears";

function RightSection() {
  return (
    <Flex alignItems={"center"} flexDirection={"column"} w={"100%"}>
      <RightSideHeader />
      <FormalWears />
    </Flex>
  );
}

export default RightSection;
