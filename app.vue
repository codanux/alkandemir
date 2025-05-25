<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>

:root {
    --bg: #2b2b2e;
    --sc: #727272;
    --text: #fff;
    --hover: #01227b;
    --secondary: #706868;
}


* {
  margin: 0;
  box-sizing: border-box;
}

body {
    margin: 0 0;
    padding: 0;
    font-family: Arial, sans-serif;
    
}

a {
    text-decoration: none;
    color: black;
    border-bottom: 1px dashed gray;
}

ul {
    list-style-type: none;
    padding: 0;
}

.container {
  display: flex;
  align-items: center; 
}

@media (max-width: 800px) {
  .container {
    display: flex;
    flex-direction: column;
  }
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