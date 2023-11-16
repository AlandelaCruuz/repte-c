radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 4) {
        basic.showString("Hello!")
    } else {
        basic.showString("ERROR")
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(4)
})
