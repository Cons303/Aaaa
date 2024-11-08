document.getElementById("show-surprise").addEventListener("click", function() {
  const surpriseMessage = document.getElementById("surprise-message");
  surpriseMessage.classList.toggle("hidden");

  // Crear los globos solo si el mensaje sorpresa está visible
  if (!surpriseMessage.classList.contains("hidden")) {
    createBalloons(20); // Puedes ajustar el número de globos aquí
  }
});

function createBalloons(count) {
  const balloonContainer = document.querySelector('.balloon-container');
  balloonContainer.innerHTML = ''; // Limpiar globos anteriores

  for (let i = 0; i < count; i++) {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    
    // Generar colores y posiciones aleatorias
    balloon.style.backgroundColor = getRandomColor();
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.animationDuration = (3 + Math.random() * 2) + 's';
    balloonContainer.appendChild(balloon);
  }
}

function getRandomColor() {
  const colors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#FF6FFF'];
  return colors[Math.floor(Math.random() * colors.length)];
}