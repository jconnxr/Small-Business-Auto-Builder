const HomePage = () => {
  return (
    <div className="grid">
      <section className="card">
        <span className="badge">V4 Guided Platform</span>
        <h1>Launch a complete small business website in minutes.</h1>
        <p>
          Answer a handful of questions and we will configure the right website
          outcome, systems, and dashboard for your business. No blank canvas, no
          feature overload.
        </p>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          <div className="card">
            <h3>Contact / Booking</h3>
            <p>Capture leads, schedule appointments, and follow up automatically.</p>
          </div>
          <div className="card">
            <h3>Sell Products</h3>
            <p>Enable pickup ordering, manage inventory, and take payments.</p>
          </div>
          <div className="card">
            <h3>Findable / Professional</h3>
            <p>Publish trust signals, hours, location, and a clear brand story.</p>
          </div>
        </div>
        <a className="button" href="/onboarding">
          Start Guided Onboarding
        </a>
      </section>
      <section className="card">
        <h2>What you get out of the box</h2>
        <ul className="list">
          <li>Opinionated single-goal templates</li>
          <li>Booking or ordering system, never both</li>
          <li>Dashboard with the essentials only</li>
          <li>Optional human assistance</li>
          <li>Upgrade path for expansion triggers</li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
