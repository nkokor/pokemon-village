//canvas setup
const canvas = document.getElementById('game-canvas')
canvas.width = 1024
canvas.height = 576
const context = canvas.getContext('2d')
context.fillStyle = 'white' 
context.fillRect(0, 0, canvas.width, canvas.height)

//map creation
const mapImage = new Image()
mapImage.src = './assets/world-map.png'

//player creation
const player = new Image()
player.src = './assets/player-down.png'

class Sprite {
  constructor({
    position,
    image
  }) {
    this.position = position
    this.image = image
  }
  draw() {
    context.drawImage(this.image, this.position.x, this.position.y)
  }
}

const map = new Sprite({
  position: {
    x: -6500,
    y: -1850
  },
  image: mapImage
})

const keys = {
  up: {
    pressed: false
  },
  right: {
    pressed: false
  },
  down: {
    pressed: false
  },
  left: {
    pressed: false
  }
}

function movePlayer() {
  //player movement is implemented by changing the map position
  if(keys.up.pressed) {
    map.position.y += 3
  } else if(keys.right.pressed) {
    map.position.x -= 3
  } else if(keys.down.pressed) {
    map.position.y -= 3
  } else if(keys.left.pressed) {
    map.position.x += 3
  }
}

function animate() {
  window.requestAnimationFrame(animate)

  //map rendering
  map.draw()

  //player rendering
  context.drawImage(
    player, 
    0, //cropping starting point from x
    0, //cropping starting point from y
    player.width / 4, //cropping lenght for x
    player.height, //cropping length for y
    canvas.width / 2 - player.width / 4, //position x
    canvas.height / 2 - player.height / 2, //position y
    player.width / 4, //actual width of the image being rendered
    player.height //actual height of the image being rendered
  )
  movePlayer()
}

// player direction change
window.addEventListener('keydown', (event) => {
  switch(event.key) {
    case 'ArrowUp':
      keys.up.pressed = true
      player.src = './assets/player-up.png'
      break
    case 'ArrowRight':
      keys.right.pressed = true
      player.src = './assets/player-right.png'
      break
    case 'ArrowDown':
      keys.down.pressed = true
      player.src = './assets/player-down.png'
      break
    case 'ArrowLeft':
      keys.left.pressed = true
      player.src = './assets/player-left.png'
      break
  }
})

window.addEventListener('keyup', (event) => {
  switch(event.key) {
    case 'ArrowUp':
      keys.up.pressed = false
      break
    case 'ArrowRight':
      keys.right.pressed = false
      break
    case 'ArrowDown':
      keys.down.pressed = false
      break
    case 'ArrowLeft':
      keys.left.pressed = false
      break
  }
})

animate()
