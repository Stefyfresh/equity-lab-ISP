<script setup>
import TheNavigation from '@/components/TheNavigation.vue';
import TheFooter from '@/components/TheFooter.vue';
import {ref, onMounted} from 'vue'
import StudySetInfo from '@/services/StudySetInfo.js'
 
const subject = ref(null)

const props = defineProps({
    subjectID:{
        required: true,
    }
})
 
onMounted(() => {
  StudySetInfo.getSubject(props.subjectID)
    .then((response) => {
      subject.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})

      
</script>

<template>
    <header class="header">
        <TheNavigation></TheNavigation>
    </header>
    <span  v-if="subject">
    <h1 class="title is-flex is-justify-content-center m-4 mb-5">{{ subject.name }}</h1>
    <div class="container is-flex is-justify-content-center mb-5"> 
      <p>{{ subject.description }}</p>
    </div>

    <div class="container">
    <div class="columns">
      <div class="column is-flex is-justify-content-center">
        <div class="card activity is-flex is-justify-content-center is-flex-direction-column">
        <img :src="`/images/learnicon.webp`" :alt="learn">
        <h2 class="is-flex is-justify-content-center p-2 title is-4">Learn</h2>

      </div>

      </div>
      <div class="column is-two-thirds is-flex is-flex-direction-row is-justify-content-center">
        <div class="card activity is-flex is-justify-content-center is-flex-direction-column mr-4">
        <img :src="`/images/gameicon.webp`" :alt="game">
        <h2 class="is-flex is-justify-content-center p-2 title is-4">Game 1</h2>

      </div>

      <div class="card activity is-flex is-justify-content-center is-flex-direction-column ml-4">
        <img :src="`/images/gameicon.webp`" :alt="game">
        <h2 class="is-flex is-justify-content-center p-2 title is-4">Game 2</h2>

        <!--I know the page looks terrible, we will replace the icons with photos of the games and slideshow-->

      </div>

      </div>
    </div>
    </div>
  </span>
    
    <TheFooter class="mt-3"></TheFooter>
</template>

<style>
.activity{
  max-width: 400px;
  border-radius: 10px;
}

.activity img{
  border-radius: 10px;
  height: 250px;
}

.container{
  padding-bottom: 20px;
}


</style>