<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>

:root {
    --bg: #272729;
    --sc: #727272;
    --text: #fff;
    --hover: #01227b;
    --secondary: #706868;
}

* {
  box-sizing: border-box;
}

body {
    margin: 0 0;
    padding: 0;
    font-family: Arial, sans-serif;
}

.mySlides {display:none;}

.animate {
  animation: fade 5s;
}

@keyframes fade {
  from {opacity: .5} 
  to {opacity: 1}
}
</style>