<template>
    <div class="columns is-gapless">
        <div class="column is-3">
            <div class="box profile-sidebar">
                <aside class="menu is-hidden-mobile">
                    <h1 class="title">
                        <RouterLink to="/">
                            <img src="/images/logo-dark.png" class="equity-lab-logo">
                        </RouterLink>
                    </h1>
                    <div class="card-image has-text-centered block">
                        <figure class="image is-128x128 is-inline-block">
                            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                        </figure>
                    </div>
                    <div class="menu-list">
                        <span class="navbar-item sidebar-item">
                            <button class="button is-dark is-inverted is-medium">
                                <RouterLink to="study">
                                    <span class="icon is-medium">
                                        <i class="fa-solid fa-house"></i>
                                    </span>
                                    <span>Dashboard</span>
                                </RouterLink>
                            </button>
                        </span>
                        <span class="navbar-item sidebar-item">
                            <button class="button is-dark is-inverted is-medium">
                                <RouterLink to="study">
                                    <span class="icon is-medium">
                                        <i class="fa-solid fa-ranking-star"></i>
                                    </span>
                                    <span>Leaderboard</span>
                                </RouterLink>
                            </button>
                        </span>
                        <span class="navbar-item sidebar-item">
                            <button class="button is-dark is-inverted is-medium">
                                <RouterLink to="study">
                                    <span class="icon is-medium">
                                        <i class="fa-solid fa-user"></i>
                                    </span>
                                    <span>Profile</span>
                                </RouterLink>
                            </button>
                        </span>
                        <span class="navbar-item sidebar-item">
                            <div class="dropdown is-hoverable">
                                <div class="dropdown-trigger">
                                    <button class="button is-dark is-inverted is-medium" aria-haspopup="true"
                                        aria-controls="dropdown-menu">
                                        <span class="icon is-small">
                                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                                        </span>
                                        <span>More</span>
                                    </button>
                                </div>
                                <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                                    <div class="dropdown-content">
                                        <div class="dropdown-item">
                                            <a class="dropdown-item">
                                                Settings
                                            </a>
                                            <LogoutButton class="dropdown-item"></LogoutButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </span>
                    </div>
                </aside>
            </div>
        </div>
    </div>
</template>

<script setup>
import LogoutButton from '@/components/buttons/LogoutButton.vue';
</script>