<script setup>
import ProfileSidebar from '@/components/ProfileSidebar.vue';
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
                        <img class="is-rounded" alt="" src="/images/128x128.webp">
                    </figure>
                    <h1 class="title">[username]</h1>
                    <h1 class="subtitle">[teacher]'s class</h1>
                </section>
                
            </div>
        </div>
    </div>
</template>