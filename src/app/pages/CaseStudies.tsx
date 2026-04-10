import { Link } from "react-router";
import { ProjectCard, caseStudyCards } from "../components/ProjectCard";

const acornBold: React.CSSProperties = {
  fontFamily: "'Acorn', serif",
  fontWeight: 700,
  fontStyle: "normal",
};

const pageStyles = `
  .cs-cta-btn {
    transition: background 0.18s ease, transform 0.15s ease, box-shadow 0.18s ease;
  }
  .cs-cta-btn:hover {
    background: #e3c0ff !important;
    transform: scale(1.04);
    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  }
  @media (max-width: 768px) {
    .cs-cards-row { flex-direction: column !important; }
    .cs-section-pad { padding: 48px 24px !important; }
    .cs-cta-inner { flex-direction: column !important; gap: 24px !important; padding: 48px 24px !important; }
  }
`;

export function CaseStudies() {
  return (
    <div style={{ background: "#ffffeb", minHeight: "100vh", paddingTop: "66px" }}>
      <style>{pageStyles}</style>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          alignItems: "center",
          width: "100%",
          paddingBottom: "24px",
        }}
      >
        {/* Main dark section */}
        <div
          style={{
            background: "#034f46",
            borderRadius: "100px",
            boxShadow: "0px -4px 40px 0px rgba(0,0,0,0.1), 0px 12px 40px 0px rgba(0,0,0,0.25)",
            margin: "56px 0 0",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <div
            className="cs-section-pad"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "40px",
              padding: "64px 84px",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
              <p style={{ ...acornBold, fontSize: "36px", color: "#ffffeb", lineHeight: "43.2px", margin: 0 }}>
                Case studies
              </p>
            </div>

            {/* Cards — same as landing */}
            <div
              className="cs-cards-row"
              style={{ display: "flex", gap: "24px", alignItems: "stretch", width: "100%" }}
            >
              {caseStudyCards.map((card, i) => (
                <ProjectCard key={i} {...card} />
              ))}
            </div>
          </div>
        </div>

        {/* Cross-promo: AI Playground */}
        <div
          style={{
            background: "#232f2e",
            borderTopLeftRadius: "50px",
            borderTopRightRadius: "50px",
            boxShadow: "0px -4px 40px 0px rgba(0,0,0,0.25)",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <div
            className="cs-cta-inner"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "40px",
              padding: "53px 103px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1, minWidth: "200px" }}>
              <p style={{ ...acornBold, fontSize: "36px", color: "#ffffff", lineHeight: "43.2px", margin: 0 }}>
                Check out my AI playground too
              </p>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: "24px",
                  margin: 0,
                }}
              >
                Little experiments at the edge of AI and design.
              </p>
            </div>
            <Link
              to="/ai-playground"
              className="cs-cta-btn"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                color: "#2e3538",
                textDecoration: "none",
                background: "#f0d7ff",
                border: "1.028px solid #2e3538",
                borderRadius: "100px",
                padding: "13px 32px",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              View →
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignItems: "center",
            textAlign: "center",
            padding: "0 24px",
          }}
        >
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px", color: "#2e3538", margin: 0 }}>
            You could have been anywhere on the internet, yet you're here. Thanks for visiting!
          </p>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", color: "#034f46", margin: 0 }}>
            Made with love by Disha · 2026
          </p>
        </div>
      </div>
    </div>
  );
}
