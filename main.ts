scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundNorthEast0, function (sprite, location) {
    game.over(true)
})
info.startCountdown(10)
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.updateSprite()
tiles.setTilemap(tilemap`level1`)
myCorg.follow()
