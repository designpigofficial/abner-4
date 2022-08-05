import {
  Box,
  Heading,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";

const TextSection = () => {
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "md",
  });
  return (
    <>
      <Heading as="h2" fontSize="3xl">
        Abner Development
      </Heading>

      <Box
        backgroundColor={colorMode === "light" ? "gray.200" : "gray.500"}
        padding={4}
        borderRadius={4}
      >
        <Box d="flex" alignItems="center" fontSize={textSize}>
          Design | Develop | Market
        </Box>
      </Box>
    </>
  );
};

export default TextSection;
