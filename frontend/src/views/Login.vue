<script setup>
import ProfileSidebar from '@/components/ProfileSidebar.vue';
</script>

<template>
    <div class="columns is-gapless">
        <ProfileSidebar />
        <div class="column is-9">
            <div class="columns main-panel">
                <div class="column is-10 is-offset-1">
                    <h1 class="is-size-1 has-text-left">Welcome back, name</h1>
                    <div class="box">
                        <div class="columns">
                            <div class="column is-2">
                                <figure class="image is-128x128 is-inline-block">
                                    <img class="is-rounded"
                                        src="https://img.freepik.com/premium-vector/space-rocket-launch-cartoon-illustration_525134-60.jpg?size=626&ext=jpg&ga=GA1.1.1716829819.1683037576&semt=sph">
                                </figure>
                            </div>
                            <div class="column">
                                <h1 class="is-size-2 block has-text-left">Start exploring</h1>
                                <h1 class="subtitle has-text-right">View all studysets
                                    <span class="icon is-medium">
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>