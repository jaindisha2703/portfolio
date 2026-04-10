import { useParams, Link } from "react-router";
import { ScrollFade } from "../components/ScrollFade";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";

// ── Imported project images ───────────────────────────────────────────────────
// Hero thumbnails — use GitHub-hosted full-res images to avoid pixelation
// Duckie has no dedicated GitHub static image, so we keep its local import
import imgDuckie from "../../imports/AiPlayground/23d698140225e41a1d4c2a347dbb656143e10a05.png";
// (imgTypoTool and imgRelight replaced by GitHub URLs below)

// ── Styles ────────────────────────────────────────────────────────────────────

const detailStyles = `
  .ai-detail-back:hover {
    color: #034f46 !important;
  }
  .ai-detail-link-btn {
    transition: background 0.18s ease, transform 0.15s ease, box-shadow 0.18s ease;
  }
  .ai-detail-link-btn:hover {
    background: #e3c0ff !important;
    transform: scale(1.03);
    box-shadow: 0 4px 16px rgba(0,0,0,0.13);
  }
  .ai-detail-back-btn {
    transition: background 0.18s ease, color 0.18s ease, transform 0.15s ease;
  }
  .ai-detail-back-btn:hover {
    background: #2e3538 !important;
    color: #ffffeb !important;
    transform: scale(1.03);
  }
`;

// ── Types ─────────────────────────────────────────────────────────────────────

interface Section {
  heading: string;
  body: string[];
  images?: { label: string }[];
}

interface OverviewCard {
  what: string;
  built: string;
  extra?: { label: string; value: string };
  liveLink?: string;
}

interface ProjectContent {
  tag: string;
  title: string;
  subtitle: string;
  heroImage: string;
  overview: OverviewCard;
  sections: Section[];
}

// ── Project data ──────────────────────────────────────────────────────────────

const baseGitHubUrl = "https://raw.githubusercontent.com/jaindisha2703/portfolio/main/";

