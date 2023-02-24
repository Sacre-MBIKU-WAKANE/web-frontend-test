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
      <List>
        {images &&
          images.length &&
          images.map(({ title, source }) => (
            <ImageItem
              imageTitle={title}
              imageSource={source}
              isActive={activeImage === title}
              onClick={() => {
                dispatch(selectImage(title));
              }}
            />
          ))}
      </List>
    </Box>
  );
}

export default ImagesList;
