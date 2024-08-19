<script setup>
import TheBarcode from './TheBarcode.vue';

const props = defineProps({
    data: Object,
})

</script>
<template>
    <div class="label">
        <div class="top-part">
            <p id="index" class="index">{{data.index}}</p>
            <p id="date" class="date">{{ data.created }}</p>
        </div>
        <h4 id="index-name" class="index-name">{{ data.name }}</h4>
        <div class="center-part">
            <p id="price" class="price">{{ data.price }}</p>
            <span id="unit" class="unit"><b>{{ data.unit }}</b> w tym <b>23%</b> VAT</span>
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
    width: 49.5mm;
    height: 37mm;
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
    display: flex;
    justify-content: end;
}

.bottom-part {
    max-height: 10px;
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
}

.index {
    margin-left: 5px;
    font-size: 10px;
    font-weight: bold;
}

.date {
    font-size: 10px;
}

.index-name {
    height: 25px;
    font-size: 10px;
    text-align: center;
    font-weight: normal;
    margin-bottom: 5px;
}

.price {
    font-size: 20px;
    font-weight: bold;
}

.unit {
    max-height: 25px;
    margin-left: 5px;
    font-size: 7px;
    font-weight: bold;
    transform: translateY(11px);
}

.text,
.additional-price,
.currency {
    font-size: 7px;
    margin-right: 2px;
    height: 7px;
}
.barcode128 {
    font-family: "Libre Barcode 128", system-ui;
    font-size: 10px;
    margin-bottom: -12px;
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
.quantity{
    text-align: right;
    font-size: 8px;
}
</style>

