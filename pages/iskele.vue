<template>
    <div id="app">

       

        <section id="iskele" class="container" style="">
            <div style="width: 100%;">
                <img style="width: 100%;" src="@/assets/b.png"/>
            </div>
            <div style="width: 100%; min-height: 300px; align-content: center; align-items: center;">
                <div style="width: 100%; height: 100%;text-align: center; font-size:30px; align-content: center;">
                    Teleskopik direk, plywood, osb, kereste çeşitleri <br>imalat ve satışı yapmaktayız
                </div>
            </div>

            <div style="width: 100%;">
                <img style="width: 100%;" src="@/assets/e.png"/>
            </div>

        </section>

        
        <section id="hakkinda" style="height: 50vh;">
            <div id="slider" style="height: 100%">
                <img class="mySlides animate" src="@/assets/a4.JPG" style="height: 100%;">
                <img class="mySlides animate" src="@/assets/a5.JPG" style="height: 100%;">
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
