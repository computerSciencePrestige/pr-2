def on_button_pressed_a():
    global counter
    counter += -1
    if counter < 0:
        counter = 10
    basic.show_number(counter)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global counter
    counter += 1
    if counter > 10:
        counter = 0
    basic.show_number(counter)
input.on_button_pressed(Button.B, on_button_pressed_b)

counter = 0
counter = 0
basic.show_number(counter)

def on_forever():
    pass
basic.forever(on_forever)
