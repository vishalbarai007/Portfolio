import React, { useState, useEffect } from 'react';
import InfiniteMenu, { MenuItem } from './infinite-menu';
import { X } from 'lucide-react';

const LandingProject = () => {
    // State to track the clicked item for the modal
    const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

    const items = [
        {
            image: "/Images/Milestones/val.jpg",
            link: "https://github.com/vishalbarai007/Cupid2.0-Programmer-sDate",
            title: "Programmer's Date ",
            description: "Managed to secure 1st Prize in Frotend UI hackathon 2025 organized by ABIT RGIT",
            redirect: "/Images/Milestones/val.jpg",
        },
        {
            image: "/Images/Milestones/Idea2024.jpg",
            link: "#",
            title: "Ideathon 2024",
            description: "Participated in Ideathon 2024 organized by E-cell RGIT.",
            redirect: "/Images/Milestones/Idea2024.jpg",
        },
        {
            image: "/Images/Milestones/Recur.jpg",
            link: "https://www.linkedin.com/feed/update/urn:li:activity:7333143118025768960/",
            title: "Recursion 2025",
            description: "Recursion is an annual coding competition organized by RGIT Codecell and Cess.",
            redirect: "/Images/Milestones/Recur.jpg",
        },
        {
            image: "/Images/Milestones/Semminar.jpg",
            link: "#",
            title: "IIT Bombay - Seminar by Charlie Light",
            description: "An Extraordinary Seminar by Charlie Light which Motivates innovators.",
            redirect: "/Images/Milestones/Semminar.jpg",
        },
        {
            image: "/Images/Milestones/Sahyog.jpg",
            link: "https://rgitfesahyog.in/",
            title: "FE - Sahyog",
            description: "A committee which has sole focus to help FE's, Praised By Principal of RGIT",
            redirect: "/Images/Milestones/Sahyog.jpg",
        },
        {
            image: "/Images/Milestones/SIH.jpg",
            link: "https://github.com/vishalbarai007/DZap-linux",
            title: "SIH 2025",
            description: "An Hackathon organized by Goverment of India, 3rd Place in College Round",
            redirect: "/Images/Milestones/SIH.jpg",
        },
        {
            image: "/Images/Milestones/FA.jpg",
            link: "https://www.linkedin.com/feed/update/urn:li:activity:7333897297501577218/",
            title: "Frontend Arena 2025",
            description: "A hackathon organized by Student Council of RGIT under my Supervision",
            redirect: "/Images/Milestones/FA.jpg",
        },
        {
            image: "/Images/Milestones/Field.jpg",
            link: "#",
            title: "Sandhan Valley Trip",
            description: "Visited Sandhan Valley as a college Field Trip for Star Gazing",
            redirect: "/Images/Milestones/Field.jpg",
        },
        {
            image: "/Images/Milestones/hobby.jpg",
            link: "#",
            title: "CST Art Exhibition",
            description: "Visited CST Art Exhibition as Historical Arts are Magnificent ",
            redirect: "/Images/Milestones/hobby.jpg",
        },
        {
            image: "/Images/Milestones/Presentation.jpg",
            link: "#",
            title: "Presentation Skills Development",
            description: "Participated in Presentation Skills Development Workshop",
            redirect: "/Images/Milestones/Presentation.jpg",
        }
    ];

    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (selectedItem) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedItem]);

    return (
        <section className="w-full py-24 bg-background relative">
            {/* Professional Title & Subtitle */}
            <div className="mb-10 flex flex-col items-center justify-center px-4 text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground mb-4">
                    Milestones & Memories
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl">
                    A curated showcase of my engineering projects, community leadership, and professional journey.
                </p>
            </div>
            
            {/* Infinite Gallery Wrapper */}
            <div style={{ height: '80vh', position: 'relative' }}>
                {/* Pass an onItemClick prop to handle the click event */}
                <InfiniteMenu items={items} onItemClick={(item: MenuItem) => setSelectedItem(item)} />
            </div>

            {/* Image Modal */}
            {selectedItem && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity"
                    onClick={() => setSelectedItem(null)} // Close when clicking the background
                >
                    <div 
                        className="relative w-full max-w-5xl bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                    >
                        {/* Close Button */}
                        <button 
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors"
                            onClick={() => setSelectedItem(null)}
                            aria-label="Close modal"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        {/* Full Image */}
                        <div className="w-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                            <img 
                                src={selectedItem.image} 
                                alt={selectedItem.title} 
                                className="w-full h-auto max-h-[70vh] object-contain"
                            />
                        </div>

                        {/* Details */}
                        <div className="p-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                                    {selectedItem.title}
                                </h3>
                                <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                                    {selectedItem.description}
                                </p>
                            </div>
                            
                            {/* Optional: Add a button to visit the actual project link */}
                            {selectedItem.link && selectedItem.link !== "#" && (
                                <a 
                                    href={selectedItem.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
                                >
                                    Visit Project
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default LandingProject;