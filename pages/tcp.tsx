/*
    Copyright Alexandru Olaru.
    Distributed under the MIT license.
*/

import { Flex } from "@chakra-ui/react";
import React from "react";
import Background from "../components/background";
import Cox from "../components/cox";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Tcp() 
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
            Transmission Control Protocol (TCP)
          </Cox>
          <Cox w="100%" my="5px" h="1px" backgroundColor="black" />
          <Cox fontSize="21.3px">
            <Flex
              id="para"
              my="10px"
              flexDir="column"
            >
              <Cox id="para-text">
                Transmission Control Protocol (sau TCP, în traducere liberă din engleză Protocolul de Control al Transmisiei) este un protocol folosit de obicei de aplicații care au nevoie de confirmare de primire a datelor. Efectuează o conectare virtuală full duplex între două puncte terminale, fiecare punct fiind definit de către o adresă IP și de către un port TCP. 
              </Cox>
            </Flex>

            <Flex
              id="para"
              my="10px"
              flexDir="column"
            >
              <Cox id="para-text">
                Transmission Control Protocol (TCP) este unul dintre protocoalele de bază ale suitei de protocoale Internet. TCP este unul dintre cele două componente originale ale suitei (celalalt fiind Protocolul Internet, sau IP), astfel încât întreaga suita este frecvent menționată ca stiva TCP/IP. În special, TCP oferă încredere, asigura livrarea ordonata a unui flux de octeți de la un program de pe un computer la alt program de pe un alt computer aflat în rețea. Pe lângă sarcinile sale de gestionare a traficului, TCP controlează mărimea segmentului de date, debitul de informație, rata la care se face schimbul de date, precum și evitarea congestionării traficului de rețea. Printre aplicațiile cele mai uzuale ce utilizează TCP putem enumera World Wide Web (WWW), posta electronica (e-mail) și transferul de fișiere (FTP). 
              </Cox>
            </Flex>

            <Flex
              id="para"
              my="10px"
              flexDir="column"
            >
              <Cox fontSize="28px" id="para-header">
                Functii oferite retelei
              </Cox>
              <Cox id="para-text">
                Protocolul corespunde nivelului transport din stiva TCP/IP. TCP oferă un serviciu de comunicare la un nivel intermediar între un program de aplicație și Protocolul Internet (IP). Atunci când un program de aplicare dorește sa trimită o bucată mare de date pe Internet, în loc sa fragmenteze datele în pachete IP de dimensiuni mici și sa emită o serie de cereri pentru protocolul IP, software-ul poate emite o cerere unică pentru TCP și sa lase protocolul TCP sa se ocupe de detaliile de manipulare. 
              </Cox>
            </Flex>

            <Flex
              id="para"
              my="10px"
              flexDir="column"
            >
              <Cox id="para-text">
                Protocolul Internet (IP) se ocupa cu schimbul de blocuri de informații numite pachete. Un pachet este o secvență de octeți și constă dintr-un antet, urmată de secțiunea de date propriu-zise. Antetul furnizează informații despre destinația pachetului și, opțional, informații de rutare utilizate pentru transmitere, până când acesta ajunge la destinația sa finală. Secțiunea de date conține informația necesara pe care IP trebuie sa o transmită. 
              </Cox>
            </Flex>

            <Flex
              id="para"
              my="10px"
              flexDir="column"
            >
              <Cox id="para-text">
                Datorită congestiilor din rețea, încărcarea traficului, sau alte comportamente imprevizibile, pachetele IP pot fi pierdute, duplicate, sau livrate în alta ordine la destinație. TCP-ul detectează aceste probleme, solicita retransmisia pachetelor pierdute, rearanjează pachetele în ordine, ajută la minimizarea traficul din rețea în vederea reducerii apariției altor probleme. Odată ce la recepție, protocolul TCP termina de reasamblat secventa de octeți transmisa inițial, o pasează mai sus către programul de aplicație. Prin urmare, TCP va ascunde nivelului aplicație detaliile de transmise specifice nivelului inferior, rețea. 
              </Cox>
            </Flex>

            <Flex
              id="para"
              my="10px"
              flexDir="column"
            >
              <Cox id="para-text">
                TCP este folosit pe scară largă de multe de aplicații de Internet cele mai populare, inclusiv a World Wide Web (WWW), E-mail, File Transfer Protocol (FTP), Secure Shell, de tip peer-to-peer file sharing, precum și unele aplicații media de streaming. 
              </Cox>
            </Flex>
          </Cox>
        </Cox>
      </Flex>
      <Footer />
    </Flex>
  );
}
