<script setup>
import TheNavigation from '@/components/TheNavigation.vue';
import TheFooter from '@/components/TheFooter.vue';
import { ref, onMounted } from 'vue'
import StudySetInfo from '@/services/StudySetInfo.js'
import LoadingAnimation from '@/components/LoadingAnimation.vue';

// const experts = ref(null);
let expert = ref(null);
let currExpert = 1;
let numExperts = 2;

const props = defineProps({
  name: {
    required: true,
  },
  subjectID: {
    required: true,
  }
})

onMounted(() => {
  createPagination();
  showPage(currExpert);

  // StudySetInfo.getExpertsbySubject(props.name)
  //   .then((response) => {
  //     experts.value = response.data
  //   })
  //   .catch((error) => {
  //     console.error(error)
  //   })
});


function showPage(expertID) {
  StudySetInfo.getExpert(expertID)
    .then((response) => {
      expert.value = response.data
    })
    .catch((error) => {
      console.error(error)
    });
}

function btnPrevious() {
  if (currExpert > 1) {
    currExpert--;
    showPage(currExpert);
  }
}

// Functionality for next button
function btnNext() {
  if (currExpert < numExperts) {
    currExpert++;
    showPage(currExpert);
  }
}

function createPagination() {
  document.querySelector("#previous").addEventListener("click", btnPrevious);
  document.querySelector("#next").addEventListener("click", btnNext);

  document.querySelector("#previous").style.display = 'inline';
  document.querySelector("#next").style.display = 'inline';
}

</script>

<template>
  <TheNavigation></TheNavigation>
  <div v-if="expert">
    <h1 class="title is-flex is-justify-content-center m-4 mb-5">Study Sets</h1>
    <div class="container is-fluid is-flex is-flex-wrap-wrap is-justify-content-center">
      <div class="set card m-1 mb-2">
        <!--<img :src="`/images/${expert.image}`" :alt="expert.name">-->
        <h2 class="is-flex is-justify-content-center pb-2 title is-6">{{ expert.name }}</h2>
      </div>
    </div>
    <!--<div v-if="experts">
    <h1 class="title is-flex is-justify-content-center m-4 mb-5">Study Sets</h1>
    <div class="container is-fluid is-flex is-flex-wrap-wrap is-justify-content-center">
      <span v-for="expert in experts" :key="expert.id">
          <div class="set card m-1 mb-2">
            <img :src="`/images/${expert.image}`" :alt="expert.name">
            <h2 class="is-flex is-justify-content-center pb-2 title is-6">{{ expert.name }}</h2>
          </div>
        
      </span>
    </div>-->
  </div>
  <nav class="pagination is-centered" role="navigation" aria-label="pagination">
    <a class="pagination-previous button mb-3 mx-1" id="previous">Previous</a>
    <a class="pagination-next button mb-3 mx-1" id="next">Next page</a>
    <ul class="pagination-list mb-2" id="pagination">

    </ul>
  </nav>

  <TheFooter class="mt-3"></TheFooter>
</template>
