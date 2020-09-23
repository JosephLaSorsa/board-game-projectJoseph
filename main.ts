input.onButtonPressed(Button.A, function () {
    Player = randint(1, 5)
    basic.showString("" + (Player))
    basic.pause(1)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    if (Player == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
    } else if (Player == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . . .
            . . . . .
            . . . . .
            `)
    } else if (Player == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
let Player = 0
Player = 0
basic.forever(function () {
	
})
