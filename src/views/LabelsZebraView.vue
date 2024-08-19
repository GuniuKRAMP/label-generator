<script setup>
import { ref, watch } from 'vue';
import SubpageHeader from '../components/SubpageHeader.vue';
import TheLabelZebra from '../components/TheLabelZebra.vue';
import ZebraLabelsForPrinting from '../components/ZebraLabelsForPrinting.vue';
import NoLabelsInfo from '../components/NoLabelsInfo.vue';

const generatedLabales = ref([])
const isVisible = ref(true);
const trashIconIsVisible = ref(false);

const formData = ref({
  id: Math.random(),
  index: '123-123',
  name: "Złącze Superseal 2-pin kpl. męskie wtyczka z okablowaniem 20 cm",
})

function addingLabelToArray() {
  if(generatedLabales.value.length < 28) {
    // adding created label to the list generatedLabels
    generatedLabales.value.push(formData.value)
    //cleaning the object formData
    formData.value = {
      id: Math.random(),
      index: '',
      name: '',
    }
  } else {
    alert("Przekroczono limit etykiet na stronę!")
    return;
  }
}

function removeLabelById(id) {
  const index = generatedLabales.value.findIndex(label => label.id === id);
  if (index !== -1) {
    generatedLabales.value.splice(index, 1);
  }
}

function printingPage() {
  if(isVisible.value) {
    isVisible.value = !isVisible.value;
    toggleTrashIcon();
    setTimeout(() => {
      window.print()
      isVisible.value = !isVisible.value;
      toggleTrashIcon();
    }, 200);
  } else {
    isVisible.value = !isVisible.value;
  }
}
const toggleTrashIcon = () => {
  trashIconIsVisible.value = !trashIconIsVisible.value;
};
watch(() => formData.value.index, (newValue) => {
  if (!newValue) {
    formData.value.index = null;
  }
});


</script>
<template>
    <div class="main" v-if="isVisible">
        <SubpageHeader>
            Etykiety Zebra 32x25mm
        </SubpageHeader>
        <div class="main-inner">
        <div class="view-section" >
          <img style="width: 190px;" src="../assets//logo-customer-kramp.jpg" alt="company-logo">
          <h4 style="margin-top: 80px; margin-bottom:10px">PODGLĄD ETYKIETY</h4>
          <TheLabelZebra :data="formData"/>
        </div>
        <div class="form-section">
          <h4 style="margin-bottom: 20px;">WYPEŁNIJ POLA</h4>
          <form class="form"@submit.prevent="addingLabelToArray">
            <div class="form-text-field">
              <input type="text" v-model="formData.index" required="" autocomplete="off">
              <label>Index</label>
            </div>
            <div class="form-text-field">
              <input type="text" v-model="formData.name" maxlength="120"required="" autocomplete="off">
              <label>Nazwa</label>
            </div>
            <button type="submit">Dodaj Etykiete</button>
          </form>
        </div>
      </div>
    </div>
    <div v-if="generatedLabales.length !== 0" class="result-section">
      <h2 v-if="isVisible">Podgląd wydruku:</h2>
      <button v-if="isVisible" style="margin-bottom: 10px" @click="printingPage()">
        <span v-if="isVisible">Drukuj etykiety</span>
      </button>
      <ZebraLabelsForPrinting :labels="generatedLabales" :trashIconIsVisible="trashIconIsVisible" @remove-label="removeLabelById"/>
    </div>
    <div v-else class="result-section">
      <NoLabelsInfo/>
    </div>
</template>


<style scoped>
.header {
    text-align: center;
}
h2 {
  margin-bottom: 10px;
}

button {
  cursor: pointer;
  border-radius: 0.5rem;
  border: 1px solid #aaa;
  background-color: #fbfbfb;
  box-sizing: border-box;
  color: rgba(51, 65, 85, 1);
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  transition: background-color .2s ease-in-out;
  text-transform: uppercase;

  &:hover {
    background-color: #e0e0e0;
  }
}
.main{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.main-inner{
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 70px;
}
.view-section, .form-section{
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  padding: 10px 40px;
  border-radius: 5px;
  box-shadow: 0 0 7px 0px black;
}
.form{
  max-width: 500px;
  display: flex;
  flex-direction: column;
}
.form input, .form select, .form textarea {
  margin-bottom: 20px;
}

/* FORM INPUT */
.form-text-field {
  width: 100%;
  position: relative;
}

.form-text-field input {
  font-size: 100%;
  padding: 0.5em;
  outline: none;
  border: 2px solid rgb(200, 200, 200);
  background-color: transparent;
  border-radius: 10px;
  width: 100%;
}

.form-text-field label {
  font-size: 100%;
  position: absolute;
  left: 0;
  padding: 0.6em;
  margin-left: 0.5em;
  pointer-events: none;
  transition: all 0.3s ease;
  color: rgb(100, 100, 100);
}

.form-text-field :is(input:focus, input:valid)~label {
  transform: translateY(-60%) scale(.9);
  margin: 0em;
  margin-left: 0.8em;
  padding: 0.2em;
  background-color: #f8f8f8;
}

.form-text-field :is(input:focus, input:valid) {
  border-color: #686868;
}

/* SELECT INPUT */
.select-input{
  width: 100%;
  position: relative;
}
.select-input select {
  font-size: 100%;
  padding: 0.5em;
  outline: none;
  border: 2px solid rgb(200, 200, 200);
  background-color: transparent;
  border-radius: 10px;
  width: 100%;
}
.select-input label{
  font-size: 100%;
  position: absolute;
  left: 0;
  padding: 0.6em;
  margin-left: 0.5em;
  pointer-events: none;
  transition: all 0.3s ease;
  transform: translateY(-60%) scale(.9);
  color: rgb(100, 100, 100);
  margin-left: 0.8em;
  padding: 0.4em;
  background-color: #f8f8f8;
}
.select-input :is(input:focus, input:valid)~label {
  transform: translateY(-60%) scale(.9);
  margin: 0em;
  margin-left: 0.8em;
  padding: 0.2em;
  background-color: #f8f8f8;
}

.select-input :is(select:focus, select:valid) {
  border-color: #686868;
}
.result-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff23;
  border-radius: 8px;
}
</style>