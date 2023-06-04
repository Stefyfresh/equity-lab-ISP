<script setup>
import LogoutButton from '@/components/buttons/LogoutButton.vue';
import { useAuth0 } from "@auth0/auth0-vue";
import { onMounted } from "vue";

const { user } = useAuth0();

onMounted(() => {
    const el = document.querySelector('.navbar-burger');
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
})
</script>

<template>
    <!-- Mobile navbar -->
    <nav class="navbar is-hidden-tablet">
        <div class="navbar-brand">
            <RouterLink to="/" aria-label="Home">
                <figure class="image equity-lab-logo">
                    <picture>
                        <source srcset="/images/logo-light.webp" media="(prefers-color-scheme: dark)">
                        <img alt="" src="/images/logo-dark.webp">
                    </picture>
                </figure>
            </RouterLink>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="mobile-nav">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="mobile-nav" class="navbar-menu">
            <div class="navbar-end">
                <div class="navbar-item">
                    <RouterLink to="home" class="button is-dark is-inverted">
                        <span class="icon is-medium">
                            <i class="fa-solid fa-house"></i>
                        </span>
                        <span>Dashboard</span>
                    </RouterLink>
                </div>
                <div class="navbar-item">
                    <RouterLink to="leaderboard" class="button is-dark is-inverted">
                        <span class="icon is-medium">
                            <i class="fa-solid fa-ranking-star"></i>
                        </span>
                        <span>Leaderboard</span>
                    </RouterLink>
                </div>  
                <div class="navbar-item">
                    <RouterLink to="profile" class="button is-dark is-inverted">
                        <span class="icon is-medium">
                            <i class="fa-solid fa-user"></i>
                        </span>
                        <span>Profile</span>
                    </RouterLink>
                </div>
                <div class="navbar-item">
                    <a class="button is-dark is-inverted">
                        <span class="icon is-medium">
                            <i class="fa-solid fa-right-from-bracket"></i>
                        </span>
                        <LogoutButton></LogoutButton>
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Desktop navbar -->
    <div class="box profile-sidebar is-hidden-mobile">
        <aside class="menu">
            <div class="has-text-centered block">
                <RouterLink to="/">
                    <picture>
                        <source srcset="/images/logo-light.webp" media="(prefers-color-scheme: dark)">
                        <img src="/images/logo-dark.webp" alt="" class="equity-lab-image">
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

<style scoped>
.profile-sidebar {
  border-radius: 0;
  /* TODO: VH does not work in this case since the element might be taller than the viewport */
  height: 100vh; 
}

.equity-lab-image {
    padding: 15px;
    max-width: 300px;
}

#mobile-nav {
    color: white;
}

.navbar-menu .column {
    padding: 20px 0;
}

.navbar-item a {
    color: white;
}
</style>