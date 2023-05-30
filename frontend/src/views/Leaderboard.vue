<script setup>
import ProfileSidebar from '@/components/ProfileSidebar.vue'
import LeaderboardTable from '@/components/LeaderboardTable.vue';
</script>


<template>
    <div class="columns is-gapless">
        <div class="column">
            <ProfileSidebar />
        </div>
        <div class="column is-9">
            <section class="section profile-section">
                <h1 class="title">See how you stack up</h1>
                <div class="box">
                    <LeaderboardTable />
                </div>
            </section>
        </div>
    </div>
</template>