<script setup>
</script>

<template>
  <div id="app" class="app"> 
    <router-view />
  </div>
</template>

<style>
.main{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
</style>
