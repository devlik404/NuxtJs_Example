import { useRequestHeaders, useState } from "nuxt/app";
import { ref, type Ref } from "vue";

export interface Ifilms {
  id: string;
  description: string;
  original_title: string;
  original_title_romanised: string;
  image: string;
  rt_score: string;
  release_date: string;
}

export async function getFilms() {
  try {
    const response = await fetch("https://ghibliapi.vercel.app/films");

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

//Api Provinsi
export async function getProv() {
  try {
    const response = await fetch(
      "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
    );

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

//api distric

export async function getDisctrics(id: string) {
  try {
    const response = await fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${id}.json`
    );

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

//api sub-district

export async function getSubDistrict(id: string) {
  try {
    const response = await fetch(
      `https://emsifa.github.io/api-wilayah-indonesia/api/districts/${id}.json`
    );

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
