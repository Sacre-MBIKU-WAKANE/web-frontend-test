import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { getActiveImage } from "../../molecules/images-list/slice";

function ImageSelected() {
  const activeImage = useSelector(getActiveImage);
  return (
    <Box w={["200px", "300px"]} position={"relative"}>
      <div
        style={{
          position: "absolute",
          left: "5%",
          top: "2%",
          border: "#505155 solid 1px",
          borderRadius: "2px",
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />
      <Box position={"relative"} zIndex={3}>
        <Image src={activeImage.source} alt={activeImage.title} />
      </Box>
    </Box>
  );
}

export default ImageSelected;
