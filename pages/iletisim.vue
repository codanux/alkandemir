<template>

        <div style="min-height: 50vh;">
            <form @submit="send" style="padding: 10px;">
                <h1 style="text-align: center;">İletişim Formu</h1>
                <input type="text" placeholder="Adınız" class="form-control">
                <input type="text" placeholder="E-posta" class="form-control">
                <input type="text" placeholder="Telefon" class="form-control">
                <textarea placeholder="Mesajınız" class="form-control"></textarea>
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

<style scoped>
.form-control {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
</style>