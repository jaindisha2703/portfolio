import { Link } from "react-router";
import { useState } from "react";
import { ProjectCard, caseStudyCards, aiPlaygroundCards } from "../components/ProjectCard";

const acornBold: React.CSSProperties = {
  fontFamily: "'Acorn', serif",
  fontWeight: 700,
  fontStyle: "normal",
};

// ─── Button hover styles ──────────────────────────────────────────────────────

const buttonStyles = `
  .btn-hero-primary {
    transition: background 0.18s ease, box-shadow 0.18s ease, transform 0.15s ease;
  }
  .btn-hero-primary:hover {
    background: #e3c0ff !important;
    box-shadow: 0 4px 16px rgba(0,0,0,0.13);
    transform: scale(1.03);
  }

  .btn-hero-secondary {
    transition: background 0.18s ease, color 0.18s ease, transform 0.15s ease;
  }
  .btn-hero-secondary:hover {
    background: #2e3538 !important;
    color: #ffffeb !important;
    transform: scale(1.03);
  }

  .btn-section-view {
    transition: background 0.18s ease, color 0.18s ease, transform 0.15s ease;
  }
  .btn-section-view:hover {
    background: rgba(255,255,235,0.15) !important;
    transform: scale(1.03);
  }

  .btn-contact {
    transition: background 0.18s ease, box-shadow 0.18s ease, transform 0.15s ease;
  }
  .btn-contact:hover {
    background: #e3c0ff !important;
    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
    transform: scale(1.03);
  }

  .project-card-link {
    display: flex;
    flex: 1 0 0;
    min-width: 0;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    .cards-row {
      flex-direction: column !important;
      align-items: stretch !important;
    }
    .project-card-link {
      flex: unset !important;
      width: 100% !important;
    }
    .section-padding {
      padding: 48px 24px !important;
    }
  }
`;

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <div className="mx-[0px] my-[36px]"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "36px",
        alignItems: "center",
        justifyContent: "center",
        width: "804px",
        maxWidth: "100%",
        padding: "0px 20px",
        flexShrink: 0,
      }}
    >
      {/* Heading */}
      <div
        style={{
          ...acornBold,
          color: "#232f2e",
          textAlign: "center",
          lineHeight: "1.05",
          maxWidth: "100%",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "clamp(52px, 8vw, 96px)",
            letterSpacing: "-1px",
          }}
        >
          Hi. I'm Disha.
        </p>
        <p
          style={{
            margin: 0,
            fontSize: "clamp(48px, 7.5vw, 90px)",
            letterSpacing: "-1px",
          }}
        >
          A Designer.
        </p>
      </div>

      {/* Subtitle */}
      <p
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          color: "rgba(46,53,56,0.6)",
          textAlign: "center",
          lineHeight: "27.2px",
          margin: 0,
          maxWidth: "480px",
          whiteSpace: "nowrap",
        }}
      >
I design clarity into systems that can’t afford to be confusing.
      </p>

      {/* CTA Buttons */}
      <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
        <Link
          to="/case-studies"
          className="btn-hero-primary"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: "14px",
            color: "#2e3538",
            textDecoration: "none",
            background: "#f0d7ff",
            border: "2px solid #2e3538",
            borderRadius: "100px",
            padding: "13px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            whiteSpace: "nowrap",
          }}
        >
          See my recently potted work ↓
        </Link>
        <Link
          to="/about"
          className="btn-hero-secondary"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: "14px",
            color: "#2e3538",
            textDecoration: "none",
            background: "transparent",
            border: "2px solid #2e3538",
            borderRadius: "100px",
            padding: "13px 29px",
            whiteSpace: "nowrap",
          }}
        >
          About me
        </Link>
      </div>
    </div>
  );
}

// ─── Section View All Button ──────────────────────────────────────────────────

function ViewAllBtn({ to }: { to: string }) {
  return (
    <Link
      to={to}
      className="btn-section-view"
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 500,
        fontSize: "13px",
        color: "#ffffeb",
        textDecoration: "none",
        border: "1.028px solid #ffffeb",
        borderRadius: "100px",
        padding: "10px 23px",
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
    >
      View all →
    </Link>
  );
}

// ─── Case Studies Section ─────────────────────────────────────────────────────

