input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    kitronik_VIEW128x64.clear()
    kitronik_VIEW128x64.refresh()
    for (let index2 = 0; index2 <= 63; index2++) {
        for (let index = 0; index <= 127; index++) {
            kitronik_VIEW128x64.setPixel(index, index2)
        }
    }
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    kitronik_VIEW128x64.clear()
    kitronik_VIEW128x64.refresh()
    for (let index22 = 0; index22 <= 63; index22++) {
        for (let index3 = 0; index3 <= 127; index3++) {
            kitronik_VIEW128x64.setPixelbuffer(index3, index22)
        }
    }
    kitronik_VIEW128x64.refresh()
    basic.showIcon(IconNames.Meh)
})
kitronik_VIEW128x64.clear()
basic.showIcon(IconNames.Happy)
