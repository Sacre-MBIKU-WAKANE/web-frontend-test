import { Box, Image } from "@chakra-ui/react";
import React from "react";

function ImageItem({ imageTitle, imageSource, isActive, onClick }) {
  return (
    <Box w={"100px"} opacity={isActive ? 1 : 0.5} onClick={onClick}>
      <Image src={imageSource} alt={imageTitle} />
    </Box>
  );
}

export default ImageItem;
