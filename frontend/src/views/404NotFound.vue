<script setup>
import TheNavigation from '@/components/TheNavigation.vue';
import TheFooter from '@/components/TheFooter.vue';
const emojis = "\\(^\u0414^)/ (\u0387.\u0387) (\u02da\u0394\u02da)b (\u0387_\u0387) (^_^)b (>_<) (o^^)o (;-;) (\u2265o\u2264) \\(o_o)/ (^-^*) (='X'=)".split(" ");
</script>

<template>
    <TheNavigation></TheNavigation>
    <header class="header">
        <section class="hero">
            <div class="hero-body">
                <div class="columns">
                    <div class="column is-fullwidth has-text-centered">
                        <h1 class="title has-weight-text-bold is-404 has-text-grey-lighter" id="emoji">
                            {{ emojis[parseInt(Math.random() * 12)] }}
                        </h1>
                        <h1 class="title">Page not found</h1>
                        <h1 class="subtitle">We couldn't find that page for you!</h1>
                        <RouterLink to="/">
                            <h1>&lt; Return to Equity Lab</h1>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </section>
    </header>
    <TheFooter></TheFooter>
</template>

<style scoped>
@font-face {
    font-family: 'Google Sans';
    src: url("https://fonts.gstatic.com/s/googlesans/v29/4UaGrENHsxJlGDuGo1OIlL3Owp5eKQtG.woff2");
}

#emoji {
    font: 200px/1.25 Google Sans;
}

.is-404 {
  font-size: 300px;
}
</style>