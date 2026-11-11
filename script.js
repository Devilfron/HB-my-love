<script>
function showMessage() {
alert('Ура! Пусть этот день будет самым лучшим!')
}

function createHeart() {
const heart = document.createElement('div'); heart.classList.add('heart');
heart.innerHTML = '❤️';
heart.style.left = Math.random() * 100 + 'vw';
heart.style.animationDuration = (Math.floors || Math.floor)(Math.random() * 3 + 2) +
's';
document.body.appendChild(heart);
setTimeout(() => { 
heart.remove();
}, 4000);
}
setInterval(createHeart, 400);
</script>