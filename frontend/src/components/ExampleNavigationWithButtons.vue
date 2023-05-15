<template>
    <div class="nav-bar__buttons">
        <template v-if="!isAuthenticated">
            <SignupButton />
            <LoginButton />
        </template>
        <template v-else>
            <LogoutButton />
        </template>
    </div>
</template>
  
<script setup>
import LoginButton from "@/components/buttons/LoginButton.vue";
import LogoutButton from "@/components/buttons/LogoutButton.vue";
import SignupButton from "@/components/buttons/SignupButton.vue";
import { useAuth0 } from "@auth0/auth0-vue";

const { isAuthenticated } = useAuth0();
</script>