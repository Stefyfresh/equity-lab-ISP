<script setup>
import { useAuth0 } from "@auth0/auth0-vue";
import router from "@/router";
import User from "@/services/User";

let { isAuthenticated, user } = useAuth0();


async function doThings(user2) {
   const user = await User.getUser(user2.email);
   document.querySelector('.doThings').innerHTML = "";
   
   sessionStorage.setItem("user", JSON.stringify(user));


   if (user.email == undefined) {
      // New user
      router.push('/onboarding');
      
   } else {
      router.push('/home');
   }
}
</script>


<template>
    <span class="doThings is-hidden" v-if="isAuthenticated"> {{ doThings(user) }}</span>

    <div class="columns is-vertical is-vcentered loading-columns is-mobile">
       <div class="column">
          <div class="has-text-centered">
             <figure class="image is-inline-block is-256x256">
                <!-- <img src="/images/loading2.gif"> -->
                <video autoplay loop muted playsinline>
                   <source src="/images/loading.webm" type="video/webm"/>
                </video>
            </figure>
          </div>
       </div>
    </div>
 </template>
 
 <style scoped>
 .loading-columns video{
   height: 35vh;
 }
 
 .loading-columns{
   height: 100vh;
 }
 </style>