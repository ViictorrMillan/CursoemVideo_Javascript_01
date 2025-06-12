function carregar () {
    let msg_dia = document.getElementById('msg');
    let foto = document.getElementById('foto');
    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();

    if ( hora >= 4 && hora < 12 ) {
        msg_dia.innerHTML = `Bom dia! Agora são ${hora} horas e ${minuto} minutos.`;
        foto.src = '/images/manha.jpg';
        document.body.style.background = 'linear-gradient(to bottom, #fceabb, #f8b500)';

    } else if ( hora >= 12 && hora <= 18 ) {
        msg_dia.innerHTML = `Boa tarde! Agora são ${hora} horas e ${minuto} minutos.`;
        foto.src = '/images/tarde.jpg';
        document.body.style.background = 'linear-gradient(to bottom, #f3904f, #3b4371)';
    } else {
        msg_dia.innerHTML = `Boa noite! Agora são ${hora} horas e ${minuto} minutos.`;
        foto.src = '/images/noite.jpg';
        document.body.style.background = 'linear-gradient(to bottom, #0f2027, #203a43, #2c5364)';
    }
}

document.addEventListener('DOMContentLoaded', () => {
  carregar();
  setInterval(carregar, 60_000); 
});