let tempo = 1020
const contadorMinutos = document.getElementById('minutos')
const contadorSegundos = document.getElementById('segundos')

const intervalo = setInterval(() => {
  const minutos = Math.floor(tempo / 60)
  const segundos = tempo % 60
  contadorMinutos.textContent = minutos.toString()
  contadorSegundos.textContent = segundos.toString().padStart(2, '0')
  tempo--
  if (tempo < 0) {
    clearInterval(intervalo)
  }
}, 1000)

const botao = document.getElementById('botao')

setInterval(() => {
  botao.style.transform =
    botao.style.transform === 'scale(1.1)' ? 'scale(1)' : 'scale(1.1)'
}, 800)

document.getElementById('scrollButton').addEventListener('click', function () {
  const totalHeight = document.body.scrollHeight

  const scrollToPosition = totalHeight * 0.769

  window.scrollTo({
    top: scrollToPosition,
    behavior: 'smooth'
  })
})
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const carousel = document.querySelector('.carousel-bet')

let currentIndex = 0
const totalCards = carousel.children.length

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--
    updateCarousel()
  }
})

nextBtn.addEventListener('click', () => {
  if (currentIndex < totalCards - (window.innerWidth > 768 ? 4 : 4)) {
    currentIndex++
    updateCarousel()
  }
})

function updateCarousel() {
  const cardWidth = carousel.children[0].offsetWidth
  carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`
}

window.addEventListener('resize', updateCarousel)

setInterval(() => {
  if (currentIndex < totalCards - (window.innerWidth > 768 ? 4 : 1)) {
    currentIndex++
  } else {
    currentIndex = 0 // Volta ao início
  }
  updateCarousel()
}, 4000)

function redirectAfterDelay(url) {
  setTimeout(function () {
    window.location.href = url
  })
}
