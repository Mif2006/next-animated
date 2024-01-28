import React from 'react'
import VidContent from './VidContent'

const About = () => {
  return (
    <div className='relative flex items-center justify-center h-full w-screen'>
        <video
            autoPlay
            muted
            loop
            className='absolute h-full w-full bottom-0 left-0 z-[1] object-cover rotate-180'
        >
            <source src='/gold.mp4' type='video/mp4' />
        </video>
        <VidContent />
    </div>
  )
}

export default About