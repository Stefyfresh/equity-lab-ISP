<template>
    <RouterLink to="login" v-if="!isAuthenticated">
        <a class="button is-primary is-inverted">
            <span>Log In</span>
        </a>
    </RouterLink>
    <RouterLink to="profile" v-else>
        <a class="button is-primary is-inverted">
            <span>Hello, {{ user.name }}</span>
        </a>
    </RouterLink>
</template>

<script setup>
import { useAuth0 } from "@auth0/auth0-vue";

const { isAuthenticated, user } = useAuth0();

</script>