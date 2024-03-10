<template>
  <div class="h-full flex flex-col justify-between border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]">
    <div class="relative">
      <SfLink href="#" class="block">
        <img
          src="https://www.innup.de/images/rubbellos.png"
          alt="Rubbellos"
          class="block object-cover h-auto rounded-md"
          width="350"
          height="229"
        />
      </SfLink>
      <SfButton
        variant="tertiary"
        size="sm"
        square
        class="absolute bottom-0 right-0 mr-2 mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full"
        aria-label="Add to wishlist"
      >
        <SfIconFavorite size="sm" />
      </SfButton>
    </div>
    <div class="p-4 border-t border-neutral-200">
      <div class="w-full flex justify-between">
        <SfLink href="#" variant="secondary" class="no-underline"> {{ product.name }} </SfLink>
        <Tooltip>{{ product.nameTip }}</Tooltip>
      </div>
      <div class="flex items-center pt-1">
        <SfRating size="xs" :value="5" :max="5" />

        <SfLink href="#" variant="secondary" class="pl-1 no-underline">
          <SfCounter size="xs">{{ product.stars }}</SfCounter>
        </SfLink>
      </div>
      <div class="w-full flex justify-between">
        <p class="block py-2 font-normal leading-5 typography-text-sm text-neutral-700">
          {{ product.subname }}
        </p>
        <Tooltip>{{ product.subnameTip }}</Tooltip>
      </div>
      <span class="block pb-2 font-bold typography-text-lg">${{ product.price }}</span>
      <SfButton 
        size="sm"
        @click="addProductToCart"
        >
        <template #prefix>
          <SfIconShoppingCart size="sm" />
        </template>
        In den Einkaufswagen
      </SfButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SfRating, SfCounter, SfLink, SfButton, SfIconShoppingCart, SfIconFavorite } from '@storefront-ui/vue';
import { defineProps } from 'vue';
import Tooltip from './Tooltip.vue';

const cartStore = useCartStore();

const props = defineProps({
  product: {
    type: Object,
    default: {
      id: 0,
      name: '',
      subname: '',
      stars: 1,
      price: 0
    }
  }
});

const addProductToCart = () => {
  cartStore.addProductToCart(props.product);
  console.log(cartStore.cart);
}
</script>