<script setup>
import { ref } from 'vue';

const links = ref([
    {id: 1, src: '/labels50x37', size: '50x37', unit: 'mm'},
    {id: 2, src: '/labels70x40', size: '70x40', unit: 'mm'},
    {id: 3, src: '/labels100x37', size: '100x37', unit: 'mm'},
    {id: 4, src: '/labels105x40', size: '105x40', unit: 'mm'},
    {id: 5, src: '/labels-podest', size: 'Podest', unit: ''},
    {id: 5, src: '/labels-zebra', size: 'Zebra', unit: ''},

])

</script>
<template>
    <div class="container">
        <h1>DRUKOWANIE ETYKIET</h1>
        <p>Wybierz szablon z etykietami</p>
        <nav class="nav-menu">
            <router-link v-for="link in links" :key="link.id" class="nav-menu__link" :to='link.src'>
                <div class="nav-menu__item">
                    <p>ETYKIETA</p>
                    <h3>{{ link.size }}{{ link.unit }}</h3>
                </div>
            </router-link>
        </nav>
        <div class="" style="margin-top: 20px;">
            <router-link class="" to="/help-info">POMOC</router-link>
        </div>
    </div>
</template>
  


<style scoped>

.container {
    display: flex;
    align-items: center;
    flex-direction: column;
}
p {
    margin-bottom: 3px;
}
.nav-menu {
    margin-top: 25px;
    max-width: 510px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap:10px;
}
@media (min-width: 992px) {
  .nav-menu {
    max-width: 770px;
  }
}
.nav-menu__item {
    min-width: 250px;
    background-color: #fff;
    padding: 50px;
    border-radius: 5px;
    text-align: center;
    box-shadow: 0 0 7px 0px black;
    transition: box-shadow 0.2s ease, background-color .2s ease;
}
.nav-menu__item:hover {
    background-color: #eaeaea;
    /* background: rgb(0,0,0); */
/* background: linear-gradient(125deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 5%, rgba(0,0,0,1) 10%, rgba(255,255,255,1) 15%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 30%, rgba(255,255,255,1) 35%, rgba(0,0,0,1) 40%, rgba(255,255,255,1) 45%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 55%, rgba(0,0,0,1) 60%, rgba(255,255,255,1) 65%, rgba(0,0,0,1) 70%, rgba(255,255,255,1) 75%, rgba(0,0,0,1) 80%, rgba(255,255,255,1) 85%, rgba(0,0,0,1) 90%, rgba(255,255,255,1) 95%, rgba(0,0,0,1) 100%); */
    box-shadow: 0 2px 7px 0px black;
}
.nav-menu__link {
    text-decoration: none;
    color: #272727;
}
</style>
  