const projects: Record<string, ProjectContent> = {
  relight: {
    tag: "Figma Make",
    title: "Relight",
    subtitle:
      "An image relighting tool built in Figma — upload a photo, add light, and see it change. Also the experiment that taught me clarity is not something AI can give you.",
    heroImage: `${baseGitHubUrl}Relight%20hero%20image.png`,
    overview: {
      what: "Image editing and relighting tool — upload a photo, adjust it, add custom lighting",
      built: "Figma Make",
      liveLink: "https://sound-visual-23642168.figma.site",
    },
    sections: [
      {
        heading: "Upload a photo. Relight it.",
        body: [
          "The idea is simple: you have a photo you already took, and you want to change how the light feels in it.",
          "You upload your image, then you have two things to work with. Basic editing — brightness, contrast, saturation, temperature, shadows — plus a set of presets. And then the main feature: adding light.",
          "You choose the light type — spotlight, soft light, or dim light. Pick a colour. Set the intensity, size, and blur. Then drag and drop it exactly where you want it on the image. Hold to compare with the original. Download when you're done.",
        ],
        images: [
          { label: "The light placement interface — a light being dragged onto an image" },
          { label: "The editing panel — brightness, contrast, saturation, temperature, shadows and presets" },
        ],
      },
      {
        heading: "First time building in Figma. Not enough clarity going in.",
        body: [
          "This was my first time building something this way in Figma. I wanted to try it — and the idea of simulating and placing light on a photo felt genuinely interesting to me.",
          "But I went in without enough clarity about what it should actually be. I had a vague direction: something about relighting. I didn't have a sharp picture of what I was making or who it was really for.",
          "So I built something. It worked in parts. It ran out of direction in the middle. And at the end, I looked at it and thought — cool experiment. Wrong thing.",
        ],
      },
      {
        heading: "AI can build what you want. It can't want it for you.",
        body: [
          "The biggest thing this project made clear: the AI is at full capacity the whole time. It will try to build whatever you point it at. But if you don't know what you're pointing at — it'll build that too. Vagueness in, vagueness out.",
          "Clarity is not something the tool brings. That's yours to have before you open anything.",
          "I also learned about image editing itself — how effects are named, how they stack, what the terminology actually means. I went in not knowing any of this. I came out with a working vocabulary for it. And in the midst of these experiments, at the end of projects I keep asking AI what I could have done better. Which makes learning fast and easier.",
        ],
        images: [
          { label: "Relight — before/after comparison, the 'hold to preview original' state" },
        ],
      },
      
    ],
  },

  duckie: {
    tag: "Figma + Claude",
    title: "Duckie Wallpaper (lol)",
    subtitle:
      "An animated HTML wallpaper with 7 ducks, built with AI — and the project that taught me how to actually work with it.",
    heroImage: imgDuckie,
    overview: {
      what: "Animated HTML wallpaper — 7 ducks, each appearing with a message every 1.5 hours during working hours",
      built: "Claude",
    },
    sections: [
      {
        heading: "7 ducks. One every 1.5 hours. All day.",
        body: [
          "I found 7 duck illustrations on Pinterest. Too cute to ignore.",
          "Each one pops up during working hours with a small message — every 1.5 hours, one at a time. They cycle through all 7, then restart the next working day.",
          "I also had Claude credits left, so I thought: why not.",
        ],
        images: [
          { label: "Desktop view of the wallpaper — one duck with its message" },
          { label: "All 7 ducks or the sequence layout" },
        ],
      },
      {
        heading: "I was curious about vectors and animation.",
        body: [
          "I wanted to understand how individual vector elements could be brought together and animated. Could coding and AI actually do that? I didn't know. I wanted to find out.",
          "This was also the first time I actually went into the code and changed things myself — not just accepting whatever Claude produced. That part was new.",
        ],
      },
      {
        heading: "Claude was spiralling. I couldn't see it — until I read the logs.",
        body: [
          "I did all the hard work upfront: found the ducks, figured out positions, X to Y coordinates, directions. I thought I'd given Claude everything it needed.",
          "But I was prompting badly. The information I gave wasn't in the format Claude could actually use. So it did what it does — it tried to make it work anyway, with whatever it had. It went around and around, using up credits and time, producing things that weren't right. Not because it gave up. Because it never gives up.",
          "I figured this out by reading the logs. Claude's annotations showed me it was looping — searching for a solution to information that wasn't there. If there were no logs, I would never have caught it. I would have kept waiting, kept spending credits, gotten further from the actual problem.",
        ],
        images: [
          { label: "Claude's log or output showing the loop — annotated screenshot illustrating the spiralling behaviour" },
        ],
      },
      {
        heading: "What I took from this",
        body: [
          "Read the logs. They tell you what's actually happening, not what you think is happening.",
          "Prompting badly costs more than prompting carefully. Stop, re-prompt, give better information. It saves time and credits.",
          "If you don't know what format the AI needs — ask it. Ask Claude what information it needs, what sizes, what format. Don't guess and hope.",
          "Claude works at full capacity toward whatever goal you give it. It doesn't stop and say the information was wrong. It adapts and keeps going. Knowing that changes how you prompt.",
        ],
      },
      {
        heading: "Desktop looks great. Mobile doesn't. Font didn't export.",
        body: [
          "Credits ran out before I could fix it. I'm okay with that. This was an exploration, not a product.",
        ],
      },
    ],
  },

  "typo-tool": {
    tag: "Claude",
    title: "Typo Tool",
    subtitle:
      "A typography playground I built with AI — to learn, test, and document type in real UI contexts.",
    heroImage: `${baseGitHubUrl}Typo%20Tool%20Playground.png`,
    overview: {
      what: "A web tool for testing and documenting typography decisions",
      built: "Claude Code",
      extra: { label: "Time", value: "1 day" },
      liveLink: "https://jaindisha2703.github.io/typo-tool/",
    },
    sections: [
      {
        heading: "It started as documentation. It turned into a tool.",
        body: [
          "I was learning about typography — trying to understand how typefaces actually behave in real UI, not just in theory. I was going to document my learnings in notes.",
          "Then I thought: what if I just built the thing I was trying to document? A space where I could actually test type in different contexts — display, body, UI components — and see how it felt rather than just reading about it.",
          "So I built it. One day. Using Claude Code.",
        ],
        images: [
          { label: "The Learnings section inside Typo Tool — one or two typography learnings documented" },
        ],
      },
      {
        heading: "What you can do with it",
        body: [
          "Test typefaces across different UI contexts — display headings, body copy, labels, UI components.",
          "Play with type combinations and see how they hold up in real layouts, not just abstract swatches.",
          "Save your explorations and document your thinking — classification (is this geometric, humanist, transitional?), where it could work, what it feels like.",
          "There's also a Resources section — links I used while researching, references that shaped how I was thinking about type.",
        ],
        images: [
          { label: "The typography playground in action — typeface being tested in a UI context" },
          { label: "The Resources section" },
        ],
      },
      {
        heading: "When building becomes easy, thinking becomes the real skill.",
        body: [
          "AI speeds things up. That part is real. But clarity still matters more than ever — maybe more than before, because now you can build fast enough that the cost of building the wrong thing is just... time you didn't need to lose.",
          "The lesson: explore deeply, understand the problem, understand the space, understand what already exists. Then build.",
          "I'm taking that forward.",
        ],
      },
    ],
  },
};

