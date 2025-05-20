<template>
    <div id="app">

        <section id="services">
        
            <div class="container" style="text-align: center;">
                <div style="position: relative; align-items: center; align-content: center; color: white; border: 1px solid white;" href="#demir">
                    <img src="@/assets/a2.jpeg" style="object-fit: fill; width: 100%; height: 100%;"/>
                    <h1 style="position: absolute;top:50%;left:50%;transform: translate(-50%, -50%);background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(0,40,255,1));">Demir Tedarik</h1>
                </div>

                <div style="position: relative; align-items: center; align-content: center; color: white; border: 1px solid white;" href="iskele">
                    <img src="@/assets/a1.jpeg" style="object-fit: fill; width: 100%; height: 100%;"/>
                    <h1 style="position: absolute;top:50%;left:50%;transform: translate(-50%, -50%);background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(0,40,255,1));">İskele Sistemleri</h1>
                </div>

                <div style="position: relative; align-items: center; align-content: center; color: white; border: 1px solid white;" href="#kereste">
                    <img src="@/assets/a3.jpeg" style="object-fit: fill; width: 100%; height: 100%;"/>
                    <h1 style="position: absolute;top:50%;left:50%;transform: translate(-50%, -50%);background-image: linear-gradient(to right, rgba(255,0,0,0) 10%, rgba(0,40,255,1) 60%);">Kaynak Yapım</h1>
                </div>
              
            </div>
        </section>

  
        
        <section id="hakkinda">
            <div id="slider">
                <img class="mySlides animate" src="@/assets/a4.jpeg" style="width: 100%;max-height: 50vh;object-fit: contain;">
                <img class="mySlides animate" src="@/assets/a5.jpeg" style="width: 100%;max-height: 50vh;object-fit: contain;">
                <img class="mySlides animate" src="@/assets/a6.jpeg" style="width: 100%;max-height: 50vh;object-fit: contain;">
                
            </div>
        </section>

    </div>
</template>

<script setup>
onMounted(() => {
    var myIndex = 0;
    carousel();
    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
            console.log(i)
            x[i].style.display = "none";  
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}    
        x[myIndex-1].style.display = "block";
        document.getElementById("slider").style.marginLeft = `calc(50% - ${x[myIndex-1].width/2}px)`;
        setTimeout(carousel, 2000); // Change image every 2 seconds
    }
})


</script>

<style>


</style>
