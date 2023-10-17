//sets up the scene
function setScene() {
  map.draw()
  collisionBlocks.forEach(block => {
    block.draw()
  })
  player.draw()
  pikachu.draw()
  //foreground rendering must be done after player rendering so foreground objects are always in front of the player
  foreground.draw()
}

//detects if two objects are colliding
function areInCollision(object1, object2) {
  return (
    object1.position.x + object1.width >= object2.position.x
    && object1.position.x <= object2.position.x + object2.width
    && object1.position.y <= object2.position.y + object2.height
    && object1.position.y + object1.height >= object2.position.y
  )
}

//moves the scene up
function moveUp(){
  player.moving = true
  collisionBlocks.forEach(block => {
    if(areInCollision(player, {...block, position: {
      x: block.position.x,
      y: block.position.y + playerSpeed
    }})) {
      player.moving = false
    }
  })
  if(player.moving) {
    worldObjects.forEach(object => {
      object.position.y += playerSpeed
    })
  }
}

//moves the scene to the right
function moveRight() {
  player.moving = true
    collisionBlocks.forEach(block => {
      if(areInCollision(player, {...block, position: {
        x: block.position.x - playerSpeed,
        y: block.position.y
      }})) {
        player.moving = false
      }
    })
    if(player.moving) {
      worldObjects.forEach(object => {
        object.position.x -= playerSpeed
      })
    }
}

//moves the scene down
function moveDown() {
  player.moving = true
    collisionBlocks.forEach(block => {
      if(areInCollision(player, {...block, position: {
        x: block.position.x,
        y: block.position.y - playerSpeed
      }})) {
        player.moving = false
      }
    })
    if(player.moving) {
      worldObjects.forEach(object => {
        object.position.y -= playerSpeed
      })
    }
}

//moves the scene to the left
function moveLeft() {
  player.moving = true
    collisionBlocks.forEach(block => {
      if(areInCollision(player, {...block, position: {
        x: block.position.x + playerSpeed,
        y: block.position.y
      }})) {
        player.moving = false
      }
    })
    if(player.moving) {
      worldObjects.forEach(object => {
        object.position.x += playerSpeed
      })
    }
}
