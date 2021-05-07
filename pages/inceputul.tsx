/*
    Copyright Alexandru Olaru.
    Distributed under the MIT license.
*/

import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Background from "../components/background";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Inceputul() 
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
        minH="100vh"
        w="62%"
      >
        <Box
          mt="100px"
          id="inceputul"
        >
          <Box
            fontSize="40px"
          >
            Inceputul
          </Box>
          <Box w="100%" my="5px" h="1px" backgroundColor="black" />
          <Box fontSize="21.3px">
            <Flex
              id="para"
              my="10px"
            >
              <Box id="para-text">
                Punctul de pornire in dezvoltarea internetului a fost rivalitatea
                intre cele doua mari puteri ale secolului al XX-lea: SUA si URSS.
                In 1957, URSS lanseaza in orbita primul satelit artificial al
                Pamantului denumit Sputnik. Ca urmare al acestui lucru, SUA infinteaza
                o agentia speciala, subordonata Pentagonului: Advanced Research
                Projects Agency, si are ca scop "Mentinerea superioritatii
                tehnologice a armatei Statelor Unite."
              </Box>
            </Flex>
            <Flex
              id="para"
              my="10px"
            >
              <Box id="para-text">
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
              </Box>
            </Flex>
            <Flex
              id="para"
              my="10px"
            >
              <Box id="para-text">
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
            </Flex>
            <Flex
              id="para"
              my="10px"
            >
              <Box id="para-text">
                Dezvoltarea rapidă a Internetului s-a datorat faptului că accesul la documentația protocoalelor obligatorii a fost și este liber și gratuit. În 1969 S. Crocker a inițiat o serie de „note de cercetare” denumite RFC (Request for Comments), numerotate cronologic și devenite cu timpul accesibile gratuit on-line (în Internet). Marea schimbare a început în 1989, când Tim Berners Lee de la Centrul European pentru Fizica Nucleară din Geneva (CERN) a pus bazele dezvoltării primului prototip al World Wide Web (WWW sau web).
              </Box>
            </Flex>
            <Flex
              id="para"
              my="10px"
            >
              <Box id="para-text">
                O altă schimbare radicală s-a produs când, în 1993, National Center for Supercomputing Applications (NCSA) din SUA a pus la dispoziție browserul "Mosaic", care era bazat pe o interfață grafică (Windows). Enorma creștere a webului a început aproape dintr-o dată: în iunie 1993 erau înregistrate 130 servere web, iar în 1994 erau deja peste 11.500 de servere.
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>

      <Footer />

    </Flex>
  );
}
