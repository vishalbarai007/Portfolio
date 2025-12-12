import React from 'react'
import { File, Search, Settings } from "lucide-react"

import { OrbitingCircles } from "@/components/ui/orbiting-circles"

const CircularLogos = () => {
    return (
        <div>
            <div >
                <OrbitingCircles>
                    <File />
                    <Settings />
                    <File />
                </OrbitingCircles>
                <OrbitingCircles radius={100} reverse>
                    <File />
                    <Settings />
                    <File />
                    {/* <Search /> */}
                </OrbitingCircles>
            </div>
        </div>
    )
}

export default CircularLogos
