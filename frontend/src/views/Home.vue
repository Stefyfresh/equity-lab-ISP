<script setup>
import ProfileSidebar from '@/components/ProfileSidebar.vue';
import User from '@/services/User';
import { useAuth0 } from "@auth0/auth0-vue";

</script>

<template>
    <div class="columns is-gapless">
        <div class="column">
            <ProfileSidebar />
        </div>
        <div class="column is-9">
            <section class="section profile-section pb-0">
                <h1 class="title">Welcome back, {{ User.getLocalUser().name }}!</h1>
                <RouterLink to="/study">
                <div class="box">
                    <figure class="image is-3by1">
                        <img src="/images/home_landing.webp">
                    </figure>
                    <h1 class="home-title mt-1 mb-0">Start exploring Equity Lab</h1>
                </div>
                </RouterLink>
                <div class="columns">
                    <div class="column">
                        <RouterLink to="/study">
                        <div class="box">
                            <h1 class="home-title is-underlined">Put your <br>skills to the test</h1>
                        </div>
                        </RouterLink>
                    </div>
                    <div class="column">
                        <RouterLink to="/leaderboard">
                        <div class="box">
                            <h1 class="home-title is-underlined">Check your <br>personal stats</h1>
                        </div>
                        </RouterLink>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>