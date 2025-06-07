import React from 'react';

const statsData = [
  { id: 1, number: 890, label: 'Delivered packages' },
  { id: 2, number: 137, label: 'Countries covered' },
  { id: 3, number: 740, label: 'Tons of Goods' },
  { id: 4, number: 600, label: 'Satisfied Clients' },
];

const Stats = () => {
  return (
    <section className="stats-section container">
      <div className="stats-wrapper">
        {statsData.map(({ id, number, label }) => (
          <div key={id} className="stat-item">
            <div className="stat-number">{number}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
