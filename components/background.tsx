/*
    Copyright Alexandru Olaru.
    Distributed under the MIT license.
*/

import { Box } from "@chakra-ui/react";
import React from "react";
import Particles from "react-particles-js";

const particleJSConfig: any = {
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
        "maxSpeed": 1
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

export default function Background() 
{
  return (
    <Box id="fundal" pos="fixed" zIndex="-1">
      <Particles
        params={particleJSConfig}
      />
    </Box>
  );
}
