import {
  Box,
  Flex,
  List,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getColors,
  getSelectedColor,
  getSelectedSize,
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
  const dispatch = useDispatch();
  console.log({ wears });

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

        <List display={"flex"} flexDirection={"row"} alignItems={"center"}>
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
    </Box>
  );
}

export default FormalWearsList;
