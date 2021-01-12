while (true) {
    if (input.soundLevel() > 50) {
        music.siren.play()
        pause(5000)
        music.stopAllSounds()
    }
    
    if (input.lightLevel() < 100) {
        light.showAnimation(light.rainbowAnimation, 5000)
    }
    
    if (input.soundLevel() > 50) {
        light.showAnimation(light.rainbowAnimation, 5000)
        if (input.lightLevel() < 20) {
            music.siren.play()
            pause(3000)
            music.stopAllSounds()
        }
        
    }
    
}
