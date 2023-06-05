<script setup>
import TheNavigation from '@/components/TheNavigation.vue';
import TheFooter from '@/components/TheFooter.vue';
import { ref, onMounted } from 'vue'
import StudySetInfo from '@/services/StudySetInfo.js'
import LoadingAnimation from '@/components/LoadingAnimation.vue';

const experts = ref(null)
const numExperts = 1;

/*onMounted(() => {
  StudySetInfo.getExperts()
    .then((response) => {
      experts.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})

let tempexperts = [];

for(let i=1; i < numExperts; i++){
    Object expert = experts.expertID(i);
    if(
    .subject.equalsTo('Chemistry')){
        tempexperts.push(expert);
    }
}*/


</script>

<template>
  <TheNavigation></TheNavigation>

  <!--<div v-if="experts">
    <h1 class="title is-flex is-justify-content-center m-4 mb-5">Study Sets</h1>
    <div class="container is-fluid is-flex is-flex-wrap-wrap is-justify-content-center">
      is-flex is-justify-content-center"
      <span v-for="expert in experts" :key="expert.id">
          <div class="set card m-1 mb-2">
            <img :src="`/images/${expert.image}`" :alt="expert.name">
            <h2 class="is-flex is-justify-content-center pb-2 title is-6">{{ expert.name }}</h2>
          </div>
        
      </span>
    </div>

    <TheFooter class="mt-3"></TheFooter>

  <LoadingAnimation v-else></LoadingAnimation>-->
</template>
