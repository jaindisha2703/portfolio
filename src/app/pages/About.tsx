import { useEffect, useRef } from "react";
import { Link } from "react-router";

// ── Image imports from PortfolioDisha ─────────────────────────────────────────
import imgFrame27 from "figma:asset/e8123e6cd1728483e2e9dcf527ce4afed3344711.png";
import imgFrame25 from "figma:asset/51dcb5474f72868ffc7fae669b74e5f0a4867fc5.png";
import imgFrame30 from "figma:asset/9f42feb3c5083612e09c987a93b54b545049d004.png";
import imgFrame33 from "figma:asset/4bb83c599576b3aacd8d82fd84bb81a5534402c4.png";
import imgFrame28 from "figma:asset/b7be1306ffc9366527aaef7ad5aa85ebd9fca5cc.png";
import imgFrame31 from "figma:asset/76d4f5aabf11bd93c2f1cf95c1db6875f1178272.png";
import imgFrame29 from "figma:asset/b8832d100c4a220383f1d26f602705c88afa44a3.png";
import imgFrame32 from "figma:asset/99cce89b22569f82ebc4d545f736ca38222d63e7.png";

// ── Image data ────────────────────────────────────────────────────────────────

const galleryImages = [
  { src: imgFrame27, alt: "Disha's art", objectPosition: "center" },
  { src: imgFrame25, alt: "Disha outdoors", objectPosition: "center" },
  {
    src: imgFrame30,
    alt: "Chess",
    objectPosition: "-23.15% center",
    customStyle: { objectFit: "cover" as const },
  },
  { src: imgFrame33, alt: "Disha with camera", objectPosition: "center" },
  { src: imgFrame28, alt: "Creative work", objectPosition: "center" },
  { src: imgFrame31, alt: "Disha portrait", objectPosition: "center" },
  {
    src: imgFrame29,
    alt: "Design process",
    objectPosition: "center",
    customStyle: { objectFit: "cover" as const },
  },
  {
    src: imgFrame32,
    alt: "Exploration",
    objectPosition: "center",
    customStyle: { objectFit: "cover" as const },
  },
];

// ── Styles ────────────────────────────────────────────────────────────────────

const aboutStyles = `
  @keyframes galleryScroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  .gallery-track {
    display: flex;
    gap: 21px;
    animation: galleryScroll 40s linear infinite;
    width: max-content;
  }

  .gallery-track:hover {
    animation-play-state: paused;
  }

  .about-btn-email {
    transition: background 0.18s ease, transform 0.15s ease, box-shadow 0.18s ease;
  }
  .about-btn-email:hover {
    background: #e3c0ff !important;
    transform: scale(1.04);
    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  }

  .about-btn-link {
    transition: background 0.18s ease, color 0.18s ease, transform 0.15s ease;
  }
  .about-btn-link:hover {
    background: rgba(255,255,235,0.12) !important;
    transform: scale(1.04);
  }

  .about-tag {
    transition: background 0.15s ease, color 0.15s ease;
  }
  .about-tag:hover {
    background: rgba(255,255,235,0.12);
  }
`;

// ── Gallery Image ─────────────────────────────────────────────────────────────

function GalleryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      style={{
        width: "264px",
        height: "329px",
        borderRadius: "21px",
        flexShrink: 0,
        position: "relative",
        overflow: "hidden",
        border: "2px solid #ffffeb",
      }}
    >
      <img
        src={src}
        alt={alt}
        draggable={false}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          userSelect: "none",
        }}
      />
    </div>
  );
}

// ── Skills Tags ──────────────────────────────────────────────────────────────

const skills = [
  "Product Design",
  "UX Research",
  "Interaction Design",
  "Design Systems",
  "Visual Design",
  "Prototyping",
  "AI Interfaces",
  "User Testing",
];

// ── Bio Section ───────────────────────────────────────────────────────────────

