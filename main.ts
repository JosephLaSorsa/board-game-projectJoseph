input.onButtonPressed(Button.A, function () {
    Player = Player + randint(1, 6)
    Enemy = randint(1, 14)
    basic.showString("" + (Player))
    basic.pause(2000)
    basic.clearScreen()
    if (Enemy == Player) {
        Enemy += -1
        basic.showIcon(IconNames.Angry)
        basic.pause(500)
        basic.clearScreen()
        basic.showString("You got attacked by an enemy, you losta point")
        Player = 1
    }
    if (Player > 15) {
        basic.showString("You got nothing")
        basic.showLeds(`
            . . . . .
            . # . # .
            # . . . #
            . # # # .
            . . . . .
            `)
        basic.pause(50)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (Points))
    basic.pause(1000)
    basic.clearScreen()
    if (Points == 10) {
        basic.showString("You won")
    }
})
input.onButtonPressed(Button.B, function () {
    if (Enemy == 1) {
        basic.showLeds(`
            # . . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Enemy == 2) {
        basic.showLeds(`
            . # . . .
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Enemy == 3) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Enemy == 4) {
        basic.showLeds(`
            . . . # .
            . . . # .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Enemy == 5) {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Enemy == 6) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            # . . . .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Enemy == 7) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . . .
            . # . . .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Enemy == 8) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Enemy == 9) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # .
            . . . # .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Enemy == 10) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . #
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Enemy == 11) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Enemy == 12) {
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . . . . .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Enemy == 13) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Enemy == 14) {
        basic.showLeds(`
            . . . # .
            . . . # .
            . . . # .
            . . . . .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    }
    if (Player == 15) {
        basic.showString("You got a point")
        Points += 1
    }
    basic.pause(500)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    Player = 1
    Enemy = randint(1, 14)
})
let Points = 0
let Enemy = 0
let Player = 0
Player = 1
Enemy = randint(1, 14)
