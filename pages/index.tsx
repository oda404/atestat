
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
          <Box w="100%" my="5px" h="1px" backgroundColor="black"/>
          <Box fontSize="21px">
            Punctul de pornire in dezvoltarea internetului a fost rivalitatea
            intre cele doua mari puteri ale secolului al XX-lea: SUA si URSS.
            In 1957, URSS lanseaza in orbita primul satelit artificial al
            Pamantului denumit Sputnik. Ca urmare al acestui lucru, SUA
            o agentia speciala subordonata Pentagonului: Advanced Research 
            Projects Agency, si are ca scop "Mentinerea superioritatii
            tehnologice a armatei Statelor Unite."
            In 1959 John McCarthy, profesor la Universitatea Stanford,
            gaseste solutia de a conecta mai multe terminale la un singur
            calculator central (time-sharing), care este o modalitate de lucru
            in care mai multe aplicatii solicita acces concurential la o resursa,
            si in care fiecarei aplicatii i se aloca un anumit timp pentru folosirea
            resursei solicitate.
            Aparand apoi primele calculatoare în marile universitati se pune problema 
            interconectarii acestora. Cercetatorul Lawrence Roberts sustine o solutie
            de interconectare prin comutare de pachete (packet switching) în modelul 
            numit "client-server". Astfel, pentru a transmite informatia, aceasta este 
            maruntita în portiuni mici, denumite pachete. Ca si la posta clasica, 
            fiecare pachet contine informatii referitore la destinatar, astfel încat 
            el sa poata fi corect dirijat pe retea. La destinatie întreaga informatie 
            este reasamblata. Desi aceasta metoda întampina rezistenta din partea 
            specialistilor, în 1969 începe sa functioneze reteaua "ARPANET" între 4 
            noduri: University of California din Los Angeles (UCLA), University of 
            California din Santa Ana, University of Utah si Stanford Research Institute 
            (SRI). Toate acestea au fost codificate într-un protocol care reglementa 
            transmisia de date. În forma sa finala, acesta era TCP/IP (Transmission Control 
            Protocol / Internet Protocol), creat de Vint Cerf si Robert Kahn în 1970 si care 
            este si acum baza Internetului. TCP/IP face posibil ca modele diferite de 
            calculatoare, de exemplu cele compatibile cu IBM sau si Mac's, folosind sisteme 
            diferite de operare, cum ar fi UNIX, Windows, MacOS etc. sa se "înteleaga" unele cu altele.
            În acest fel, Internetul urma să devină cu adevărat independent de platforma harware 
            utilizată. Prima conexiune ARPANET a fost realizată în 29 octombrie 1969, ora 22:30 între 
            University of California din Los Angeles și Institutul de Cercetare Stanford. 
            Ca program al Ministerului Apărării al SUA, ARPANET s-a dezvoltat uluitor de repede, 
            la el conectându-se din ce în ce mai multe calculatoare. În 1979 ARPA decide să separe 
            rețeaua în două, una pentru lumea comercială și universitară, și una militară. Cele două 
            rețele puteau comunica în continuare, construindu-se practic o inter-rețea (internet) 
            denumită inițial DARPA Internet și consacrată ulterior sub denumirea Internet. 
            Numeroși cercetători din domeniul academic și militar si-au concentrat eforturile în 
            scopul dezvoltării unor programe de comunicare în rețea. Astfel în 1980 o serie de 
            programe de comunicare (bazate pe protocoale binedefinite), care sunt utilizate 
            și astăzi, erau deja finalizate. În 1983, TCP/IP devine unicul protocol oficial 
            al Internetului, și ca urmare, tot mai multe calculatoare din întreaga lume au fost 
            conectate la ARPANET. Creșterea numărului de calculatoare conectate la Internet a 
            devenit exponențială, astfel încât în 1990 Internetul cuprindea 3.000 de rețele și 
            300.000 de calculatoare. În 1992 era deja conectat calculatorul cu numărul 1.000.000. 
            Apoi mărimea Internetului s-a dublat cam la fiecare an.
          </Box>
          <Image  w="400px" src="images/first-web-server.jpg">
              
          </Image>
        </Box>
      </Flex>
    </Flex>
  );
}