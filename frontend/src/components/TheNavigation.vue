<script setup>
import AccountButton from '@/components/buttons/AccountButton.vue';
import { onMounted } from 'vue';

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
    <nav class="navbar">
        <div class="container">
            <div class="navbar-brand">
                <RouterLink to="/" aria-label="Home">
                    <figure class="image equity-lab-logo">
                        <picture>
                            <source srcset="/images/logo-light.webp" media="(prefers-color-scheme: dark)">
                            <img alt="" src="/images/logo-dark.webp">
                        </picture>
                    </figure>
                </RouterLink>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="main-nav">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div class="navbar-menu topheight" id="main-nav">
                <div class="navbar-end">
                    <span class="navbar-item">
                        <RouterLink to="about">
                            <button class="button is-dark is-inverted">
                                <span>About</span>
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
                        <RouterLink to="contact">
                            <button class="button is-dark is-inverted">
                                <span>Contact</span>
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