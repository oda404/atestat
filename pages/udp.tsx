/*
    Copyright Alexandru Olaru.
    Distributed under the MIT license.
*/

import { ListItem } from "@chakra-ui/react";
import { Flex, UnorderedList } from "@chakra-ui/react";
import React from "react";
import Background from "../components/background";
import Cox from "../components/cox";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Udp() 
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
        <Cox
          mt="100px"
          id="accesul"
        >
          <Cox
            fontSize="40px"
          >
            User Datagram Protocol (UDP)
          </Cox>
          <Cox w="100%" my="5px" h="1px" backgroundColor="black" />
          <Cox fontSize="21.3px">
            <Flex
              id="para"
              my="10px"
              flexDir="column"
            >
              <Cox id="para-text">
                User Datagram Protocol (sau UDP, în traducere liberă din engleză Protocolul Datagramelor Utilizator[1]) este un protocol de comunicație pentru calculatoare ce aparține nivelului Transport (nivelul 4) al modelului standard OSI. 
              </Cox>
            </Flex>

            <Flex
              id="para"
              my="10px"
              flexDir="column"
            >
              <Cox id="para-text">
                Împreună cu Internet Protocol (IP), acesta face posibilă livrarea mesajelor într-o rețea. Spre deosebire de protocolul TCP, UDP constituie modul de comunicație fără conexiune. Este similar cu sistemul poștal, în sensul că pachetele de informații (corespondența) sunt trimise în general fără confirmare de primire, în speranța că ele vor ajunge, fără a exista o legătură efectivă între expeditor și destinatar.[2] Practic, UDP este un protocol ce nu oferă siguranța sosirii datelor la destinație (nu dispune de mecanisme de confirmare); totodată nu dispune nici de mecanisme de verificare a ordinii de sosire a datagramelor sau a datagramelor duplicate. UDP dispune, totusi, în formatul datagramelor, de sume de control pentru verificarea integrității datelor sau de informații privind numărul portului pentru adresarea diferitelor funcții la sursa/destinație. 
              </Cox>
            </Flex>

            <Flex
              id="para"
              my="10px"
              flexDir="column"
            >
              <Cox id="para-text">
                Caracteristicile de baza ale UDP îl fac util pentru diferite aplicații. 
                <UnorderedList>
                  <ListItem>
                    orientat către tranzacții - util în aplicații simple de tip întrebare-răspuns cum ar fi DNS.
                  </ListItem>
                  <ListItem>
                    este simplu foarte util în aplicații de configurări, precum DHCP sau TFTP (Trivial FTP).
                  </ListItem>
                  <ListItem>
                    lipsa întârzierilor de retransmisie îl pretează pentru aplicații în timp real ca VoIP, jocuri online.
                  </ListItem>
                  <ListItem>
                    lucrează excelent în medii de comunicații unidirecționale precum furnizarea de informații broadcast, în servicii de descoperire (discovery services), sau în partajarea de informații către alte noduri (RIP).
                  </ListItem>
                </UnorderedList>
              </Cox>
            </Flex>
          </Cox>
        </Cox>
      </Flex>
      <Footer />
    </Flex>
  );
}
