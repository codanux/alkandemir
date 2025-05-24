<template>
    <div>
        <header>
            <div class="title" style="">
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
        

        <div style="height: 30vh;">
            <div id="contact" class="container" style="display: flex; justify-content: center; align-items: center; height: 100%; padding: 10px;">
                <iframe style="height: 100%; width: 100%; min-width: 300px; border: none;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.7340569809885!2d29.267917800000003!3d41.0091937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad1e086597e53%3A0x3d05ae7d4b9dc1ca!2zQUxLQU4gxLBTS0VMRSBLQUxJUCBTxLBTVEVNTEVSxLA!5e0!3m2!1str!2str!4v1745742228462!5m2!1str!2str" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

        <div class="footer">

            <div class="footer-nav">
                <div>
                    <div>Ürünler</div>
                    <ul>
                        <li><a href="iskele">İskele Sistemleri</a></li>
                        <li><a href="iskele">Kalıp Sistemleri</a></li>
                        <li><a href="iskele">Ekipmanlar</a></li>
                        <li><a href="iskele">Aksesuarlar</a></li>
                    </ul>
                </div>

                <div>
                    <div>Biz</div>
                    <ul>
                        <li><a href="iletisim">Hizmetler</a></li>
                        <li><a href="iletisim">Referanslar</a></li>
                        <li><a href="iletisim">Hakkımızda</a></li>
                        <li><a href="iletisim">İletişim</a></li>
                    </ul>
                </div>

                <div>
                    <div>Çalışma Saatler</div>
                    <ul>
                        <li>Hafta İçi: 09:00 - 18:00</li>
                        <li>Cumartesi: 09:00 - 13:00</li>
                        
                    </ul>
                </div>

            </div>
            
             <div class="footer-bar">
                <!--Telefon, Mail, Çalışma Saatler-->
                <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                    <p style="text-align: center;">Telefon: <a href="tel:+902126123456">+90 212 612 34 56</a></p>
                    <p style="text-align: center;">E-posta: <a href="mailto:alkaniskele@gmail.com"> alkaniskele@gmail.com</a></p>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; align-items: center;margin-top: 10px;">
                    <a target="_blank" href="https://www.twitter.com/alkaniskele" class="fa fa-twitter"></a>
                    <a target="_blank" href="https://www.instagram.com/alkaniskele/" class="fa fa-instagram"></a>
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=61576549681591" class="fa fa-facebook"></a>
                    <a target="_blank" href="https://www.youtube.com/@alkaniskele" class="fa fa-youtube"></a>
                </div>
            </div>
        </div>

        

        <p style="text-align: center; padding: 20px; font-size: 20px;">&copy; 2025 Alkan İskele ve Kalıp Sistemleri. Tüm Hakları Saklıdır.</p>
    </div>
</template>



<style>

.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    
}

.footer-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    text-align: center;
}

.footer-nav div {
    margin: 0 20px;
}

.footer-nav ul {
    list-style-type: none;
    padding: 0;
}

.footer-nav ul li {
    margin: 10px 0;
}

.title {
    font-size: 30px;
    text-align: center;
    padding: 20px;
}
.fa {
    padding: 10px;
    font-size: 30px;
    width: 50px;
    text-align: center;
    text-decoration: none;
    margin: 5px 2px;
    border-radius: 50%;
    margin-right: 10px;
}
.fa:hover {
    opacity: 0.7;
}
.fa-twitter {
    background: #55ACEE;
    color: white;
}
.fa-instagram {
    background: #125688;
    color: white;
}
.fa-facebook {
    background: #3B5999;
    color: white;
}
.fa-youtube {
    background: #bb0000;
    color: white;
}

.nav {
    list-style-type: none;
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

.nav li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.nav li a:hover {
  background-color: #1025AD;
}

@media (max-width: 600px) {
    .footer {
        flex-direction: column;
        align-items: center;
    }
}

</style>