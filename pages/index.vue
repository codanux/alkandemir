<template>
    <div id="app">

        <section id="services">
        
            <div class="container">
                <div class="product" href="#demir">
                    <img src="@/assets/a2.jpeg"/>
                    <h1>Demir Tedarik</h1>
                </div>

                <div class="product" href="iskele">
                    <img src="@/assets/a1.jpeg"/>
                    <h1>İskele Sistemleri</h1>
                </div>

                <div class="product right" href="#kereste">
                    <img src="@/assets/a3.jpeg"/>
                    <h1>Kaynak Yapım</h1>
                </div>
              
            </div>
        </section>

  
        <section id="description" class="description">
            <h1 style="text-align: center;">Hakkımızda</h1>
            <p style="text-align: center; font-size: 20px;">
                Alkan İskele ve Kalıp Sistemleri, inşaat sektöründe 20 yılı aşkın bir süredir faaliyet gösteren köklü bir firmadır. Kalite ve güvenilirlik ilkelerimiz doğrultusunda, projelerinizi en iyi şekilde desteklemek için çalışıyoruz. Demir tedarikinden iskele sistemlerine, kaynak yapımından inşaat malzemelerine kadar geniş bir ürün yelpazesi ile hizmet vermekteyiz. Müşteri memnuniyetini ön planda tutarak, sektördeki gelişmeleri yakından takip ediyor ve yenilikçi çözümler sunuyoruz.
            </p>
        </section>
      

        <section id="products" class="products">
            <div class="product">
                <img src="@/assets/a4.jpeg"/>
                
            </div>
            <div class="product">
                <img src="@/assets/a5.jpeg"/>
                
            </div>
            <div class="product">
                <img src="@/assets/a6.jpeg"/>
                
            </div>
        </section>


    </div>
</template>

<script setup>


</script>

<style>
.description {
    padding: 20px;
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
