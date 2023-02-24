import { Box, Image } from "@chakra-ui/react";
import React from "react";

function ImageItem({ imageTitle, imageSource, isActive, onClick }) {
  return (
    <Box
      w={["400px", "50px"]}
      opacity={isActive ? 1 : 0.5}
      onClick={onClick}
      cursor='pointer'
      mb={["0", "2"]}
      mt={["1rem", "0"]}
      mr={["0.5rem", "0"]}
    >
      <Image src={imageSource} alt={imageTitle} />
    </Box>
  );
}

export default ImageItem;
