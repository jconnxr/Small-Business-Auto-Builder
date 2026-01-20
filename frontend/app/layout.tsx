import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Small Business Auto Builder",
  description: "Guided, opinionated small business website platform.",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <header className="app-header">
            <div className="brand">Small Business Auto Builder</div>
            <nav className="nav">
              <a href="/">Home</a>
              <a href="/onboarding">Onboarding</a>
              <a href="/preview">Preview</a>
              <a href="/dashboard">Dashboard</a>
              <a href="/help">Need Help?</a>
            </nav>
          </header>
          <main className="app-main">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
