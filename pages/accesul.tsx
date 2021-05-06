/*
    Copyright Alexandru Olaru.
    Distributed under the MIT license.
*/

import { Flex } from "@chakra-ui/react";
import Cox from "../components/cox";
import React from "react";
import Background from "../components/background";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Accesul() 
{
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
        <Cox
          mt="100px"
          id="accesul"
        >
          <Cox
            fontSize="40px"
          >
            Accesul
          </Cox>
          <Cox w="100%" my="5px" h="1px" backgroundColor="black" />
          <Cox fontSize="21.3px">
            <Flex
              id="para"
              my="10px"
            >
              
              <Cox id="para-text">
                
              </Cox>
            </Flex>
          </Cox>
        </Cox>
      </Flex>

      <Footer />
    </Flex>
  );
}
