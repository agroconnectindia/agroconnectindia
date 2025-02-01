import React, { useEffect, useState } from 'react';
import logo from './icon/logot.png';
import DashboardWrapper from './DashboardWrapper';
import Header from './Header';
import Footer from './Footer';

export default function Dashboard() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000); // Simulating a 2-second loading time
    }, []);

    return (
        <DashboardWrapper>
            {loading ? (
                <div className="flex justify-center items-center h-screen bg-gray-900">
                    <svg width="600" height="100" xmlns="http://www.w3.org/2000/svg">
                        <style>
                            {`
                                .letter {
                                    opacity: 0;
                                    animation: fadeIn 1s ease-in-out forwards;
                                }
                                .letter:nth-child(n) { animation-delay: calc(var(--order) * 0.1s); }
                                @keyframes fadeIn {
                                    0% { opacity: 0; transform: translateY(-10px); }
                                    100% { opacity: 1; transform: translateY(0); }
                                }
                            `}
                        </style>
                        <text x="10" y="50" fontFamily="Arial, sans-serif" fontSize="36" fill="white">
                            {"Agro Connect India".split('').map((char, index) => (
                                <tspan key={index} className="letter" style={{ '--order': index }}>
                                    {char}
                                </tspan>
                            ))}
                        </text>
                    </svg>
                </div>
            ) : (
                <div>sayea</div>
            )}
        </DashboardWrapper>
    );
}
