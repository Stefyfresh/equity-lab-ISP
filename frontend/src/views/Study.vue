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
    <h1 v-if="subject" class="title is-flex is-justify-content-center m-4 mb-5">Learn {{ subject.name }}</h1>
    <p>Hello</p>
    <!--<div class="container is-fluid is-flex is-flex-wrap-wrap is-justify-content-center"> 
    
      
    </div>-->
  
    
    <TheFooter class="mt-3"></TheFooter>
</template>