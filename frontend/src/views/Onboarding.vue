<script setup>
import OnboardingSidebar from '@/components/OnboardingSidebar.vue'

import { useAuth0 } from "@auth0/auth0-vue";
import router from "@/router";
import User from '@/services/User';

const { isAuthenticated, user } = useAuth0();


async function doThings(user2) {
   const user = await User.getUser(user2.email);
   document.querySelector('.doThings').innerHTML = "";

   // Unauthorized access control
   if (user.email != undefined) {
      router.push('/home');
   }
}
</script>

<template>
   <span class="doThings is-hidden" v-if="isAuthenticated"> {{ doThings(user) }}</span>
   <OnboardingSidebar></OnboardingSidebar>
</template>