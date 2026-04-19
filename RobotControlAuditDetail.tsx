import { useRef, useState, useEffect } from "react";
// TODO: Import Link from react-router once Router context is available in Figma Make
// import { Link } from "react-router";
import { CaseStudyFooter } from "../components/CaseStudyFooter";

const baseGitHubUrl =
  "https://raw.githubusercontent.com/jaindisha2703/portfolio/main/";

const acornBold: React.CSSProperties = {
  fontFamily: "'Acorn', serif",
  fontWeight: 700,
  fontStyle: "normal",
};

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "context", label: "Context" },
  { id: "findings", label: "Findings" },
  { id: "insight", label: "Insight" },
  { id: "direction", label: "Direction" },
  { id: "reflection", label: "Reflection" },
];

const robotStyles = `
  .robot-back { transition: opacity 0.15s ease; text-decoration: none; }
  .robot-back:hover { opacity: 0.55; }
  .robot-nav-btn {
    background: none; border: none; cursor: pointer;
    text-align: left; padding: 0; display: block;
    width: 100%; transition: color 0.15s ease, border-color 0.15s ease;
  }
  .robot-sidebar   { display: flex !important; }
  .robot-mobile-bar { display: none !important; }
  @media (max-width: 768px) {
    .robot-sidebar    { display: none !important; }
    .robot-mobile-bar { display: flex !important; }
    .robot-page-pad   { padding: 0 20px !important; gap: 20px !important; }
    .robot-main       { padding-top: 32px !important; padding-bottom: 48px !important; }
    .robot-hero-title { font-size: 34px !important; line-height: 40px !important; }
    .robot-overview-grid { flex-direction: column !important; }
    .robot-pattern-grid  { grid-template-columns: 1fr !important; }
    .robot-before-after  { grid-template-columns: 1fr !important; }
    .robot-insight-split { grid-template-columns: 1fr !important; }
  }
`;

// ── Primitives ────────────────────────────────────────────────────────────────

function CapLabel({ text }: { text: string }) {
  return (
    <p
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 500,
        fontSize: "11px",
        letterSpacing: "1.54px",
        textTransform: "uppercase",
        color: "rgba(46,53,56,0.38)",
        margin: 0,
      }}
    >
      {text}
    </p>
  );
}

function Divider() {
  return (
    <div
      style={{
        width: "100%",
        height: "1px",
        background: "rgba(3,79,70,0.1)",
        margin: 0,
      }}
    />
  );
}

function HeuristicTags({ tags }: { tags: { num: string; name: string }[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <p
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "1.54px",
          textTransform: "uppercase",
          color: "rgba(46,53,56,0.38)",
          margin: 0,
        }}
      >
        Heuristic violated
      </p>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {tags.map((tag, i) => (
          <div
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "rgba(3,79,70,0.06)",
              border: "1px solid rgba(3,79,70,0.2)",
              borderRadius: "100px",
              padding: "6px 14px",
            }}
          >
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                color: "#034f46",
              }}
            >
              #{tag.num}
            </span>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "12px",
                color: "rgba(46,53,56,0.65)",
              }}
            >
              {tag.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: "16px",
        lineHeight: "28px",
        color: "#2e3538",
        margin: 0,
      }}
    >
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        ...acornBold,
        fontSize: "38px",
        lineHeight: "43.7px",
        color: "#2e3538",
        margin: 0,
      }}
    >
      {children}
    </h2>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        ...acornBold,
        fontSize: "28px",
        lineHeight: "36px",
        color: "#034f46",
        margin: 0,
        padding: "20px 0",
      }}
    >
      {children}
    </p>
  );
}

function StyledQuote({
  quote,
  attribution,
}: {
  quote: string;
  attribution?: string;
}) {
  return (
    <div style={{ borderLeft: "3px solid #034f46", paddingLeft: "24px" }}>
      <p
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "18px",
          lineHeight: "30.6px",
          color: "#034f46",
          margin: 0,
          fontStyle: "italic",
        }}
      >
        {quote}
      </p>
      {attribution && (
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "12px",
            color: "rgba(46,53,56,0.5)",
            margin: "6px 0 0 0",
          }}
        >
          — {attribution}
        </p>
      )}
    </div>
  );
}

