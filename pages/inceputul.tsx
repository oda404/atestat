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
                Aparand apoi primele calculatoare ??n marile universitati se pune problema
                interconectarii acestora. Cercetatorul Lawrence Roberts sustine o solutie
                de interconectare prin comutare de pachete (packet switching) ??n modelul
                numit "client-server". Astfel, pentru a transmite informatia, aceasta este
                maruntita ??n portiuni mici, denumite pachete. Ca si la posta clasica,
                fiecare pachet contine informatii referitore la destinatar, astfel ??ncat
                el sa poata fi corect dirijat pe retea. La destinatie ??ntreaga informatie
                este reasamblata. Desi aceasta metoda ??ntampina rezistenta din partea
                specialistilor, ??n 1969 ??ncepe sa functioneze reteaua "ARPANET" ??ntre 4
                noduri: University of California din Los Angeles (UCLA), University of
                California din Santa Ana, University of Utah si Stanford Research Institute
                (SRI). Toate acestea au fost codificate ??ntr-un protocol care reglementa
                transmisia de date. ??n forma sa finala, acesta era TCP/IP (Transmission Control
                Protocol / Internet Protocol), creat de Vint Cerf si Robert Kahn ??n 1970 si care
                este si acum baza Internetului. TCP/IP face posibil ca modele diferite de
                calculatoare, de exemplu cele compatibile cu IBM sau si Mac's, folosind sisteme
                diferite de operare, cum ar fi UNIX, Windows, MacOS etc. sa se "??nteleaga" unele cu altele.
                ??n acest fel, Internetul urma s?? devin?? cu adev??rat independent de platforma harware
                utilizat??. Prima conexiune ARPANET a fost realizat?? ??n 29 octombrie 1969, ora 22:30 ??ntre
                University of California din Los Angeles ??i Institutul de Cercetare Stanford.
              </Box>
            </Flex>
            <Flex
              id="para"
              my="10px"
            >
              <Box id="para-text">
                Ca program al Ministerului Ap??r??rii al SUA, ARPANET s-a dezvoltat uluitor de repede,
                la el conect??ndu-se din ce ??n ce mai multe calculatoare. ??n 1979 ARPA decide s?? separe
                re??eaua ??n dou??, una pentru lumea comercial?? ??i universitar??, ??i una militar??. Cele dou??
                re??ele puteau comunica ??n continuare, construindu-se practic o inter-re??ea (internet)
                denumit?? ini??ial DARPA Internet ??i consacrat?? ulterior sub denumirea Internet.
                Numero??i cercet??tori din domeniul academic ??i militar si-au concentrat eforturile ??n
                scopul dezvolt??rii unor programe de comunicare ??n re??ea. Astfel ??n 1980 o serie de
                programe de comunicare (bazate pe protocoale binedefinite), care sunt utilizate
                ??i ast??zi, erau deja finalizate. ??n 1983, TCP/IP devine unicul protocol oficial
                al Internetului, ??i ca urmare, tot mai multe calculatoare din ??ntreaga lume au fost
                conectate la ARPANET. Cre??terea num??rului de calculatoare conectate la Internet a
                devenit exponen??ial??, astfel ??nc??t ??n 1990 Internetul cuprindea 3.000 de re??ele ??i
                300.000 de calculatoare. ??n 1992 era deja conectat calculatorul cu num??rul 1.000.000.
                Apoi m??rimea Internetului s-a dublat cam la fiecare an.
              </Box>
            </Flex>
            <Flex
              id="para"
              my="10px"
            >
              <Box id="para-text">
                Dezvoltarea rapid?? a Internetului s-a datorat faptului c?? accesul la documenta??ia protocoalelor obligatorii a fost ??i este liber ??i gratuit. ??n 1969 S. Crocker a ini??iat o serie de ???note de cercetare??? denumite RFC (Request for Comments), numerotate cronologic ??i devenite cu timpul accesibile gratuit on-line (??n Internet). Marea schimbare a ??nceput ??n 1989, c??nd Tim Berners Lee de la Centrul European pentru Fizica Nuclear?? din Geneva (CERN) a pus bazele dezvolt??rii primului prototip al World Wide Web (WWW sau web).
              </Box>
            </Flex>
            <Flex
              id="para"
              my="10px"
            >
              <Box id="para-text">
                O alt?? schimbare radical?? s-a produs c??nd, ??n 1993, National Center for Supercomputing Applications (NCSA) din SUA a pus la dispozi??ie browserul "Mosaic", care era bazat pe o interfa???? grafic?? (Windows). Enorma cre??tere a webului a ??nceput aproape dintr-o dat??: ??n iunie 1993 erau ??nregistrate 130 servere web, iar ??n 1994 erau deja peste 11.500 de servere.
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>

      <Footer />

    </Flex>
  );
}
