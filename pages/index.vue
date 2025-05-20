<template>
    <div id="app">

        <section id="services">
        
            <div class="container" style="text-align: center;">
                <a style="position: relative; align-items: center; align-content: center; color: white; background: black; opacity: 0.7; border: 1px solid white;" href="#demir">
                    <img src="@/assets/a2.jpg" style="object-fit: fill; width: 100%; height: 100%; border: solid white; opacity: 0.7;"/>
                    <h1 style="position: absolute;top:50%;left:50%;transform: translate(-50%, -50%);">Demir Tedarik</h1>
                </a>

                <a style="position: relative; align-items: center; align-content: center; color: white; background: black; opacity: 0.7; border: 1px solid white;" href="iskele">
                    <img src="@/assets/a1.jpg" style="object-fit: fill; width: 100%; height: 100%; border: solid white; opacity: 0.7;"/>
                    <h1 style="position: absolute;top:50%;left:50%;transform: translate(-50%, -50%);">İskele Sistemleri</h1>
                </a>

                <a style="position: relative; align-items: center; align-content: center; color: white; background: black; opacity: 0.7; border: 1px solid white;" href="#kereste">
                    <img src="@/assets/a3.jpg" style="object-fit: fill; width: 100%; height: 100%; border: solid white; opacity: 0.7;"/>
                    <h1 style="position: absolute;top:50%;left:50%;transform: translate(-50%, -50%);">Montaj ve Kaynak</h1>
                </a>
              
            </div>
        </section>

  
        
        <section id="hakkinda" style="height: 50vh;">
            <div id="slider" style="height: 100%">
                <img class="mySlides animate" src="@/assets/a4.jpg" style="height: 100%;">
                <img class="mySlides animate" src="@/assets/a5.jpg" style="height: 100%;">
                <img class="mySlides animate" src="@/assets/d.png" style="height: 100%;">
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
