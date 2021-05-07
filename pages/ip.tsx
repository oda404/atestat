/*
    Copyright Alexandru Olaru.
    Distributed under the MIT license.
*/

import { Flex } from "@chakra-ui/react"
import React from "react"
import Background from "../components/background"
import Cox from "../components/cox"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

export default function Ip() 
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
            Internet Protocol (IP)
          </Cox>
          <Cox w="100%" my="5px" h="1px" backgroundColor="black" />
          <Cox fontSize="21.3px">
            <Flex
              id="para"
              my="10px"
              flexDir="column"
            >
              <Cox id="para-text">
                Internet Protocol(sau IP, în traducere liberă din engleză Protocolul Interrețea) este un protocol prin care datele sunt trimise de la un calculator la altul prin intermediu Internetului.Fiecare calculator(cunoscut sub denumirea de „gazdă”), are pe Internet cel puțin o adresă IP unică, care îl identifică între toate computerele din rețea.Când cineva trimite sau primește informații(de ex.: poștă electronică, pagini web) mesajul este împărțit în blocuri de mici dimensiuni denumite pachete.Fiecare pachet cuprinde adresa expeditorului și pe cea a destinatarului.Fiecare pachet este trimis, prima dată la un calculator - pasarelă, care înțelege o mică parte din internet
              </Cox>
            </Flex>

            <Flex
              id="para"
              my="10px"
              flexDir="column"
            >
              <Cox fontSize="28px" id="para-header">
                Functionare
              </Cox>
              <Cox id="para-text">
                Internet Protocol(sau IP, în traducere liberă din engleză Protocolul Interrețea) este un protocol prin care datele sunt trimise de la un calculator la altul prin intermediu Internetului.Fiecare calculator(cunoscut sub denumirea de „gazdă”), are pe Internet cel puțin o adresă IP unică, care îl identifică între toate computerele din rețea.Când cineva trimite sau primește informații(de ex.: poștă electronică, pagini web) mesajul este împărțit în blocuri de mici dimensiuni denumite pachete.Fiecare pachet cuprinde adresa expeditorului și pe cea a destinatarului.Fiecare pachet este trimis, prima dată la un calculator - pasarelă, care înțelege o mică parte din internet
              </Cox>
            </Flex>

            <Flex
              id="para"
              my="10px"
              flexDir="column"
            >
              <Cox id="para-text">
                O datagramă IP (un pachet) constă dintr-o parte de antet și o parte de text. Antetul are o parte fixă de 20 octeți și o parte opțională de lungime variabilă. 
              </Cox>
            </Flex>

            <Flex
              id="para"
              my="10px"
              flexDir="column"
            >
              <Cox id="para-text">
                Fiecare gazdă și ruter din internet are o adresă IP, care codifică adresa sa de rețea și de gazdă. Combinația este unică: în principiu nu există două mașini cu aceeași adresă IP. Toate adresele IP sunt de 32 biți și sunt folosite în câmpurile „Adresă sursă” și „Adresă destinație” a pachetelor IP. Este important de observat că o adresă IP nu se referă la o gazdă. Se referă, de fapt, la o interfață de rețea. Cu alte cuvinte, dacă o gazdă este în două rețele, trebuie să folosească două adrese IP . 
              </Cox>
            </Flex>

            <Flex
              id="para"
              my="10px"
              flexDir="column"
            >
              <Cox id="para-text">
                Rețelele sunt dinamice și este posibil ca 2 pachete IP de la aceeași sursă să plece pe căi diferite (BGP – protocolul porților de graniță) și să ajungă la aceeași destinație. Pachetele IP (dupa cum s-a mai spus) nu au garanția că vor ajunge la destinație, acest lucru fiind lăsat în seama protocoalelor adiacente (TCP UDP etc). 
              </Cox>
            </Flex>
          </Cox>
        </Cox>
      </Flex>
      <Footer />
    </Flex>
  );
}
