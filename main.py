while True:
    if input.sound_level() > 50:
        music.siren.play()  
        pause(5000)
        music.stop_all_sounds() 
    if input.light_level() < 100: 
        light.show_animation(light.rainbowAnimation, 5000)
    

    if input.sound_level() > 50:
        light.show_animation(light.rainbowAnimation, 5000)

        if input.light_level() < 20: 
            music.siren.play()
            pause(3000)
            music.stop_all_sounds()

