<script setup>
import ProfileSidebar from '@/components/ProfileSidebar.vue';
</script>

<template>
    <div class="columns is-gapless">
        <div class="column">
            <ProfileSidebar />
        </div>
        <div class="column is-9">
            <section class="section profile-section">
                <h1 class="title">Welcome back, [username]!</h1>
                <div class="box">
                    <figure class="image is-3by1">
                        <img src="https://bulma.io/images/placeholders/256x256.png">
                    </figure>
                    <h1 class="subtitle">Start exploring Equity Lab</h1>
                </div>
                <div class="columns">
                    <div class="column">
                        <div class="box">
                            <figure class="image is-2by1">
                                <img src="https://bulma.io/images/placeholders/256x256.png">
                            </figure>
                            <h1 class="subtitle">Test your skills</h1>
                        </div>
                    </div>
                    <div class="column">
                        <div class="box">
                            <figure class="image is-2by1">
                                <img src="https://bulma.io/images/placeholders/256x256.png">
                            </figure>
                            <h1 class="subtitle">Challenge yourself</h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>