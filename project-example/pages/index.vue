<script setup lang="ts">
import {getFilms } from '~/server/api/test';
import type{Ifilms} from '~/server/api/test';

let movies = useState<Ifilms[]>( 'movies',(()=>([])))
movies = await getFilms()
console.log(movies)



</script>

<template>
  <div>
    <navbar/>
  </div>
  <div class="flex flex-wrap -mb-4 justify-center">
    
    <div v-for="movie of movies" :key="movie.id" :value="movie.id">
    <div class="max-w-sm rounded overflow-hidden shadow-lg  m-4 " >
      <img class="w-full" :src="movie.image"  alt="Sunset in the mountains">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ movie.original_title }} | {{ movie.original_title_romanised }}</div>
        <p class="text-gray-700 text-base truncate ...">
          {{ movie.description }}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Rating : {{ movie.rt_score }}</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Fall {{ movie.release_date }}</span>
      
      </div>
    </div>
  </div>

</div>


</template>
