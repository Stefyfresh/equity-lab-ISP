<script setup>
import TheNavigation from '@/components/TheNavigation.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>

<template>
    <header class="header">
        <TheNavigation></TheNavigation>
    </header>
    <section id="showcase">
        <div class="bg-image"></div>
            <div class="container is-flex is-justify-content-center is-align-items-center">
            <div class="circle m-6 p-4 is-flex is-align-items-center">
                <div>
                <h1 class="title is-flex is-justify-content-center has-text-white">About Us</h1>
                <p class="p-3">Started in ICS4U. three people, one dream, blah blah blah Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quod dolor dolores, voluptas suscipit officia alias ex ut corporis nesciunt a amet optio nisi ullam odio voluptate. Voluptatem, ipsum hic?</p>
                </div>
            </div>
            </div>
    </section>
    <section class="container pt-5 pb-5">
        <div class="columns">
            <div class="column">
                <figure class="image is-128x128">
                    <img alt="" src="/images/128x128.webp">
                </figure>
            </div>
            <div class="column is-two-thirds is-flex is-align-items-center">
                <p>Replace with photo of three of us. blah blah blah Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam numquam similique, perspiciatis doloribus nobis sapiente temporibus magnam repellendus labore, in vero modi harum quaerat iusto velit, provident aut porro veniam.</p>
            </div>
        </div>
    </section>
    
    <TheFooter></TheFooter>
</template>

<style>
#showcase{
    min-height: 600px;
    text-align: center; 
}

#showcase .container{
    min-height: 600px;
    max-width: 500px;
}

.circle {
    border-radius: 200px;
    height: 400px;
    background-color: #FF6312;
    color: #fff;
    opacity: 0.9;
}

#showcase .bg-image{
    position: absolute;
    background:url('/images/aboutus.webp') no-repeat center;
    background-size:cover;
    width:100%;
    height: 600px;
    opacity: 0.4;
    z-index: -1;
}
</style>

