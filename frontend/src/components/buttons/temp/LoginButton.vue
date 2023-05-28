<template>
    <button class="button" @click="handleLogin">Log In</button>
</template>
  
<script setup>
import { useAuth0 } from "@auth0/auth0-vue";

const { loginWithRedirect } = useAuth0();

const handleLogin = () => {
    loginWithRedirect({
        appState: {
            target: "/home",
        },
    });
};
</script>