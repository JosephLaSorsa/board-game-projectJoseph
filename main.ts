input.onButtonPressed(Button.A, function () {
    Player = Player + randint(1, 6)
    basic.showString("" + (Player))
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (Points))
    basic.pause(1000)
    basic.clearScreen()
    if (Points == 10) {
        basic.showString("You won")
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Player == 1) {
        basic.showLeds(`
            # . . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Player == 2) {
        basic.showLeds(`
            . # . . .
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Player == 3) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Player == 4) {
        basic.showLeds(`
            . . . # .
            . . . # .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Player == 5) {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Player == 6) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            # . . . .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Player == 7) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . . .
            . # . . .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Player == 8) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Player == 9) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # .
            . . . # .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Player == 10) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . #
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    }
    if (Player > 15) {
        Points += -1
        basic.showString("You lost a point")
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
    if (Player == 10) {
        basic.showString("You got a point")
        Points += 1
    }
    basic.pause(500)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    Player = randint(1, 3)
})
let Points = 0
let Player = 0
Player = randint(1, 3)
