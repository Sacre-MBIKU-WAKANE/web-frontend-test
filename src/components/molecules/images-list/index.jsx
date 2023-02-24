import { Box, List } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageItem from "../../atoms/image-item";
import { getActiveImage, getImages, selectImage } from "./slice";

function ImagesList() {
  const images = useSelector(getImages);
  const activeImage = useSelector(getActiveImage);
  const dispatch = useDispatch();

  return (
    <Box w={"20%"} height={"20%"}>
      <List display={"flex"} flexDirection={["row", "column-reverse"]}>
        {images &&
          images.length &&
          images.map(({ title, source }) => (
            <ImageItem
              key={title}
              imageTitle={title}
              imageSource={source}
              isActive={activeImage.title === title}
              onClick={() => {
                dispatch(selectImage({ title, source }));
              }}
            />
          ))}
      </List>
    </Box>
  );
}

export default ImagesList;
