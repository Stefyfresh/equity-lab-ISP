<template>
    <div class="columns is-gapless">
        <div class="column is-6">
            <figure class="image is-inline-block">
                <img alt="" src="https://images.pexels.com/photos/4709293/pexels-photo-4709293.jpeg?auto=compress&cs=tinysrgb&w=800">
            </figure>
        </div>

        <div class="column is-6">
            <div class="column is-10 is-offset-1">
                <div class="profile-sidebar">
                    <aside class="menu is-hidden-mobile">

                        <!-- TODO: Make this look waaaaay better -->
                        <div class="field">
                            <label class="label">Log in to Equity Lab</label>
                            <button class="button is-danger is-large is-fullwidth block"
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
</template>

<script setup>
import { useAuth0 } from "@auth0/auth0-vue";

const { loginWithRedirect } = useAuth0();

const handleLogin = () => {
    loginWithRedirect({
        appState: {
            target: "/profile",
        },
    });
};
</script>