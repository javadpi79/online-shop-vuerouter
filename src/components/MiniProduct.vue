<template>
  <div class="item">
    <router-link
      :to="{ name: 'SingleProduct', params: { id: 4, title: 'test' } }"
    >
      <img
        src="/assets/img/product-slider/60eb20-200x200.jpg"
        class="img-fluid"
        alt=""
      />
    </router-link>
    <h2 class="post-title">
      <a href="#">لپ تاپ ۱۱٫۶ اینچی دل مدل INSPIRON 3168 -AC B</a>
    </h2>
    <div class="price">
      <div class="text-center">
        <del
          ><span>4,299,000<span>تومان</span></span></del
        >
      </div>
      <div class="text-center">
        <ins
          ><span>4,180,000<span>تومان</span></span></ins
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style></style>
