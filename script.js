const noBtn = document.querySelector('.no-btn');
const okBtn = document.querySelector('.ok-btn');
const catGif = document.querySelector('.cat-gif');
const sadCatGif = document.querySelector('.sad-cat-gif'); 
const message = document.querySelector('.message'); 
const noPhrases = [ 
    "Pleassee sorryyy na poo",
    "I miss talking so much, Bati na tayo please",
    "Usap na ulit tayo please",
    "I'll do better next I promiseee",
    "Pansinin mo na ulit ako pleaseeee"
];

noBtn.addEventListener('click', () => {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';

    const randomIndex = Math.floor(Math.random() * noPhrases.length);
    noBtn.textContent = noPhrases[randomIndex];

    sadCatGif.style.display = 'block';
    catGif.style.display = 'none'; 
});

okBtn.addEventListener('click', () => {
    catGif.style.display = 'block'; 
    sadCatGif.style.display = 'none'; 
    message.textContent = "Yey! Thank you Gillllll!!!!";
    okBtn.classList.add('spin');
    noBtn.classList.add('spin');
});
