import { Box } from "@chakra-ui/react";

import TextSection from "components/TextSection";
import CTASection from "components/CTASection";
import ImageSection from "components/ImageSection";

const About = () => {
  return (
    <Box mb={8} w="full">
      <TextSection />
      <ImageSection />
      <CTASection />
    </Box>
  );
};

export default About;
