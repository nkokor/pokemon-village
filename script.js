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

function areInCollision(object1, object2) {
  return (
    object1.position.x + object1.width >= object2.position.x
    && object1.position.x <= object2.position.x + object2.width
    && object1.position.y <= object2.position.y + object2.height
    && object1.position.y + object1.height >= object2.position.y
  )
}

let lastPressedKey = ''

function movePlayer(lastPressedKey) {
  let moving = true
  //player movement is implemented by changing the map position
  if(keys.up.pressed && lastPressedKey === 'up') {
    collisionBlocks.forEach(block => {
      if(areInCollision(player, {...block, position: {
        x: block.position.x,
        y: block.position.y + 3
      }})) {
        console.log('collision')
        moving = false
      }
    })
    if(moving) {
      worldObjects.forEach(object => {
        object.position.y += 3
      })
    }
  } else if(keys.right.pressed  && lastPressedKey === 'right') {
    collisionBlocks.forEach(block => {
      if(areInCollision(player, {...block, position: {
        x: block.position.x - 3,
        y: block.position.y
      }})) {
        console.log('collision')
        moving = false
      }
    })
    if(moving) {
      worldObjects.forEach(object => {
        object.position.x -= 3
      })
    }
  } else if(keys.down.pressed  && lastPressedKey === 'down') {
    collisionBlocks.forEach(block => {
      if(areInCollision(player, {...block, position: {
        x: block.position.x,
        y: block.position.y - 3
      }})) {
        console.log('collision')
        moving = false
      }
    })
    if(moving) {
      worldObjects.forEach(object => {
        object.position.y -= 3
      })
    }
  } else if(keys.left.pressed  && lastPressedKey === 'left') {
    collisionBlocks.forEach(block => {
      if(areInCollision(player, {...block, position: {
        x: block.position.x + 3,
        y: block.position.y
      }})) {
        console.log('collision')
        moving = false
      }
    })
    if(moving) {
      worldObjects.forEach(object => {
        object.position.x += 3
      })
    }
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
