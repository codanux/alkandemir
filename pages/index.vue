<template>
    <div id="app">

        <header style="display: flex; flex-direction: row; align-items: center; justify-content: center; padding: 15px;">
            <div style="font-size: 40px; font-family: serif;">
                Alkan İskele ve Kalıp Sistemleri
            </div>
        </header>

        <section id="services" style="height: 50vh;">
        
            <div class="container" style="text-align: center; height: 100%;">
                <a style="position: relative; width: 100%;height:100%; align-items: center; align-content: center; color: white; background: black; opacity: 0.7; border: 1px solid white;" href="#demir">
                    <img src="@/assets/a2.jpg" style="object-fit: fill; width: 100%; height: 100%; border: solid white; opacity: 0.7;"/>
                    <h1 style="position: absolute;top:50%;left:50%;transform: translate(-50%, -50%);">Demir Tedarik</h1>
                </a>

                <a style="position: relative; width: 100%;height:100%; align-items: center; align-content: center; color: white; background: black; opacity: 0.7; border: 1px solid white;" href="#iskele">
                    <img src="@/assets/a1.jpg" style="object-fit: fill; width: 100%; height: 100%; border: solid white; opacity: 0.7;"/>
                    <h1 style="position: absolute;top:50%;left:50%;transform: translate(-50%, -50%);">İskele Sistemleri</h1>
                </a>

                <a style="position: relative; width: 100%;height:100%; align-items: center; align-content: center; color: white; background: black; opacity: 0.7; border: 1px solid white;" href="#kereste">
                    <img src="@/assets/a3.jpg" style="object-fit: fill; width: 100%; height: 100%; border: solid white; opacity: 0.7;"/>
                    <h1 style="position: absolute;top:50%;left:50%;transform: translate(-50%, -50%);">Montaj ve Kaynak</h1>
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
                <img class="mySlides animate" src="@/assets/d.png" style="height: 100%;">
                <img class="mySlides animate" src="@/assets/2.jpg" style="height: 100%;">
            </div>
        </section>


        <form @submit="send" style="padding: 10px;">
            <h1 style="text-align: center;">İletişim Formu</h1>
            <input type="text" placeholder="Adınız" style="width: 100%; padding: 10px; margin-bottom: 10px;">
            <input type="text" placeholder="E-posta" style="width: 100%; padding: 10px; margin-bottom: 10px;">
            <input type="text" placeholder="Telefon" style="width: 100%; padding: 10px; margin-bottom: 10px;">
            <textarea placeholder="Mesajınız" style="width: 100%; padding: 10px; margin-bottom: 10px;"></textarea>
            <button style="width: 100%; padding: 10px; background-color: #4CAF50; color: white; border: none; cursor: pointer;">Gönder</button>
        </form>


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

async function send(event) {
    event.preventDefault();
    const data = await fetch('https://api.alkandemir.com/notification', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: event.target[0].value,
            email: event.target[1].value,
            phone: event.target[2].value,
            message: event.target[3].value
        })
    })
    if (data.status === 201) {
        alert('Mesajınız başarıyla gönderildi.');
    } else {
        alert('Lütfen Email veya telefon numaranızı kontrol edin.');
    }
}
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
