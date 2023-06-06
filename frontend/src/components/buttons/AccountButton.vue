<template>
    <button class="button is-primary is-inverted" @click="handleLogin">
        <span v-if="!isAuthenticated">Log In</span>
        <span v-else>Hello, {{ User.getLocalUser().name }}</span>
    </button>
</template>

<script setup>
import User from "@/services/User";
import { useAuth0 } from "@auth0/auth0-vue";

const { isAuthenticated, user, loginWithRedirect } = useAuth0();

const handleLogin = () => {
    loginWithRedirect({
        appState: {
            target: "/post-login",
        },
    });
};
</script>