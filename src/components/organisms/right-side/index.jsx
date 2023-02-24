import { Flex } from "@chakra-ui/react";
import RightSideHeader from "../../molecules/right-side-header";

function RightSection() {
  return (
    <Flex
      alignItems={"center"}
      flexDirection={["column-reverse", "row"]}
      w={"100%"}
    >
      <RightSideHeader />
    </Flex>
  );
}

export default RightSection;
