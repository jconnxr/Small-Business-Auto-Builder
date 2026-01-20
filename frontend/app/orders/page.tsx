const OrdersPage = () => {
  return (
    <div className="grid">
      <section className="card">
        <span className="badge">Orders</span>
        <h1>Pickup Orders</h1>
        <div className="grid">
          <div className="card">
            <h3>Order #1023</h3>
            <p>2x Breakfast Sandwich, 1x Cold Brew</p>
            <p>Status: Ready in 20 minutes</p>
          </div>
          <div className="card">
            <h3>Order #1024</h3>
            <p>1x Granola Bowl</p>
            <p>Status: Preparing</p>
          </div>
          <div className="card">
            <h3>Order #1025</h3>
            <p>3x Latte, 1x Muffin</p>
            <p>Status: Scheduled pickup</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrdersPage;