function CalloutBox({
  color,
  children,
}: {
  color: "blue" | "orange" | "green";
  children: React.ReactNode;
}) {
  const bg = { blue: "#b5ced4", orange: "#d4c3b5", green: "#c4d4b5" }[color];
  return (
    <div
      style={{
        background: bg,
        borderRadius: "16px",
        padding: "24px",
      }}
    >
      {children}
    </div>
  );
}

function ImgCard({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div
        style={{
          borderRadius: "16px",
          overflow: "hidden",
          border: "1px solid rgba(3,79,70,0.13)",
          background: "rgba(3,79,70,0.03)",
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>
      {caption && (
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "12px",
            lineHeight: "18.6px",
            color: "rgba(46,53,56,0.42)",
            margin: 0,
          }}
        >
          {caption}
        </p>
      )}
    </div>
  );
}

function VideoCard({ src, caption }: { src: string; caption?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(3,79,70,0.13)", background: "#000" }}>
        <video
          src={src}
          controls
          muted
          loop
          playsInline
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>
      {caption && (
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "12px", lineHeight: "18.6px", color: "rgba(46,53,56,0.42)", margin: 0 }}>
          {caption}
        </p>
      )}
    </div>
  );
}

function ScreenshotPlaceholder({ label }: { label: string }) {
  return (
    <div
      style={{
        border: "2px dashed rgba(3,79,70,0.25)",
        borderRadius: "16px",
        background: "rgba(3,79,70,0.02)",
        padding: "52px 24px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <p
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "11px",
          color: "rgba(46,53,56,0.32)",
          margin: 0,
          letterSpacing: "1.4px",
          textTransform: "uppercase",
        }}
      >
        Screenshot
      </p>
      <p
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "14px",
          color: "rgba(46,53,56,0.5)",
          margin: 0,
        }}
      >
        {label}
      </p>
    </div>
  );
}

// ── Diagrams ──────────────────────────────────────────────────────────────────

