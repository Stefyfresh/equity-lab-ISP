<script setup>
import AccountButton from '@/components/buttons/AccountButton.vue';
</script>

<template>
    <nav class="navbar" id="main-nav">
        <div class="container">
            <div class="navbar-brand">
                <RouterLink to="/">
                    <picture>
                        <source srcset="/images/logo-light.png" media="(prefers-color-scheme: dark)" class="equity-lab-logo">
                        <img src="/images/logo-dark.png" class="equity-lab-logo">
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
                            <a class="button is-dark is-inverted">
                                <span>About</span>
                            </a>
                        </RouterLink>
                    </span>
                    <span class="navbar-item">
                        <RouterLink to="contact">
                            <a class="button is-dark is-inverted">
                                <span>Contact</span>
                            </a>
                        </RouterLink>
                    </span>
                    <span class="navbar-item">
                        <RouterLink to="study">
                            <a class="button is-dark is-inverted">
                                <span>Study</span>
                            </a>
                        </RouterLink>
                    </span>
                    <span class="navbar-item">
                        <RouterLink to="login">
                            <a class="button is-dark is-inverted">
                                <span>Contact Us</span>
                            </a>
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