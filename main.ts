function x_and_y_handeler (name_sprite: string, x: number, y: number) {
    if (name_sprite == "player") {
        player = game.createSprite(x, y)
    } else if (name_sprite == "vliegding") {
        vliegding = game.createSprite(x, y)
    } else if (name_sprite == "vliegding achtergrond") {
        vliegding_achterchrond = game.createSprite(x, y)
    } else if (name_sprite == "cactus") {
        cactus = game.createSprite(x, y)
    } else if (name_sprite == "cactus2") {
        cactus_2 = game.createSprite(x, y)
    } else {
        images.createImage(`
            . # . . .
            # . # . #
            # . # . #
            . # . . #
            . . . . .
            `).showImage(0)
    }
}
input.onButtonPressed(Button.B, function () {
    if (jump_countdown == 0) {
        jump_countdown = 1
        y_player = 4
        basic.pause(1000)
        y_player = 5
        jump_countdown = 0
    }
})
let jump_countdown = 0
let cactus_2: game.LedSprite = null
let cactus: game.LedSprite = null
let vliegding_achterchrond: game.LedSprite = null
let vliegding: game.LedSprite = null
let player: game.LedSprite = null
let y_player = 0
let x_player = 1
y_player = 5
basic.forever(function () {
    x_and_y_handeler("player", x_player, y_player)
})
