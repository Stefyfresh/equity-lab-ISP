<script setup>
import OnboardingSidebar from '@/components/OnboardingSidebar.vue'

import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-vue";
import router from "@/router";

let { isAuthenticated, user } = useAuth0();

// WHY IS CODING SO STUPID SOMETIMES AAAAAAAA
async function doThings(user2) {
   const response = await axios.get("https://api.equitylab.io/users/email/" + user2.email);
   console.log(response.data);
   document.querySelector('.doThings').innerHTML = "";
   
   if (response.data.email != undefined) {
      router.push('/home');
   }
}
</script>

<template>
    <span class="doThings is-hidden" v-if="isAuthenticated"> {{ doThings(user) }}</span>
    <OnboardingSidebar></OnboardingSidebar>
</template>