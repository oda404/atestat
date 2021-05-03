import React, { useState } from "react";
import { Box, Image, Flex, Button } from "@chakra-ui/react";
export default function Navbar()
{
    const [navShown, showNav] = useState(false);
    const navbarHeight = 40;

    return (
        <Flex pos="fixed" zIndex="999">
            <Image
                id="navbar-trigg"
                pos="fixed"
                left="0"
                transform={navShown ? "rotate(180deg)" : ""}
                opacity=".55"
                top="0"
                ml="20px"
                mt="20px"
                w="40px"
                h="40px"
                fill="black"
                transition="ease-in-out 0.2s"
                onClick={() => {
                    showNav(!navShown)
                }}
                src="images/arrow.svg"
            />
            <Box
                pos="fixed"
                left="0"
                ml="23%"
                w="54%"
                transition="ease-in-out 0.2s"
                top={navShown ? `15px` : `-${navbarHeight}px`}
            >
                <Flex mx="20px" mb="10px">
                    <Button 
                        background="none" 
                        border="none" 
                        boxShadow="none" 
                        boxSize="none" 
                        fontSize="17px"
                        _hover={{
                            background: "none", 
                            borderRadius: "none",
                            border:"none",
                            boxShadow:"none", 
                            boxSize:"none",
                            textColor:"#ffffff",
                            cursor: "pointer"
                        }}
                        _active={{
                            background: "none", 
                            borderRadius: "none",
                            border:"none",
                            boxShadow:"none", 
                            boxSize:"none",
                        }}
                        _focus={{
                            boxShadow: "none"
                        }}
                    >
                        Inceputul
                    </Button>
                </Flex>
                <Box
                    h="2px"
                    backgroundColor="#6e6b6b"
                />
            </Box>
        </Flex>
    );
}
