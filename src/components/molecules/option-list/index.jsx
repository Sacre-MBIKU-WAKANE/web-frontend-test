import { List, ListItem, Text, Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOptions,
  getSelectedOption,
  selectOption,
} from "../../organisms/options/slice";
import { TriangleUpIcon } from "@chakra-ui/icons";

function OptionLists() {
  const options = useSelector(getOptions);
  const optionSelected = useSelector(getSelectedOption);
  console.log({ optionSelected });
  const dispatch = useDispatch();
  return (
    <List
      display={"flex"}
      w={"auto"}
      padding={"0.7rem"}
      border={"1px solid #fff"}
      mt={"2rem"}
    >
      {options &&
        options.length &&
        options.map(({ title, optionsList }) => (
          <ListItem
            mr={"1rem"}
            cursor={"pointer"}
            onClick={() => dispatch(selectOption({ title, optionsList }))}
            onMouseLeave={() => dispatch(selectOption(undefined))}
          >
            <Text color={"#fff"} fontSize={"sm"}>
              {title}
            </Text>
            {title === optionSelected?.title && (
              <Box position={"relative"}>
                <Box position={"absolute"} top={-2} left={6}>
                  <TriangleUpIcon color={"#fff"} w={8} h={8} />
                </Box>
                <List
                  backgroundColor={"#fff"}
                  position={"absolute"}
                  top={4}
                  pl={1}
                  pr={20}
                >
                  {optionSelected.optionsList.map((option) => (
                    <ListItem>{option}</ListItem>
                  ))}
                </List>
              </Box>
            )}
          </ListItem>
        ))}
    </List>
  );
}

export default OptionLists;
