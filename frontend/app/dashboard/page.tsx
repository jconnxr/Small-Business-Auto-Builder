const DashboardPage = () => {
  return (
    <div className="grid">
      <section className="card">
        <span className="badge">Business Dashboard</span>
        <h1>Sunny Cafe</h1>
        <p>Primary goal: Sell Products</p>
        <div className="grid">
          <div className="card">
            <h3>Website status</h3>
            <p>Draft — ready to publish</p>
            <button className="button">Publish site</button>
          </div>
          <div className="card">
            <h3>Orders</h3>
            <p>3 open pickup orders</p>
            <a className="button secondary" href="/orders">
              View orders
            </a>
          </div>
          <div className="card">
            <h3>Content</h3>
            <p>Edit headline, hero text, and calls to action.</p>
            <button className="button secondary">Edit content</button>
          </div>
        </div>
      </section>
      <section className="card">
        <h2>Upgrade readiness</h2>
        <p>
          If you need multiple goals, automation, or new pages, request an
          expansion so we can enable the correct systems.
        </p>
        <button className="button">Request expansion</button>
      </section>
    </div>
  );
};

export default DashboardPage;
