<script setup>
import TheNavigation from '@/components/TheNavigation.vue';
import TheFooter from '@/components/TheFooter.vue';
import GoBack from '@/components/GoBack.vue'
import sourceData from '@/data.json'

  
const sets = ref(sourceData.sets);
import {useRoute} from 'vue-router'
import {computed} from 'vue'
    components:{ GoBack }
    props:{
        id:{type: Number}
    }
        const route = useRoute();
        const setId = computed(() => {
            return parseInt(route.params.id)
        })

        const set = computed(() => {
            return sourceData.sets.find(
                (set) => set.id == props.id
            );
        })

       // return{ setId, set} 
    
      
</script>

<template>
    <header class="header">
        <TheNavigation></TheNavigation>
    </header>
    <GoBack></GoBack>
    <h1 class="title is-flex is-justify-content-center m-4 mb-5">Learn {{ set.name }}</h1>
  
    
    <TheFooter class="mt-3"></TheFooter>
</template>