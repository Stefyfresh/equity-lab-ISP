<script setup>
import TheNavigation from '@/components/TheNavigation.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>

<template>
   <TheNavigation></TheNavigation>
    <header class="header">
        <section class="section is-medium">
                <div class="columns">
                    <div class="column has-text-right">
                        <h1>Placeholder text</h1>
                    </div>
                    <div class="column">
                        <img src="https://img.redbull.com/images/f_auto/wingfinder/sphere/background">
                    </div>
                </div>
        </section>
    </header>
    <section class="section is-small has-background-white has-text-centered">
        <div class="title">What students think about Equity Lab</div>
        <div class="columns">
            <div class="column">
                <div class="box has-text-centered">
                    <figure class="image is-128x128">
                        <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                      </figure>  
                    <h1 class="title is-5">"The games are fun."</h1>
                    <h1 class="subtitle is-6">An anonymous student, Grade 6</h1>
                </div>
            </div>
            <div class="column">
                <div class="box has-text-centered">
                    <figure class="image is-128x128">
                        <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                      </figure>  
                    <h1 class="title is-5">"This is cool."</h1>
                    <h1 class="subtitle is-6">An anonymous student, Grade 5</h1>
                </div>
            </div>
            <div class="column">
                <div class="box has-text-centered">
                    <figure class="image is-128x128">
                        <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
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
                <h1 class="title">Bring equity to the classroom.</h1>
            </div>
            <div class="column">
                <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
            </div>
        </div>
    </section>
    <TheFooter></TheFooter>
</template>