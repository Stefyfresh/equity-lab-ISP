<script setup>
import TheNavigation from '@/components/TheNavigation.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>

<template>
   <TheNavigation></TheNavigation>
    <header class="header">
        <div class="columns is-gapless has-background-light">
                <div class="column has-background-light">
                    <div class="columns">
                        <div class="column is-6 is-offset-one-quarter">
                            <h1 class="landing-text">Bring equity to the classroom.</h1>
                        </div>
                    </div>
                </div>
                <div class="column is-5">
                    <img alt="" src="/images/class1.webp">
                </div>
            </div>
    </header>
    <section class="section is-small has-background-white has-text-centered">
        <div class="title">What students and teachers think about Equity Lab</div>
        <div class="columns">
            <div class="column">
                <div class="box has-text-centered">
                    <figure class="image is-inline-block block">
                        <img alt="" class="" src="/images/student1.webp">
                    </figure>  
                    <h1 class="title is-5">"The games are fun. <br>I think this is really cool"</h1>
                    <h1 class="subtitle is-6 pt-2">Jane, Grade 6</h1>
                </div>
            </div>
            <div class="column">
                <div class="box has-text-centered">
                    <figure class="image is-inline-block block">
                        <img alt="" class="" src="/images/student2.webp">
                    </figure>  
                    <h1 class="title is-5 block">"This makes learning about <br>STEM way better."</h1>
                    <h1 class="subtitle is-6 pt-2">John, Grade 8</h1>
                </div>
            </div>
            <div class="column">
                <div class="box has-text-centered">
                    <figure class="image is-inline-block block">
                        <img alt="" class="" src="/images/teacher1.webp">
                    </figure>  
                    <h1 class="title is-5">"With Equity Lab, my class is more engaged than ever"</h1>
                    <h1 class="subtitle is-6 pt-2">Ms. Teacher, 7th grade teacher</h1>
                </div>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="columns">
            <div class="column is-4 is-offset-2">
                <figure class="image is-inline-block">
                    <img alt="" class="" src="/images/class2.webp">
                </figure>
                <RouterLink to="about" class="title">Incorporate Equity Lab within your school's curriculum</RouterLink>
            </div>
            <div class="column is-4">
                <figure class="image is-inline-block">
                    <img alt="" class="" src="/images/class3.webp">
            </figure>
                <RouterLink to="about" class="title">Read about our mission to bring equity to schools across Canada</RouterLink>
            </div>
        </div>
    </section>
    <TheFooter></TheFooter>
</template>