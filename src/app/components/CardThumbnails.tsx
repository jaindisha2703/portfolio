/**
 * Responsive card thumbnail components, extracted from Figma frames.
 *
 * Source frame size: 301 × 255 px
 * All positions / sizes expressed as % of container so proportions are
 * preserved at any card width while the 255 px height stays fixed in the card.
 *
 * X-axis values  → % of container WIDTH  (left, width)
 * Y-axis values  → % of container HEIGHT (top, height)
 *
 * Per-card ratios:
 *   Audit      – container: left=0/301=0%   top=41/255=16.08% w=219/301=72.76% h=214/255=83.92%  r:top-right 12px
 *   Sequence   – container: left=35/301=11.63% top=41/255=16.08% w=266/301=88.37% h=214/255=83.92% r:top-left 12px
 *   Quest      – container: left=74/301=24.58% top=44/255=17.25% w=153/301=50.83% h=211/255=82.75% r:top-left+right 12px
 *   Relight    – container: left=26/301=8.64% top=28/255=10.98% w=275/301=91.36% h=227/255=89.02%  r:top-left 16px
 *   Duckie     – container: left=83/301=27.57% top=32/255=12.55% w=135/301=44.85% h=223/255=87.45% r:top-left+right 16px
 *   TypoTool   – container: left=35/301=11.63% top=27/255=10.59% w=266/301=88.37% h=228/255=89.41% r:top-left 16px
 */

import imgAudit from "../../imports/Audit-1-1/f24c0a20bec0b8a30ced2c241b15929585e7c5f1.png";
import imgSequence from "../../imports/Sequence-1-1/d1e1814ac10f781cd064d2d61e49dcd918b6edbe.png";
import imgQuest from "../../imports/Quest-1-1/55074d51eefbfb65d9a15dfe708c71523cc1fcf0.png";
import imgRelight from "../../imports/Relight-1-1/8e6a9d1ebda8013f9cac5832a8b0f493a7c5c0a2.png";
import imgDuckie from "../../imports/DuckieWallpaper-1-1/72c2d941b7995c75022f66372cfd6aeccf1150f2.png";
import imgTypoTool from "../../imports/TypoTool-1-1/9b901494e6562e82fecd72a387cb0b742f1c4e09.png";

const bg = "#2eb1b8";

// ─────────────────────────────────────────────────────────────────────────────
// Audit — image container anchored to left edge, top-right corner radius
// ─────────────────────────────────────────────────────────────────────────────
export function AuditThumbnail() {
  return (
    <div style={{ background: bg, position: "relative", width: "100%", height: "100%" }}>
      <div
        style={{
          position: "absolute",
          left: "0%",
          top: "16.08%",
          width: "72.76%",
          height: "83.92%",
          borderTopRightRadius: 12,
          overflow: "hidden",
          boxShadow: "-4px -4px 10px 0 rgba(0,0,0,0.05), 4px 4px 10px 0 rgba(0,0,0,0.05)",
        }}
      >
        <img
          alt=""
          src={imgAudit}
          style={{
            position: "absolute",
            width: "178.54%",
            height: "115.89%",
            left: "-78.69%",
            top: "0.33%",
            maxWidth: "none",
          }}
        />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Sequence — image container right-aligned, top-left corner radius
// ─────────────────────────────────────────────────────────────────────────────
export function SequenceThumbnail() {
  return (
    <div style={{ background: bg, position: "relative", width: "100%", height: "100%" }}>
      <div
        style={{
          position: "absolute",
          left: "11.63%",
          top: "16.08%",
          width: "88.37%",
          height: "83.92%",
          borderTopLeftRadius: 12,
          overflow: "hidden",
          boxShadow: "-4px -4px 10px 0 rgba(0,0,0,0.05), 4px 4px 10px 0 rgba(0,0,0,0.05)",
        }}
      >
        <img
          alt=""
          src={imgSequence}
          style={{
            position: "absolute",
            width: "131.08%",
            height: "115.89%",
            left: "-0.13%",
            top: "0%",
            maxWidth: "none",
          }}
        />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Quest — centered mobile frame, top-left + top-right corner radius
// ─────────────────────────────────────────────────────────────────────────────
export function QuestThumbnail() {
  return (
    <div style={{ background: bg, position: "relative", width: "100%", height: "100%" }}>
      <div
        style={{
          position: "absolute",
          left: "24.58%",
          top: "17.25%",
          width: "50.83%",
          height: "82.75%",
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          overflow: "hidden",
          boxShadow: "-4px -4px 10px 0 rgba(0,0,0,0.05), 4px 4px 10px 0 rgba(0,0,0,0.05)",
        }}
      >
        <img
          alt=""
          src={imgQuest}
          style={{
            position: "absolute",
            width: "100.16%",
            height: "157.82%",
            left: "-0.08%",
            top: "0%",
            maxWidth: "none",
          }}
        />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Relight — wide image, top-left corner radius
// ─────────────────────────────────────────────────────────────────────────────
export function RelightThumbnail() {
  return (
    <div style={{ background: bg, position: "relative", width: "100%", height: "100%" }}>
      <div
        style={{
          position: "absolute",
          left: "8.64%",
          top: "10.98%",
          width: "91.36%",
          height: "89.02%",
          borderTopLeftRadius: 16,
          overflow: "hidden",
          boxShadow: "4px -15px 14.4px 0 rgba(0,0,0,0.05)",
        }}
      >
        <img
          alt=""
          src={imgRelight}
          style={{
            position: "absolute",
            width: "172.87%",
            height: "112.74%",
            left: "-0.12%",
            top: "0.01%",
            maxWidth: "none",
          }}
        />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Duckie Wallpaper — centered mobile frame, top-left + top-right radius
// ─────────────────────────────────────────────────────────────────────────────
export function DuckieThumbnail() {
  return (
    <div style={{ background: bg, position: "relative", width: "100%", height: "100%" }}>
      <div
        style={{
          position: "absolute",
          left: "27.57%",
          top: "12.55%",
          width: "44.85%",
          height: "87.45%",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          overflow: "hidden",
          boxShadow: "4px 27px 10px 0 rgba(0,0,0,0.05)",
        }}
      >
        <img
          alt=""
          src={imgDuckie}
          style={{
            position: "absolute",
            width: "107.12%",
            height: "139.43%",
            left: "-3.9%",
            top: "-1.24%",
            maxWidth: "none",
          }}
        />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TypoTool — wide image, top-left corner radius
// ─────────────────────────────────────────────────────────────────────────────
export function TypoToolThumbnail() {
  return (
    <div style={{ background: bg, position: "relative", width: "100%", height: "100%" }}>
      <div
        style={{
          position: "absolute",
          left: "11.63%",
          top: "10.59%",
          width: "88.37%",
          height: "89.41%",
          borderTopLeftRadius: 16,
          overflow: "hidden",
          boxShadow: "0 4px 17px 0 rgba(0,0,0,0.25)",
        }}
      >
        <img
          alt=""
          src={imgTypoTool}
          style={{
            position: "absolute",
            width: "172.18%",
            height: "107.92%",
            left: "0%",
            top: "-0.01%",
            maxWidth: "none",
          }}
        />
      </div>
    </div>
  );
}