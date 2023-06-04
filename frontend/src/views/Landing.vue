<script setup>
import TheNavigation from '@/components/TheNavigation.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>

<template>
   <TheNavigation></TheNavigation>
    <header class="header">
        <div class="columns is-gapless has-background-light">
                <div class="column has-text-right has-background-light">
                    <h1 class="title">Bring equity to the classroom.</h1>
                </div>
                <div class="column">
                    <img alt="" src="https://www.turnitin.com/img/http/aHR0cHM6Ly9tYXJrZXRpbmctdGlpLXN0YXRhbWljLWFzc2V0cy11cy13ZXN0LTIuczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vZWRpdG9yaWFsL2ltYWdlcy9lbXBvd2VyLXN0dWRlbnRzLXRvLWRvLXRoZWlyLWJlc3Qtb3JpZ2luYWwtd29yay5wbmc=?s=719a47c4dd5cb62edb02ac398dcf4449">
                </div>
            </div>
    </header>
    <section class="section is-small has-background-white has-text-centered">
        <div class="title">What students think about Equity Lab</div>
        <div class="columns">
            <div class="column">
                <div class="box has-text-centered">
                    <figure class="image is-128x128">
                        <img alt="" class="is-rounded" src="/images/placeholders/128x128.webp">
                      </figure>  
                    <h1 class="title is-5">"The games are fun."</h1>
                    <h1 class="subtitle is-6">An anonymous student, Grade 6</h1>
                </div>
            </div>
            <div class="column">
                <div class="box has-text-centered">
                    <figure class="image is-128x128">
                        <img alt="" class="is-rounded" src="/images/placeholders/128x128.webp">
                      </figure>  
                    <h1 class="title is-5">"This is cool."</h1>
                    <h1 class="subtitle is-6">An anonymous student, Grade 5</h1>
                </div>
            </div>
            <div class="column">
                <div class="box has-text-centered">
                    <figure class="image is-128x128">
                        <img alt="" class="is-rounded" src="/images/placeholders/128x128.webp">
                      </figure>  
                    <h1 class="title is-5">"Wow this is good"</h1>
                    <h1 class="subtitle is-6">An anonymous student, Grade 8</h1>
                </div>
            </div>
        </div>
    </section>
    <section class="section is-medium">
        <div class="columns">
            <div class="column has-text-right">
                <h1 class="title">Learn how to incorporate Equity Lab with your school's curriculum</h1>
            </div>
            <div class="column">
                <img alt="" class="is-rounded" src="/images/placeholders/128x128.webp">
            </div>
        </div>
    </section>
    <TheFooter></TheFooter>
</template>