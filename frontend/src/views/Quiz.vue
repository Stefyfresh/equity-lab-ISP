<script setup>
import TheNavigation from '@/components/TheNavigation.vue';
import TheFooter from '@/components/TheFooter.vue';
import { ref, onMounted } from 'vue'
import StudySetInfo from '@/services/StudySetInfo.js'
import LoadingAnimation from '@/components/LoadingAnimation.vue';

// const experts = ref(null);
let q = ref(null);
let currQ = 1;
let numQ = 15;
let score = 0;
let end = false;

let hasCurrentCorrect = false;

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
  showPage(currQ);

  // StudySetInfo.getExpertsbySubject(props.name)
  //   .then((response) => {
  //     experts.value = response.data
  //   })
  //   .catch((error) => {
  //     console.error(error)
  //   })
});


function showPage(questionID) {
  StudySetInfo.getQuestionsbySubject(props.name, questionID)
    .then((response) => {
      q.value = response.data
    })
    .catch((error) => {
      console.error(error)
    });
  hasCurrentCorrect = false;
}

// Functionality for next button
function btnNext() {
  if (currQ < numQ) {
    currQ++;
    disableButtons("neither");
    showPage(currQ);
    if (currQ == numQ) {
      disableButtons("next");
      nextTask();
      end = true;
    }
  } else {
    disableButtons("next");
  }
}

function createPagination() {
  document.querySelector("#next").addEventListener("click", btnNext);
  document.querySelector("#next").style.display = 'inline';
}

function disableButtons(type) {
  const next = document.getElementById("next");

  if (type == "previous") {
    previous.classList.add('is-light');

  } else if (type == "next") {
    next.classList.add('is-light');

  } else if (type = "neither") {
    next.classList.remove('is-light');
  }
}

function nextTask() {
  const nextTask = document.getElementById("nextTask");
  nextTask.classList.remove('hidden');
}

//hidden router link to go back home

function tallyAnswers(answer) {
  if (answer == q.value[0].correct && !hasCurrentCorrect) {
    score++;
    hasCurrentCorrect = true;
  }

  btnNext();
}


</script>

<template>
  <TheNavigation></TheNavigation>
  <div v-if="q">
    <div v-if="!end">
      <h1 class="title is-flex is-justify-content-center m-4 mb-5">Study Sets</h1>
      <div class="container is-fluid is-flex is-flex-wrap-wrap is-justify-content-center">
        <div class="set card m-1 mb-2">
          <div class="box">
            <h2 class="is-flex is-justify-content-center subtitle is-2 mt-2">{{ q[0].question }}</h2>
            <!-- <p class="m-4 pb-4 p-2 subtitle is-4">{{ q[0].correct }}</p> -->
            <h1 class="subtitle">A: {{ q[0].answers.A }}</h1>
            <h1 class="subtitle">B: {{ q[0].answers.B }}</h1>
            <h1 class="subtitle">C: {{ q[0].answers.C }}</h1>
            <h1 class="subtitle">D: {{ q[0].answers.D }}</h1>
            <div class="columns">
              <div class="column"><button class="button is-fullwidth is-rounded my-5" @click="tallyAnswers('A')">A</button></div>
              <div class="column"><button class="button is-fullwidth is-rounded my-5" @click="tallyAnswers('B')">B</button></div>
              <div class="column"><button class="button is-fullwidth is-rounded my-5" @click="tallyAnswers('C')">C</button></div>
              <div class="column"><button class="button is-fullwidth is-rounded my-5" @click="tallyAnswers('D')">D</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h1 class="title is-flex is-justify-content-center m-4 mb-5">Study Sets</h1>
      <div class="container is-fluid is-flex is-flex-wrap-wrap is-justify-content-center">
        <div class="set card m-1 mb-2">
          <div class="box">
            <h2 class="is-flex is-justify-content-center subtitle is-2 mt-2">You finished!</h2>
            <h1 class="subtitle is-3 pb-5">Your score is: {{ score }}</h1>
            <!-- <p class="m-4 pb-4 p-2 subtitle is-4">{{ q[0].correct }}</p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container is-fluid is-flex mt-3 is-justify-content-center">
    <nav class="pagination is-centered is-rounded" role="navigation" aria-label="pagination">
      <a class="pagination-next button is-medium mb-3 mx-1" id="next">Next page</a>
      <ul class="pagination-list mb-2" id="pagination">

      </ul>
    </nav>
  </div>

  <div class="is-flex is-justify-content-center">
    <router-link :to="{ name: 'studysubject', params: { subjectID: props.subjectID } }">
      <div class="button is-large is-rounded hidden" id="nextTask">Go Back</div>
    </router-link>
  </div>

  <TheFooter class="mt-3"></TheFooter>
</template>

<style>
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
