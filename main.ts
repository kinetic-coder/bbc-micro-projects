input.onButtonPressed(Button.A, function () {
    radio.sendString("GO")
    basic.showString("GO")
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showString(">")
    radio.sendString(">")
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("STOP")
    radio.sendString("STOP")
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showString("<")
    radio.sendString("<")
    basic.pause(1000)
    basic.clearScreen()
})
radio.setGroup(50)
basic.forever(function () {
	
})
