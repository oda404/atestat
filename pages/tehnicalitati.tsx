/*
    Copyright Alexandru Olaru.
    Distributed under the MIT license.
*/

import { Flex, Link } from "@chakra-ui/react";
import React from "react";
import Background from "../components/background";
import Cox from "../components/cox";
import Footer from "../components/footer";
import Navbar from "../components/navbar";


export default function Tehnicalitati() {

  const createLink = (href: string, name: string) => {
    return (
      <Link
        color="black"
        _focus={{ boxShadow: "none" }}
        href={href}
      >
        {name}
      </Link>
    )
  }

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
        <Cox
          mt="100px"
          id="accesul"
        >
          <Cox
            fontSize="40px"
          >
            Caracteristici tehnice
          </Cox>
          <Cox w="100%" my="5px" h="1px" backgroundColor="black" />
          <Cox fontSize="21.3px">
            <Flex
              id="para"
              my="10px"
              flexDir="column"
            >
              <Cox id="para-text">
                În ziua de astăzi Internetul este susținut și întreținut de o mulțime de firme comerciale. El se bazează pe specificații tehnice foarte detaliate, ca de exemplu pe așa-numitele „protocoale de comunicație”, care descriu toate regulile și protocoalele de transmitere a datelor în această rețea. Vezi și articolul despre Modelul de Referință OSI. 
              </Cox>
            </Flex>
            <Flex
              id="para"
              my="10px"
              flexDir="column"
            >
              <Cox id="para-text">
                Protocoalele fundamentale ale Internetului, care asigură interoperabilitatea între orice două calculatoare sau aparate inteligente care le implementează, sunt 
                {createLink("ip", " Internet Protocol (IP)")}, 
                {createLink("tcp", " Transmission Control Protocol (TCP) ")} și 
                {createLink("udp", " User Datagram Protocol (UDP)")}. 
              </Cox>
            </Flex>
            <Flex
              id="para"
              my="10px"
              flexDir="column"
            >
              <Cox id="para-text">
                Aceste trei protocoale reprezintă însă doar o parte din nivelul de bază al sistemului de protocoale Internet, care mai include și protocoale de control si aplicative, cum ar fi: DNS, PPP, SLIP, ICMP, POP3, IMAP, SMTP, HTTP, HTTPS, SSH, Telnet, FTP, LDAP, SSL, WAP și SIP. 
              </Cox>
            </Flex>

            <Flex
              id="para"
              my="10px"
              flexDir="column"
            >
              <Cox id="para-text">
                Din cauza multelor fuziuni dintre companiile de telefonie și cele de Internet (Internet Service Providers, prescurtat ISP) au apărut o serie de probleme în sensul că sarcinile acestora nu erau clar delimitate. 
              </Cox>
            </Flex>

            <Flex
              id="para"
              my="10px"
              flexDir="column"
            >
              <Cox id="para-text">
                Rețeaua regională a ISP-ului este formată prin interconectarea ruterelor din diverse orașe pe care le deservește compania. Dacă pachetul este destinat unui calculator-gazdă deservit direct de către rețeaua ISP, pachetul va fi livrat direct lui. Altfel el este predat mai departe operatorului (firmei) care furnizează companiei ISP servicii de comunicare prin backbone-ul rețelei. (In engleză backbone înseamnă in general șira spinării, iar în informatică înseamnă rețeaua de bază pentru interconectarea rețelelor). În partea superioară a acestei ierarhii se găsesc operatorii principali de la nivelul backbone-ului rețelei, companii cum ar fi AT&T sau SPRINT. Aceștia răspund de backbone-uri mari cu mii de rutere conectate prin fibră optică, cu bandă largă de transfer. 
              </Cox>
            </Flex>

            <Flex
              id="para"
              my="10px"
              flexDir="column"
            >
              <Cox id="para-text">
                Corporațiile și firmele de hosting utilizează așa-numitele „ferme” de servere rapide (= multe servere, situate eventual în aceeași sală sau clădire), conectate direct la backbone. Operatorii încurajază pe clienții lor să folosească această conectare directă prin închirierea de spațiu în rack-uri = dulapuri speciale standardizate pentru echipamentul clientului, care se află în aceeași cameră cu ruterul, conducând la conexiuni scurte și rapide între fermele de servere și backbone-ul rețelei. 
              </Cox>
            </Flex>

            <Flex
              id="para"
              my="10px"
              flexDir="column"
            >
              <Cox id="para-text">
              Dacă un pachet trimis în backbone este destinat unui ISP sau unei companii deservite de aceeași coloană, el este transmis celui mai apropiat ruter. Pentru a permite pachetelor să treacă dintr-un backbone în altul, acestea sunt conectate în NAP-uri (Network Access Point). În principiu un NAP este o sală plină cu rutere, cel puțin unul pentru fiecare backbone conectat. O rețea locală conectează toate aceste rutere astfel încât pachetele să poată fi retransmise rapid din orice coloană în orice alta. În afară de conectarea în NAP-uri, backbone-urile de dimensiuni mari au numeroase conexiuni directe între ruterele lor, tehnică numită conectare privată (private peering). 
              </Cox>
            </Flex>
          </Cox>
        </Cox>
      </Flex>

      <Footer />
    </Flex>
  );
}
