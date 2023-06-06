<script setup>
import TheNavigation from '@/components/TheNavigation.vue';
import TheFooter from '@/components/TheFooter.vue';
import { ref, onMounted } from 'vue'
import StudySetInfo from '@/services/StudySetInfo.js'
import LoadingAnimation from '@/components/LoadingAnimation.vue';

// const experts = ref(null);
let expert = ref(null);
let currExpert = 1;
let numExperts = 5;

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
    disableButtons("neither");
    showPage(currExpert);
    if (currExpert == 1) {
      disableButtons("previous");
    }
  } else {
    disableButtons("previous");
  }
}

// Functionality for next button
function btnNext() {
  if (currExpert < numExperts) {
    currExpert++;
    disableButtons("neither");
    showPage(currExpert);
    if (currExpert == numExperts) {
      disableButtons("next");
      nextTask();
    }
  } else {
    disableButtons("next");
  }
}

function createPagination() {
  document.querySelector("#previous").addEventListener("click", btnPrevious);
  document.querySelector("#next").addEventListener("click", btnNext);

  document.querySelector("#previous").style.display = 'inline';
  document.querySelector("#next").style.display = 'inline';
}

function disableButtons(type) {
  const previous = document.getElementById("previous");
  const next = document.getElementById("next");

  if (type == "previous") {
    previous.classList.add('is-light');

  } else if (type == "next") {
    next.classList.add('is-light');

  } else if (type = "neither") {
    previous.classList.remove('is-light');
    next.classList.remove('is-light');
  }
}

function nextTask() {
  const nextTask = document.getElementById("nextTask");
  nextTask.classList.remove('hidden');
}

//hidden router link to go back home


</script>

<template>
  <TheNavigation></TheNavigation>
  <div v-if="expert">
    <h1 class="title is-flex is-justify-content-center m-4 mb-5">Study Sets</h1>
    <div class="container is-fluid is-flex is-flex-wrap-wrap is-justify-content-center">
      <div class="set card m-1 mb-2">
        <div class="columns expertpictures is-flex is-justify-content-center">
          <div class="column is-flex is-justify-content-center">
            <img :src="`/images/${expert.image}`" :alt="expert.name">
          </div>
          <div class="column is-two-thirds is-flex is-align-items-center mb-3 is-justify-content-center">
            <div>
              <h2 class="is-flex is-justify-content-center subtitle is-2 mt-2">{{ expert.name }}</h2>
              <p class="m-4 pb-4 p-2 subtitle is-4">{{ expert.description }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  <div class="container is-fluid is-flex mt-3 is-justify-content-center">
    <nav class="pagination is-centered is-rounded" role="navigation" aria-label="pagination">
      <a class="pagination-previous button is-medium mb-3 mx-1 is-light" id="previous">Previous</a>
      <a class="pagination-next button is-medium mb-3 mx-1" id="next">Next page</a>
      <ul class="pagination-list mb-2" id="pagination">

      </ul>
    </nav>
  </div>

  <div class="is-flex is-justify-content-center">
    <router-link :to="{ name: 'studysubject', params: { subjectID: props.subjectID } }">
      <div class="button is-large is-rounded hidden" id="nextTask">Play a Game to Test Your Knowledge!</div>
    </router-link>
  </div>



  <TheFooter class="mt-3"></TheFooter>
</template>

<style scoped>
@media(max-width:700px) {
  .expertpictures {
    display: flex;
    flex-direction: column;
  }


}

.hidden {
  display: none;
}
</style>
