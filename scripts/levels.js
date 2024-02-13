class Level {
  constructor(battleField) {
    this.battleField = battleField
    this.finished = false
  }
}

let level1 = new Level(battleField1)
let level2 = new Level(battleField2)
let level3 = new Level(battleField3)
let level4 = new Level(battleField4)
let level5 = new Level(battleField5)

let levels = [level1, level2, level3, level4, level5]
