<script setup>
import TheNavigation from '@/components/TheNavigation.vue';
import TheFooter from '@/components/TheFooter.vue';
import { ref, onMounted } from 'vue'
import StudySetInfo from '@/services/StudySetInfo.js'
import LoadingAnimation from '@/components/LoadingAnimation.vue';

const subject = ref(null)

const props = defineProps({
  subjectID: {
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
  <TheNavigation></TheNavigation>
  <span v-if="subject">
    <header class="header">
      <div class="columns is-gapless has-background-light">
        <div class="column is-4">
          <img :src="`/images/${subject.image}`" :alt="subject.name">
        </div>
        <div class="column has-background-light">
          <div class="columns">
            <div class="column is-6 ml-6 pl-6">
              <h1 class="subject-text">{{ subject.name }}</h1>
              <h1 class="subtitle">{{ subject.description }}</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="section">
      <div class="columns">
        <div class="column is-6">
          <router-link :to="{ name: 'slideshow', params: { subjectID: subject.subjectID, name: subject.name } }">
              <div class="box has-text-centered">
                <div class="columns">
                  <div class="column is-4 is-offset-4">
                    <figure class="image">
                <img :src="`/images/learnicon.webp`">
              </figure>
                  </div>
                </div>
                <div class="columns">
                  <div class="column">
                    <h1 class="subtitle">LEARN</h1>
                  </div>
                </div>
              </div>
            </router-link>
        </div>
        <div class="column is-6">
          <router-link :to="{ name: 'quiz', params: { subjectID: subject.subjectID, name: subject.name } }">
              <div class="box has-text-centered">
                <div class="columns">
                  <div class="column is-4 is-offset-4">
                    <figure class="image">
                <img :src="`/images/gameicon.webp`">
              </figure>
                  </div>
                </div>
                <div class="columns">
                  <div class="column">
                    <h1 class="subtitle">PLAY GAME</h1>
                  </div>
                </div>
              </div>
            </router-link>
        </div>
      </div>
    </div>
    <TheFooter class="mt-3"></TheFooter>
  </span>
  <LoadingAnimation v-else></LoadingAnimation>
</template>

<style scoped>
.activity {
  max-width: 400px;
  border-radius: 10px;
}

.activity img {
  border-radius: 10px;
  height: 250px;
}

.container {
  padding-bottom: 20px;
}
</style>