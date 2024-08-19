<script setup>
import { ref } from 'vue';
import TheBarcode from './TheBarcode.vue';

const props = defineProps({
    labels: Array,
    trashIconIsVisible: Boolean, 
})

function textTo128(str) {
/*
* Generate 128 Barcode text, suitable for copying and pasting.
*/
    var len         = str.length; //str.length - get length of string, used to generate the checksum.
    var type128     = 104; // 128 Type start value 'A':103, 'B':104, 'C':105
    var typeClose   = 106;
    var total       = 104; 

    var i; // Counter Variable
    for(i=0;i<len;i++){
        total += ((i+1) * (str.charCodeAt(i)-32)); //Multiply char position with decimal value of character, keep running total
    }

    var modVal = total % 103; // Use Modulus to find our checksum
    var checksum = String.fromCharCode(modVal+32 > 126 ? modVal+32+18 : modVal+32);

    if(modVal+32>126){alert(modVal+32);};
    return String.fromCharCode(type128+100) + str + checksum + String.fromCharCode(typeClose+100);
}



</script>
<template>
    <div class="page-a4">
        <div style="position: relative;" v-for="label in labels" class="label" alt="Kliknij na etykietę jeżeli chcesz ją usunąć" @click="$emit('removeLabel',label.id)">
            <svg class="trash-icon" v-show="!trashIconIsVisible" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 456 511.82"><path fill="#FD3B3B" d="M48.42 140.13h361.99c17.36 0 29.82 9.78 28.08 28.17l-30.73 317.1c-1.23 13.36-8.99 26.42-25.3 26.42H76.34c-13.63-.73-23.74-9.75-25.09-24.14L20.79 168.99c-1.74-18.38 9.75-28.86 27.63-28.86zM24.49 38.15h136.47V28.1c0-15.94 10.2-28.1 27.02-28.1h81.28c17.3 0 27.65 11.77 27.65 28.01v10.14h138.66c.57 0 1.11.07 1.68.13 10.23.93 18.15 9.02 18.69 19.22.03.79.06 1.39.06 2.17v42.76c0 5.99-4.73 10.89-10.62 11.19-.54 0-1.09.03-1.63.03H11.22c-5.92 0-10.77-4.6-11.19-10.38 0-.72-.03-1.47-.03-2.23v-39.5c0-10.93 4.21-20.71 16.82-23.02 2.53-.45 5.09-.37 7.67-.37zm83.78 208.38c-.51-10.17 8.21-18.83 19.53-19.31 11.31-.49 20.94 7.4 21.45 17.57l8.7 160.62c.51 10.18-8.22 18.84-19.53 19.32-11.32.48-20.94-7.4-21.46-17.57l-8.69-160.63zm201.7-1.74c.51-10.17 10.14-18.06 21.45-17.57 11.32.48 20.04 9.14 19.53 19.31l-8.66 160.63c-.52 10.17-10.14 18.05-21.46 17.57-11.31-.48-20.04-9.14-19.53-19.32l8.67-160.62zm-102.94.87c0-10.23 9.23-18.53 20.58-18.53 11.34 0 20.58 8.3 20.58 18.53v160.63c0 10.23-9.24 18.53-20.58 18.53-11.35 0-20.58-8.3-20.58-18.53V245.66z"/>
            </svg>
            <div class="top-part">
                <p id="index" class="index">{{ label.index }}</p>
                <p id="date" class="date">{{ label.created }} przez Generator</p>
            </div>
            <h4 id="index-name" class="index-name">{{ label.name }}</h4>
            <div class="center-part">
                <p id="price" class="price">{{ label.price }}</p>
                <span id="unit" class="unit"><b>{{ label.unit }}</b> w tym <b>23%</b> VAT</span>
            </div>
            <!-- <div class="bottom-part">
                <p class="text"></p>
                <p id="additional-price" class="additional-price"></p>
                <p id="currency" class="currency"></p>
            </div> -->
            <div class="barcode-container">
                <TheBarcode :value="label.index"/>
                 <!-- <p class="barcode128">{{ textTo128(label.index) }}</p> -->
            </div>
            <p class="quantity">{{ label.quantity }}</p>
        </div>
    </div>
</template>

<style scoped>
.page-a4 {
    margin-top: 10px;
    width: 210mm;
    max-height: calc(7 * 41mm);
    display: flex;
    flex-wrap: wrap;
    background: #fff;
}
.label {
    width: 70mm;
    height: 30mm;
    padding: 5px;
    background-color: #fff;
    position: relative;
    cursor: pointer;
}
.label:hover{
    background-color: #e8e8e8;
}
.trash-icon {
    position: absolute; 
    width: 50px; 
    left: 50%; 
    top: 50%; 
    transform: translate(-50%, -50%); 
    z-index: 99;
    opacity: 0;
    transition: .1s ease;
}
.label:hover .trash-icon {
    opacity: 1;
}
.top-part {
    display: flex;
    justify-content: space-between;
}

.center-part {
    display: flex;
    justify-content: center;
    margin-top: 8px;
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
    z-index: 10;
}

.unit {
    width: 35px;
    height: 10px;
    margin: 0 0 0 5px;
    font-size: 8px;
    transform: translateY(2.5px);
    z-index: 10;
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