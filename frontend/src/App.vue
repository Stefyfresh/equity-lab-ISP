<script setup>
import { useAuth0 } from "@auth0/auth0-vue";
import Loading from "./views/Loading.vue";

const { isLoading } = useAuth0();
</script>
<template>
  <Loading v-if="isLoading"></Loading>
  <RouterView v-else></RouterView>
</template>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css';
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&family=Major+Mono+Display&display=swap');
</style>
