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
                    <img alt="" src="https://images.ctfassets.net/mrop88jh71hl/41XDlZOCYpwd1eNZjFBFnn/45e436216d515f9dbe41e789f68e9e6e/stem_kids.jpeg">
                </div>
            </div>
    </header>
    <section class="section is-small has-background-white has-text-centered">
        <div class="title">What students think about Equity Lab</div>
        <div class="columns">
            <div class="column">
                <div class="box has-text-centered">
                    <figure class="image is-inline-block block">
                        <img alt="" class="" src="https://media.istockphoto.com/id/854169794/photo/elementary-student-going-back-to-school.jpg?s=612x612&w=0&k=20&c=APEN-3y-QUx-3oaNJe0zNCjgpveudmDS1IxIhU63vT0=">
                    </figure>  
                    <h1 class="title is-5">"The games are fun. <br>I think this is really cool"</h1>
                    <h1 class="subtitle is-6 pt-2">Jane, Grade 6</h1>
                </div>
            </div>
            <div class="column">
                <div class="box has-text-centered">
                    <figure class="image is-inline-block block">
                        <img alt="" class="" src="https://media.istockphoto.com/id/887302366/photo/portrait-of-male-teenage-student-in-uniform-outside-buildings.jpg?s=612x612&w=0&k=20&c=hoha_IGYlGKM57gqX0QPQdnBvnrJPtHLn8ErZ6QK2nY=">
                    </figure>  
                    <h1 class="title is-5 block">"This makes learning about <br>STEM way better."</h1>
                    <h1 class="subtitle is-6 pt-2">John, Grade 8</h1>
                </div>
            </div>
            <div class="column">
                <div class="box has-text-centered">
                    <figure class="image is-inline-block block">
                        <img alt="" class="" src="https://t3.ftcdn.net/jpg/02/02/52/36/360_F_202523652_NqEMp50IkORLXlCmJXqgqRBLMW8xBHMP.jpg">
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
                    <img alt="" class="" src="https://st4.depositphotos.com/3261171/26578/i/600/depositphotos_265787618-stock-photo-teacher-standing-near-whiteboard-with.jpg">
                </figure>
                <RouterLink to="about" class="title">Incorporate Equity Lab within your school's curriculum</RouterLink>
            </div>
            <div class="column is-4">
                <figure class="image is-inline-block">
                    <img alt="" class="" src="https://jsis.washington.edu/canada/wp-content/uploads/sites/20/2017/06/gibney_students-800x534.jpg">
            </figure>
                <RouterLink to="about" class="title">Read about our mission to bring equity to schools across Canada</RouterLink>
            </div>
        </div>
    </section>
    <TheFooter></TheFooter>
</template>