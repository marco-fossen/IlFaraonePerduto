let portaAperta = 0
pins.servoWritePin(AnalogPin.P0, 0)
pins.digitalWritePin(DigitalPin.P8, 1)
pins.digitalWritePin(DigitalPin.P12, 1)
pins.digitalWritePin(DigitalPin.P16, 1)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        basic.showIcon(IconNames.Square)
        if (portaAperta == 0) {
            for (let indice = 0; indice <= 180; indice++) {
                pins.servoWritePin(AnalogPin.P0, indice)
                pins.digitalWritePin(DigitalPin.P8, randint(0, 1))
                pins.digitalWritePin(DigitalPin.P12, randint(0, 1))
                pins.digitalWritePin(DigitalPin.P16, randint(0, 1))
                basic.pause(10)
            }
            portaAperta = 1
            pins.digitalWritePin(DigitalPin.P8, 1)
            pins.digitalWritePin(DigitalPin.P12, 1)
            pins.digitalWritePin(DigitalPin.P16, 1)
        }
    } else {
        basic.showIcon(IconNames.No)
        portaAperta = 0
        pins.servoWritePin(AnalogPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
})
