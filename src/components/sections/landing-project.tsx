import React from 'react'
import InfiniteMenu from '../InfiniteMenu';
import { redirect } from 'next/dist/server/api-utils';

const LandingProject = () => {


    const items = [
        {
            image: "https://picsum.photos/300?random=1",
            link: "https://forest-fire-predictor-nine.vercel.app/",
            title: "Forest Fire Predictor",
            description: "GitHub: https://github.com/vishalbarai007/Forest-Fire-Predictor",
            redirect: "www.google.com",
        },
        {
            image: "https://picsum.photos/300?random=2",
            link: "https://weather-forecast-six-theta.vercel.app/",
            title: "Weather Forecast",
            description: "GitHub: https://github.com/vishalbarai007/Weather-Forecast",
            redirect: "www.google.com",

        },
        {
            image: "https://picsum.photos/300?random=3",
            link: "https://plan-fit.netlify.app",
            title: "Plan Fit",
            description: "GitHub: https://github.com/vishalbarai007/Plan-Fit",
            redirect: "www.google.com",

        },
        {
            image: "https://picsum.photos/300?random=4",
            link: "https://photo-booth-five-iota.vercel.app/",
            title: "PhotoBooth",
            description: "GitHub: https://github.com/vishalbarai007/PhotoBooth",
            redirect: "www.google.com",

        },
        {
            image: "https://picsum.photos/300?random=5",
            link: "https://aiscripter-lake.vercel.app/",
            title: "AI Script Enhancer",
            description: "GitHub: https://github.com/vishalbarai007/AI-Script-Enhancer",
            redirect: "www.google.com",

        },
        {
            image: "https://picsum.photos/300?random=6",
            link: "https://github.com/vishalbarai007/DZap-linux",
            title: "Dzap Desktop App",
            description: "Electron-based desktop organizer",
            redirect: "www.google.com",

        },
        {
            image: "https://picsum.photos/300?random=7",
            link: "https://github.com/vishalbarai007/DYNAMIC-WALLPAPER",
            title: "Wallpaper Browser Extension",
            description: "Live dynamic wallpaper extension",
            redirect: "www.google.com",

        },
        {
            image: "https://picsum.photos/300?random=8",
            link: "https://github.com/vishalbarai007/Adventurer",
            title: "Adventurer Platform",
            description: "React + Firebase adventure platform",
            redirect: "www.google.com",

        }
    ];

    return (
        <div>
            <div style={{ height: '80vh', position: 'relative' }}>
                <InfiniteMenu items={items} />
            </div>
        </div>
    )
}

export default LandingProject
