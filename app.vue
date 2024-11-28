<template>
  <div id="app">
    <header>
      <h1>Alkan Demir ve İskele</h1>
      <p>Sağlam Temeller, Güvenli Yapılar</p>
    </header>

    <nav>
      <ul>
        <li><a href="#about">Hakkımızda</a></li>
        <li><a href="#services">Hizmetlerimiz</a></li>
        <li><a href="#contact">İletişim</a></li>
      </ul>
    </nav>

    <section id="about">
      <h2>Hakkımızda</h2>
      <p>
        Alkan Demir ve İskele olarak sektörde yılların deneyimiyle müşterilerimize
        güvenli, dayanıklı ve kaliteli çözümler sunuyoruz. İster küçük ister büyük
        projeleriniz için yanınızdayız!
      </p>
    </section>

    <section id="services">
      <h2>Hizmetlerimiz</h2>
      <ul>
        <li>Demir Tedarik ve Montaj</li>
        <li>İskele Kiralama ve Satış</li>
        <li>Proje Danışmanlığı</li>
      </ul>
    </section>

    <section id="contact">
      <h2>İletişim</h2>
      <p><strong>Telefon:</strong> +90 555 123 4567</p>
      <p><strong>E-posta:</strong> info@alkandemir.com</p>
      <p><strong>Adres:</strong> İstanbul, Türkiye</p>
    </section>

    <footer>
      <p>&copy; 2024 Alkan Demir ve İskele. Tüm Hakları Saklıdır.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Index",
};
</script>

<style scoped>
/* Genel Stiller */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background-color: #f4f4f4;
  color: #333;
}

/* Header */
header {
  text-align: center;
  background: #1d3557;
  color: white;
  padding: 1.5rem 0;
}

header h1 {
  margin: 0;
  font-size: 2.5rem;
}

header p {
  margin: 0.5rem 0 0;
  font-size: 1.2rem;
}

/* Navigasyon */
nav {
  background: #457b9d;
  padding: 0.5rem 0;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin: 0;
}

nav ul li {
  margin: 0 1rem;
}

nav ul li a {
  text-decoration: none;
  color: white;
  font-size: 1rem;
}

nav ul li a:hover {
  text-decoration: underline;
}

/* Bölümler */
section {
  padding: 2rem;
  text-align: center;
  background: #f8f9fa;
  margin: 1rem 0;
}

section h2 {
  color: #1d3557;
  margin-bottom: 1rem;
}

section ul {
  list-style: none;
  padding: 0;
}

section ul li {
  margin: 0.5rem 0;
}

/* Footer */
footer {
  text-align: center;
  background: #1d3557;
  color: white;
  padding: 1rem 0;
  margin-top: 1rem;
}
</style>
