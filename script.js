//canvas setup
const canvas = document.getElementById('game-canvas')
canvas.width = 1024
canvas.height = 586
const context = canvas.getContext('2d')
context.fillStyle = 'white' 
context.fillRect(0, 0, canvas.width, canvas.height)

//map creation
const mapImage = new Image()
mapImage.src = './assets/world-map.png'

//player creation
const playerImage = new Image()
playerImage.src = './assets/player-down.png'

class Sprite {
  constructor({
    position,
    image,
    frames = {
      max: 1
    }
  }) {
    this.position = position
    this.image = image
    this.frames = {...frames, value: 0, framesElapsed: 0}
    this.image.onload = () => {
      this.width = this.image.width / this.frames.max
      this.height = this.image.height
    }
    this.moving = false
  }
  draw() {
    context.drawImage(
      this.image, 
      this.frames.value * this.width, //cropping starting point from x
      0, //cropping starting point from y
      this.image.width / this.frames.max, //cropping lenght for x
      this.image.height, //cropping length for y
      this.position.x, //position x
      this.position.y, //position y
      this.image.width / this.frames.max, //actual width of the image being rendered
      this.image.height, //actual height of the image being rendered
    )
    if(this.moving) {
      if(this.frames.max > 1) {
        this.frames.framesElapsed += 1
      }
      //change the image on every 10th animation frame to "slow down" the animation
      if(this.frames.framesElapsed % 10 === 0) {
        if(this.frames.value < this.frames.max - 1) {
          this.frames.value += 1
        } else {
          this.frames.value = 0
        }
      }
    }
  }
}

const map = new Sprite({
  position: {
    x: -5600,
    y: -1570
  },
  image: mapImage
})

const player = new Sprite({
  position: {
    x: canvas.width / 2 - playerImage.width / 4,
    y: canvas.height / 2 - playerImage.height / 2
  },
  image: playerImage,
  frames: {
    max: 4
  }
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

let lastPressedKey = ''

function movePlayer(lastPressedKey) {
  player.moving = false
  //player movement is implemented by changing the map position
  if(keys.up.pressed && lastPressedKey === 'up') {
    player.moving = true
    map.position.y += 3
  } else if(keys.right.pressed  && lastPressedKey === 'right') {
    player.moving = true
    map.position.x -= 3
  } else if(keys.down.pressed  && lastPressedKey === 'down') {
    player.moving = true
    map.position.y -= 3
  } else if(keys.left.pressed  && lastPressedKey === 'left') {
    player.moving = true
    map.position.x += 3
  }
}

function animate() {
  window.requestAnimationFrame(animate)

  //map rendering
  map.draw()

  //player rendering
  player.draw()
  movePlayer(lastPressedKey)
}

// player direction change
window.addEventListener('keydown', (event) => {
  switch(event.key) {
    case 'ArrowUp':
      keys.up.pressed = true
      lastPressedKey = 'up'
      playerImage.src = './assets/player-up.png'
      break
    case 'ArrowRight':
      keys.right.pressed = true
      lastPressedKey = 'right'
      playerImage.src = './assets/player-right.png'
      break
    case 'ArrowDown':
      keys.down.pressed = true
      lastPressedKey = 'down'
      playerImage.src = './assets/player-down.png'
      break
    case 'ArrowLeft':
      keys.left.pressed = true
      lastPressedKey = 'left'
      playerImage.src = './assets/player-left.png'
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
