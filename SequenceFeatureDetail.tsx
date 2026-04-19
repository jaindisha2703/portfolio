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
  { id: "overview",   label: "Overview"   },
  { id: "context",    label: "Context"    },
  { id: "problem",    label: "Problem"    },
  { id: "process",    label: "Process"    },
  { id: "solution",   label: "Solution"   },
  { id: "outcome",    label: "Outcome"    },
  { id: "reflection", label: "Reflection" },
];

const seqStyles = `
  .seq-back { transition: opacity 0.15s ease; text-decoration: none; }
  .seq-back:hover { opacity: 0.55; }
  .seq-nav-btn {
    background: none; border: none; cursor: pointer;
    text-align: left; padding: 0; display: block;
    width: 100%; transition: color 0.15s ease, border-color 0.15s ease;
  }
  .seq-sidebar    { display: flex !important; }
  .seq-mobile-bar { display: none !important; }
  .seq-proto-btn  { transition: background 0.18s ease, transform 0.15s ease; }
  .seq-proto-btn:hover { background: #e3c0ff !important; transform: scale(1.02); }
  @media (max-width: 768px) {
    .seq-sidebar    { display: none !important; }
    .seq-mobile-bar { display: flex !important; }
    .seq-page-pad   { padding: 0 20px !important; gap: 20px !important; }
    .seq-main       { padding-top: 32px !important; padding-bottom: 48px !important; }
    .seq-hero-title { font-size: 34px !important; line-height: 40px !important; }
    .seq-overview-grid  { flex-direction: column !important; }
    .seq-concept-grid   { grid-template-columns: 1fr !important; }
    .seq-stage-grid     { grid-template-columns: 1fr !important; }
  }
`;

// ── Primitives ────────────────────────────────────────────────────────────────

function CapLabel({ text }: { text: string }) {
  return (
    <p style={{
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 500, fontSize: "11px",
      letterSpacing: "1.54px", textTransform: "uppercase",
      color: "rgba(46,53,56,0.38)", margin: 0,
    }}>
      {text}
    </p>
  );
}

function Divider() {
  return <div style={{ width: "100%", height: "1px", background: "rgba(3,79,70,0.1)", margin: 0 }} />;
}

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: "16px", lineHeight: "28px",
      color: "#2e3538", margin: 0,
    }}>
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ ...acornBold, fontSize: "38px", lineHeight: "43.7px", color: "#2e3538", margin: 0 }}>
      {children}
    </h2>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ ...acornBold, fontSize: "28px", lineHeight: "36px", color: "#034f46", margin: 0, padding: "20px 0" }}>
      {children}
    </p>
  );
}

function StyledQuote({ quote, attribution }: { quote: string; attribution?: string }) {
  return (
    <div style={{ borderLeft: "3px solid #034f46", paddingLeft: "24px" }}>
      <p style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: "18px", lineHeight: "30.6px",
        color: "#034f46", margin: 0, fontStyle: "italic",
      }}>
        {quote}
      </p>
      {attribution && (
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "12px", color: "rgba(46,53,56,0.5)", margin: "6px 0 0 0" }}>
          {attribution}
        </p>
      )}
    </div>
  );
}

function CalloutBox({ color, children }: { color: "blue" | "orange" | "green"; children: React.ReactNode }) {
  const bg = { blue: "#b5ced4", orange: "#d4c3b5", green: "#c4d4b5" }[color];
  return (
    <div style={{ background: bg, borderRadius: "16px", padding: "24px" }}>
      {children}
    </div>
  );
}

function ImgCard({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(3,79,70,0.13)", background: "rgba(3,79,70,0.03)" }}>
        <img src={src} alt={alt} style={{ width: "100%", height: "auto", display: "block" }} />
      </div>
      {caption && (
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "12px", lineHeight: "18.6px", color: "rgba(46,53,56,0.42)", margin: 0 }}>
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

function PrototypeLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="seq-proto-btn"
      style={{
        display: "inline-flex", alignItems: "center", gap: "8px",
        width: "fit-content",
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 500, fontSize: "14px",
        color: "#2e3538", textDecoration: "none",
        background: "#f0d7ff",
        border: "1.6px solid #2e3538",
        borderRadius: "100px", padding: "11px 22px",
      }}
    >
      {label} →
    </a>
  );
}

