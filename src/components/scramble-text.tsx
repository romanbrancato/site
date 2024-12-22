"use client"

import {useScramble} from "use-scramble"

export function ScrambleText({
                                 text,
                                 className = "",
                                 speed = 1,
                                 tick = 1,
                                 step = 1,
                                 scramble = 5,
                                 seed = 3,
                                 playOnMount = false,
                             }: {
    text: string
    className?: string
    speed?: number
    tick?: number
    step?: number
    scramble?: number
    seed?: number
    playOnMount?: boolean
}) {
    const {ref, replay} = useScramble({
        text,
        speed,
        tick,
        step,
        scramble,
        seed,
        playOnMount,
        overdrive: true,
    })

    return <span ref={ref} onMouseOver={replay} onMouseLeave={replay} className={className}/>
}