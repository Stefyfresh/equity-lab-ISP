<template>
    <div class="columns is-vertical is-vcentered is-mobile loading-columns">
      <div class="column">
         <div class="has-text-centered">
            <figure class="image is-inline-block">
               <!-- <img src="/images/loading2.gif"> -->
               <video autoplay loop muted playsinline>
                  <source src="/images/loading.webm" type="video/webm"/>
               </video>
            </figure>
         </div>

      </div>
   </div>
</template>

<style scoped>
.loading-columns video{
  height: 30vh;
}

.loading-columns{
  height: 80vh;
}
</style>