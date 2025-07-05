<template>
    <div id="app">

     
        <section class="about mt-4 padding-4 px-1">
            <h1 class="title">Alkan İskele ve Kalıp Sistemleri</h1>
            <p>İnşaat sektöründe 20 yılı aşkın deneyimle, güvenilir ve kaliteli hizmet sunuyoruz.</p>
            <p>Demir tedarikinden iskele sistemlerine, kaynak yapımından inşaat malzemelerine kadar geniş bir ürün yelpazesi ile hizmet vermekteyiz.</p>
        </section>

        <section class="services grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <div class="product" href="#demir">
                <img alt="teleskobik direk" src="@/assets/a2.jpeg"/>
                <h1>Demir Tedarik</h1>
            </div>

            <div class="product" href="iskele">
                <img alt="hazır iskele" src="@/assets/a1.jpeg"/>
                <h1>İskele Sistemleri</h1>
            </div>

            <div class="product right" href="#kereste">
                <img alt="demir kaynak" src="@/assets/a3.jpeg"/>
                <h1>Kaynak Yapım</h1>
            </div>
        </section>


        <section class="services grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
.title {
    text-align: center;
    font-size: 2.5em;
    margin-top: 20px;
    color: #333;
}


.about {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40vh;
}

.about h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
}
.about p {
    font-size: 1.2em;
    max-width: 800px;
    line-height: 1.5;
}

.services {
    padding: 10px 10px;
}

.product {
    position: relative;
    text-align: center;
    margin: 4px;
}

.product h1 {
    position: absolute;
    bottom: 0px;
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
