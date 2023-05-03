<script setup>
import { useAuth0 } from "@auth0/auth0-vue";

const { isLoading } = useAuth0();
</script>
<template>
  <div v-if="isLoading">
    <!-- TODO: Make clever loading animation -->
    <h1 class="title" style="margin-top: 30vh;">Da page be loadin</h1> 
  </div>
  <RouterView v-else></RouterView>
</template>

<style scoped>
@import 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css';
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&family=Major+Mono+Display&display=swap');
</style>
