import React, {useState}  from 'react'
import AudioOn from '../Icons/AudioOn'
import AudioOff from '../Icons/AudioOff'
import { motion } from 'framer-motion'

const textVariants = {
    initial: {
        opacity: 0,
        y: -50
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.6, 0.05, -0.01, 0.9],
        }
    },
}

function About() {

    const [music] = useState(new Audio('/theme.mp3'))
    music.volume = 1
    const [isPlaying, setIsPlaying] = useState(false)

    const playAudio = () => {
        if (isPlaying) {
            music.pause()
            setIsPlaying(false)

        } else {
            music.play()
            setIsPlaying(true)
        }
    }

    return (
        <div style={{
            color: 'white',
            position: 'absolute',
            bottom: 50,
            left: 50,
            zIndex: 10,
        }}>
        {
            isPlaying ? <AudioOn onClick={() => playAudio()} width={30}/> : <AudioOff onClick={() => playAudio()} width={30}/>
        }

            <div style={{
                marginTop: 20,
            }}>
                <motion.a variants={textVariants} 
                initial="initial"
                animate="animate"
                style={{
                    fontWeight: 'bolder',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '1.5rem',
                }} href={"https://www.linkedin.com/in/william-giani-01bb30178/"}>"The Bull Society" — William Giani &copy; 2021</motion.a>
                <p style={{color: "darkgray", pointerEvents: 'none', fontSize: 12}}>Models by gelmi.com.br on Sketchfab</p>
                <p style={{color: "darkgray", pointerEvents: 'none' , fontSize: 12}}>Royalty free music from https://www.FesliyanStudios.com</p>
            </div>
        </div>
    )
}

export default About