function WorkflowDiagram() {
  const steps = [
    "Define Points",
    "Create Paths",
    "Test",
    "Build Behavior",
    "Run Robot",
  ];
  return (
    <div
      style={{
        background: "rgba(3,79,70,0.04)",
        border: "1px solid rgba(3,79,70,0.12)",
        borderRadius: "16px",
        padding: "28px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      {/* On paper */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "1.4px",
            textTransform: "uppercase",
            color: "rgba(46,53,56,0.38)",
            margin: 0,
          }}
        >
          On paper — linear
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          {steps.map((step, i) => (
            <div
              key={i}
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <div
                style={{
                  background: "#034f46",
                  color: "#ffffeb",
                  borderRadius: "8px",
                  padding: "8px 14px",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                {step}
              </div>
              {i < steps.length - 1 && (
                <span
                  style={{
                    color: "#034f46",
                    fontWeight: 600,
                    fontSize: "16px",
                  }}
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "1px",
          background: "rgba(3,79,70,0.12)",
        }}
      />

      {/* In reality */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "1.4px",
            textTransform: "uppercase",
            color: "rgba(46,53,56,0.38)",
            margin: 0,
          }}
        >
          In reality — back & forth under pressure
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          {steps.map((step, i) => (
            <div
              key={i}
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <div
                style={{
                  background: "#ffffeb",
                  color: "#034f46",
                  border: "1.5px solid #034f46",
                  borderRadius: "8px",
                  padding: "8px 14px",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                {step}
              </div>
              {i < steps.length - 1 && (
                <span
                  style={{
                    color: "#034f46",
                    fontWeight: 600,
                    fontSize: "16px",
                  }}
                >
                  ↔
                </span>
              )}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "4px" }}>
          {["Fix", "Repeat"].map((label, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  background: "#d4c3b5",
                  borderRadius: "8px",
                  padding: "8px 14px",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#2e3538",
                }}
              >
                {label}
              </div>
              {i === 0 && (
                <span style={{ color: "#034f46", fontWeight: 600, fontSize: "16px" }}>→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DependencyChain() {
  const steps = [
    { label: "Edit Point", desc: "Change coordinates", error: false },
    { label: "Path affected", desc: "Dependencies shift", error: false },
    { label: "Behavior affected", desc: "Execution changes", error: false },
    { label: "❌  No feedback", desc: "System stays silent", error: true },
  ];
  return (
    <div
      style={{
        background: "rgba(3,79,70,0.04)",
        border: "1px solid rgba(3,79,70,0.12)",
        borderRadius: "16px",
        padding: "28px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <p
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "1.4px",
          textTransform: "uppercase",
          color: "rgba(46,53,56,0.38)",
          margin: 0,
        }}
      >
        Hidden dependency chain
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "8px",
          flexWrap: "wrap",
        }}
      >
        {steps.map((step, i) => (
          <div
            key={i}
            style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  background: step.error ? "#d4c3b5" : "#034f46",
                  color: step.error ? "#2e3538" : "#ffffeb",
                  borderRadius: "8px",
                  padding: "10px 16px",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                {step.label}
              </div>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "11px",
                  color: "rgba(46,53,56,0.5)",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                {step.desc}
              </p>
            </div>
            {i < steps.length - 1 && (
              <span
                style={{
                  color: "#034f46",
                  fontWeight: 600,
                  fontSize: "16px",
                  marginTop: "10px",
                }}
              >
                →
              </span>
            )}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {[
          "No clear indication of what broke",
          "No guidance on what to fix",
          "Users rely on trial, error, and asking others",
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <span style={{ fontSize: "14px" }}>❌</span>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "14px",
                color: "#2e3538",
                margin: 0,
              }}
            >
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AuditStatsBlock() {
  return (
    <div
      style={{
        background: "#034f46",
        borderRadius: "20px",
        padding: "32px 42px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <div
        style={{ display: "flex", gap: "48px", flexWrap: "wrap", alignItems: "flex-end" }}
      >
        {[
          { number: "38", label: "Total Findings" },
          { number: "~60%", label: "Major or Catastrophic" },
          { number: "3", label: "Key Patterns" },
        ].map((stat, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <p
              style={{
                ...acornBold,
                fontSize: "52px",
                lineHeight: 1,
                color: "#ffffeb",
                margin: 0,
              }}
            >
              {stat.number}
            </p>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "13px",
                color: "rgba(255,255,235,0.6)",
                margin: 0,
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      <div
        style={{
          width: "100%",
          height: "1px",
          background: "rgba(255,255,235,0.15)",
        }}
      />
      <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
        {[
          { label: "Framework", value: "Nielsen's Usability Heuristics" },
          { label: "Scope", value: "Core deployment modules" },
          { label: "Nature", value: "Systemic — not isolated incidents" },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "10px",
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                color: "rgba(255,255,235,0.45)",
                margin: 0,
              }}
            >
              {item.label}
            </p>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "14px",
                color: "#ffffeb",
                margin: 0,
              }}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FileManagementFlow() {
  const steps = [
    "Go to Backup Files",
    "Select Version",
    "Load It",
    "Create New File",
    "Load Again",
    "Delete / Retain",
    "Rename & Save",
  ];
  return (
    <div
      style={{
        background: "rgba(3,79,70,0.04)",
        border: "1px solid rgba(3,79,70,0.12)",
        borderRadius: "16px",
        padding: "28px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <p
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "1.4px",
          textTransform: "uppercase",
          color: "rgba(46,53,56,0.38)",
          margin: 0,
        }}
      >
        To edit a single file, users had to:
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          flexWrap: "wrap",
        }}
      >
        {steps.map((step, i) => (
          <div
            key={i}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span
                style={{
                  background: "#034f46",
                  color: "#ffffeb",
                  borderRadius: "50%",
                  width: "22px",
                  height: "22px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </span>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "13px",
                  color: "#2e3538",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                {step}
              </span>
            </div>
            {i < steps.length - 1 && (
              <span style={{ color: "rgba(3,79,70,0.5)", fontSize: "14px" }}>
                →
              </span>
            )}
          </div>
        ))}
      </div>
      <div
        style={{
          background: "#d4c3b5",
          borderRadius: "12px",
          padding: "16px 20px",
        }}
      >
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "14px",
            lineHeight: "23px",
            color: "#2e3538",
            margin: 0,
          }}
        >
          <strong>Editing ≠ direct.</strong> Even after learning the process,
          users could not confidently trust what the system state actually was.
        </p>
      </div>
    </div>
  );
}

function TimelineMismatch() {
  return (
    <div
      style={{
        background: "rgba(3,79,70,0.04)",
        border: "1px solid rgba(3,79,70,0.12)",
        borderRadius: "16px",
        padding: "28px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <p
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "1.4px",
          textTransform: "uppercase",
          color: "rgba(46,53,56,0.38)",
          margin: 0,
        }}
      >
        Decision timing mismatch
      </p>

      {/* What the system does */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
          <div
            style={{
              background: "#d4c3b5",
              borderRadius: "8px",
              padding: "10px 16px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              color: "#2e3538",
              whiteSpace: "nowrap",
            }}
          >
            Point Stage (early)
          </div>
          <span style={{ color: "#034f46", fontSize: "16px" }}>→</span>
          <div
            style={{
              background: "#d4c3b5",
              borderRadius: "8px",
              padding: "10px 16px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "13px",
              color: "#2e3538",
              whiteSpace: "nowrap",
            }}
          >
            ❌ Asked for sequence decision here
          </div>
        </div>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "12px",
            color: "rgba(46,53,56,0.5)",
            margin: 0,
            paddingLeft: "4px",
          }}
        >
          Users are still defining coordinates — not thinking about execution
          order yet
        </p>
      </div>

      <div
        style={{ width: "100%", height: "1px", background: "rgba(3,79,70,0.12)" }}
      />

      {/* What should happen */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
          <div
            style={{
              background: "#c4d4b5",
              borderRadius: "8px",
              padding: "10px 16px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              color: "#2e3538",
              whiteSpace: "nowrap",
            }}
          >
            Path Stage (later)
          </div>
          <span style={{ color: "#034f46", fontSize: "16px" }}>→</span>
          <div
            style={{
              background: "#c4d4b5",
              borderRadius: "8px",
              padding: "10px 16px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "13px",
              color: "#2e3538",
              whiteSpace: "nowrap",
            }}
          >
            ✓ Actual decision-making happens here
          </div>
        </div>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "12px",
            color: "rgba(46,53,56,0.5)",
            margin: 0,
            paddingLeft: "4px",
          }}
        >
          Users have full context — sequencing makes sense at this stage
        </p>
      </div>
    </div>
  );
}

function CoreInsightSplit() {
  return (
    <div
      className="robot-insight-split"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        gap: "16px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#034f46",
          borderRadius: "16px",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "1.4px",
            textTransform: "uppercase",
            color: "rgba(255,255,235,0.5)",
            margin: 0,
          }}
        >
          The System
        </p>
        {[
          "Linear — assumes perfect sequence",
          "Silent — no visible state",
          "Expects steps to happen once",
        ].map((item, i) => (
          <div
            key={i}
            style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}
          >
            <span
              style={{ color: "rgba(255,255,235,0.4)", fontSize: "14px", marginTop: "2px" }}
            >
              —
            </span>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "14px",
                color: "#ffffeb",
                margin: 0,
                lineHeight: "22px",
              }}
            >
              {item}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
          padding: "0 8px",
        }}
      >
        <span style={{ fontSize: "22px" }}>⚡</span>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "1px",
            textTransform: "uppercase",
            color: "#034f46",
            margin: 0,
            textAlign: "center",
          }}
        >
          mismatch
        </p>
      </div>

      <div
        style={{
          background: "#d4c3b5",
          borderRadius: "16px",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "1.4px",
            textTransform: "uppercase",
            color: "rgba(46,53,56,0.45)",
            margin: 0,
          }}
        >
          Real Usage
        </p>
        {[
          "Iterative — back and forth constantly",
          "Uncertain — needs system confirmation",
          "Requires feedback at every stage",
        ].map((item, i) => (
          <div
            key={i}
            style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}
          >
            <span
              style={{ color: "#034f46", fontSize: "14px", marginTop: "2px" }}
            >
              —
            </span>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "14px",
                color: "#2e3538",
                margin: 0,
                lineHeight: "22px",
              }}
            >
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function BeforeAfterCard() {
  return (
    <div
      className="robot-before-after"
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}
    >
      {[
        {
          label: "Before",
          color: "#d4c3b5",
          icon: "❌",
          items: [
            "Hidden system state",
            "Everything lives in memory",
            "Trial and error to recover",
            "No guidance on failures",
          ],
        },
        {
          label: "After",
          color: "#c4d4b5",
          icon: "✓",
          items: [
            "Visible system state",
            "Structured, guided flow",
            "Clear step alignment",
            "Feedback at each stage",
          ],
        },
      ].map((col, i) => (
        <div
          key={i}
          style={{
            background: col.color,
            borderRadius: "16px",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "1.4px",
              textTransform: "uppercase",
              color: "rgba(46,53,56,0.45)",
              margin: 0,
            }}
          >
            {col.label}
          </p>
          {col.items.map((item, j) => (
            <div
              key={j}
              style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}
            >
              <span style={{ fontSize: "14px", marginTop: "1px" }}>
                {col.icon}
              </span>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "14px",
                  color: "#2e3538",
                  margin: 0,
                  lineHeight: "22px",
                }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export function RobotControlAuditDetail() {
  const [activeSection, setActiveSection] = useState("overview");

  const overviewRef   = useRef<HTMLDivElement>(null);
  const contextRef    = useRef<HTMLDivElement>(null);
  const findingsRef   = useRef<HTMLDivElement>(null);
  const insightRef    = useRef<HTMLDivElement>(null);
  const directionRef  = useRef<HTMLDivElement>(null);
  const reflectionRef = useRef<HTMLDivElement>(null);

  const refMap: Record<string, React.RefObject<HTMLDivElement>> = {
    overview:   overviewRef,
    context:    contextRef,
    findings:   findingsRef,
    insight:    insightRef,
    direction:  directionRef,
    reflection: reflectionRef,
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    Object.entries(refMap).forEach(([id, ref]) => {
      if (!ref.current) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-10% 0px -65% 0px" }
      );
      obs.observe(ref.current);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = refMap[id]?.current;
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div style={{ background: "#ffffeb", minHeight: "100vh", paddingTop: "66px" }}>
      <style>{robotStyles}</style>

      {/* ── Mobile sticky nav ────────────────────────────────────────────────── */}
      <div
        className="robot-mobile-bar"
        style={{
          position: "sticky",
          top: "66px",
          zIndex: 50,
          background: "#ffffeb",
          borderBottom: "1px solid rgba(3,79,70,0.1)",
          overflowX: "auto",
          alignItems: "center",
          gap: 0,
          boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
        }}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            className="robot-nav-btn"
            onClick={() => scrollTo(item.id)}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "13px",
              fontWeight: activeSection === item.id ? 500 : 400,
              color:
                activeSection === item.id
                  ? "#034f46"
                  : "rgba(46,53,56,0.5)",
              padding: "14px 18px",
              whiteSpace: "nowrap",
              borderBottom:
                activeSection === item.id
                  ? "2px solid #034f46"
                  : "2px solid transparent",
              width: "auto",
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* ── Two-column layout ────────────────────────────────────────────────── */}
      <div
        className="robot-page-pad"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 36px 48px",
          boxSizing: "border-box",
          display: "flex",
          gap: "28px",
          alignItems: "flex-start",
        }}
      >
        {/* ── Sidebar ────────────────────────────────────────────────────────── */}
        <aside
          className="robot-sidebar"
          style={{
            width: "200px",
            flexShrink: 0,
            flexDirection: "column",
            position: "sticky",
            top: "0",
            height: "fit-content",
            paddingTop: "56px",
            paddingBottom: "48px",
          }}
        >
          <div
            style={{
              background: "#232f2e",
              borderRadius: "16px",
              padding: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {/* TODO: Replace <a> with <Link to="/work"> once react-router context is available */}
            <a
              href="#work"
              className="robot-back"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "13px",
                color: "#ffffeb",
                display: "flex",
                alignItems: "center",
                paddingLeft: "12px",
                paddingRight: "28px",
              }}
            >
              Back
            </a>
            <div
              style={{
                background: "#034f46",
                borderRadius: "12px",
                padding: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
              }}
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    className="robot-nav-btn"
                    onClick={() => scrollTo(item.id)}
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "14px",
                      fontWeight: isActive ? 500 : 400,
                      color: isActive
                        ? "#ffffeb"
                        : "rgba(255,255,235,0.65)",
                      paddingLeft: "13.6px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      borderLeft: isActive
                        ? "1.6px solid #ffffeb"
                        : "1.6px solid rgba(255,255,235,0.65)",
                    }}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* ── Main content ─────────────────────────────────────────────────── */}
        <main
          className="robot-main"
          style={{
            flex: 1,
            minWidth: 0,
            paddingTop: "56px",
            paddingBottom: "48px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {/* Tag */}
          <div style={{ display: "inline-block", width: "fit-content" }}>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.99px",
                textTransform: "uppercase",
                color: "#2e3538",
                background: "#FFFFEB",
                border: "1px solid #000000",
                borderRadius: "100px",
                padding: "5px 15px",
              }}
            >
              UX Research
            </div>
          </div>

          {/* Hero title */}
          <h1
            className="robot-hero-title"
            style={{
              ...acornBold,
              fontSize: "53.748px",
              lineHeight: "56.973px",
              color: "#2e3538",
              margin: 0,
            }}
          >
            Built to Execute —{" "}
            <span style={{ color: "#034f46" }}>Not to Be Used</span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "17px",
              lineHeight: "29.24px",
              color: "rgba(46,53,56,0.62)",
              margin: 0,
            }}
          >
            A heuristic audit of a robot control system — evaluating how a
            technically functional system fails the engineers who depend on it
            under real deployment pressure.
          </p>

          <ImgCard src={`${baseGitHubUrl}audit-hero.svg`} alt="Robot control software UI" />

          {/* ── Overview ───────────────────────────────────────────────────── */}
          <div
            ref={overviewRef}
            id="overview"
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <CapLabel text="OVERVIEW" />
            <div
              style={{
                background: "#034f46",
                borderRadius: "20px",
                padding: "32px 42px",
                width: "100%",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              <div
                className="robot-overview-grid"
                style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}
              >
                {[
                  {
                    label: "What it is",
                    value:
                      "Heuristic audit of a robot arm control system used by deployment engineers",
                  },
                  {
                    label: "Method",
                    value: "Nielsen's Usability Heuristics",
                  },
                  {
                    label: "Findings",
                    value: "38 issues across core modules",
                  },
                  {
                    label: "My role",
                    value: "UX Researcher & Designer",
                  },
                ].map((row) => (
                  <div
                    key={row.label}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                      flex: 1,
                      minWidth: "140px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 500,
                        fontSize: "10px",
                        letterSpacing: "1.2px",
                        textTransform: "uppercase",
                        color: "rgba(255,255,235,0.45)",
                        margin: 0,
                      }}
                    >
                      {row.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "15px",
                        lineHeight: "23.25px",
                        color: "#ffffeb",
                        margin: 0,
                      }}
                    >
                      {row.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Full audit report link */}
              <a
                href="https://drive.google.com/file/d/1YAxref5PLOGa9-lCQ_n2_xGxjTkpHe4Q/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  width: "fit-content",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: "13px",
                  color: "rgba(255,255,235,0.7)",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255,255,235,0.3)",
                  paddingBottom: "1px",
                  transition: "color 0.15s ease, border-color 0.15s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#ffffeb";
                  (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "rgba(255,255,235,0.7)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,235,0.7)";
                  (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "rgba(255,255,235,0.3)";
                }}
              >
                View full audit report →
              </a>
            </div>
          </div>

          <Divider />

          {/* ── Context ────────────────────────────────────────────────────── */}
          <div
            ref={contextRef}
            id="context"
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <CapLabel text="CONTEXT" />

            <SectionHeading>
              On paper, the workflow is linear. In practice, it isn't.
            </SectionHeading>

            <BodyText>
              This software is used by deployment engineers to program robotic
              arms at client sites. Deployment happens under pressure —
              timelines, client expectations, and system failures.
            </BodyText>

            <WorkflowDiagram />

            <Divider />

            <CapLabel text="USER GOAL" />

            <PullQuote>
              The goal is not to "use software." The goal is to make the robot
              run correctly and reliably.
            </PullQuote>

            <BodyText>
              But achieving that requires tracking what changed, remembering
              dependencies, and manually correcting steps across modules. Much
              of the process exists in memory.
            </BodyText>

            <CalloutBox color="orange">
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "14px",
                  color: "rgba(46,53,56,0.7)",
                  margin: "0 0 16px 0",
                  fontWeight: 500,
                }}
              >
                Even experienced engineers described it as:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  {
                    quote:
                      '"Full concentration lagana padta hai — kya karna hai, kaise karna hai."',
                    name: "Adnan Alvi, Robotics Software Engineer",
                  },
                  {
                    quote: '"Bhot dimah lagana padta hai."',
                    name: "Shivam, Deployment Engineer",
                  },
                ].map((q, i) => (
                  <div
                    key={i}
                    style={{ borderLeft: "3px solid #034f46", paddingLeft: "16px" }}
                  >
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "15px",
                        lineHeight: "26px",
                        color: "#034f46",
                        fontStyle: "italic",
                        margin: "0 0 4px 0",
                      }}
                    >
                      {q.quote}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "12px",
                        color: "rgba(46,53,56,0.5)",
                        margin: 0,
                      }}
                    >
                      — {q.name}
                    </p>
                  </div>
                ))}
              </div>
            </CalloutBox>
          </div>

          <Divider />

          {/* ── Findings ───────────────────────────────────────────────────── */}
          <div
            ref={findingsRef}
            id="findings"
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <CapLabel text="FINDINGS" />

            <SectionHeading>Where the system breaks</SectionHeading>

            <BodyText>
              Actions do not stay contained. Editing one element can impact
              multiple modules — but these relationships are not visible.
            </BodyText>

            <DependencyChain />

            <BodyText>
              Across multiple engineers, the same patterns appeared. These were
              not isolated incidents.
            </BodyText>

            <AuditStatsBlock />

            {/* Key Patterns */}
            <CapLabel text="KEY PATTERNS" />

            <div
              className="robot-pattern-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "12px",
              }}
            >
              {[
                {
                  bg: "#b5ced4",
                  num: "01",
                  title: "Lack of system visibility",
                  body: "Users could not see what changed, what failed, or what required action.",
                },
                {
                  bg: "#d4c3b5",
                  num: "02",
                  title: "Mismatch with expected workflows",
                  body: "Basic actions did not follow familiar patterns — especially file handling.",
                },
                {
                  bg: "#c4d4b5",
                  num: "03",
                  title: "Designed for ideal flow, not real use",
                  body: "The system assumed linear execution while actual work was iterative.",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  style={{
                    background: card.bg,
                    borderRadius: "16px",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "1.4px",
                      textTransform: "uppercase",
                      color: "rgba(46,53,56,0.4)",
                      margin: 0,
                    }}
                  >
                    {card.num}
                  </p>
                  <p
                    style={{
                      ...acornBold,
                      fontSize: "18px",
                      lineHeight: "24px",
                      color: "#2e3538",
                      margin: 0,
                    }}
                  >
                    {card.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "14px",
                      lineHeight: "22px",
                      color: "rgba(46,53,56,0.72)",
                      margin: 0,
                    }}
                  >
                    {card.body}
                  </p>
                </div>
              ))}
            </div>

            <Divider />

            {/* Proof 1 */}
            <CapLabel text="PROOF 1 — FILE MANAGEMENT" />

            <SectionHeading>Editing a file was not direct.</SectionHeading>

            <FileManagementFlow />

            <HeuristicTags
              tags={[
                { num: "2", name: "Match Between System & the Real World" },
              ]}
            />

            <VideoCard src={`${baseGitHubUrl}audit-file-management.mp4`} caption="File management flow — backup, load, and create in the live system" />

            <Divider />

            {/* Proof 2 */}
            <CapLabel text="PROOF 2 — SEQUENCE PLACEMENT" />

            <SectionHeading>Asked to decide too early.</SectionHeading>

            <BodyText>
              This mismatch caused premature decisions, repeated rework, and a
              fragmented workflow.
            </BodyText>

            <TimelineMismatch />

            <HeuristicTags
              tags={[
                { num: "2", name: "Match Between System & the Real World" },
                { num: "3", name: "User Control & Freedom" },
              ]}
            />

            <Divider />

            {/* Proof 3 */}
            <CapLabel text="PROOF 3 — BEHAVIOR TREE" />

            <SectionHeading>Complexity without navigation.</SectionHeading>

            <BodyText>
              The system allowed complexity — but did not support working within
              it.
            </BodyText>

            <CalloutBox color="orange">
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  "No search — finding a specific node required manual scanning",
                  "No structural guidance for safe editing as complexity grew",
                  "No clear indication of hierarchy or dependencies between nodes",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "14px", marginTop: "2px" }}>❌</span>
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "14px",
                        color: "#2e3538",
                        margin: 0,
                        lineHeight: "22px",
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </CalloutBox>

            <HeuristicTags
              tags={[
                { num: "7", name: "Flexibility & Efficiency of Use" },
                { num: "8", name: "Aesthetic & Minimalist Design" },
              ]}
            />

            <VideoCard src={`${baseGitHubUrl}audit-behavior-tree.mp4`} caption="Behavior Tree UI — dense node structure, no visual guidance for what to do next" />
          </div>

          <Divider />

          {/* ── Insight ────────────────────────────────────────────────────── */}
          <div
            ref={insightRef}
            id="insight"
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <CapLabel text="CORE INSIGHT" />

            <PullQuote>
              The system works — but it makes users do the thinking.
            </PullQuote>

            <BodyText>
              The issues were not independent. The system was built for
              execution — not for understanding.
            </BodyText>

            <CoreInsightSplit />

            <Divider />

            <CapLabel text="PRIORITISATION" />

            <BodyText>Not all issues had equal impact.</BodyText>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                {
                  area: "File management",
                  impact:
                    "Affects the entire workflow — entry point to every task",
                },
                {
                  area: "Sequence placement",
                  impact:
                    "Affects decision-making — forces choices before context is available",
                },
                {
                  area: "Behavior tree",
                  impact:
                    "Affects navigation and debugging — breaks down as work scales",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                    padding: "16px 20px",
                    background: "rgba(3,79,70,0.04)",
                    border: "1px solid rgba(3,79,70,0.12)",
                    borderRadius: "12px",
                  }}
                >
                  <span
                    style={{
                      background: "#034f46",
                      color: "#ffffeb",
                      borderRadius: "50%",
                      width: "32px",
                      height: "32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "14px",
                      fontWeight: 600,
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "15px",
                        fontWeight: 500,
                        color: "#2e3538",
                        margin: 0,
                      }}
                    >
                      {item.area}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "14px",
                        color: "rgba(46,53,56,0.62)",
                        margin: 0,
                      }}
                    >
                      {item.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Divider />

          {/* ── Direction ──────────────────────────────────────────────────── */}
          <div
            ref={directionRef}
            id="direction"
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <CapLabel text="DESIGN DIRECTION" />

            <SectionHeading>Structuring what already existed.</SectionHeading>

            <BodyText>
              The goal was not to redesign everything — it was to structure
              existing behaviors into a clearer, more predictable system.
            </BodyText>

            <BeforeAfterCard />


            <Divider />

            <CapLabel text="IMPACT" />

            <div
              style={{
                background: "#034f46",
                borderRadius: "20px",
                padding: "32px 42px",
                display: "flex",
                gap: "40px",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <p
                  style={{
                    ...acornBold,
                    fontSize: "64px",
                    lineHeight: 1,
                    color: "#ffffeb",
                    margin: 0,
                  }}
                >
                  8–9
                </p>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "14px",
                    color: "rgba(255,255,235,0.6)",
                    margin: 0,
                  }}
                >
                  / 10 — avg. user feedback
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  flex: 1,
                  minWidth: "200px",
                }}
              >
                {[
                  "Reduced effort in creating and editing workflows",
                  "Clearer understanding of steps and system state",
                  "Less reliance on trial and error",
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}
                  >
                    <span style={{ color: "#c4d4b5", fontSize: "16px" }}>✓</span>
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "14px",
                        color: "#ffffeb",
                        margin: 0,
                        lineHeight: "22px",
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Divider />

          {/* ── Reflection ─────────────────────────────────────────────────── */}
          <div
            ref={reflectionRef}
            id="reflection"
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <CapLabel text="REFLECTION" />

            <SectionHeading>
              Users were not waiting for a solution. They already had
              workarounds.
            </SectionHeading>

            <StyledQuote quote="The role of design was not to replace their workarounds — but to structure and support them." />

            <BodyText>
              The shift was from creating new flows to making existing workflows
              usable.
            </BodyText>

            <CalloutBox color="green">
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "15px",
                  lineHeight: "26px",
                  color: "#2e3538",
                  margin: 0,
                }}
              >
                One direction explored further was sequencing — how workflows
                are structured and executed. This evolved into a deeper
                exploration of reducing cognitive load in workflow creation.
              </p>
            </CalloutBox>

            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "14px",
                lineHeight: "22px",
                color: "rgba(46,53,56,0.5)",
                margin: 0,
                fontStyle: "italic",
              }}
            >
              (Linked case study coming soon)
            </p>
          </div>
        </main>
      </div>

      <CaseStudyFooter />
    </div>
  );
}
