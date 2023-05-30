<template>
    <div class="columns is-gapless">
        <div class="column is-6">
            <figure class="image is-inline-block is-hidden-mobile">
                <img alt="" src="https://images.pexels.com/photos/4709293/pexels-photo-4709293.jpeg?auto=compress&cs=tinysrgb&w=800">
            </figure>
        </div>

        <div class="column is-6">
            <div class="container is-fluid">
                <div class="column is-10 is-offset-1">
                    <div class="profile-sidebar">
                        <aside class="menu has-text-centered">
                            <div class="field">
                                <!-- This is here to allow mobile users an easy way back home -->
                                <figure class="image is-64x64 has-auto-margin">
                                    <RouterLink to="/">
                                        <img alt="" src="/images/logo.webp"/>
                                    </RouterLink>
                                </figure>
                            </div>
                            <!-- TODO: Make this look waaaaay better -->
                            <div class="field">
                                <label class="label">Log in to Equity Lab</label>
                                <button class="button is-danger is-large is-fullwidth block is-outlined"
                                    @click="handleLogin">
                                        <span class="icon is-small">
                                        <i class="fa-solid fa-graduation-cap"></i>
                                        </span>
                                        <span>Students</span>
                                </button>
                                <button class="button is-danger is-large is-fullwidth is-outlined"
                                    @click="handleLogin">
                                        <span class="icon is-small">
                                            <i class="fa-solid fa-chalkboard"></i>
                                        </span>
                                        <span>Teachers</span>
                                </button>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </div>
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