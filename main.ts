while (true) {
    if (input.soundLevel() > 50) {
        music.siren.play()
        pause(5000)
        music.stopAllSounds()
    }
    
    if (input.lightLevel() < 20) {
        light.showAnimation(light.rainbowAnimation, 5000)
    } else {
        light.setAll
    }
    
}