function BioSection() {
  return (
    <div
      style={{
        background: "#034f46",
        width: "100%",
        borderTopLeftRadius: "100px",
        borderTopRightRadius: "100px",
        boxShadow: "0px -4px 40px 0px rgba(0,0,0,0.1), 0px 12px 40px 0px rgba(0,0,0,0.25)",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          alignItems: "flex-start",
          padding: "clamp(48px, 6vw, 56px) clamp(24px, 7vw, 84px) 64px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Bio paragraphs */}
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(16px, 1.8vw, 20px)",
            color: "#ffffeb",
            lineHeight: "27.2px",
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}
        >
          <p style={{ margin: 0 }}>
            I've been{" "}
            <strong style={{ fontWeight: 700 }}>making things</strong>{" "}
            for as long as I can remember. Drawing, sketching, painting, mehendi, photography,
            videography — if you couldn't find me studying, I was somewhere making something.
          </p>
          <p style={{ margin: 0 }}>
            At some point in 9th grade I got into{" "}
            <strong style={{ fontWeight: 700 }}>chess.</strong>{" "}
            Took classes, played some tournaments, nothing serious — but it quietly changed how I
            think.{" "}
            <strong style={{ fontWeight: 700 }}>Slower. More deliberate. Think before you move.</strong>
          </p>
          <p style={{ margin: 0 }}>
            I didn't realize it then, but that's basically how{" "}
            <strong style={{ fontWeight: 700 }}> I design </strong>
            too.
          </p>
          <p style={{ margin: 0 }}>&nbsp;</p>
          <p style={{ margin: 0 }}>
            I'm a final year Product Experience Design student. I landed here because design is the
            one place where creativity and strategy aren't opposites — they need each other.
          </p>
          <p style={{ margin: 0 }}>
            I've always been both: someone who makes things and someone who thinks them through.
            Someone who feels what's happening in a room before anyone says it out loud. Design
            just gave that a name.
          </p>
          <p style={{ margin: 0 }}>
            I did my internship at a robotics startup as the only designer. Technical, niche,
            nothing familiar. I figured it out. That's what I do — I go into things I don't fully
            know, I observe, I find what's actually wrong, and I make something real out of it.
          </p>
        </div>

        {/* What I Do + Get In Touch */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "100%",
          }}
        >
          {/* What I do */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: "12px",
                color: "#ffffeb",
                letterSpacing: "0.96px",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              What I do
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="about-tag"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 400,
                    fontSize: "13px",
                    color: "#ffffeb",
                    border: "0.8px solid #ffffeb",
                    borderRadius: "100px",
                    padding: "6px 14px",
                    whiteSpace: "nowrap",
                    cursor: "default",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Get in touch */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "8px" }}>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: "12px",
                color: "#ffffeb",
                letterSpacing: "0.96px",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Get in touch
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              
              <a
                href="https://www.linkedin.com/in/disha-jain-266b03237/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-btn-link"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: "#ffffeb",
                  textDecoration: "none",
                  border: "0.8px solid #ffffeb",
                  borderRadius: "100px",
                  padding: "0 24px",
                  height: "43px",
                  display: "flex",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                }}
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/jaindisha2703/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-btn-link"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: "#ffffeb",
                  textDecoration: "none",
                  border: "0.8px solid #ffffeb",
                  borderRadius: "100px",
                  padding: "0 24px",
                  height: "43px",
                  display: "flex",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                }}
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export function About() {
  return (
    <div
      style={{
        background: "#ffffeb",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
        paddingTop: "66px",
        paddingBottom: "24px",
        width: "100%",
      }}
    >
      <style>{aboutStyles}</style>

      {/* Heading */}
      <div
        style={{
          width: "100%",
          padding: "56px 24px 0",
          display: "flex",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <p
          style={{
            fontFamily: "'Acorn', serif",
            fontWeight: 700,
            fontSize: "clamp(22px, 3.5vw, 45px)",
            color: "#2e3538",
            lineHeight: "1.15",
            margin: 0,
            textAlign: "center",
            maxWidth: "900px",
          }}
        >
          Welcome to my ꙳ little ꙳ corner of the internet.
        </p>
      </div>

      {/* Auto-scrolling gallery */}
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Left fade */}
        
        {/* Right fade */}
        
        {/* Track — duplicated for seamless loop */}
        <div className="gallery-track" style={{ padding: "0 0 4px" }}>
          {[...galleryImages, ...galleryImages].map((img, i) => (
            <GalleryImage key={i} src={img.src} alt={img.alt} />
          ))}
        </div>
      </div>

      {/* Bio section */}
      <div style={{ width: "100%", flex: 1 }}>
        <BioSection />
      </div>

      {/* Footer text */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
          textAlign: "center",
          padding: "0 24px",
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