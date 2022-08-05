import { DeepPartial, Theme } from "@chakra-ui/react";

/** @extend additional colors here */
const extendedColors : DeepPartial<
    Record<string, Theme['colors']['blackAlpha']>
    >= {
    brand: {
        100: "#f2c4d0",
        200: "#f2f2f2",
        300: "#737373",
        400: "#101010",
        500: "#eaeaea",
      },  
}

/** @override chakra colors here */
const overrideChakraColors: DeepPartial<Theme["colors"]> = {};

const colors = {
    ...overrideChakraColors,
    ...extendedColors,
};

export default colors;