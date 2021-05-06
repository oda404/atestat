
import Navbar from "../components/navbar";
import React from "react";
import { Image, Flex, Box, Link } from "@chakra-ui/react";
import Footer from "../components/footer";
import Background from "../components/background";
import LinkButton from "../components/linkButton";

export default function Index() 
{
  const createContentButton = (href: string, name: string) => {
    return (
      <Link
        background="none"
        border="none"
        boxShadow="none"
        boxSize="none"
        fontSize="20px"
        m="8px"
        _hover={{
          background: "none",
          borderRadius: "none",
          border: "none",
          boxShadow: "none",
          boxSize: "none",
          textColor: "#ffffff",
          cursor: "pointer"
        }}
        _active={{
          background: "none",
          borderRadius: "none",
          border: "none",
          boxShadow: "none",
          boxSize: "none",
        }}
        _focus={{
          boxShadow: "none"
        }}
        href={href}
      >
        {name}
      </Link>
    );
  };

  return (
    <Flex
      flexDir="column"
      id="main"
    >
      <Navbar />
      <Background />

      <Flex
        id="continut"
        flexDir="column"
        mx="auto"
        maxW="62%"
        h="100vh"
        w="62%"
      >
        <Box
          id="intro"
          mt="100px"
          maxH="500px"
          h="500px"
          minW="100%"
          boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
        >
          <Box m="40px" pos="absolute">
            <Box fontSize="70px">
              Internetul,
            </Box>
            <Box fontSize="35px">
              si cum am ajuns aici.
            </Box>
            <Box fontSize="18px" mt="270px">
              Elev: Olaru Alexandru
            </Box>
            <Box fontSize="18px" mt="10px">
              Colegiul Tehnic "Mihai Bacescu" Falticeni
            </Box>
          </Box>
          <Box pos="relative" left="98%" backgroundColor="white" w="25px" h="500px" />
          <Image
            backgroundColor="black"
            w="100%"
          />
        </Box>

        <Box w="100%" h="2px" mt="50px">
          <Box textAlign="center" fontSize="28px">Continut</Box>
          <Box mt="10px" w="100%" h="2px" backgroundColor="black" />
          <Flex>
            {createContentButton("inceputul", "Inceputul")}
            {createContentButton("accesul", "Accesul")}
          </Flex>
        </Box>
      </Flex>
      <Footer />
    </Flex>
  );
}