<script setup>
import TheBarcode from "../TheBarcode.vue";

const props = defineProps({
  data: Object,
});
</script>
<template>
  <div class="label">
    <div class="top-part">
      <p v-if="data.index" id="index" class="index">
        {{ data.index.toUpperCase() }}
      </p>
      <p v-else id="date" class="date">BRAK INDEKSU</p>
    </div>
    <h4 v-if="data.name" id="index-name" class="index-name">{{ data.name }}</h4>
    <h4 v-else id="index-name" class="index-name">BRAK NAZWY</h4>
    <div class="center-part">
      <p id="price" class="price">{{ data.price }}</p>
      <span id="unit" class="unit"
        ><b>{{ data.unit }}</b> w tym <b>{{ data.vat }}%</b> VAT</span
      >
    </div>
    <!-- <div class="bottom-part">
            <p class="text"></p>
            <p id="additional-price" class="additional-price"></p>
            <p id="currency" class="currency"></p>
        </div> -->
    <div class="barcode-container">
      <!-- <p class="">{{ data.barcode }}</p> -->
      <TheBarcode :value="data.index" />
    </div>
    <p class="quantity">{{ data.quantity }}</p>
  </div>
</template>

<style scoped>
.label {
  width: 105mm;
  height: 41mm;
  padding: 5px;
  background-color: #fff;
  border: 1px dotted black;
  box-shadow: 0 0 2px 0px black;
}

.top-part {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.center-part {
  min-height: 40px;
  display: flex;
  justify-content: center;
}

.bottom-part {
  max-height: 10px;
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.index {
  margin-left: 5px;
  font-size: 13px;
  font-weight: bold;
}

.date {
  font-size: 10px;
}

.index-name {
  height: 25px;
  font-size: 15px;
  text-align: left;
  font-weight: normal;
  margin: 0 0 10px 5px;
}

.price {
  font-size: 28px;
  font-weight: bold;
}

.unit {
  width: 40px;
  height: 10px;
  margin-left: 5px;
  font-size: 10px;
}

.text,
.additional-price,
.currency {
  font-size: 7px;
  margin-right: 2px;
  height: 7px;
}
.barcode-container {
  width: 100%;
  height: 42px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.quantity {
  text-align: right;
  font-size: 8px;
}
</style>