// ── Diagrams ──────────────────────────────────────────────────────────────────

function RepetitiveLoopDiagram() {
  const steps = [
    { label: "Choose Start Point", note: "From available points" },
    { label: "Choose End Point",   note: "From available points" },
    { label: "Set Movement Type",  note: "Cartesian or Joint" },
    { label: "Create Path",        note: "One path done" },
  ];
  return (
    <div style={{
      background: "rgba(3,79,70,0.04)", border: "1px solid rgba(3,79,70,0.12)",
      borderRadius: "16px", padding: "28px", display: "flex", flexDirection: "column", gap: "20px",
    }}>
      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "1.4px", textTransform: "uppercase", color: "rgba(46,53,56,0.38)", margin: 0 }}>
        Old path-making loop, repeated for every path
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
        {steps.map((step, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "center" }}>
              <div style={{
                background: "#034f46", color: "#ffffeb",
                borderRadius: "8px", padding: "10px 16px",
                fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", fontWeight: 500, whiteSpace: "nowrap",
              }}>
                {step.label}
              </div>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", color: "rgba(46,53,56,0.45)", margin: 0, textAlign: "center" }}>
                {step.note}
              </p>
            </div>
            <span style={{ color: "#034f46", fontWeight: 600, fontSize: "16px" }}>→</span>
          </div>
        ))}
        <div style={{
          background: "#d4c3b5", color: "#2e3538",
          borderRadius: "8px", padding: "10px 16px",
          fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", fontWeight: 600, whiteSpace: "nowrap",
        }}>
          Repeat ↺
        </div>
      </div>
      <div style={{ background: "#d4c3b5", borderRadius: "12px", padding: "14px 18px" }}>
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", lineHeight: "22px", color: "#2e3538", margin: 0 }}>
          <strong>The problem:</strong> Each path had behavior tree implications: what happens if it fails, what it triggers, how it connects. Operators couldn't put it on autopilot. Every repetition required strategic thinking.
        </p>
      </div>
    </div>
  );
}

