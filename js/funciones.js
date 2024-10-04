document.getElementById('generate').addEventListener('click', function() {
    const category = document.getElementById('category').value;
    const image = document.getElementById('image').value;
    const message = document.getElementById('message').value;
    const author = document.getElementById('author').value;
    const bgColor = document.getElementById('bg-color').value;

    const cardPreview = document.getElementById('card-preview');
    const cardImage = document.getElementById('card-image');
    const cardText = document.getElementById('card-text');
    const cardAuthor = document.getElementById('card-author');

    cardPreview.style.backgroundColor = bgColor;

    // Asignar la imagen correcta según la selección
    switch (image) {
        case 'felicitacion1':
            cardImage.src = './img/cumple1.jpeg';
            break;
        case 'felicitacion2':
            cardImage.src = './img/cumple2.jpeg';
            break;
        case 'felicitacion3':
            cardImage.src = './img/cumple3.jpeg';
            break;
        case 'meme1':
            cardImage.src = './img/meme1.jpeg';
            break;
        case 'meme2':
            cardImage.src = './img/meme2.jpg';
            break;
        case 'meme3':
            cardImage.src = './img/meme3.jpg';
            break;
        case 'otro1':
            cardImage.src = './img/otro1navi.jpeg';
            break;
        case 'otro2':
            cardImage.src = './img/otro2gradu.jpeg';
            break;
        case 'otro3':
            cardImage.src = './img/otro3otro.jpeg';
            break;
        default:
            cardImage.src = './img/meme3.jpg';
    }

    cardText.textContent = message;
    cardAuthor.textContent = `- ${author}`;

    // Animaciones de texto
    cardText.classList.add('animate-text');
    cardAuthor.classList.add('animate-text');
});

// Animaciones de texto usando CSS
const style = document.createElement('style');
style.innerHTML = `
    .animate-text {
        animation: fadeIn 2s ease-in-out;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);
