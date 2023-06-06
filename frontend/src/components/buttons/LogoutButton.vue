<template>
    <a @click="handleLogout">
        Sign Out
    </a>
</template>

<script setup>
import { useAuth0 } from "@auth0/auth0-vue";

const { logout } = useAuth0();

function handleLogout() {
    sessionStorage.removeItem("user");

    logout({
        logoutParams: {
            returnTo: window.location.origin,
        }
    });
}
</script>