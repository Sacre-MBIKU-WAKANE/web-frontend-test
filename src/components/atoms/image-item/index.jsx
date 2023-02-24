import { Box, Image } from "@chakra-ui/react";
import React from "react";

function ImageItem({ imageTitle, imageSource, isActive }) {
  return (
    <Box w={"100px"} opacity={isActive ? 1 : .5}>
      <Image
        src='https://cdn.create.vista.com/api/media/medium/255294576/stock-photo-side-view-african-american-woman?token='
        alt={imageTitle}
      />
    </Box>
  );
}

export default ImageItem;
