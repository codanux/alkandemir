<template>
    <div>
        <div class="mobile-container">
            <div class="topnav" id="myTopnav">
                <a href="." class="active">Alkan İskele ve Kalıp Sistemleri</a>
                <a href="iletisim">İletişim</a>
                <a href="iskele">İskele Sistemleri</a>
                
                <a href="#menu" class="icon" @click="myFunction()" aria-label="menu">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        </div>

        <slot></slot>
        

        
      
        <div class="footer">

            <div class="footer">
                <div class="footer-list">
                    <h2>Hizmetler</h2>
                    <ul>
                        <li><a href="iskele">İskele Sistemleri</a></li>
                        <li><a href="iskele">Demir Ürünleri</a></li>
                    </ul>
                </div>

                <div class="footer-list">
                    <h2>Hakkımızda</h2>
                    <ul>
                        <li><a href="iletisim">Ekibimiz</a></li>
                        <li><a href="iletisim">Referanslar</a></li>
                        <li><a href="iletisim">İletişim</a></li>
                    </ul>
                </div>

                <div class="footer-list">
                    <h2>Çalışma Saatler</h2>
                    <ul>
                        <li>Hafta İçi: 09:00 - 18:00</li>
                        <li>Cumartesi: 09:00 - 13:00</li>
                        
                    </ul>
                </div>

                            
                <div class="footer-list">
                    <ul>
                        <li>Telefon: <a href="tel:+905377882641">0537 788 26 41</a></li>
                        <li>E-posta: <a href="mailto:alkaniskele@gmail.com">alkaniskele@gmail.com</a></li>
                        <li>Paşaköy, Atayolu Cad. No:216 Sancaktepe/İstanbul</li>
                    </ul>
                    <div style="display: flex; flex-direction: row; justify-content: center; align-items: center;margin-top: 10px;">
                        <a target="_blank" href="https://www.twitter.com/alkaniskele" class="fa fai fa-twitter" aria-label="twitter"></a>
                        <a target="_blank" href="https://www.instagram.com/alkaniskele/" class="fa fai fa-instagram" aria-label="instagram"></a>
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=61576549681591" class="fa fai fa-facebook" aria-label="facebook"></a>
                        <a target="_blank" href="https://www.youtube.com/@alkaniskele" class="fa fai fa-youtube" aria-label="youtube"></a>
                    </div>
                </div>
            </div>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12042.936173091866!2d29.267918000000005!3d41.009194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad1e086597e53%3A0x3d05ae7d4b9dc1ca!2zQUxLQU4gxLBTS0VMRSBLQUxJUCBTxLBTVEVNTEVSxLA!5e0!3m2!1str!2str!4v1748166421628!5m2!1str!2str" title="harita" class="map" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


    </div>
</template>


<script setup>
function myFunction() {
  var x = document.getElementById("myTopnav");

  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>

<style>

.map {
    width: 100%;
    height: 300px;
    border: 0;
}

.round {
    border-radius: 3px;
}

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
    float: right;
    color: white;
    padding: 16px;
    text-decoration: none;
    font-size: 17px;
    display: block;
}

.topnav a:first-child {
    float: left ;
}

.topnav a.icon {
  display: none;
  position: absolute;
  right: 0;
  top: 0;
}

@media screen and (max-width: 600px) {
    .topnav a:nth-child(2) {
        border-top: white 1px solid;
    }
    .topnav a:not(:first-child) {display: none;}
    .topnav a.icon {
        float: right;
        display: block;
    }

    .topnav.responsive {position: relative;}
    .topnav.responsive a {
        float: none;
        display: block;
        text-align: left;
    }

    .footer {
        flex-direction: column;
        align-items: center;
    }
}

.footer {
    display: flex;
    justify-content: center;
    
    padding: 20px;
    
}

.footer a {
    border-bottom: 1px dashed gray;
}

.footer-list {
    margin:  10px;
    text-align: center;
}

.footer-list li {
    margin-bottom: 10px;
}

.footer-list h2 {
    font-size: 24px;
    margin: 10px 0;
}



.fai {
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


</style>