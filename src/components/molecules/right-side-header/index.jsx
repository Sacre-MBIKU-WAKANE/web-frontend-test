import { Box, Flex, Text } from "@chakra-ui/react";
import OwnerProfile from "../../atoms/owner-profile";

function RightSideHeader() {
  return (
    <Flex w='full' justifyContent={"space-between"} alignItems='center'>
      <Text as={"h1"} fontSize='2xl' color={"#fff"}>
        Host Lequite Artistic
      </Text>
      <OwnerProfile />
    </Flex>
  );
}

export default RightSideHeader;
