<template>
  <div class="container">
    <SubpageHeader> INFORMACJE POMOCNICZE </SubpageHeader>
    <div class="info-section container">
      <h2>TUTAJ BĘDĄ SIĘ ZNAJDOWAĆ INFORACJE I WSKAZÓWKI JAK ZRESETOWAĆ SKANER itp...</h2>
      <br>
      <br>
      <br>
      <br>
      Cześć, Chcemy usprawnić zgłaszanie problemów związanych z IT. Zdarza się,
      że dzwonicie do kogoś od nas i ta osoba nie odbiera, a nie macie kontaktu
      do reszty działu więc od teraz prosimy dzwonić na numer podany poniżej:
      <b>63 240 92 22</b>Dzwoniąc na ten numer usłyszycie automatyczną
      sekretarkę, która poprosi o wybranie jednej z dwóch opcji połączeń,
      czyli:<br />
      Wybór numeru 1: Pierwsza Linia Wsparcia:
      <ul>
        <li>Miłosz Andrzejewski</li>
        <li>Grzegorz Kostrzewa</li>
        <li>Kacper Kopczyński</li>
        <li>Adam Bala</li>
      </ul>
      numeru 2: Dział IT Retail 
      <ul>
        <li>Piotr Haik</li>
        <li>Jan Wojtaszewski</li>
      </ul>
      Automat wybiera osoby, które aktualnie są dostępne. Jeżeli ta osoba nie odbierze lub
      odrzuci, wybiera kolejną dostępną osobę i tak do skutku. Jednocześnie
      przypominam o tworzenie zgłoszeń na adres wesupport.pl@kramp.com z
      możliwie jak największą ilością informacji, czyli np. zrzuty ekranu, numer
      stanowiska (na którym występuje problem), numer dokumentu, data, kwoty
      (dotyczy POSa) itd. Im więcej informacji tym mniej pytań i szybsze
      rozwiązanie problemu. Pozdrawia Dział IT
    </div>
  </div>
</template>

<script setup>
import SubpageHeader from "../components/SubpageHeader.vue";
</script>

<style scoped>
.info-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  background-color: #ffffff23;
  border-radius: 8px;
  padding: 50px;
}
</style>
