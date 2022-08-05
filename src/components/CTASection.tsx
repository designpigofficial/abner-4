import { Box, Button, Code, Flex, Image, Link } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

const repoLink = "https://github.com/designpigofficial/abner-4.git";

const CTASection = () => {
  return (
    <Box textAlign="center" marginTop={8}>
      <Flex marginY={4} justifyContent="center" gridGap={2}>
        <Link aria-label="Deploy to Vercel" isExternal href="google.com">
          <Image src="https://vercel.com/button" alt="Vercel deploy button" />
        </Link>
      </Flex>


      <Flex justifyContent="center" alignItems="center" gridGap={2}>
        <Button
          as="a"
          href="https://github.com/designpigofficial/abner-4.git"
          target="_blank"
          leftIcon={<AiFillGithub />}
          size="sm"
        >
          Github
        </Button>
      </Flex>
    </Box>
  );
};

export default CTASection;
