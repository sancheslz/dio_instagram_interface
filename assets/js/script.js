let currentImage = 0;

window.onload = () => {
  const images = [
    'screen01.png',
    'screen02.png',
    'screen03.png',
    'screen04.png',
  ]
  const screen = document.querySelector('#screen')

  setInterval(() => {
    if (currentImage === images.length) {
      currentImage = 0;
    }
    screen.src = `assets/img/${images[currentImage]}`
    currentImage += 1;
  }, 2000)
}