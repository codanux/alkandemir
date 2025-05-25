<template>
  <div class="container">
    <h1>{{ error.url }}</h1>
    <p>{{ error.message }}</p>
    <nuxt-link to="/">Go back to Home</nuxt-link>
  </div>
</template>
<script setup>
const props = defineProps({
  error: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    background-color: #f8f9fa;
    padding: 20px;
}

h1 {
  color: #dc3545;
  font-size: 36px;
}
p {
  color: #6c757d;
  font-size: 18px;
}
nuxt-link {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}
nuxt-link:hover {
  text-decoration: underline;
}
</style>
