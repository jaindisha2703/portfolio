You are building a portfolio website for Disha Jain, a Product Experience Designer. Follow this design system strictly for every page and component. Do not deviate.

COLORS
Name
Hex
Usage
Cream
#FFFFEB
Page background, default section fill
Black
#2E3538
Primary text, borders, nav, icons
Dark Green
#034F46
Accent fill sections, tags, active states
Purple
#F0D7FF
CTA buttons, chips, card hover fill
White
#FFFFFF
Text on dark/green sections only
Cream Border
#2E3538 at 10% opacity
Subtle borders between sections, card outlines

Section Fill Rules
Default sections: #FFFFEB cream
Alternate accent sections (1-2 per page max): #034F46 dark green fill, white text — use large border-radius 32px on the block so it feels like a pill/card sitting on the cream, NOT a full bleed rectangle. Reference: Wispr Flow dark section with rounded corners.
Heavy emphasis: #2E3538 black fill, white text — same pill treatment
Never use gradients. Never use purple as a background fill for full sections.

TYPOGRAPHY
Fonts: EB Garamond (headings) + Space Grotesk (body) Import from Google Fonts.
Role
Size
Font
Weight
H1
44px
EB Garamond
Regular 400
H2
36px
EB Garamond
Regular 400
H3
30px
EB Garamond
Regular 400
H4
24px
EB Garamond
Regular 400
H5
20px
Space Grotesk
Medium 500
H6
18px
Space Grotesk
Medium 500
Body 1
16px
Space Grotesk
Regular 400
Body 2
14px
Space Grotesk
Regular 400
Caption / Label
12px
Space Grotesk
Medium 500, letter-spacing 0.08em, uppercase

All text is left-aligned. Never center body copy. 

SPACING
Multiples of 4 only: 4, 8, 12, 16, 20, 24, 28, 32, 36, 48, 60, 72, 84, 96
Between major sections: 96px
Card internal padding: 32px
Nav height: 64px
Max content width: 1100px, centered
Page horizontal padding: 48px

BORDER RADIUS
Element
Radius
Large cards
24px
Small cards / tags
16px
Buttons / pills
100px
Images
16px
Accent fill sections (green/black blocks)
32px — they sit ON the cream like a card


NAVIGATION
Fixed top, full width, #FFFFEB background
Bottom border: 1px solid #2E3538 at 10% opacity
Logo left: "Disha" in EB Garamond 20px, color #2E3538
Nav links right: Space Grotesk 14px, color #2E3538 at 60%, hover → #034F46
On hover: nav links get a subtle underline or color shift to #034F46
The nav bar itself should feel like a floating pill (see Wispr Flow) — add slight backdrop blur and a very light shadow so it lifts above the page

BUTTONS
Type
Style
Primary CTA
Fill #F0D7FF, text #2E3538, border-radius 100px, padding 12px 28px, Space Grotesk 14px Medium
Secondary CTA
Transparent fill, border 1.5px #2E3538, text #2E3538, border-radius 100px, same padding
On dark/green sections
Primary: white fill, black text. Secondary: white border, white text


CARDS
Case Study Cards & AI Cards
Background: #FFFFEB
Border: 1px solid #2E3538 at 15% opacity 
Border radius: 24px
Padding: 32px
On hover: background → #F0D7FF (purple flood), border → #2E3538 solid, smooth 0.2s transition
Image inside card: border-radius 16px, never full bleed
Tag/label: uppercase caption 12px, #034F46 color, inside a pill with #034F46 at 10% opacity background

SUBTLE NUANCES — IMPORTANT
These small details make the difference. Always include:
Accent section pill shape: When a section uses dark green or black fill, give the container border-radius 32px so it visually sits on the cream background like a card — NOT a full-width rectangle. See Wispr Flow dark section.
Image + border offset: When an image sits next to a card or text block, give the image container a subtle cream border (1px #2E3538 at 12% opacity) with 16px radius. The image should feel framed, not floating.
Label tags: Before section headings, add a small uppercase pill label (12px Space Grotesk, #034F46, pill background at 10% green). E.g. "WORK", "PLAYGROUND", "ABOUT".
Section dividers: Use a 1px #2E3538 at 8% opacity horizontal rule between major sections — never a full black line.
Hover states everywhere: Every clickable element must have a clear hover. Cards → purple flood. Buttons → slight lift (translateY -2px) + shadow. Nav links → color shift to #034F46.
Footer / Made with love strip: Small, centered, Space Grotesk 14px, #2E3538 at 40% opacity. Text: "Made with love by Disha · 2025". Cream background, no border.

INTERACTIONS (BEST POSSIBLE)
Card hover: background color flood (purple) + scale(1.01) + shadow — 0.2s ease
Nav links: color transition + underline slide-in from left
Page transitions: fade in on scroll (opacity 0 → 1, translateY 8px → 0)
CTA button hover: translateY(-2px) + box-shadow 0 8px 24px rgba(0,0,0,0.12)
Image hover inside cards: slight scale(1.02) with overflow hidden on container
Accent section (green/black pill): on hover, nothing — these are static content blocks

SITE STRUCTURE
4 pages, built as separate frames:
1. Landing Page
Nav (fixed)
Hero section (cream bg, large H1 in EB Garamond, subtext, CTA button)
Case Study Cards section (3 cards, 2-column or full-width stacked)
AI Playground Cards section (3 cards, same grid)
Footer strip ("Made with love")
2. Case Studies Page
Index of 3 case study cards → clicking opens full case study
Case studies: Order System, Sequence Redesign, Nomad (speculative)
3. AI Playground Page
Index of 3 cards → clicking opens detail page
Projects: Ducky, Typo Tool, Image Delight
4. About Me Page
Horizontal photo scroll (top)
Bio text section below (left-aligned, EB Garamond H2 + Space Grotesk body)
No resume page.

VOICE
Simple. Direct. Human. No jargon. Short sentences. Sound like a smart person talking — not a CV. Every section must answer "so what?" for the reader.

Always refer back to this system when making any decision about color, spacing, type, radius, or interaction. Do not invent new values