function CaseStudiesSection() {
  return (
    <div
      style={{
        background: "#034f46",
        marginBottom: "-97px",
        position: "relative",
        borderRadius: "100px",
        boxShadow: "0px -4px 40px 0px rgba(0,0,0,0.1), 0px 12px 40px 0px rgba(0,0,0,0.25)",
        width: "100%",
        zIndex: 2,
        flexShrink: 0,
        boxSizing: "border-box",
      }}
    >
      <div
        className="section-padding"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          alignItems: "center",
          padding: "64px 84px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Header row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            gap: "16px",
          }}
        >
          <p
            style={{
              ...acornBold,
              fontSize: "36px",
              color: "#ffffeb",
              lineHeight: "43.2px",
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            Case studies
          </p>
          <ViewAllBtn to="/case-studies" />
        </div>

        {/* Cards */}
        <div
          className="cards-row"
          style={{ display: "flex", gap: "24px", alignItems: "stretch", width: "100%" }}
        >
          {caseStudyCards.map((card, i) => (
            <ProjectCard key={i} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── AI Playground Section ───────────────────────────────────────────────────

function AIPlaygroundSection() {
  return (
    <div
      style={{
        background: "#232f2e",
        marginBottom: "-97px",
        position: "relative",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: "100px",
        borderBottomRightRadius: "100px",
        boxShadow: "0px 4px 40px 0px rgba(0,0,0,0.25)",
        width: "100%",
        zIndex: 1,
        flexShrink: 0,
        boxSizing: "border-box",
      }}
    >
      <div
        className="section-padding"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          alignItems: "center",
          padding: "120px 84px 64px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Header row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            gap: "16px",
          }}
        >
          <p
            style={{
              ...acornBold,
              fontSize: "36px",
              color: "#ffffeb",
              lineHeight: "43.2px",
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            AI playground
          </p>
          <ViewAllBtn to="/ai-playground" />
        </div>

        {/* Cards */}
        <div
          className="cards-row"
          style={{ display: "flex", gap: "24px", alignItems: "stretch", width: "100%" }}
        >
          {aiPlaygroundCards.map((card, i) => (
            <ProjectCard key={i} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Contact + Footer ─────────────────────────────────────────────────────────

function ContactFooter() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        alignItems: "center",
        width: "100%",
        flexShrink: 0,
      }}
    >
      {/* Contact CTA */}
      <div
        style={{
          background: "#034f46",
          position: "relative",
          borderTopLeftRadius: "50px",
          borderTopRightRadius: "50px",
          boxShadow: "0px -4px 40px 0px rgba(0,0,0,0.25)",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "53px 103px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "56px",
              alignItems: "center",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            {/* Left: heading + subtitle */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                flex: 1,
                minWidth: "200px",
              }}
            >
              <p
                style={{
                  ...acornBold,
                  fontSize: "36px",
                  color: "#ffffff",
                  lineHeight: "43.2px",
                  margin: 0,
                  whiteSpace: "nowrap",
                }}
              >
                Contact me
              </p>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 400,
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: "24px",
                  margin: 0,
                }}
              >
                I'm available for freelance work. Let's figure out if we're a good fit.
              </p>
            </div>

            {/* Right: button */}
            <a
              href="https://www.linkedin.com/in/disha-jain-266b03237/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-contact"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                color: "#2e3538",
                textDecoration: "none",
                background: "#f0d7ff",
                border: "1.028px solid #2e3538",
                borderRadius: "100px",
                padding: "13px 28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              Say hello →
            </a>
          </div>
        </div>
      </div>

      {/* Footer text */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            color: "#2e3538",
            margin: 0,
          }}
        >
          You could have been anywhere on the internet, yet you're here. Thanks for visiting!
        </p>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            color: "#034f46",
            margin: 0,
            whiteSpace: "nowrap",
          }}
        >
          Made with love by Disha · 2026
        </p>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function Landing() {
  return (
    <div
      style={{
        background: "#ffffeb",
        display: "flex",
        flexDirection: "column",
        gap: "0px",
        alignItems: "center",
        width: "100%",
        minHeight: "100vh",
        paddingTop: "66px",
      }}
    >
      <style>{buttonStyles}</style>

      {/* Hero */}
      <div style={{ padding: "136px 0px", display: "flex", justifyContent: "center", width: "100%" }}>
        <Hero />
      </div>

      {/* Two overlapping dark sections */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          isolation: "isolate",
          alignItems: "flex-start",
          paddingBottom: "145px",
          width: "100%",
          flexShrink: 0,
        }}
      >
        <CaseStudiesSection />
        <AIPlaygroundSection />
      </div>

      {/* Spacer to compensate for nested negative margins */}
      <div style={{ width: "100%", paddingBottom: "60px" }}>
        <ContactFooter />
      </div>
    </div>
  );
}