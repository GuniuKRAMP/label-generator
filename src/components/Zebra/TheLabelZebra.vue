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
        </div>
        <h4 v-if="data.name" id="index-name" class="index-name">{{ data.name }}</h4>
        <h4 v-else id="index-name" class="index-name">BRAK NAZWY</h4>
        <div class="barcode">
            <TheBarcode :value="data.index" :height="21" :width="0.7" :displayValue="false"/>
        </div>
    </div>
</template>

<style scoped>
.label{
    position: relative;
    width: 32mm;
    height: 23.8mm;
    background-color: white;
    padding: 2.5px;
    margin: 2mm 0 2.2mm 0;
    border: 1px dotted black;
    box-shadow: 0 0 2px 0px black;
}
.index{
    position: relative;
    background-color: white;
    z-index: 999;
    font-size: 10px;
    height: 10px;
    line-height: 0.9;
    padding-bottom: 5px;
    font-weight: bold;
}
.index-name{
    position: relative;
    z-index: 999;
    background-color: white;
    font-size: 8px;
    width: 100%;
    min-height: 35px;
    letter-spacing: 0.5px;
    overflow: hidden;
    font-weight: bold;
}
.barcode{
    display: flex;
    justify-content: center;
    overflow: hidden;
}
</style>