input.onButtonPressed(Button.A, function () {
    radio.sendString("G")
    basic.showString("G")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("<")
    basic.showString("<")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("S")
    basic.showString("S")
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showString(">")
    radio.sendString(">")
})
radio.setGroup(50)
basic.forever(function () {
	
})
