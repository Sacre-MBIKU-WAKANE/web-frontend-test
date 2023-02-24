import { Flex } from "@chakra-ui/react";
import OptionLists from "../../molecules/option-list";
import RightSideHeader from "../../molecules/right-side-header";
import FormalWears from "../formal-wears";

function RightSection() {
  return (
    <Flex alignItems={"flex-start"} flexDirection={"column"} w={"100%"}>
      <RightSideHeader />
      <FormalWears />
      <OptionLists />
    </Flex>
  );
}

export default RightSection;
