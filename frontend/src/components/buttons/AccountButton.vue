<template>
    <RouterLink to="login" v-if="!isAuthenticated">
        <button class="button is-primary is-inverted">
            <span>Log In</span>
        </button>
    </RouterLink>
    <RouterLink to="profile" v-else>
        <button class="button is-primary is-inverted">
            <span>Hello, {{ user.name }}</span>
        </button>
    </RouterLink>
</template>

<script setup>
import { useAuth0 } from "@auth0/auth0-vue";

const { isAuthenticated, user } = useAuth0();

</script>