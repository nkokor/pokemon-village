const playerSpeed = 3

const battleFields = []
 levels.forEach(level => {
  battleFields.push(level.battleField)
 })

const pokemons = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5]
const worldObjects = [map, ...collisionBlocks, foreground, ...pokemons, ...battleFields]

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

function movePlayer() {
  //player movement is implemented by moving the world objects
  if(keys.up.pressed && lastPressedKey === 'up') {
    moveUp()
  } else if(keys.right.pressed  && lastPressedKey === 'right') {
    moveRight()
  } else if(keys.down.pressed  && lastPressedKey === 'down') {
    moveDown()
  } else if(keys.left.pressed  && lastPressedKey === 'left') {
    moveLeft()
  }
}

function animate() {
  window.requestAnimationFrame(animate)
  setScene()
  movePlayer()
}

//player direction change
window.addEventListener('keydown', (event) => {
  switch(event.key) {
    case 'ArrowUp':
      keys.up.pressed = true
      lastPressedKey = 'up'
      player.image = playerImageUp
      pikachu.position.x = player.position.x + 2
      pikachu.position.y = player.position.y + 60
      pikachu.image = pikachuImageUp
      break
    case 'ArrowRight':
      keys.right.pressed = true
      lastPressedKey = 'right'
      player.image = playerImageRight
      pikachu.position.x = player.position.x - 40
      pikachu.position.y = player.position.y + 20
      pikachu.image = pikachuImageRight
      break
    case 'ArrowDown':
      keys.down.pressed = true
      lastPressedKey = 'down'
      player.image = playerImageDown
      pikachu.position.x = player.position.x + 2
      pikachu.position.y = player.position.y - 40
      pikachu.image = pikachuImageDown
      break
    case 'ArrowLeft':
      keys.left.pressed = true
      lastPressedKey = 'left'
      player.image = playerImageLeft
      pikachu.position.x = player.position.x + 40
      pikachu.position.y = player.position.y + 20
      pikachu.image = pikachuImageLeft
      break
  }
})

window.addEventListener('keyup', (event) => {
  switch(event.key) {
    case 'ArrowUp':
      keys.up.pressed = false
      stopMovement()
      break
    case 'ArrowRight':
      keys.right.pressed = false
      stopMovement()
      break
    case 'ArrowDown':
      keys.down.pressed = false
      stopMovement()
      break
    case 'ArrowLeft':
      keys.left.pressed = false
      stopMovement()
      break
  }
})

animate()