function StageMismatchDiagram() {
  return (
    <div style={{
      background: "rgba(3,79,70,0.04)", border: "1px solid rgba(3,79,70,0.12)",
      borderRadius: "16px", padding: "28px", display: "flex", flexDirection: "column", gap: "20px",
    }}>
      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "1.4px", textTransform: "uppercase", color: "rgba(46,53,56,0.38)", margin: 0 }}>
        Where sequencing lived vs. where it belonged
      </p>
      <div className="seq-stage-grid" style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "16px", alignItems: "start" }}>
        {/* Point Planning - wrong stage */}
        <div style={{ background: "#d4c3b5", borderRadius: "12px", padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "1.4px", textTransform: "uppercase", color: "rgba(46,53,56,0.45)", margin: 0 }}>
            Point Planning
          </p>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", fontWeight: 600, color: "#2e3538", margin: 0 }}>
            Where sequencing was
          </p>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", lineHeight: "21px", color: "rgba(46,53,56,0.65)", margin: 0 }}>
            Operators are defining coordinates. Not yet thinking about how paths relate or what order they run.
          </p>
          <div style={{ display: "flex", gap: "6px", alignItems: "center", marginTop: "4px" }}>
            <span style={{ fontSize: "14px" }}>❌</span>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", color: "#2e3538", margin: 0 }}>Decision too early</p>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", paddingTop: "24px" }}>
          <span style={{ fontSize: "20px" }}>→</span>
        </div>

        {/* Path Planning - right stage */}
        <div style={{ background: "#c4d4b5", borderRadius: "12px", padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "1.4px", textTransform: "uppercase", color: "rgba(46,53,56,0.45)", margin: 0 }}>
            Path Planning
          </p>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", fontWeight: 600, color: "#2e3538", margin: 0 }}>
            Where sequencing belongs
          </p>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", lineHeight: "21px", color: "rgba(46,53,56,0.65)", margin: 0 }}>
            Operators are assembling movements. Naturally thinking about path order, how sequences connect, what the robot does next.
          </p>
          <div style={{ display: "flex", gap: "6px", alignItems: "center", marginTop: "4px" }}>
            <span style={{ fontSize: "14px" }}>✓</span>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", color: "#2e3538", margin: 0 }}>Decision at the right moment</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConceptEvolutionCards() {
  const concepts = [
    {
      num: "01",
      name: "Concept 1",
      hypothesis: "Improve sequencing within point planning",
      what: "Added semantic naming. A point could belong to multiple sequences. Drag-and-drop grouping within the same page. In path-making: choose a group, set one/two-way, set movement type.",
      learning: "The co-founder said: think of a real use case and actually try to make paths with this. When I did, the decision was still happening at the wrong stage. Better UI, same structural problem.",
      color: "#d4c3b5",
    },
    {
      num: "02",
      name: "Concept 2",
      hypothesis: "Move sequencing entirely to path making",
      what: "Removed sequence feature from point planning completely. In path making: a point list on the left, drag points into named sequences, choose one-way or two-way per sequence.",
      learning: "When tested in a real scenario, one-way and two-way paths ended up mixed in the same sequence. Still had to be separated manually. Same outcome as before, different interface.",
      color: "#b5ced4",
    },
    {
      num: "03",
      name: "Concept 3",
      hypothesis: "Match the mental model of how deployment engineers actually work",
      what: "Talked to engineers who build behavior trees in real deployments. Removed two-way paths entirely: they group by action type. Made paths look like paths visually. Integrated motion testing into the same UI. Connected sequences to behavior tree via pre-built node structure.",
      learning: "This worked. Engineers could see the path, understand the sequence, and connect it to the behavior tree, all in one place, in one stage.",
      color: "#c4d4b5",
    },
  ];

  return (
    <div className="seq-concept-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
      {concepts.map((c, i) => (
        <div key={i} style={{
          background: c.color, borderRadius: "16px", padding: "24px",
          display: "flex", flexDirection: "column", gap: "14px",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "1.4px", textTransform: "uppercase", color: "rgba(46,53,56,0.4)", margin: 0 }}>
              {c.num}
            </p>
            <p style={{ ...acornBold, fontSize: "18px", lineHeight: "24px", color: "#2e3538", margin: 0 }}>
              {c.name}
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: "rgba(46,53,56,0.4)", margin: 0 }}>
              Hypothesis
            </p>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", lineHeight: "21px", color: "#2e3538", margin: 0, fontStyle: "italic" }}>
              {c.hypothesis}
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: "rgba(46,53,56,0.4)", margin: 0 }}>
              What I built
            </p>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", lineHeight: "21px", color: "#2e3538", margin: 0 }}>
              {c.what}
            </p>
          </div>

          <div style={{ borderLeft: "2px solid rgba(46,53,56,0.25)", paddingLeft: "12px" }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: "rgba(46,53,56,0.4)", margin: "0 0 4px 0" }}>
              What it revealed
            </p>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", lineHeight: "21px", color: "rgba(46,53,56,0.75)", margin: 0 }}>
              {c.learning}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function FinalUILayout() {
  const cols = [
    {
      title: "Points",
      desc: "All defined points available for use. Checkboxes for multi-select. Drop guide visible for drag interactions.",
    },
    {
      title: "Sequences",
      desc: "Named groups (Pick, Place, Return Loop, etc.) with points dragged in. Each sequence shows control mode, direction, and generated path count. Expandable to see the full path chain.",
    },
    {
      title: "Path List + Testing",
      desc: "All generated paths across sequences. Velocity control. Motion planning via ROS Bridge. Play and step-through testing, all in one place.",
    },
  ];

  return (
    <div style={{
      background: "rgba(3,79,70,0.04)", border: "1px solid rgba(3,79,70,0.12)",
      borderRadius: "16px", padding: "28px", display: "flex", flexDirection: "column", gap: "16px",
    }}>
      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "1.4px", textTransform: "uppercase", color: "rgba(46,53,56,0.38)", margin: 0 }}>
        Concept 3, three-column layout
      </p>
      <div style={{ display: "flex", gap: "8px", alignItems: "stretch", flexWrap: "wrap" }}>
        {cols.map((col, i) => (
          <div key={i} style={{
            flex: 1, minWidth: "140px",
            background: "#034f46", borderRadius: "12px", padding: "18px",
            display: "flex", flexDirection: "column", gap: "8px",
          }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "1.2px", textTransform: "uppercase", color: "rgba(255,255,235,0.5)", margin: 0 }}>
              {String(i + 1).padStart(2, "0")}
            </p>
            <p style={{ ...acornBold, fontSize: "16px", color: "#ffffeb", margin: 0 }}>
              {col.title}
            </p>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", lineHeight: "21px", color: "rgba(255,255,235,0.7)", margin: 0 }}>
              {col.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function UsabilityStatsBlock() {
  return (
    <div style={{
      background: "#034f46", borderRadius: "20px", padding: "32px 42px",
      display: "flex", flexDirection: "column", gap: "24px",
    }}>
      {/* Learnability test - new users */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "1.4px", textTransform: "uppercase", color: "rgba(255,255,235,0.45)", margin: 0 }}>
          Learnability test · New operators, interns, no prior experience
        </p>
        <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", alignItems: "flex-end" }}>
          {[
            { number: "3/10", label: "Round 1 completed" },
            { number: "9/10", label: "Round 2 completed" },
            { number: "2×",   label: "Test rounds" },
          ].map((stat, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <p style={{ ...acornBold, fontSize: "48px", lineHeight: 1, color: "#ffffeb", margin: 0 }}>
                {stat.number}
              </p>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", color: "rgba(255,255,235,0.6)", margin: 0 }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <div style={{ width: "100%", height: "1px", background: "rgba(255,255,235,0.15)", margin: "4px 0" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            "No UI walkthrough, no training. Just a brief on what changed and a set of tasks.",
            "Round 1: 6-7 people struggled. They had no prior experience with the system or the feature.",
            "Round 2: same tasks. 9 out of 10 completed. One person didn't. People remembered the UI without being re-shown it.",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <span style={{ color: "rgba(255,255,235,0.4)", fontSize: "12px", marginTop: "4px" }}>·</span>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", color: "rgba(255,255,235,0.85)", margin: 0, lineHeight: "22px" }}>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ width: "100%", height: "1px", background: "rgba(255,255,235,0.15)" }} />

      {/* Validation test - experienced team */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "1.4px", textTransform: "uppercase", color: "rgba(255,255,235,0.45)", margin: 0 }}>
          Validation test · Co-founders, senior engineers, experienced team
        </p>
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", lineHeight: "23px", color: "rgba(255,255,235,0.8)", margin: 0 }}>
          A separate test, with a separate goal. Not learnability. The question was: does this solve the right problem? Is it worth building? Does it fit how deployment actually works?
        </p>
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", lineHeight: "21px", color: "rgba(255,255,235,0.55)", margin: 0 }}>
          Think of it like BD mode in Figma. A new designer won't know it exists. A senior one will tell you if it actually works.
        </p>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export function SequenceFeatureDetail() {
  const [activeSection, setActiveSection] = useState("overview");

  const overviewRef   = useRef<HTMLDivElement>(null);
  const contextRef    = useRef<HTMLDivElement>(null);
  const problemRef    = useRef<HTMLDivElement>(null);
  const processRef    = useRef<HTMLDivElement>(null);
  const solutionRef   = useRef<HTMLDivElement>(null);
  const outcomeRef    = useRef<HTMLDivElement>(null);
  const reflectionRef = useRef<HTMLDivElement>(null);

  const refMap: Record<string, React.RefObject<HTMLDivElement>> = {
    overview:   overviewRef,
    context:    contextRef,
    problem:    problemRef,
    process:    processRef,
    solution:   solutionRef,
    outcome:    outcomeRef,
    reflection: reflectionRef,
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    Object.entries(refMap).forEach(([id, ref]) => {
      if (!ref.current) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
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
      <style>{seqStyles}</style>

      {/* ── Mobile nav ─────────────────────────────────────────────────────── */}
      <div className="seq-mobile-bar" style={{
        position: "sticky", top: "66px", zIndex: 50,
        background: "#ffffeb", borderBottom: "1px solid rgba(3,79,70,0.1)",
        overflowX: "auto", alignItems: "center", gap: 0,
        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
      }}>
        {navItems.map((item) => (
          <button key={item.id} className="seq-nav-btn" onClick={() => scrollTo(item.id)}
            style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px",
              fontWeight: activeSection === item.id ? 500 : 400,
              color: activeSection === item.id ? "#034f46" : "rgba(46,53,56,0.5)",
              padding: "14px 18px", whiteSpace: "nowrap",
              borderBottom: activeSection === item.id ? "2px solid #034f46" : "2px solid transparent",
              width: "auto",
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* ── Two-column layout ──────────────────────────────────────────────── */}
      <div className="seq-page-pad" style={{
        maxWidth: "1100px", margin: "0 auto",
        padding: "0 36px 48px", boxSizing: "border-box",
        display: "flex", gap: "28px", alignItems: "flex-start",
      }}>

        {/* ── Sidebar ──────────────────────────────────────────────────────── */}
        <aside className="seq-sidebar" style={{
          width: "200px", flexShrink: 0, flexDirection: "column",
          position: "sticky", top: "0", height: "fit-content",
          paddingTop: "56px", paddingBottom: "48px",
        }}>
          <div style={{ background: "#232f2e", borderRadius: "16px", padding: "12px", display: "flex", flexDirection: "column", gap: "12px" }}>
            {/* TODO: Replace <a> with <Link to="/work"> once react-router context is available */}
            <a href="#work" className="seq-back" style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px",
              color: "#ffffeb", display: "flex", alignItems: "center",
              paddingLeft: "12px", paddingRight: "28px",
            }}>
              Back
            </a>
            <div style={{ background: "#034f46", borderRadius: "12px", padding: "12px", display: "flex", flexDirection: "column", gap: "2px" }}>
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button key={item.id} className="seq-nav-btn" onClick={() => scrollTo(item.id)}
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px",
                      fontWeight: isActive ? 500 : 400,
                      color: isActive ? "#ffffeb" : "rgba(255,255,235,0.65)",
                      paddingLeft: "13.6px", paddingTop: "7px", paddingBottom: "7px",
                      borderLeft: isActive ? "1.6px solid #ffffeb" : "1.6px solid rgba(255,255,235,0.65)",
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
        <main className="seq-main" style={{
          flex: 1, minWidth: 0, paddingTop: "56px", paddingBottom: "48px",
          display: "flex", flexDirection: "column", gap: "12px",
        }}>

          {/* Tag */}
          <div style={{ display: "inline-block", width: "fit-content" }}>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px",
              fontWeight: 500, letterSpacing: "0.99px", textTransform: "uppercase",
              color: "#2e3538", background: "#FFFFEB",
              border: "1px solid #000000", borderRadius: "100px", padding: "5px 15px",
            }}>
              Product Design
            </div>
          </div>

          {/* Hero title */}
          <h1 className="seq-hero-title" style={{
            ...acornBold, fontSize: "53.748px", lineHeight: "56.973px",
            color: "#2e3538", margin: 0,
          }}>
            Right Feature,{" "}
            <span style={{ color: "#034f46" }}>Wrong Stage</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: "17px",
            lineHeight: "29.24px", color: "rgba(46,53,56,0.62)", margin: 0,
          }}>
            Robot movement routine design · NextUp Robotics. Redesigning where
            sequencing lives in the operator's workflow, and reducing the cognitive
            load of building robot movement routines.
          </p>

          <ImgCard src={`${baseGitHubUrl}seq-hero.svg`} alt="Concept 3 final Path Planning UI" />

          {/* ── Overview ─────────────────────────────────────────────────── */}
          <div ref={overviewRef} id="overview" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <CapLabel text="OVERVIEW" />
            <div style={{
              background: "#034f46", borderRadius: "20px",
              padding: "32px 42px", width: "100%", boxSizing: "border-box",
              display: "flex", flexDirection: "column", gap: "30px",
            }}>
              <div className="seq-overview-grid" style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
                {[
                  { label: "What it is",    value: "Moving the sequence feature to the right stage of the operator's workflow — and redesigning path making around how deployment actually works." },
                  { label: "Company",       value: "NextUp Robotics, early-stage startup building robotic arms for production automation." },
                  { label: "My role",       value: "Sole UI/UX Designer. Open mandate, no prior UX on the product." },
                  { label: "Method",        value: "3 concept iterations, ongoing usability testing, final learnability test." },
                  { label: "Status",        value: "Figma prototype complete. Backend integration pending." },
                ].map((row) => (
                  <div key={row.label} style={{ display: "flex", flexDirection: "column", gap: "6px", flex: 1, minWidth: "140px" }}>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: "10px", letterSpacing: "1.2px", textTransform: "uppercase", color: "rgba(255,255,235,0.45)", margin: 0 }}>
                      {row.label}
                    </p>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "15px", lineHeight: "23.25px", color: "#ffffeb", margin: 0 }}>
                      {row.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Divider />

          {/* ── Context ──────────────────────────────────────────────────── */}
          <div ref={contextRef} id="context" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <CapLabel text="CONTEXT" />

            <SectionHeading>
              Built screen by screen. No workflow in between.
            </SectionHeading>

            <BodyText>
              NextUp Robotics' software was built iteratively by developers.
              Each screen handled its own happy path, but no one had mapped
              the full workflow. Operators at client sites felt that
              disconnect every time they tried to build a movement routine.
            </BodyText>

            <CalloutBox color="blue">
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", lineHeight: "24px", color: "#2e3538", margin: "0 0 8px 0", fontWeight: 500 }}>
                This started with a heuristic audit.
              </p>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "15px", lineHeight: "26px", color: "#034f46", fontStyle: "italic", margin: 0 }}>
                "The sequence feature was sitting in the wrong place. Operators
                were being asked for a path-level decision during point-level work."
              </p>
              {/* TODO: Replace <a> with <Link to="/work/robot-control-audit"> once routes are configured */}
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "12px", color: "rgba(46,53,56,0.5)", margin: "8px 0 0 0" }}>
                This case study is the design response to that finding.{" "}
                <a href="#robot-control-audit" style={{ color: "#034f46" }}>
                  See the heuristic audit
                </a>
              </p>
            </CalloutBox>

            {/* TODO: Add seq-old-ui.png to GitHub */}
          </div>

          <Divider />

          {/* ── Problem ──────────────────────────────────────────────────── */}
          <div ref={problemRef} id="problem" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <CapLabel text="PROBLEM" />

            <SectionHeading>
              Repetitive and cognitively heavy.
            </SectionHeading>

            <BodyText>
              Building a movement routine meant repeating the same loop for
              every single path. And none of it could go on autopilot.
            </BodyText>

            <RepetitiveLoopDiagram />

            <CapLabel text="THE STRUCTURAL PROBLEM" />

            <PullQuote>
              Sequencing is a path-level decision. It was sitting at the
              point level.
            </PullQuote>

            <StageMismatchDiagram />

            {/* TODO: Add seq-old-sequence.png to GitHub */}
          </div>

          <Divider />

          {/* ── Process ──────────────────────────────────────────────────── */}
          <div ref={processRef} id="process" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <CapLabel text="PROCESS" />

            <SectionHeading>
              Three concepts. Three different hypotheses.
            </SectionHeading>

            <BodyText>
              The design didn't land on the right answer immediately. Each
              concept was a different hypothesis about where the problem
              actually lived, and what it would take to solve it. The
              evolution mattered as much as the outcome.
            </BodyText>

            <ConceptEvolutionCards />

            <Divider />

            <CapLabel text="CONCEPT 1" />

            <VideoCard src={`${baseGitHubUrl}concept-1.mp4`} caption="Concept 1 — semantic sequence tagging within Point Planning" />
            <PrototypeLink label="View Concept 1 prototype" href="CONCEPT_1_FIGMA_LINK" />

            <Divider />

            <CapLabel text="CONCEPT 2" />

            <BodyText>
              Moved sequencing entirely into path making. A point list on the
              left, drag into named sequences, choose one-way or two-way per
              group. A real structural change. But testing in a real scenario
              revealed the same problem in a different shape: one-way and
              two-way paths still ended up mixed, still had to be separated
              manually.
            </BodyText>

            {/* TODO: Add seq-concept-2.png to GitHub */}
            <PrototypeLink label="View Concept 2 prototype" href="CONCEPT_2_FIGMA_LINK" />

            <Divider />

            <CapLabel text="CONCEPT 3" />

            <BodyText>
              The breakthrough came from talking to engineers who actually
              build behavior trees during deployment. They naturally group
              paths by action type: Pick, Place, Return Loop, all one-way per
              group. Removing two-way paths wasn't a loss. It was matching how
              deployment already worked.
            </BodyText>

            <PrototypeLink label="View Concept 3 prototype" href="CONCEPT_3_FIGMA_LINK" />
          </div>

          <Divider />

          {/* ── Solution ─────────────────────────────────────────────────── */}
          <div ref={solutionRef} id="solution" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <CapLabel text="SOLUTION" />

            <SectionHeading>
              One screen. Points, sequences, paths, and testing.
            </SectionHeading>

            <BodyText>
              The final design is a three-column Path Planning screen.
              Operators see their available points, build named sequences by
              dragging points in, and watch paths generate in real time. All
              without leaving the page.
            </BodyText>

            <FinalUILayout />

            {/* TODO: Add seq-final-ui.png to GitHub */}

            <BodyText>
              Each sequence has its own control mode, generates paths
              automatically from point order, and connects directly to the
              behavior tree's pre-built node structure. What previously
              required assembling a behavior tree separately now builds
              naturally as operators work.
            </BodyText>


            <CalloutBox color="green">
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "15px", lineHeight: "26px", color: "#2e3538", margin: 0 }}>
                Motion testing was added directly into this view. Previously
                a separate page that data showed was rarely opened. Bringing
                it here meant operators could test at the same stage they were
                building.
              </p>
            </CalloutBox>
          </div>

          <Divider />

          {/* ── Outcome ──────────────────────────────────────────────────── */}
          <div ref={outcomeRef} id="outcome" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <CapLabel text="OUTCOME" />

            <SectionHeading>
              Two tests. Two different questions.
            </SectionHeading>

            <BodyText>
              This wasn't a straightforward usability test. The feature was
              complex for new users and needed separate validation from
              experienced ones. So two tests were run, with two different
              goals.
            </BodyText>

            <UsabilityStatsBlock />

            <CalloutBox color="orange">
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <StyledQuote
                  quote='"Is this deployment ready? I want to test this in a real project."'
                  attribution="Deployment engineer, after using the prototype"
                />
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", lineHeight: "23px", color: "rgba(46,53,56,0.75)", margin: 0 }}>
                  The backend was still in transition. ROS integration not yet
                  connected. But the signal was clear. The system felt ready to use.
                </p>
              </div>
            </CalloutBox>

          </div>

          <Divider />

          {/* ── Reflection ───────────────────────────────────────────────── */}
          <div ref={reflectionRef} id="reflection" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <CapLabel text="REFLECTION" />

            <SectionHeading>
              The feature existed. It just needed to be in the right place.
            </SectionHeading>

            <StyledQuote quote="The first concept was a good idea. It just wasn't the right idea. Each iteration wasn't a failure. It was a tighter understanding of where the problem actually lived." />

            <BodyText>
              Concept 1 felt right until tested in a real scenario. Concept 2
              felt right until mixed path types surfaced the same effort.
              Concept 3 came from stepping outside the brief: talking to
              people who actually deploy, not just people who brief the work.
            </BodyText>

            <CalloutBox color="green">
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "15px", lineHeight: "26px", color: "#2e3538", margin: 0 }}>
                This project is positioned as product design, not just UX
                design, because the decision wasn't about how the UI looked.
                It was about where a feature lived in a workflow, and what
                that placement cost operators in cognitive load, time, and
                accuracy.
              </p>
            </CalloutBox>

            <BodyText>
              No hard metrics yet. User testing with before/after comparisons
              is planned once the backend is connected. The outcome that
              mattered in this phase: operators could learn it fast, use it
              confidently, and ask when it would be real.
            </BodyText>
          </div>

        </main>
      </div>

      <CaseStudyFooter />
    </div>
  );
}
