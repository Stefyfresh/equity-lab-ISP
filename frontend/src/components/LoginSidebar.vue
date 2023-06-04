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

<template>
    <div class="columns is-gapless">
        <div class="column is-6 is-viewport-height login-sidebar is-hidden-mobile"></div>

        <div class="column is-6">
            <div class="container is-fluid">
                <div class="column is-10 is-offset-1">
                    <aside class="menu has-text-centered">
                        <div class="field pt-6">
                            <!-- This is here to allow mobile users an easy way back home -->
                            <figure class="image is-64x64 has-auto-margin">
                                <RouterLink to="/">
                                    <img alt="" src="/images/logo.webp" />
                                </RouterLink>
                            </figure>
                        </div>
                        <!-- TODO: Make this look waaaaay better -->
                        <div class="field">
                            <label class="label pb-6 mb-6">Log in to Equity Lab</label>
                            <h1 class="title pt-6 mt-6">Select your account type</h1>
                            <div class="columns is-desktop">
                                <div class="column">
                                    <button class="button is-danger log-in-button is-large is-rounded is-fullwidth block is-outlined"
                                        @click="handleLogin">
                                        <span class="icon is-small">
                                            <i class="fa-solid fa-graduation-cap"></i>
                                        </span>
                                        <span>Students</span>
                                    </button>
                                </div>
                                <div class="column">
                                    <button class="button is-danger log-in-button is-large is-rounded is-fullwidth is-outlined"
                                        @click="handleLogin">
                                        <span class="icon is-small">
                                            <i class="fa-solid fa-chalkboard"></i>
                                        </span>
                                        <span>Teachers</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.log-in-button {
  height: 100px;
}

.login-sidebar {
    background-image: url(/images/login.webp);
    background-position: calc(80%);
    background-size: cover;
}
</style>