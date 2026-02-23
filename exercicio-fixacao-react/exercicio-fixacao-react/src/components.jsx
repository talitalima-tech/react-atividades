import React from 'react';

const MainContent = ({ title, children }) => {
  return (
    <div className="main-wrapper">
      <header className="main-header">
        <h2>{title}</h2>
      </header>
      <section className="main-body">
        {children}
      </section>
    </div>
  );
};

const Card = ({ cardTitle, children }) => {
  return (
    <div className="custom-card">
      <div className="card-header">
        <h4>{cardTitle}</h4>
      </div>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

export { MainContent, Card };