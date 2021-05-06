
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import LinkButton from "./linkButton";

export default function Footer() 
{
  return (
    <Flex id="footer" justifyContent="center" alignItems="center" flexDir="column" w="100%" h="120px">
      <Box opacity=".75" pos="absolute" w="100%" h="120px" backgroundColor="black" />
      <Box my="5px" pos="relative">© 2021 Olaru Alexandru, All rights reserved.</Box>
      <Box mb="5px" pos="relative">Colegiul Tehnic "Mihai Bacescu" Falticeni</Box>
      <Box pos="relative">
        Sursa website: <LinkButton href="https://github.com/oda404/atestat" />
      </Box>
    </Flex>
  );
}
