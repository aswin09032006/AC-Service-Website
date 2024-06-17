import React from 'react';
import './stats.css';

const Stats = () => {
    const stats = [
        { icon: '👥', count: '4000+', label: 'Precious Clients' },
        { icon: '🔧', count: '1200+', label: 'AC Repaired' },
        { icon: '❄️', count: '5000+', label: 'AC Installed' },
        { icon: '👨‍🔧', count: '2+', label: 'Service Engineers' },
    ];

    return (
        <div className="stats-container">
            {stats.map((stat, index) => (
                <div className="stat-box" key={index}>
                    <div className="icon">{stat.icon}</div>
                    <div className="count">{stat.count}</div>
                    <div className="label">{stat.label}</div>
                </div>
            ))}
        </div>
    );
};

export default Stats;
