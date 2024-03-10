<template>
    <NavbarTop/>
    <div class="mx-auto bg-gray-100 p-1 sm:p-10 w-4/5">
      <div class="flex flex-col items-center pb-8">
        <h1 class="typography-headline-1 text-center">TOLLE Produkte</h1>
        <h2 class="typography-headline-2 text-center">VIEL Auswahl</h2>
        <h3 class="typography-headline-2 text-center">VOLL nette Beratung</h3>
        <p class="typography-text-lg text-center">Viele, viele bunte Flyer...</p>
      </div>
      <div class="pb-8">
        <FilterProduct 
          @changeDesign="receiveEmit"
        />
      </div>
      <div class="flex flex-col lg:flex-row justify-around pb-8">
        <ProductList />
      </div>
      
    </div>
    <div class="mx-auto bg-primary-100 p-1 sm:p-10">
      <div class="flex flex-col items-center pb-8">
        <h1 class="typography-headline-1 text-center text-white">TOLLE Produkte</h1>
        <p class="typography-text-lg text-center text-white">Viele, viele bunte Flyer...</p>
      </div>
    </div>
    
    <Footer class="mx-auto bg-gray-100 p-1 sm:p-10 w-4/5"/>
    <PageBottom/>
  </template>
  
  <script lang="ts" setup>
    import { SfButton } from '@storefront-ui/vue';
    import NavbarTop from './NavbarTop.vue';
    import PageBottom from './PageBottom.vue';
    import ProductList from './ProductList.vue';
    import FilterProduct from './FilterProduct.vue';
    import StickerArtem from './StickerArtem.vue';
    import Footer from './Footer.vue';
  
    const receiveEmit = (value: string) => {
      console.log(value);
    }
  </script>
  
  <style>
  /* Import your global styles here */
  @import "./styles/globals.css";
  </style>
  