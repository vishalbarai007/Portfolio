import React from 'react'
import InfiniteMenu from '../InfiniteMenu';
import { redirect } from 'next/dist/server/api-utils';

const LandingProject = () => {


    const items = [
        {
            image: "https://picsum.photos/300?random=1",
            link: "https://forest-fire-predictor-nine.vercel.app/",
            title: "Forest Fire Predictor",
            description: "A tool that predicts forest fire likelihood using environmental data.",
            redirect: "/projects/forest-fire-predictor",
        },
        {
            image: "https://picsum.photos/300?random=2",
            link: "https://weather-forecast-six-theta.vercel.app/",
            title: "Weather Forecast",
            description: "A real-time weather forecasting app showing temperature and conditions.",
            redirect: "/projects/weather-forecast",
        },
        {
            image: "https://picsum.photos/300?random=3",
            link: "https://plan-fit.netlify.app",
            title: "Plan Fit",
            description: "A fitness planner that helps users track workouts and set goals.",
            redirect: "/projects/plan-fit",
        },
        {
            image: "https://picsum.photos/300?random=4",
            link: "https://photo-booth-five-iota.vercel.app/",
            title: "PhotoBooth",
            description: "A browser-based tool to capture and enhance photos.",
            redirect: "/projects/photobooth",
        },
        {
            image: "https://picsum.photos/300?random=5",
            link: "https://aiscripter-lake.vercel.app/",
            title: "AI Script Enhancer",
            description: "An AI-powered tool that enhances scripts for better clarity and tone.",
            redirect: "/projects/ai-script-enhancer",
        },
        {
            image: "https://picsum.photos/300?random=6",
            link: "https://github.com/vishalbarai007/DZap-linux",
            title: "Dzap Desktop App",
            description: "An Electron-based desktop organizer for productivity.",
            redirect: "/projects/dzap-desktop-app",
        },
        {
            image: "https://picsum.photos/300?random=7",
            link: "https://github.com/vishalbarai007/DYNAMIC-WALLPAPER",
            title: "Wallpaper Browser Extension",
            description: "A custom live wallpaper browser extension.",
            redirect: "/projects/wallpaper-extension",
        },
        {
            image: "https://picsum.photos/300?random=8",
            link: "https://github.com/vishalbarai007/Adventurer",
            title: "Adventurer Platform",
            description: "A React + Firebase platform for sharing adventure experiences.",
            redirect: "/projects/adventurer",
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
