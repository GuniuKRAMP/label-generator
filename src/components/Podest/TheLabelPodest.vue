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
      <p v-else id="index" class="index">BRAK INDESKU</p>
      <p id="date" class="date">{{ data.created }}</p>
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
      <TheBarcode :value="data.index" :width="1.5" :height="25" />
    </div>
    <p class="quantity">{{ data.quantity }}</p>
  </div>
</template>

<style scoped>
.label {
  position: relative;
  background-color: #fff;
  width: 100mm;
  height: 66mm;
  padding: 5px;
  border: 1px solid black;
}

.top-part {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.center-part {
  display: flex;
  justify-content: center;
}

.center-part__inner {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}

.index-name {
  font-size: 24px;
  text-align: center;
  font-weight: normal;
  margin-bottom: 5px;
  max-height: 55px;
  overflow: hidden;
}

.bottom-part {
  max-height: 10px;
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.index {
  margin-left: 5px;
  font-size: 20px;
  font-weight: bold;
}

.date {
  font-size: 20px;
}

.price {
  font-size: 60px;
  font-weight: bold;
}

.unit {
  width: 50px;
  height: 25px;
  font-size: 12px;
  margin-left: 5px;
  transform: translateY(15px);
}

.text,
.additional-price,
.currency {
  font-size: 10px;
  margin-right: 2px;
  height: 7px;
}
.barcode-container {
  width: 100%;
  height: 50px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.barcode-text {
  font-size: 7px;
}

.quantity {
  position: absolute;
  font-size: 15px;
  right: 5px;
  bottom: 5px;
}

.price-per-month {
  position: absolute;
  font-size: 15px;
  left: 5px;
  bottom: 5px;
}
.price-per-month__text {
  font-size: 12px;
}
.price-per-month__price {
  font-weight: bold;
  font-size: 15px;
}
</style>
