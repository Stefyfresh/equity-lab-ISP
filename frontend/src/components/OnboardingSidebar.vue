<script setup>
import { useAuth0 } from "@auth0/auth0-vue";

const { loginWithRedirect } = useAuth0();


</script>

<template>
    <div class="columns is-gapless">
        <div class="column is-6 is-viewport-height login-sidebar is-hidden-mobile"></div>

        <div class="column is-6">
            <div class="container is-fluid">
                <div class="column is-10 is-offset-1">
                    <aside class="menu has-text-left">
                        <div class="field">
                            <h1 class="title pt-6 mt-6">Welcome to Equity Lab</h1>
                            <div class="field">
                                <label class="label is-large mt-6 pt-6">Select your account type</label>
                                <div class="control">
                                <div class="select is-large is-rounded">
                                    <select>
                                        <option>Student</option>
                                        <option>Teacher</option>
                                    </select>
                                </div>
                            </div>
                            </div>
                            <div class="field">
                                <label class="label is-large mt-5">Name</label>
                                <p class="control">
                                    <input class="input is-rounded is-large" type="name" placeholder="What's your name?">
                                </p>
                            </div>
                            <div class="field">
                                <button class="mt-3 button is-danger is-large is-rounded is-right mt-6 is-fullwidth">Create account</button>
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