<script setup>
import TheNavigation from '@/components/TheNavigation.vue';
import TheFooter from '@/components/TheFooter.vue';
import {ref} from 'vue'
import sourceData from '../../data.json'

  
const sets = ref(sourceData.sets);
      
</script>

<template>
    <header class="header">
        <TheNavigation></TheNavigation>
    </header>
    <h1 class="title is-flex is-justify-content-center m-4 mb-5">Study Sets</h1>

    <div class="container is-fluid is-flex is-flex-wrap-wrap is-justify-content-center"> <!--is-flex is-justify-content-center"-->
    
      <span v-for= "set in sets" :key="set.id" >
      <router-link 
        :to="{name: 'set.show', params:{id: set.id, slug: set.slug}}"
      >
    
      <div class="set card m-1 mb-2">
      <img :src="`/images/${set.image}`" :alt="set.name">
      <h2 class="is-flex is-justify-content-center pb-2 title is-6">{{ set.subject }}</h2>
    </div>
    </router-link>
  </span>
    </div>
  
    
    <TheFooter class="mt-3"></TheFooter>
</template>

<style>
.set{
  max-width: 400px;
  border-radius: 10px;
}

.set img{
  border-radius: 10px;
  width: 400px;
  height: 250px;
}


</style>
  

 

