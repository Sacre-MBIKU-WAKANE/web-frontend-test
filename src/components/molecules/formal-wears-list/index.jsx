import {
  Box,
  Flex,
  List,
  ListItem,
  Tag,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getColors,
  getSelectedColor,
  getSelectedSize,
  getSizeGuide,
  getSizes,
  getWears,
  selectColor,
  selectSize,
} from "../../organisms/formal-wears/slice";

function FormalWearsList() {
  const wears = useSelector(getWears);
  const colors = useSelector(getColors);
  const sizes = useSelector(getSizes);
  const selectedColor = useSelector(getSelectedColor);
  const selectedSize = useSelector(getSelectedSize);
  const sizeGuide = useSelector(getSizeGuide);
  const dispatch = useDispatch();
  console.log({ sizes });

  return (
    <Box>
      <Flex
        w={"100%"}
        justifyContent='flex-start'
        alignItems={"center"}
        mb={"0.8rem"}
      >
        <Text color={"#fff"} fontSize={"lg"} mr={"1rem"}>
          Formal Wears
        </Text>
        <UnorderedList display={"flex"} flexDirection={"row"}>
          {wears &&
            wears.length &&
            wears.map((item) => (
              <ListItem mr={"2rem"} color={"#fff"}>
                <Text fontSize={"sm"}>{item}</Text>
              </ListItem>
            ))}
        </UnorderedList>
      </Flex>
      <Flex w={"100%"} flexDirection='column'>
        <Text
          color={"#fff"}
          fontSize={"sm"}
          mr={"1rem"}
          fontWeight={"semibold"}
        >
          Select color
        </Text>

        <List
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          mb={"0.8rem"}
        >
          {colors &&
            colors.length &&
            colors.map((item) =>
              item === selectedColor ? (
                <div
                  style={{
                    width: "19px",
                    height: "19px",
                    borderRadius: "100%",
                    border: "1px solid #fff",
                    marginRight: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ListItem
                    w={"15px"}
                    h={"15px"}
                    backgroundColor={item}
                    borderRadius={"100%"}
                    onClick={() => dispatch(selectColor(item))}
                    cursor={"pointer"}
                  />
                </div>
              ) : (
                <ListItem
                  w={"15px"}
                  h={"15px"}
                  backgroundColor={item}
                  borderRadius={"100%"}
                  mr={"0.5rem"}
                  onClick={() => dispatch(selectColor(item))}
                  cursor={"pointer"}
                />
              )
            )}
        </List>
      </Flex>

      <Flex w={"200px"} flexDirection='column' mb={"2rem"}>
        <Flex w={"auto"} justifyContent={"space-between"} mb={"0.5rem"}>
          <Text
            color={"#fff"}
            fontSize={"sm"}
            mr={"1rem"}
            fontWeight={"semibold"}
          >
            Select size
          </Text>
          <Text
            color={selectedColor || "#fff"}
            fontSize={"sm"}
            mr={"1rem"}
            fontWeight={"semibold"}
          >
            Size Guide
          </Text>
        </Flex>

        <List display={"flex"} flexDirection={"row"} alignItems={"center"}>
          {sizes &&
            sizes.length &&
            sizes.map((item) => (
              <Tag
                mr={"0.5rem"}
                cursor={"pointer"}
                backgroundColor={
                  item === selectedSize
                    ? "#4FD1C5"
                    : item === sizeGuide
                    ? "#9899a0"
                    : "transparent"
                }
                border={"1px solid "}
                borderColor={
                  item !== selectedSize && item !== sizeGuide
                    ? "#fff"
                    : "transparent"
                }
                color={"#fff"}
                onClick={() => dispatch(selectSize(item))}
              >
                {item}
              </Tag>
            ))}
        </List>
      </Flex>

      <Box>
        <Text color={"#fff"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          sapiente cupiditate velit natus, in ipsam sequi tempora eius optio
          laborum, quae ipsum animi ex nostrum assumenda quo? Vel iure eos
          reiciendis, veritatis perspiciatis inventore velit aliquam vitae
          quaerat exercitationem error doloribus corporis voluptate ex? Deleniti
          ratione beatae repudiandae nam placeat reiciendis delectus dolore
          consequuntur fugit, culpa aliquid minus nisi exercitationem!
        </Text>
      </Box>
    </Box>
  );
}

export default FormalWearsList;
