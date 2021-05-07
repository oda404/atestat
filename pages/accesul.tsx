/*
    Copyright Alexandru Olaru.
    Distributed under the MIT license.
*/

import { Flex, OrderedList, UnorderedList } from "@chakra-ui/react";
import Cox from "../components/cox";
import React from "react";
import Background from "../components/background";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { List, ListItem } from "@chakra-ui/react";

export default function Accesul() 
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
            Accesul la internet
          </Cox>
          <Cox w="100%" my="5px" h="1px" backgroundColor="black" />
          <Cox fontSize="21.3px">
            <Flex
              id="para"
              my="10px"
              flexDir="column"
            >
              <Cox fontSize="28px" id="para-header">
                Acces prin linie de telefonie fixă
              </Cox>
              <Cox id="para-text">
                Accesul unui utilizator la Internet prin intermediul rețelei de telefon analogice fixe tradițioale: utilizatorul unui calculator cheamă programul de comunicație necesar, care mai întâi se conectează la modem. Modemul este o componentă a calculatorului care convertește semnalele digitale (de transmis) în semnale analogice, care pot circula în rețeaua telefonică. Apoi modemul „formează” numărul de telefon al unui furnizor de servicii Internet - ISP. Semnalele modulate (de fapt datele) sunt transferate la punctul de livrare (Point Of Presence, POP) al ISP-ului, unde sunt preluate din sistemul telefonic și transferate în rețeaua regională de Internet a ISP-ului. Din acest punct sistemul este în întregime digital și se bazează pe comutarea de pachete (packet switching); în acest sistem de transmisie informația care trebuie transmisă este "mărunțită" în multe pachete mici, care sunt apoi transmise la destinație în mod independent unele de altele și chiar pe căi diferite; sigur că la destinație pachetele trebuiesc reasamblate în ordinea corectă.

                Pe lângă utilizarea rețelei fixe publice acceași tehnică se poate folosi și pe linii fixe dedicate (închiriate).

                Acest tip de acces a rămas în urmă ca viteză și siguranță în funcționare și nu se mai utilizează aproape deloc. 
              </Cox>
            </Flex>
            <Flex
              id="para"
              my="10px"
              flexDir="column"
            >
              <Cox fontSize="28px" id="para-header">
                Acces la un router (sau modem ADSL) conectat la rețeaua fixă de telefonie sau de ADSL
              </Cox>
              <Cox id="para-text">
                Legătura de la placa de rețea (NIC) din computerul local la ruter se poate face:
                <UnorderedList>
                  <ListItem>
                    printr-un fir
                  </ListItem>
                  <ListItem>
                    fără fir (wireless); atunci NIC leagă prin radio la un așa-numit Active Point sau Hotspot integrat în ruter, legătură bazată pe tehnica Wi-Fi sau altele (WLAN).
                  </ListItem>
                </UnorderedList>
              </Cox>
            </Flex>
            <Flex
              id="para"
              my="10px"
              flexDir="column"
            >
              <Cox fontSize="28px" id="para-header">
                Acces prin rețele de telefonie celulară, mobilă (GSM)
              </Cox>
              <Cox id="para-text">
                Legătură prin radio, de la un telefon celular de tip smartphone, de la un calculator portabil sau, mai general, de la un dispozitiv Internet mobil la antena celulară terestră, utilizând tehnicile GSM sau UMTS. 
              </Cox>
            </Flex>
            <Flex
              id="para"
              my="10px"
              flexDir="column"
            >
              <Cox fontSize="28px" id="para-header">
                Acces prin satelit
              </Cox>
              <Cox id="para-text">
                Această tehnologie a fost dezvoltată pentru a asigura accesul în zonele izolate la internet de bandă largă, sau în zone în care furnizorii clasici nu au infrastructura dezvoltată. 
              </Cox>
            </Flex>
          </Cox>
        </Cox>
      </Flex>

      <Footer />
    </Flex>
  );
}
