import { useState } from "react";
import { Link } from "react-router";
import {
  AuditThumbnail,
  SequenceThumbnail,
  QuestThumbnail,
  RelightThumbnail,
  DuckieThumbnail,
  TypoToolThumbnail,
} from "./CardThumbnails";

const acornBold: React.CSSProperties = {
  fontFamily: "'Acorn', serif",
  fontWeight: 700,
  fontStyle: "normal",
};

export interface CardData {
  thumbnail: React.ComponentType;
  tag: string;
  year: string;
  title: string;
  description: string;
  href: string;
  variant: "case-study" | "ai";
}

export const caseStudyCards: CardData[] = [
  {
    thumbnail: AuditThumbnail,
    tag: "Audit",
    year: "2026",
    title: "NextUp Robotics – Heuristic Audit",
    description:
      "Robot control software, built by developers, never designed. I audited 3 core modules before touching any redesigns. 32 findings. 96% failed.",
    href: "/case-studies/nextup-audit",
    variant: "case-study",
  },
  {
    thumbnail: SequenceThumbnail,
    tag: "Feature Redesign",
    year: "2026",
    title: "NextUp Robotics – Sequence Redesign",
    description:
      "A feature that existed in the UI but nobody used. I found out why, rebuilt it from scratch, and tested it with real operators.",
    href: "/case-studies/nextup-sequence",
    variant: "case-study",
  },
  {
    thumbnail: QuestThumbnail,
    tag: "Mobile App",
    year: "2025",
    title: "Quest — Travel App for Budget Travelers",
    description:
      "Planning a trip is easy. Finding what's real is not. A research first travel app built for budget travelers chasing authentic local culture.",
    href: "/case-studies/quest",
    variant: "case-study",
  },
];

export const aiPlaygroundCards: CardData[] = [
  {
    thumbnail: DuckieThumbnail,
    tag: "Figma + Claude",
    year: "2026",
    title: "Duckie Wallpaper",
    description:
      "Animated HTML wallpaper — 7 ducks, each appearing with a message every 1.5 hours during working hours.",
    href: "/ai-playground/duckie",
    variant: "ai",
  },
  {
    thumbnail: TypoToolThumbnail,
    tag: "Claude",
    year: "2026",
    title: "Typo Tool",
    description:
      "A web tool for testing and documenting typography decisions.",
    href: "/ai-playground/typo-tool",
    variant: "ai",
  },
  {
    thumbnail: RelightThumbnail,
    tag: "Figma Make",
    year: "2026",
    title: "Relight",
    description:
      "Image editing and relighting tool — upload a photo, adjust it, add custom lighting.",
    href: "/ai-playground/relight",
    variant: "ai",
  },
];

// ── Shared card inner content ─────────────────────────────────────────────────

function CardInner({
  thumbnail: Thumbnail,
  tag,
  year,
  title,
  description,
  hovered,
  hoverLabel,
}: {
  thumbnail: React.ComponentType;
  tag: string;
  year: string;
  title: string;
  description: string;
  hovered: boolean;
  hoverLabel: string;
}) {
  return (
    <div
      style={{
        background: "#ffffeb",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        alignItems: "flex-start",
        paddingBottom: "24px",
        position: "relative",
        borderRadius: "32px",
        width: "100%",
        boxSizing: "border-box",
        transition: "box-shadow 0.22s ease, transform 0.18s ease",
        boxShadow: hovered ? "0 8px 32px rgba(3,79,70,0.22)" : "none",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        overflow: "hidden",
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          height: "255px",
          position: "relative",
          borderRadius: "32px",
          width: "100%",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <Thumbnail />
        </div>

        {/* Hover scrim */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(3,79,70,0.38)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease",
            pointerEvents: "none",
          }}
        />

        {/* Hover badge */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: "12px",
              color: "#000000",
              background: "#f0d7ff",
              border: "1.028px solid #2e3538",
              borderRadius: "12px",
              padding: "8px 16px",
              textAlign: "center",
              letterSpacing: "0.96px",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              opacity: hovered ? 1 : 0,
              transform: hovered
                ? "translateY(0) scale(1)"
                : "translateY(10px) scale(0.9)",
              transition: "opacity 0.25s ease, transform 0.25s ease",
            }}
          >
            {hoverLabel}
          </span>
        </div>

        {/* Border overlay */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "32px",
            border: "1.028px solid #047668",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Meta */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          width: "100%",
          padding: "0 24px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: "12px",
              color: "#ffffeb",
              background: "#047668",
              borderRadius: "100px",
              padding: "3px 12px",
              letterSpacing: "0.96px",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            {tag}
          </span>
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              color: "#034f46",
            }}
          >
            {year}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <p style={{ ...acornBold, fontSize: "24px", color: "#000000", lineHeight: "28.8px", margin: 0 }}>
            {title}
          </p>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              color: "#2e3538",
              lineHeight: "22.4px",
              margin: 0,
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Public ProjectCard ────────────────────────────────────────────────────────

export function ProjectCard({
  thumbnail,
  tag,
  year,
  title,
  description,
  href,
  variant,
}: CardData) {
  const [hovered, setHovered] = useState(false);
  const isAI = variant === "ai";
  const hoverLabel = isAI ? "VIEW WORK" : "COMING SOON";

  const inner = (
    <CardInner
      thumbnail={thumbnail}
      tag={tag}
      year={year}
      title={title}
      description={description}
      hovered={hovered}
      hoverLabel={hoverLabel}
    />
  );

  const wrapperStyle: React.CSSProperties = {
    display: "flex",
    flex: "1 0 0",
    minWidth: 0,
    textDecoration: "none",
    cursor: isAI ? "pointer" : "default",
  };

  if (isAI) {
    return (
      <Link
        to={href}
        style={wrapperStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {inner}
      </Link>
    );
  }

  // Case study cards: not clickable, just hover state
  return (
    <div
      style={wrapperStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {inner}
    </div>
  );
}