// ── Before/After hover component (single panel) ───────────────────────────────

function BeforeAfterPanel({ beforeSrc, afterSrc }: { beforeSrc: string; afterSrc: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        flex: 1,
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid rgba(3,79,70,0.15)",
        cursor: "pointer",
        position: "relative",
        height: "100%",
      }}
    >
      <img
        src={isHovered ? beforeSrc : afterSrc}
        alt={isHovered ? "Before" : "After"}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
    </div>
  );
}

// ── Relight side-by-side before/after ─────────────────────────────────────────

function RelightSideBySide({
  before1, after1, before2, after2,
}: { before1: string; after1: string; before2: string; after2: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "36px",
          width: "100%",
          height: "300px",
        }}
      >
        <BeforeAfterPanel beforeSrc={before1} afterSrc={after1} />
        <BeforeAfterPanel beforeSrc={before2} afterSrc={after2} />
      </div>
      <p
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "13px",
          color: "rgba(46,53,56,0.5)",
          margin: 0,
          textAlign: "center",
          fontStyle: "italic",
        }}
      >
        Hover to see how it was before and how it is now
      </p>
    </div>
  );
}

// ── Custom media rendering ────────────────────────────────────────────────────

function renderProjectMedia(slug: string, sectionIndex: number) {
  const baseGitHubUrl = "https://raw.githubusercontent.com/jaindisha2703/portfolio/main/";
  
  // Relight project
  if (slug === "relight") {
    if (sectionIndex === 0) {
      // First section - show video showcase
      return (
        <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(3,79,70,0.15)" }}>
          <video
            src={`${baseGitHubUrl}Relight%20Showcase.mp4`}
            controls
            loop
            autoPlay
            muted
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      );
    }
    if (sectionIndex === 2) {
      // Third section - AI can build - show before/after images side by side
      return (
        <RelightSideBySide
          before1={`${baseGitHubUrl}Relight%20Before.jpeg`}
          after1={`${baseGitHubUrl}Relight%20After%201.png`}
          before2={`${baseGitHubUrl}Relight%20before%202.jpeg`}
          after2={`${baseGitHubUrl}Relight%20After%202.png`}
        />
      );
    }
  }
  
  // Typo Tool project
  if (slug === "typo-tool") {
    if (sectionIndex === 0) {
      // First section - Learnings
      return (
        <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(3,79,70,0.15)" }}>
          <ImageWithFallback
            src={`${baseGitHubUrl}Typo%20tool%20learnings.png`}
            alt="Typo Tool Learnings"
            style={{ width: "100%", height: "auto", maxHeight: "500px", objectFit: "contain", display: "block" }}
          />
        </div>
      );
    }
    if (sectionIndex === 1) {
      // Second section - What you can do
      return (
        <>
          <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(3,79,70,0.15)" }}>
            <ImageWithFallback
              src={`${baseGitHubUrl}Typo%20Tool%20Playground.png`}
              alt="Typo Tool Playground"
              style={{ width: "100%", height: "auto", maxHeight: "500px", objectFit: "contain", display: "block" }}
            />
          </div>
          <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(3,79,70,0.15)" }}>
            <ImageWithFallback
              src={`${baseGitHubUrl}Typo%20Tool%20Resource%20Section.png`}
              alt="Typo Tool Resources"
              style={{ width: "100%", height: "auto", maxHeight: "500px", objectFit: "contain", display: "block" }}
            />
          </div>
        </>
      );
    }
  }
  
  // Duckie project
  if (slug === "duckie") {
    if (sectionIndex === 0) {
      // Video has moved to hero section — no custom media here; let placeholders show
      return null;
    }
    if (sectionIndex === 1) {
      // "I was curious about vectors and animation" — Figma screenshot
      return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px" }}>
          <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(3,79,70,0.15)", width: "100%" }}>
            <ImageWithFallback
              src={`${baseGitHubUrl}figma%20screenshot%20duck.png`}
              alt="Figma screenshot — early Duckie animation planning"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </div>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "13px",
            color: "rgba(46,53,56,0.45)",
            margin: 0,
            fontStyle: "italic",
            lineHeight: "1.5",
          }}>
            One of the Figma screenshots — how things started, figuring out how to bring the vectors together and make them animate.
          </p>
        </div>
      );
    }
    if (sectionIndex === 2) {
      // Third section - Claude error logs image
      return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px" }}>
          <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(3,79,70,0.15)", display: "inline-block" }}>
            <ImageWithFallback
              src={`${baseGitHubUrl}Duckie%20error%20logs.png`}
              alt="Claude error logs — showing the spiralling behaviour"
              style={{ display: "block", maxWidth: "100%", height: "auto" }}
            />
          </div>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "13px",
            color: "rgba(46,53,56,0.45)",
            margin: 0,
            fontStyle: "italic",
            lineHeight: "1.5",
          }}>
            One of the early versions — before the animation made sense. Everything was getting mixed up .
          </p>
        </div>
      );
    }
  }
  
  return null;
}

