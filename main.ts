basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Skull)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.House)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
    basic.clearScreen()
})
