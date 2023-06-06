<script setup>
import TheNavigation from '@/components/TheNavigation.vue';
import TheFooter from '@/components/TheFooter.vue';
import { ref, onMounted } from 'vue'
import StudySetInfo from '@/services/StudySetInfo.js'
import LoadingAnimation from '@/components/LoadingAnimation.vue';

const subjects = ref(null)
const numSubjects = 7;

onMounted(() => {
  StudySetInfo.getSubjects()
    .then((response) => {
      subjects.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
    initSearch();
})

function initSearch(){
  document.getElementById("submit").addEventListener("click", checkError);
  document.getElementById("allteam").addEventListener("click", startclear);
}

function checkError(){
  let available = false;
  const subject = ref(null);
  for(let i=1; i < numSubjects; i++){
    StudySetInfo.getSubject(i)
    .then((response) => {
      subject.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })

    if(document.getElementById("searchterms").value == subject.name){
      i=numSubjects;
      available = true;
    }
  }
  if(available){
    subjects = subject;
    errorButtonReverse();
  }else{
    errorButton("Sorry, that is not a study set that we have. Please try again!");
  }
    
}

//Adds styling to error message and makes it visible
function errorButton(message){
  let errormsgouter = document.querySelector('#errormsgouter');
  errormsgouter.classList.add('message');
  errormsgouter.classList.add('is-danger');
  errormsgouter.classList.add('m-3');

  let errormsg = document.querySelector('#errormsg');
  errormsg.classList.add('message-body');

  let deletebtn = document.querySelector('#delete');
  deletebtn.classList.remove('hidden');

  document.querySelector('#errormsg').textContent = message;

}

//takes aways styling to error message and makes it inivisible
function errorButtonReverse(){
  let errormsgouter = document.querySelector('#errormsgouter');
  errormsgouter.classList.remove('message');
  errormsgouter.classList.remove('is-danger');
  errormsgouter.classList.remove('m-3');

  let errormsg = document.querySelector('#errormsg');
  errormsg.classList.remove('message-body');

  let deletebtn = document.querySelector('#delete');
  deletebtn.classList.add('hidden');

  document.querySelector('#errormsg').textContent = '';

}




</script>

<template>
  <TheNavigation></TheNavigation>

  <div class="is-flex is-justify-content-center mb-3">
    <div class="search is-flex is-flex-direction-row is-align-items-center is-justify-content-center">
        <input class="input m-1 mb-2 is-rounded search" id="searchterms" type="text" placeholder="Looking for a particular study set? Search here!">
        <button class="button is-light m-2 mb-2 is-rounded" id="submit">Submit</button>
        <button class="button is-light m-2 mb-2 is-rounded" id="clear">Clear</button>
      </div>
    </div>
    <article id="errormsgouter" class="is-flex is-align-items-center is-flex-direction-row">
      <div id="errormsg"></div>
      <button class="delete mr-5 hidden" id="delete"></button>
    </article>

  
  <div v-if="subjects">
    <h1 class="title is-flex is-justify-content-center m-4 mb-2">Study Sets</h1>
    <div class="container is-fluid is-flex is-flex-wrap-wrap is-justify-content-center pb-3">
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

.search{
  width: 60%;
}

</style>
  

 

