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
    <h1 class="title is-flex is-justify-content-center m-4">Study Sets</h1>

    <div>
      <router-link v-if="sets"
      
        v-for= "set in sets" 
        :key="set.id" 
        :to="{name: set.show, params:{id: set.id, slug: set.slug}}"
      >
      <h2>{{ set.name }}</h2>
      <img :src="`/images/${set.image}`" :alt="set.name">
    </router-link>
    </div>
    
    <TheFooter></TheFooter>
</template>
  

 

