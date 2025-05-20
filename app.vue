<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
* {
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: Georgia, 'Times New Roman', Times, serif;
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

  .container * {
    width: 100%;
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