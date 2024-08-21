<script setup>
import TheBarcode from '../TheBarcode.vue';

const props = defineProps({
    data: Object,
})
</script>
<template>
    <div class="label">
        <div class="top-part">
            <p v-if="data.index" id="index" class="index">{{data.index.toUpperCase()}}</p>
            <p v-else id="index" class="index">BRAK INDEKSU</p>
            <p id="date" class="date">{{ data.created }}</p>
        </div>
        <h4 v-if="data.name"id="index-name" class="index-name">{{ data.name }}</h4>
        <h4 v-else id="index-name" class="index-name">BRAK NAZWY</h4>
        <div class="center-part">
            <p id="price" class="price">{{ data.price }}</p>
            <span id="unit" class="unit"><b>{{ data.unit }}</b> w tym <b>{{data.vat}}%</b> VAT</span>
        </div>
        <!-- <div class="bottom-part">
            <p class="text"></p>
            <p id="additional-price" class="additional-price"></p>
            <p id="currency" class="currency"></p>
        </div> -->
        <div class="barcode-container">
            <!-- <p class="">{{ data.barcode }}</p> -->
            <TheBarcode :value="data.index"/>
        </div>
        <p class="quantity">{{ data.quantity }}</p>
    </div>
</template>

<style scoped>
.label {
    width: 70mm;
    height: 30mm;
    padding: 5px;
    background-color: #fff;
    border: 1px dotted black;
    box-shadow: 0 0 2px 0px black;
    position: relative;
}
.top-part {
    display: flex;
    justify-content: space-between;
}

.center-part {
    display: flex;
    justify-content: center;
    margin-top: 5px;
    position: relative;
}

.bottom-part {
    max-height: 10px;
    display: flex;
    justify-content: center;
}

.index {
    margin-left: 10px;
    font-size: 13px;
    font-weight: bold;
}

.date {
    font-size: 10px;
    margin-right:7px ;
}

.index-name {
    height: 20px;
    font-size: 12px;
    text-align: left;
    font-weight: normal;
    margin: 0 0 0 10px;
}

.price {
    font-size: 24px;
    font-weight: bold;
    background-color: #ffffffa8;
    z-index: 99;
}

.unit {
    width: 35px;
    height: 10px;
    margin: 0 0 0 5px;
    font-size: 8px;
    transform: translateY(2.5px);
    z-index: 99;
}

.text,
.additional-price,
.currency {
    font-size: 7px;
    margin-right: 2px;
    height: 7px;
}
.barcode-container {
    margin-top: -8px;
    width: 100%;
    height: 42px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.quantity{
    position: absolute;
    right: 12px;
    bottom: 2.5px;
    font-size: 8px;
}
</style>