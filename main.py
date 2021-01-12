while True:
    if input.sound_level() > 50:
        music.siren.play()  
        pause(5000)
        music.stop_all_sounds() 
    if input.light_level() < 20: 
        light.show_animation(light.rainbowAnimation, 5000)
    else: 
        light.set_all(rgb.(0,0,0)
    