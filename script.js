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
  player.moving = false
  //player movement is implemented by changing the map position
  if(keys.up.pressed && lastPressedKey === 'up') {
    player.moving = true
    worldObjects.forEach(object => {
      object.position.y += 3
    })
  } else if(keys.right.pressed  && lastPressedKey === 'right') {
    player.moving = true
    worldObjects.forEach(object => {
      object.position.x -= 3
    })
  } else if(keys.down.pressed  && lastPressedKey === 'down') {
    player.moving = true
    worldObjects.forEach(object => {
      object.position.y -= 3
    })
  } else if(keys.left.pressed  && lastPressedKey === 'left') {
    player.moving = true
    worldObjects.forEach(object => {
      object.position.x += 3
    })
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
