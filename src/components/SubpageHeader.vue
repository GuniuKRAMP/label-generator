<script setup>

</script>
<template>
    <div class="header">
        <h1>
            <slot>Subpage title</slot>
        </h1>
        <router-link class="return-link" to="/">MENU Z ETYKIETAMI</router-link>
      </div>
</template>

<style scoped>
.header{
    display: flex;
    flex-direction: column;
    align-items: center;
}
h1 {
    margin-bottom: 20px;
}
.return-link {
    width: 250px;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    display: block;
    text-decoration: none;
    color: #272727;
    box-shadow: 0 0 7px 0px black;
    transition: box-shadow 0.2s ease, background-color .2s ease;
    margin-left: 0;
}
.return-link:hover {
    background-color: #f5f5f5;
    box-shadow: 0 2px 7px 0px black;
}
</style>