<template>
    <div>
        <header>
            <div style="display: flex; flex-direction: row; align-items: center; justify-content: center; padding: 15px; font-size: 40px;text-align: center;">
                Alkan İskele ve Kalıp Sistemleri
            </div>
            <ul class="nav">
                
                <img src="@/assets/logo.png" style="width: 30px; height: 30px; margin-right: 10px;" />
                
                <li><a href=".">Anasayfa</a></li>
                <li><a href="iskele">İskele Sistemleri</a></li>
                <li><a href="iletisim">İletişim</a></li>
            </ul>
        </header>

        <slot></slot>
        
     

        <section id="contact" class="container" style="height: 30vh; padding: 10px;">
           
        
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



<style>

.nav {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #090979;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;

}

.nav li {
    border-right: 1px solid #bbb;
}

.nav li:last-child {
     border-right: none;
}

li a {
    
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #2e38f3;
}

</style>