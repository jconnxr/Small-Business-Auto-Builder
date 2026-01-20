const HelpPage = () => {
  return (
    <div className="grid">
      <section className="card">
        <span className="badge">Need Help?</span>
        <h1>Request human assistance</h1>
        <p>
          Our consultants can review your site state, suggest changes, and apply
          edits with an audit trail. No forced sales.
        </p>
        <div className="grid">
          <label htmlFor="help-message">What would you like help with?</label>
          <textarea id="help-message" rows={5} placeholder="Tell us your goal." />
          <button className="button">Submit request</button>
        </div>
      </section>
      <section className="card">
        <h2>What happens next</h2>
        <ul className="list">
          <li>We flag your account with an intent CRM record.</li>
          <li>A consultant reviews your site and recommendations.</li>
          <li>You approve changes before anything is applied.</li>
        </ul>
      </section>
    </div>
  );
};

export default HelpPage;
