
import { Box } from "@chakra-ui/react";
import React from "react";
import Background from "../components/background";
import Navbar from "../components/navbar";

export default function StinkyPoopy() 
{
  return (
    <>
      <Navbar />
      <Background />
      <Box mt="20%" textAlign="center" color="black" fontSize="50px">
        Undefined reference to page :^)
      </Box>
      <Box textAlign="center" color="black" fontSize="50px">
        404
      </Box>
    </>
  );
}
