// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  app: {
    head: {
      title: 'ALKAN İskele Kalıp Sistemleri | İskele Kiralama ve Satışı', // Main title for search results
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // Theme color for mobile and browsers supporting it
        { name: 'theme-color', content: '#18181b', media: '(prefers-color-scheme: dark)' },
        { name: 'theme-color', content: 'white', media: '(prefers-color-scheme: light)' },
  
        // Social media sharing information (replace with your details)
        { property: 'og:url', content: 'https://www.alkaniskele.com' }, // Your website URL
        { property: 'og:title', content: 'ALKAN İskele Kalıp Sistemleri' },
        { property: 'og:site_name', content: 'ALKAN İskele Kalıp Sistemleri' },
        { property: 'og:description', content: 'ALKAN İskele Kalıp Sistemleri olarak inşaat sektöründe iskele kiralama ve satışı, demir direk ve kereste gibi malzemelerin temini alanlarında hizmet vermekteyiz.' }, // Informative description (around 155 characters)
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://www.alkaniskele.com.tr/og-image.jpg' }, // Replace with path to your social media image
        { property: 'twitter:card', content: 'summary_large_image' }, // Twitter card type with large image
        { property: 'twitter:site', content: '@alkaniskele' }, // Replace with your Twitter handle
        { property: 'twitter:creator', content: '@alkaniskele' }, // Replace with your Twitter handle
  
        // Author information (optional)
        { name: 'author', content: 'ALKAN İskele Kalıp Sistemleri' },
  
      ]
    },
  },
})
