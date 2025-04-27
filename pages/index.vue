<template>
    <div id="app">

        <header style="text-align: center; font-size: 40px; padding: 10px;">
            Alkan Demir ve İskele
        </header>

     

        <section id="services" style="height: 50vh; background-image: url('https://images.unsplash.com/photo-1613377511623-27a162a76327?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTUzNXwwfDF8c2VhcmNofDV8fFNjYWZmb2xkaW5nfGVufDB8fHx8MTc0NTY3NDUxMHww&ixlib=rb-4.0.3&q=80&w=1080');">
        
            <div class="container" style="text-align: center; height: 100%;">
                <div style="width: 100%;height:100%; align-items: center; align-content: center; color: white; background: black; opacity: 0.7;">
                    <h1>Demir Tedarik ve Montaj</h1>
                </div>
                <div style="width: 100%;height:100%; align-items: center; align-content: center; color: white; background: black; opacity: 0.7;">
                    <h1>İskele Kiralama ve Satış</h1>
                </div>
                <div style="width: 100%;height:100%; align-items: center; align-content: center; color: white; background: black; opacity: 0.7;">
                    <h1>Proje Danışmanlığı</h1>
                </div> 
            </div>
        </section>

         <section id="about">
            <div class="container">
                <div style="text-align: center; min-height: 30vh; align-content: center;">
                    Alkan Demir ve İskele olarak sektörde yılların deneyimiyle müşterilerimize
                    güvenli, dayanıklı ve kaliteli çözümler sunuyoruz. İster küçük ister büyük
                    projeleriniz için yanınızdayız!
                </div>

                <div>
                    <img style="width: 100%;" src="https://images.unsplash.com/photo-1626471671222-9d89fe4c2668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTUzNXwwfDF8c2VhcmNofDR8fFNjYWZmb2xkaW5nfGVufDB8fHx8MTc0NTY3NDUxMHww&ixlib=rb-4.0.3&q=80&w=1080"/>
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

body {
    background-color:darkgray
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
</style>
