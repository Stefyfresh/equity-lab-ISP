<script setup>
import TheNavigation from '@/components/TheNavigation.vue';
import TheFooter from '@/components/TheFooter.vue';
import { ref, onMounted } from 'vue'
import StudySetInfo from '@/services/StudySetInfo.js'
import LoadingAnimation from '@/components/LoadingAnimation.vue';

const subjects = ref(null)

onMounted(() => {
  StudySetInfo.getSubjects()
    .then((response) => {
      subjects.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})


</script>

<template>
  <TheNavigation></TheNavigation>

  
  <div v-if="subjects">
    <h1 class="title is-flex is-justify-content-center m-4 mb-5">Study Sets</h1>
    <div class="container is-fluid is-flex is-flex-wrap-wrap is-justify-content-center">
      <!--is-flex is-justify-content-center"-->
      <span v-for="subject in subjects" :key="subject.id">
        <router-link :to="{ name: 'studysubject', params: { subjectID: subject.subjectID } }">
          
          <div class="set card m-1 mb-2">
            <img :src="`/images/${subject.image}`" :alt="subject.name">
            <h2 class="is-flex is-justify-content-center pb-2 title is-6">{{ subject.name }}</h2>
          </div>
        </router-link>
      </span>
    </div>

    <TheFooter class="mt-3"></TheFooter>
  </div>

  <LoadingAnimation v-else></LoadingAnimation>

</template>

<style>
.set {
  max-width: 400px;
  border-radius: 10px;
}

.set img {
  border-radius: 10px;
  width: 400px;
  height: 250px;
}

</style>
  

 

