<script setup>
import ProfileSidebar from '@/components/ProfileSidebar.vue';
import User from '@/services/User';
import { useAuth0 } from "@auth0/auth0-vue";

const { user } = useAuth0();

</script>

<template>
    <div class="columns is-gapless">
        <div class="column">
            <ProfileSidebar />
        </div>
        <div class="column is-9">
            <div class="has-text-centered block">
                <section class="section profile-section">
                    <figure class="image is-128x128 is-inline-block">
                        <img class="is-rounded" alt="" :src="user.picture">
                    </figure>
                    <h1 class="title">{{ User.getLocalUser().name }}</h1>
                    <h1 class="subtitle">[Teacher]'s class</h1>
                    <div class="columns">
                        <div class="column">
                            <div class="box">
                                <h1 class="subtitle">Questions answered</h1>
                                <h1 class="title">987</h1>
                            </div>
                        </div>
                        <div class="column">
                            <div class="box">
                                <h1 class="subtitle">Total subjects explored</h1>
                                <h1 class="title">7</h1>
                            </div>
                        </div>
                        <div class="column">
                            <div class="box">
                                <h1 class="subtitle">Class Ranking</h1>
                                <h1 class="title">1st</h1>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>