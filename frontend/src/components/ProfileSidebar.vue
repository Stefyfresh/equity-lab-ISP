<template>
    <div class="box profile-sidebar">
        <aside class="menu is-hidden-mobile">
            <div class="has-text-centered block">
                <RouterLink to="/">
                    <picture>
                        <source srcset="/images/logo-light.webp" media="(prefers-color-scheme: dark)"
                            class="equity-lab-logo">
                        <img src="/images/logo-dark.webp" alt="" class="equity-lab-logo">
                    </picture>
                </RouterLink>
            </div>
            <div class="card-image has-text-centered block">
                <figure class="image is-128x128 is-inline-block">
                    <img class="is-rounded" alt="" :src="user.picture">
                </figure>
            </div>
            <div class="menu-list">
                <span class="navbar-item sidebar-item">
                    <button class="button is-dark is-inverted is-medium">
                        <RouterLink to="home">
                            <span class="icon is-medium">
                                <i class="fa-solid fa-house"></i>
                            </span>
                            <span>Dashboard</span>
                        </RouterLink>
                    </button>
                </span>
                <span class="navbar-item sidebar-item">
                    <button class="button is-dark is-inverted is-medium">
                        <RouterLink to="leaderboard">
                            <span class="icon is-medium">
                                <i class="fa-solid fa-ranking-star"></i>
                            </span>
                            <span>Leaderboard</span>
                        </RouterLink>
                    </button>
                </span>
                <span class="navbar-item sidebar-item">
                    <button class="button is-dark is-inverted is-medium">
                        <RouterLink to="profile">
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
</template>

<script setup>
import LogoutButton from '@/components/buttons/LogoutButton.vue';
import { useAuth0 } from "@auth0/auth0-vue";

const { user } = useAuth0();
</script>