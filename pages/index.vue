<template>
    <div id="app">

        <section class="about">
            <h1>Alkan İskele ve Kalıp Sistemleri</h1>
            <p>İnşaat sektöründe 20 yılı aşkın deneyimle, güvenilir ve kaliteli hizmet sunuyoruz.</p>
            <p>Demir tedarikinden iskele sistemlerine, kaynak yapımından inşaat malzemelerine kadar geniş bir ürün yelpazesi ile hizmet vermekteyiz.</p>
            <p>Müşteri memnuniyetini ön planda tutarak, sektördeki gelişmeleri yakından takip ediyor ve yenilikçi çözümler sunuyoruz.</p>
            
        </section>
      

        <section class="services container">
            <div class="product" href="#demir">
                <img loading="lazy" alt="teleskobik direk" src="@/assets/a2.jpeg"/>
                <h1>Demir Tedarik</h1>
            </div>

            <div class="product" href="iskele">
                <img loading="lazy" alt="hazır iskele" src="@/assets/a1.jpeg"/>
                <h1>İskele Sistemleri</h1>
            </div>

            <div class="product right" href="#kereste">
                <img loading="lazy" alt="demir kaynak" src="@/assets/a3.jpeg"/>
                <h1>Kaynak Yapım</h1>
            </div>
        </section>

        <section class="products">
            <div class="product">
                <img loading="lazy" alt="demir boya" src="@/assets/a4.jpeg"/>
                
            </div>
            <div class="product">
                <img loading="lazy" alt="iskele paket" src="@/assets/a5.jpeg"/>
                
            </div>
            <div class="product">
                <img loading="lazy" alt="boya iskele" src="@/assets/a6.jpeg"/>
            </div>
        </section>

    </div>
</template>

<script setup>


</script>

<style>

.about {
    text-align: center;
    padding: 50px 10px;
    background: linear-gradient(to right, #b9b9b9, #949090);
    
}
.about h1 {
    font-size: 36px;
    margin-bottom: 20px;
}

.about p {
    font-size: 15px;
    margin: 10px 0;
}

.services {
    padding: 10px 10px;
}

.products {
    
    display: flex;
    align-items: center;
    padding: 50px;
}

.product {
    position: relative;
    text-align: center;
    margin: 4px;
}

.product h1 {
    position: absolute;
    bottom: 4px;
    background: rgba(0, 0, 0, 0.5); /* Black see-through */
    width: 100%;
    color: white;
    font-size: 20px;
    padding: 20px;
    text-align: center;
}

.product img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}


@media (max-width: 768px) {
    .product {
        flex: 1 1 100%;
    }
}

</style>
