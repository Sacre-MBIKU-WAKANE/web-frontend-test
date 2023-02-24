import { Avatar, Flex, Text } from "@chakra-ui/react";
import image from "../../../assets/183a146f25ab8487c04dfcac7c5bf2e2.jpg";
function OwnerProfile() {
  return (
    <Flex alignItems={"center"}>
      <Text mr={"1rem"} color='#fff'>
        Xels trends
      </Text>
      <Avatar size={"sm"} src={image} />
    </Flex>
  );
}

export default OwnerProfile;
