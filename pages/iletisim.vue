<template>

        <div>
            <form @submit="send" style="padding: 10px;">
                <h1 style="text-align: center;">İletişim Formu</h1>
                <input type="text" placeholder="Adınız" style="width: 100%; padding: 10px; margin-bottom: 10px;">
                <input type="text" placeholder="E-posta" style="width: 100%; padding: 10px; margin-bottom: 10px;">
                <input type="text" placeholder="Telefon" style="width: 100%; padding: 10px; margin-bottom: 10px;">
                <textarea placeholder="Mesajınız" style="width: 100%; padding: 10px; margin-bottom: 10px;"></textarea>
                <button style="width: 100%; padding: 10px; background-color: #4CAF50; color: white; border: none; cursor: pointer;">Gönder</button>
            </form>
        </div>
        
        
</template>

<script setup>

async function send(event) {
    event.preventDefault();
    const data = await fetch('https://api.alkandemir.com/notification', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: event.target[0].value,
            email: event.target[1].value,
            phone: event.target[2].value,
            message: event.target[3].value
        })
    })
    if (data.status === 201) {
        alert('Mesajınız başarıyla gönderildi.');
    } else {
        alert('Lütfen Email veya telefon numaranızı kontrol edin.');
    }
}
</script>