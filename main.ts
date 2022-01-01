input.onButtonPressed(Button.A, function () {
    radio.sendString("G")
    basic.showString("G")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("<")
    basic.showString("<")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("B")
    basic.showString("B")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("S")
    basic.showString("S")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("QD")
    radio.sendString("QD")
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showString(">")
    radio.sendString(">")
})
radio.setGroup(50)
basic.forever(function () {
	
})
