import { goalLabels, goals, templates } from "../../lib/templates";

const PreviewPage = () => {
  const activeGoal = goals.CONTACT;
  const sections = templates[activeGoal];

  return (
    <div className="grid">
      <section className="card">
        <span className="badge">Website Preview</span>
        <h1>{goalLabels[activeGoal]}</h1>
        <p>
          This is your locked, opinionated template. You can edit content but not
          layout or sections without an upgrade request.
        </p>
        <div className="grid">
          {sections.map((section) => (
            <div className="card" key={section}>
              <strong>{section}</strong>
              <p>Editable content goes here.</p>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <a className="button" href="/dashboard">
            Go to Dashboard
          </a>
          <a className="button secondary" href="/help">
            Request Help
          </a>
        </div>
      </section>
      <section className="card">
        <h2>Upgrade triggers</h2>
        <ul className="list">
          <li>Multiple goals or more pages</li>
          <li>Automation and CRM workflows</li>
          <li>Custom layout or multi-location support</li>
        </ul>
        <p>These require explicit intent and an upgrade flag in the backend.</p>
      </section>
    </div>
  );
};

export default PreviewPage;
