<script setup>
import AccountButton from '@/components/buttons/AccountButton.vue';
</script>

<template>
    <nav class="navbar" id="main-nav">
        <div class="container">
            <div class="navbar-brand">
                <RouterLink to="/" aria-label="Home">
                    <picture>
                        <source srcset="/images/logo-light.webp" media="(prefers-color-scheme: dark)" class="equity-lab-logo">
                        <img alt="" src="/images/logo-dark.webp" class="equity-lab-logo">
                    </picture>
                </RouterLink>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                    data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarMenuHeroA" class="navbar-menu topheight">
                <div class="navbar-end">
                    <span class="navbar-item">
                        <RouterLink to="about">
                            <button class="button is-dark is-inverted">
                                <span>About</span>
                            </button>
                        </RouterLink>
                    </span>
                    <span class="navbar-item">
                        <RouterLink to="contact">
                            <button class="button is-dark is-inverted">
                                <span>Contact</span>
                            </button>
                        </RouterLink>
                    </span>
                    <span class="navbar-item">
                        <RouterLink to="study">
                            <button class="button is-dark is-inverted">
                                <span>Study</span>
                            </button>
                        </RouterLink>
                    </span>
                    <span class="navbar-item">
                        <RouterLink to="login">
                            <button class="button is-dark is-inverted">
                                <span>Contact Us</span>
                            </button>
                        </RouterLink>
                    </span>
                    <span class="navbar-item">
                        <AccountButton></AccountButton>
                    </span>
                </div>
            </div>
        </div>
    </nav>
</template>