const playerSpeed = 3

const worldObjects = [map, ...collisionBlocks, foreground]

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
  map.draw()
  collisionBlocks.forEach(block => {
    block.draw()
  })
  player.draw()
  //foreground rendering must be done after player rendering so foreground objects are always in front of the player
  foreground.draw()
  movePlayer(lastPressedKey)
}

//player direction change
window.addEventListener('keydown', (event) => {
  switch(event.key) {
    case 'ArrowUp':
      keys.up.pressed = true
      lastPressedKey = 'up'
      player.image = playerImageUp
      break
    case 'ArrowRight':
      keys.right.pressed = true
      lastPressedKey = 'right'
      player.image = playerImageRight
      break
    case 'ArrowDown':
      keys.down.pressed = true
      lastPressedKey = 'down'
      player.image = playerImageDown
      break
    case 'ArrowLeft':
      keys.left.pressed = true
      lastPressedKey = 'left'
      player.image = playerImageLeft
      break
  }
})

window.addEventListener('keyup', (event) => {
  switch(event.key) {
    case 'ArrowUp':
      keys.up.pressed = false
      player.moving = false
      break
    case 'ArrowRight':
      keys.right.pressed = false
      player.moving = false
      break
    case 'ArrowDown':
      keys.down.pressed = false
      player.moving = false
      break
    case 'ArrowLeft':
      keys.left.pressed = false
      player.moving = false
      break
  }
})

animate()
