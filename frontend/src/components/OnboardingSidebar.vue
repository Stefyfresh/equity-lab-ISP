<script setup>
import User from "@/services/User";
import { useAuth0 } from "@auth0/auth0-vue";
import router from "@/router";

const { user } = useAuth0();

function createUser(user2) {
    const userName = document.querySelector('#name').value;
    const userRole = document.querySelector('#userRole').value;

    if (userName == '' || userName == undefined) {
        document.querySelector('#nameError').innerHTML = "Please enter a name.";
        return;
    };

    if (userRole == '' || userRole == undefined) {
        document.querySelector('#nameError').innerHTML = "Please select an account type.";
        return;
    };

    let newUser = {
        email: user2.email,
        name: userName,
        role: userRole.toLowerCase()
    }

    User.postUser(newUser);

    sessionStorage.setItem("user", JSON.stringify(newUser));
    
    router.push('/home');
}

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
                                    <select id="userRole">
                                        <option>Student</option>
                                        <option>Teacher</option>
                                    </select>
                                </div>
                                <p class="help is-danger mt-2" id="roleError"></p>
                            </div>
                            </div>
                            <div class="field">
                                <label class="label is-large mt-5">Name</label>
                                <p class="control">
                                    <input class="input is-rounded is-large" type="name" placeholder="What's your name?" id="name">
                                </p>
                                <p class="help is-danger mt-2" id="nameError"></p>
                            </div>
                            <div class="field">
                                <button class="mt-3 button is-danger is-large is-rounded is-right mt-6 is-fullwidth" @click="createUser(user)">Create Account</button>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.login-sidebar {
    background-image: url(/images/login.webp);
    background-position: calc(80%);
    background-size: cover;
}
</style>