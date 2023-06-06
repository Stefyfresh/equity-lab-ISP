<script setup>
import ProfileSidebar from '@/components/ProfileSidebar.vue';

import { useAuth0 } from "@auth0/auth0-vue";

const { user } = useAuth0();
</script>

<template>
    <div class="columns is-gapless">
        <div class="column">
            <ProfileSidebar />
        </div>
        <div class="column is-9">
            <section class="section profile-section pb-0">
                <h1 class="title">Welcome back, {{ user.name }}!</h1>
                <div class="box">
                    <figure class="image is-3by1">
                        <img src="/images/placeholders/256x256.webp">
                    </figure>
                    <h1 class="subtitle">Start exploring Equity Lab</h1>
                </div>
                <div class="columns">
                    <div class="column">
                        <div class="box">
                            <figure class="image is-2by1">
                                <img src="/images/placeholders/256x256.webp">
                            </figure>
                            <h1 class="subtitle">Test your skills</h1>
                        </div>
                    </div>
                    <div class="column">
                        <div class="box">
                            <figure class="image is-2by1">
                                <img src="/images/placeholders/256x256.webp">
                            </figure>
                            <h1 class="subtitle">Challenge yourself</h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>