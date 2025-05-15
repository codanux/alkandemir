<template>
    <div id="app">

        <header style="display: flex; flex-direction: row; align-items: center; justify-content: center; padding: 15px;">
            <div style="font-size: 40px; font-family: serif;">
                Alkan İskele ve Kalıp Sistemleri
            </div>
        </header>

        <section id="services" style="height: 50vh; background-image: url('https://lh3.googleusercontent.com/p/AF1QipMdkNRrIYTJknULkvk_0mPTQgk0BBnq-vKpRMKz=s1360-w1360-h1020-rw');">
        
            <div class="container" style="text-align: center; height: 100%;">
                <a style="width: 100%;height:100%; align-items: center; align-content: center; color: white; background: black; opacity: 0.7; border: 1px solid white;" href="#demir">
                    <div  >
                        <h1>Demir Tedarik ve Montaj</h1>
                    </div>            
                </a>

                 <a style="width: 100%;height:100%; align-items: center; align-content: center; color: white; background: black; opacity: 0.7; border: 1px solid white;" href="#iskele">
                    <div  >
                        <h1>İskele Kiralama ve Satış</h1>
                    </div>            
                </a>

                 <a style="width: 100%;height:100%; align-items: center; align-content: center; color: white; background: black; opacity: 0.7; border: 1px solid white;" href="#kereste">
                    <div  >
                        <h1>Kereste Satış</h1>
                    </div>            
                </a>
               
              
            </div>
        </section>

        


        <div id="iskele" style="height: 350px; width: 100%; display: flex; flex-direction: row; background-color: #f0f0f0;">

            <img style="width: 33.33%; height: 100%; border: solid white" src="@/assets/b.png"/>
            
            <div style="text-align: center; width:33.33%; height: 100%; font-size:30px; align-content: center;">
                Teleskopik direk, plywood, osb, kereste çeşitleri <br>imalat ve satışı yapmaktayız
            </div>

            <img style="width: 33.33%; height: 100%; border: solid white" src="@/assets/e.png"/>

        </div>

        <section id="hakkinda">

            <div id="slider" class="w3-content w3-section" style="height: 50vh; ">
                <img class="mySlides animate" src="@/assets/c.png" style="height: 100%;">
                <img class="mySlides animate" src="@/assets/a.png" style="height: 100%;">
                <img class="mySlides animate" src="@/assets/d.png" style="height: 100%;">
                <img class="mySlides animate" src="@/assets/1.jpg" style="height: 100%;">
                <img class="mySlides animate" src="@/assets/2.jpg" style="height: 100%;">
            </div>
        </section>

        <section id="contact" class="container" style="height: 30vh;">
           
            <div style="align-content: center; width: 100%; height: 100%;">
                <div style="display: flex; flex-direction: row-reverse; height: 100%;">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.7340569809885!2d29.267917800000003!3d41.0091937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad1e086597e53%3A0x3d05ae7d4b9dc1ca!2zQUxLQU4gxLBTS0VMRSBLQUxJUCBTxLBTVEVNTEVSxLA!5e0!3m2!1str!2str!4v1745742228462!5m2!1str!2str" style="border:0" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <div style="align-content: center; padding: 50px">
                <p><strong>Telefon:</strong> +90 537 788 26 41</p>
                <p><strong>E-posta:</strong> info@alkandemir.com</p>
                <p><strong>Adres:</strong> Paşaköy, Atayolu Cad. No:216, 34160 Sancaktepe/İstanbul</p>
            </div>

        </section>

        <footer style="text-align: center;">
            <p>&copy; 2024 Alkan Demir ve İskele. Tüm Hakları Saklıdır.</p>
        </footer>
    </div>
</template>

<script setup>
import bg from '@/assets/c.png'
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

<style scoped>

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
