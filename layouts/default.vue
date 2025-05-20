<template>
    <div>
        <header>
            <div style="background: linear-gradient(90deg,rgba(12, 12, 145, 1) 0%, rgba(0, 20, 214, 1) 100%);color:white;display: flex; flex-direction: row; align-items: center; justify-content: center; padding: 15px; font-size: 40px;text-align: center;">
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
        

        <div style="background: linear-gradient(90deg,rgba(12, 12, 145, 1) 0%, rgba(0, 20, 214, 1) 100%); color: white; height: 50vh;">
            <div id="contact" class="container" style="display: flex; justify-content: center; align-items: center; height: 100%; padding: 10px;">
                <iframe style="height: 100%; width: 100%; min-width: 300px; border: none;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.7340569809885!2d29.267917800000003!3d41.0091937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad1e086597e53%3A0x3d05ae7d4b9dc1ca!2zQUxLQU4gxLBTS0VMRSBLQUxJUCBTxLBTVEVNTEVSxLA!5e0!3m2!1str!2str!4v1745742228462!5m2!1str!2str" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                

                <div style="margin-left: 40px; display: flex; flex-direction: column; justify-content: center; height: 100%;">
                    <p><strong>Telefon:</strong> +90 537 788 26 41</p>
                    <p><strong>E-posta:</strong> info@alkandemir.com</p>
                    <p><strong>Adres:</strong> Paşaköy, Atayolu Cad. No:216, 34160 Sancaktepe/İstanbul</p>

                    <div style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
                    
                        <a target="_blank" href="https://www.twitter.com/alkaniskele" class="fa fa-twitter"></a>
                        <a target="_blank" href="https://www.instagram.com/alkaniskele/" class="fa fa-instagram"></a>
                        <a target="_blank" href="https://www.facebook.com/alkaniskele/" class="fa fa-facebook"></a>
                        <a target="_blank" href="https://www.youtube.com/@alkaniskele" class="fa fa-youtube"></a>
                    
                    </div>
                    

                </div>
            </div>
        </div>
    </div>
</template>



<style>

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

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #1025AD;
}

</style>