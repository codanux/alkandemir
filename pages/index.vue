<template>
    <div id="app">

        <header style="text-align: center; font-size: 40px; padding: 10px; background-color: lightgray;">
            Alkan İskele ve Kalıp Sistemleri
        </header>

        <nav style="text-align: center; font-size: 28px; background-color: darkgray;">
            <a href="#services">Hizmetlerimiz</a>
            <a href="#about">Hakkımızda</a>
            <a href="#contact">İletişim</a>
        </nav>
        
        <section id="services" style="height: 50vh; background-image: url('https://lh3.googleusercontent.com/p/AF1QipMdkNRrIYTJknULkvk_0mPTQgk0BBnq-vKpRMKz=s1360-w1360-h1020-rw');">
        
            <div class="container" style="text-align: center; height: 100%;">
                <div style="width: 100%;height:100%; align-items: center; align-content: center; color: white; background: black; opacity: 0.7;">
                    <h1>Demir Tedarik ve Montaj</h1>
                </div>
                <div style="width: 100%;height:100%; align-items: center; align-content: center; color: white; background: black; opacity: 0.7;">
                    <h1>İskele Kiralama ve Satış</h1>
                </div>
                <div style="width: 100%;height:100%; align-items: center; align-content: center; color: white; background: black; opacity: 0.7;">
                    <h1>Kereste Satış</h1>
                </div> 
            </div>
        </section>

         <section id="about">
            <div class="container">
                <div style="text-align: center; height: 50vh; width: 100%; font-size:30px; align-content: center;">
                    Demir iskele sistemleri, playwood kereste, kalıp malzemeleri <br>
                    ve inşaat sektörüne yönelik diğer ürünlerimizle projelerinizin <br>
                    her aşamasında yanınızdayız. İster kiralama ister satın alma <br>
                    ihtiyaçlarınız olsun, geniş ürün yelpazemiz ve 
                    <br>uzman ekibimizle size en iyi hizmeti sunmayı hedefliyoruz.
                </div>

                <div>
                    <img style="width: 100%; height: 100%;" src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nofcaGR2DDSMdRyB701kCVgLHDoItMwJEmbBrIUhZPeUHriHLWj_TAH1HPvR77a2eOU_Cskjqdp8-spEmWmxvZumEW9ZazkvA4EL0rsDzj5cKourYMmu1QcJ9xC_dniJz3HJufcKIhM-TT0=s1360-w1360-h1020-rw"/>
                </div>
            </div>
        </section>

        <section id="contact" class="container" style="height: 50vh;">
           
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

<script>
</script>

<style scoped>
html, body {
    margin: 0;
    padding: 0;
    background-color:lightgray
}

.container {
  display: flex;
  align-items: center;
  
}

nav a {
    margin: 0 15px;
    text-decoration: none;
    color: black;
}


@media (max-width: 800px) {
  .container {
    display: flex;
    flex-direction: column;
  }
}
</style>