// ── Screenshot placeholder ────────────────────────────────────────────────────

function ScreenshotPlaceholder({ label }: { label: string }) {
  return (
    null
  );
}

// ── Overview card ─────────────────────────────────────────────────────────────

function OverviewCard({ data }: { data: OverviewCard }) {
  const rows = [
    { label: "What it is", value: data.what },
    { label: "Built with", value: data.built },
    ...(data.extra ? [{ label: data.extra.label, value: data.extra.value }] : []),
  ];

  return (
    <div
      style={{
        background: "#034f46",
        borderRadius: "24px",
        padding: "32px 36px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {rows.map((row) => (
        <div key={row.label} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "0.09em",
              textTransform: "uppercase",
              color: "rgba(255,255,235,0.5)",
              margin: 0,
            }}
          >
            {row.label}
          </p>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "15px",
              color: "#ffffeb",
              margin: 0,
              lineHeight: "1.55",
            }}
          >
            {row.value}
          </p>
        </div>
      ))}
      {data.liveLink && (
        <a
          href={data.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="ai-detail-link-btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: "14px",
            color: "#2e3538",
            textDecoration: "none",
            background: "#f0d7ff",
            border: "1px solid #2e3538",
            borderRadius: "100px",
            padding: "10px 20px",
            width: "fit-content",
            marginTop: "4px",
          }}
        >
          View live →
        </a>
      )}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export function AIProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const data = projects[slug || ""];

  if (!data) {
    return (
      <div
        style={{
          background: "#ffffeb",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "66px",
        }}
      >
        <div style={{ textAlign: "center", padding: "48px" }}>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "16px",
              color: "rgba(46,53,56,0.5)",
              marginBottom: "24px",
            }}
          >
            This project isn't here yet.
          </p>
          <Link
            to="/ai-playground"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "14px",
              color: "#034f46",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            ← Back to playground
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "#ffffeb", minHeight: "100vh", paddingTop: "66px" }}>
      <style>{detailStyles}</style>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "64px 40px 48px",
          boxSizing: "border-box",
        }}
      >
        <ScrollFade>
          <Link
            to="/ai-playground"
            className="ai-detail-back"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "13px",
              color: "rgba(46,53,56,0.45)",
              textDecoration: "none",
              marginBottom: "32px",
              transition: "color 0.15s ease",
            }}
          >
            ← Back to playground
          </Link>

          {/* Tag */}
          <div style={{ marginBottom: "16px" }}>
            <span
              style={{
                display: "inline-block",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#034f46",
                background: "rgba(3,79,70,0.10)",
                borderRadius: "100px",
                padding: "4px 14px",
              }}
            >
              {data.tag}
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Acorn', serif",
              fontWeight: 700,
              fontSize: "clamp(32px, 4.5vw, 56px)",
              color: "#2e3538",
              lineHeight: 1.1,
              margin: "0 0 20px",
            }}
          >
            {data.title}
          </h1>

          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "17px",
              color: "rgba(46,53,56,0.65)",
              lineHeight: 1.7,
              margin: 0,
              maxWidth: "620px",
            }}
          >
            {data.subtitle}
          </p>
        </ScrollFade>
      </section>

      {/* ── Hero image ────────────────────────────────────────────────────── */}
      <ScrollFade>
        <div
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            padding: "0 40px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid rgba(3,79,70,0.15)",
              background: "rgba(3,79,70,0.04)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {slug === "duckie" ? (
              <video className="bg-[#2f0d0d00] bg-[#2b0b0b00] bg-[#24040400] bg-[#1d010100] bg-[#18000000] bg-[#13000000] bg-[#0f000000] bg-[#0d000000] bg-[#09000000] bg-[#01000000] bg-[#00000000] bg-[#00000000] bg-[#00000000] bg-[#00000000] bg-[#00000000] bg-[#00000000] bg-[#00000000] bg-[#00000000] bg-[#00000000] bg-[#00000000] bg-[#00000000] bg-[#00000000] bg-[#00000000] bg-[#00000000] bg-[#00000000] bg-[#00000000] bg-[#00000000] bg-[#00000000] bg-[#00000000] bg-[#00000000] bg-[#00000000] bg-[#000000f2] bg-[#000000f5] bg-[#000000f7] bg-[#000000] bg-[#000000] bg-[#000000]"
                src={`${baseGitHubUrl}duckie%20showcase.mp4`}
                controls
                loop
                autoPlay
                muted
                style={{ width: "100%", height: "auto", maxHeight: "650px", objectFit: "contain", display: "block" }}
              />
            ) : (
              <img
                src={data.heroImage}
                alt={data.title}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "500px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            )}
          </div>
        </div>
      </ScrollFade>

      {/* ── Overview card ─────────────────────────────────────────────────── */}
      <section
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "48px 40px 0",
          boxSizing: "border-box",
        }}
      >
        <ScrollFade>
          <OverviewCard data={data.overview} />
        </ScrollFade>
      </section>

      {/* ── Content sections ──────────────────────────────────────────────── */}
      <section
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "24px 40px 24px 40px",
          boxSizing: "border-box",
        }}
      >
        {data.sections.map((section, i) => (
          <ScrollFade key={section.heading} delay={i * 60}>
            <div
              style={{
                margin: "24px 0",
                padding: "0 0 24px 0",
                borderBottom: i < data.sections.length - 1 ? "1px solid #034F461A" : "none",
              }}
            >
              <h2
                style={{
                  fontFamily: "'Acorn', serif",
                  fontWeight: 700,
                  fontSize: "clamp(24px, 3vw, 34px)",
                  color: "#2e3538",
                  lineHeight: 1.2,
                  margin: "0 0 24px",
                }}
              >
                {section.heading}
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginBottom: section.images && section.images.length > 0 ? "32px" : "0",
                }}
              >
                {section.body.map((para, j) => (
                  <p
                    key={j}
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "16px",
                      color: "rgba(46,53,56,0.75)",
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Custom media rendering */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginTop: "32px",
                }}
              >
                {renderProjectMedia(slug, i)}
                {/* Fallback to placeholder if custom media returns null and images exist */}
                {!renderProjectMedia(slug, i) && section.images && section.images.length > 0 && (
                  <>
                    {section.images.map((img, k) => (
                      <ScreenshotPlaceholder key={k} label={img.label} />
                    ))}
                  </>
                )}
              </div>
            </div>
          </ScrollFade>
        ))}

        {/* Back button */}
        <ScrollFade>
          <Link
            to="/ai-playground"
            className="ai-detail-back-btn"
            style={{
              display: "inline-block",
              background: "transparent",
              color: "#2e3538",
              borderRadius: "100px",
              padding: "12px 28px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
              border: "1.5px solid #2e3538",
            }}
          >
            ← Back to playground
          </Link>
        </ScrollFade>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
          textAlign: "center",
          padding: "0 24px 32px",
          borderTop: "1px solid rgba(3,79,70,0.08)",
          paddingTop: "32px",
        }}
      >
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "16px",
            color: "#2e3538",
            margin: 0,
          }}
        >
          You could have been anywhere on the internet, yet you're here. Thanks for visiting!
        </p>
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", color: "#034f46", margin: 0 }}>
          Made with love by Disha · 2026
        </p>
      </div>
    </div>
  );
}