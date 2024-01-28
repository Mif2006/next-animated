"use client"

import React, { useEffect, useState } from 'react'

const AnimatedNumbers = ({ target} : {target: number}) => {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        let increment = 0;

        setTimeout(() => {
            const intervalId = setInterval(() => {
                increment += Math.ceil((target - current) / 100)
                setCurrent(increment)
                if(increment >= target) clearInterval(intervalId)
            }, 20)
        return () => clearInterval(intervalId)
        }, 50)
    }, [target])
  return <div className='font-bold text-6xl text-[#FFD700]'>{current}</div>
}

export default AnimatedNumbers