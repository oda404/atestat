
import Navbar from "../components/navbar";
import Particles from "react-particles-js";
import React from "react";
import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

const config: any = {
  "background": {
    "color": {
      "value": "#9f8f8f"
    }
  },
  "fullScreen": {
    "enable": true,
    "zIndex": 1
  },
  "interactivity": {
    "events": {
      "onClick": {
        "enable": true,
        "mode": "push"
      },
      "onHover": {
        "enable": true,
        "mode": "repulse"
      }
    },
    "modes": {
      "attract": {
        "speed": 0.5
      },
      "repulse": {
        "speed": 0.5
      }
    }
  },
  "particles": {
    "color": {
      "value": "#ff0000",
      "animation": {
        "h": {
          "enable": true,
          "speed": 10
        },
        "s": {
          "speed": 0.5
        },
        "l": {
          "speed": 0.5
        }
      }
    },
    "links": {
      "color": {
        "value": "#000000"
      },
      "enable": true,
      "opacity": 0.4
    },
    "move": {
      "enable": true,
      "gravity": {
        "maxSpeed": 20
      },
      "path": {},
      "outModes": {
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      }
    },
    "number": {
      "density": {
        "enable": true
      },
      "value": 80
    },
    "opacity": {
      "value": 0.5,
      "animation": {
        "speed": 0.5
      }
    },
    "size": {
      "value": {
        "min": 0.1,
        "max": 3
      },
      "animation": {
        "speed": 2
      }
    }
  }
};

export default function Index()
{
  return (
    <Flex
    >
      <Navbar/>
      <Box pos="fixed" zIndex="-1">
        <Particles
          width="1920"
          height="1080"
          params={config}
        />
      </Box>

      <Flex
        id="content"
        flexDir="column"
        mx="auto"
        maxW="62%"
        w="62%"
      >
        <Box
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
          <Box pos="relative" left="100%" backgroundColor="white" w="25px" h="500px"/>
          <Image
            backgroundColor="black"
            w="100%"
          />
        </Box>

        <Box
          mt="100px"
          id="begining"
        >
          <Box
            fontSize="40px"
            >
            Inceputul
          </Box>
          <Box w="100%" h="1px" backgroundColor="black"/>
        </Box>
      </Flex>
    </Flex>
  );
}