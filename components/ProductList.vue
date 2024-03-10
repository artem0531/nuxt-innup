<script lang="ts" setup>
    import ProductCard from './ProductCard.vue';
    import { useProductStore } from '~/store/ProductStore';
    const productStore = useProductStore();

    const products = productStore.products;

    // const products = ref([
    //     { name: 'Digital printing', subname: 'on white PVC film on fixed sheets', price: 115.14, stars: 5 },
    //     { name: 'Screen Printing', subname: 'on white pVC film cut individually', price: 490.64, stars: 5 },
    //     { name: 'UV offset printing', subname: 'on white PVC film delivered individulally', price: 203.25, stars: 5 },
    //     { name: 'Adhesive paper offset printing', subname: 'delivered individually', price: 124.95, stars: 5 },
    //     { name: 'Thermal transfer printing', subname: 'on white PVC film on fixed sheets', price: 209.82, stars: 5 },
    //     //{ name: 'Flexographic printing', subname: 'on white foil delivered on roil', price: 1000, stars: 5 },
    // ])
</script>
<template>
    <div class="" v-for="p in products">
        <ProductCard :product="p"/>
    </div>
</template>
<style></style>./stores/ProductStore../store/ProductStore../store/ProductStore