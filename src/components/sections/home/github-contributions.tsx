"use client";

import React, { useEffect, useState } from "react";
import { Activity } from "react-activity-calendar";
import { ActivityCalendar } from 'react-activity-calendar';

export default function GitHubContributions({ isDark = true }: { isDark?: boolean }) {
    const [data, setData] = useState<Activity[] | null>(null);
    const [stats, setStats] = useState({ total: 0, longestStreak: 0, currentStreak: 0 });

    useEffect(() => {
        async function fetchContributions() {
            try {
                const res = await fetch(
                    "https://github-contributions-api.jogruber.de/v4/vishalbarai007?y=2025"
                );

                const json = await res.json();
                setData(json.contributions);

                // Calculate statistics
                const total = json.contributions.reduce((sum: number, day: Activity) => sum + day.count, 0);

                let currentStreak = 0;
                let longestStreak = 0;
                let tempStreak = 0;

                const sortedData = [...json.contributions].reverse();
                for (const day of sortedData) {
                    if (day.count > 0) {
                        tempStreak++;
                        longestStreak = Math.max(longestStreak, tempStreak);
                    } else {
                        if (currentStreak === 0 && tempStreak > 0) {
                            currentStreak = tempStreak;
                        }
                        tempStreak = 0;
                    }
                }

                if (tempStreak > 0 && currentStreak === 0) {
                    currentStreak = tempStreak;
                }

                setStats({ total, longestStreak, currentStreak });

            } catch (err) {
                console.error("Failed to load contributions:", err);
                setData([]);
            }
        }

        fetchContributions();
    }, []);

    if (!data) {
        return (
            <div className={`p-8 rounded-2xl animate-pulse transition-colors duration-300 ${isDark ? 'bg-[#0d1117]' : 'bg-white'
                }`}>
                <div className={`h-8 rounded w-48 mb-6 ${isDark ? 'bg-gray-800' : 'bg-gray-200'
                    }`}></div>
                <div className={`h-32 rounded ${isDark ? 'bg-gray-800' : 'bg-gray-200'
                    }`}></div>
            </div>
        );
    }

    if (data.length === 0) {
        return (
            <div className={`p-8 rounded-2xl shadow-2xl transition-all duration-300 ${isDark ? 'bg-[#0d1117] border border-gray-800' : 'bg-white border border-gray-200'}`}>
                <p className="text-center text-gray-500">Unable to load GitHub contributions.</p>
            </div>
        );
    }
    
    return (
        <div className={`p-8 rounded-2xl shadow-2xl transition-all duration-300 ${isDark
            ? 'bg-linear-to-br from-[#0d1117] to-[#161b22] border border-gray-800'
            : 'bg-linear-to-br from-white to-gray-50 border border-gray-200'
            }`}>
            {/* Header */}
            <div className="mb-6">
                <h2 className={`text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                    GitHub Contributions
                </h2>
                <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                    @vishalbarai007 · 2025
                </p>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className={`p-4 rounded-xl transition-colors duration-300 ${isDark ? 'bg-gray-800/50' : 'bg-gray-100'
                    }`}>
                    <p className={`text-xs font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        Total Contributions
                    </p>
                    <p className={`text-2xl font-bold transition-colors duration-300 ${isDark ? 'text-green-400' : 'text-green-600'
                        }`}>
                        {stats.total}
                    </p>
                </div>

                <div className={`p-4 rounded-xl transition-colors duration-300 ${isDark ? 'bg-gray-800/50' : 'bg-gray-100'
                    }`}>
                    <p className={`text-xs font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        Current Streak
                    </p>
                    <p className={`text-2xl font-bold transition-colors duration-300 ${isDark ? 'text-orange-400' : 'text-orange-600'
                        }`}>
                        {stats.currentStreak} 🔥
                    </p>
                </div>

                <div className={`p-4 rounded-xl transition-colors duration-300 ${isDark ? 'bg-gray-800/50' : 'bg-gray-100'
                    }`}>
                    <p className={`text-xs font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        Longest Streak
                    </p>
                    <p className={`text-2xl font-bold transition-colors duration-300 ${isDark ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                        {stats.longestStreak} ⚡
                    </p>
                </div>
            </div>

            {/* Contribution Calendar */}
            <div className={`p-6 flex justify-center items-center transition-colors duration-300 ${isDark ? 'bg-[#161b22]' : 'bg-white border border-gray-200'
                }`}>
                <ActivityCalendar
                    data={data}
                    blockSize={14}
                    blockMargin={4}
                    fontSize={14}
                    colorScheme={isDark ? "dark" : "light"}
                    theme={{
                        dark: [
                            "#161B22",
                            "#0e4429",
                            "#006d32",
                            "#26a641",
                            "#39d353",
                        ],
                        light: [
                            "#ebedf0",
                            "#9be9a8",
                            "#40c463",
                            "#30a14e",
                            "#216e39",
                        ],
                    }}
                    labels={{
                        totalCount: `{{count}} contributions in 2025`,
                    }}
                    showWeekdayLabels
                />
            </div>

            {/* Footer Info */}
            <div className={`mt-4 text-xs text-center transition-colors duration-300 ${isDark ? 'text-gray-500' : 'text-gray-500'
                }`}>
                Hover over squares to see contribution details
            </div>
        </div>
    );
}