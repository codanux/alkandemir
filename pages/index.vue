<template>
    <div id="app">

        <section id="services">
        
            <div class="container" style="text-align: center;">
                <div class="product" href="#demir">
                    <img src="@/assets/a2.jpeg" style="object-fit: fill; width: 100%; height: 100%;"/>
                    <h1 style="position: absolute;top:50%;left:50%;transform: translate(-50%, -50%);background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(0,40,255,1));">Demir Tedarik</h1>
                </div>

                <div class="product" href="iskele">
                    <img src="@/assets/a1.jpeg" style="object-fit: fill; width: 100%; height: 100%;"/>
                    <h1 style="position: absolute;top:50%;left:50%;transform: translate(-50%, -50%);background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(0,40,255,1));">İskele Sistemleri</h1>
                </div>

                <div class="product" href="#kereste">
                    <img src="@/assets/a3.jpeg" style="object-fit: fill; width: 100%; height: 100%;"/>
                    <h1 style="position: absolute;top:50%;left:50%;transform: translate(-50%, -50%);background-image: linear-gradient(to right, rgba(255,0,0,0) 10%, rgba(0,40,255,1) 60%);">Kaynak Yapım</h1>
                </div>
              
            </div>
        </section>

  
        <section id="description" class="description">
            <h1 style="text-align: center;">Hakkımızda</h1>
            <p style="text-align: center; font-size: 20px;">
                Alkan İskele ve Kalıp Sistemleri, inşaat sektöründe 20 yılı aşkın bir süredir faaliyet gösteren köklü bir firmadır. Kalite ve güvenilirlik ilkelerimiz doğrultusunda, projelerinizi en iyi şekilde desteklemek için çalışıyoruz. Demir tedarikinden iskele sistemlerine, kaynak yapımından inşaat malzemelerine kadar geniş bir ürün yelpazesi ile hizmet vermekteyiz. Müşteri memnuniyetini ön planda tutarak, sektördeki gelişmeleri yakından takip ediyor ve yenilikçi çözümler sunuyoruz. Alkan İnşaat olarak, inşaat sektöründe ihtiyaç duyulan çeşitli ürünleri sunmaktayız.
            </p>
        </section>
      

        <section id="products" class="products">
            <div class="product">
                <img src="@/assets/a4.jpeg" style="object-fit: fill; width: 100%; height: 100%;"/>
                
            </div>
            <div class="product">
                <img src="@/assets/a5.jpeg" style="object-fit: fill; width: 100%; height: 100%;"/>
                
            </div>
            <div class="product">
                <img src="@/assets/a6.jpeg" style="object-fit: fill; width: 100%; height: 100%;"/>
                
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
    flex-wrap: wrap;
    align-items: center;
    padding: 50px;
}

.product {
    flex: 1 1 30%;
    margin: 10px;
    position: relative;
    text-align: center;
}
.product img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.product h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(0,40,255,1));
    color: white;
}

</style>
