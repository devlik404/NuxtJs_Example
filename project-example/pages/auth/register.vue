<script setup lang="ts">

import { UserSchema } from "~/interface/zod/zodValidation";
import type{ IProv,IDistric,ISubDistric} from "../../interface/address"
import { getProv, getDisctrics,getSubDistrict} from "../../server/api/address"
import { createPost } from "~/server/middleware/handler";


let prov = useState<IProv[]>('provinsi',(()=>([])))
prov = await getProv()

const selectedProvince = ref("");

const selectedDistrict = ref("");




  let districs = useState<IDistric[]>('district',(()=>([])))
   

watch(selectedProvince, async (newDistrics) => {
  
  const dist = await getDisctrics(newDistrics)
  districs.value = dist;
 
});

let subDistrict = useState<ISubDistric[]>('subDistrict',(()=>([])))
    
  
watch(selectedDistrict, async (Regency) => {
 
  const subDist = await getSubDistrict(Regency)
  subDistrict.value = subDist;
  
});


const formData = ref({
  first_name: '',
  last_name: '',
  email: '', 
  password: ''
});


console.log("formData",formData.value)

const handleSubmit = async () => {
  try {
    const data = formData.value;
    const first_name = data.first_name;
    const last_name = data.last_name;
    const email = data.email;
    const password = data.password;


    console.log("first_name", typeof first_name )
    // Simpan data ke database menggunakan Prisma
    const validateAuth = UserSchema.parse({
      first_name,
      last_name,
      email,
      password
    });

    const user = await createPost(validateAuth);
    console.log('Data berhasil disimpan:', user);
  } catch (error) {
    console.error('Gagal menyimpan data:', error);
  }
};
   



</script>

<style>
.bg-1 {
  background: #777135;
 
}
.bg-2 {
  background: #B8B065;
 
}
.bg-3 {
  background: #827D50;
 
}
.bg-4 {
  background: #4F4C2E;
 
}

</style>


<template>
  <div class="flex flex-wrap   items-center  h-screen bg-2 ">
    <div class="w-1/3 ml-auto mr-auto items-center bg-1 rounded text-white">
      <h5 class="text-4xl text-center p-3">Register</h5>
      <form @submit="handleSubmit"  class="w-full max-w-lg m-auto "  >
        <div class="flex flex-wrap -mx-3 mb-6 " >
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input v-model="formData.first_name" class="appearance-none block w-full bg-gray-200 text-yellow-900 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
     
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input v-model="formData.last_name" class="appearance-none block w-full bg-gray-200 text-yellow-900 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-email">
        Email 
      </label>
      <input v-model="formData.email" class="appearance-none block w-full bg-gray-200 text-yellow-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="please input your email">
    
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
        Password
      </label>
      <input v-model="formData.password" class="appearance-none block w-full bg-gray-200 text-yellow-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************">
      <p class="text-gray-600 text-xs italic">characters must be unique and mixed</p>
    </div>
  </div>
  <!-- <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-state">
        province
      </label>
      
      <div class="relative" >
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-yellow-900 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" v-model="selectedProvince" >
         
            <option v-for="provinc of prov" :key="provinc.id" :value="provinc.id">{{ provinc.name }}</option>
          
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-yellow-900">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
         
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
        South
      </label>
      <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-yellow-900 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city"  v-model="selectedDistrict">
         
         <option v-for="south of districs" :key="south.id" :value="south.id">{{ south.name }}</option>
       
       </select>
       <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-yellow-900">
         <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      
     </div>
    </div>
  
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-regency">
        Regency
      </label>
      <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-yellow-900 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-regency"  >
         
         <option v-for="regency of subDistrict" :key="regency.id" :value="regency.regency_id">{{ regency.name }}</option>
       
       </select>
       <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-yellow-900">
         <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      
     </div>
    </div>
  </div> -->
  <div class="flex items-center justify-between mt-6">
      <button class="bg-2 hover:text-yellow-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm  hover:text-yellow-900" href="#">
        Forgot Password?
      </a>
    </div>
</form>
      <p class="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
    </div>
  </div>
    </template>