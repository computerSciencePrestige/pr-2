let random_number = 0
input.onButtonPressed(Button.A, function () {
    random_number = randint(1, 6)
    if (random_number == 1) {
        basic.showString("PE with  Joe")
    } else if (random_number == 2) {
        basic.showString("Watch a Movie")
    } else if (random_number == 3) {
        basic.showString("Play a Board Game")
    } else if (random_number == 4) {
        basic.showString("Tidy our rooms")
    } else if (random_number == 5) {
        basic.showString("Play a card game")
    } else {
        basic.showString("Learn a song")
    }
})
