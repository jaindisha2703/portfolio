import { useParams, Link } from "react-router";
import { TagLabel } from "../components/TagLabel";
import { Footer } from "../components/Footer";
import { ScrollFade } from "../components/ScrollFade";

const caseStudyData: Record<string, {
  tag: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  duration: string;
  imageUrl: string;
  overview: string;
  problem: string;
  process: string;
  outcome: string;
}> = {
  "order-system": {
    tag: "UX Design",
    title: "Redesigning the Order System",
    subtitle: "Making a high-volume restaurant flow feel effortless for staff and customers alike.",
    year: "2024",
    role: "Lead Designer",
    duration: "8 weeks",
    imageUrl: "https://images.unsplash.com/photo-1613652056837-fda5bddd1503?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80",
    overview: "The existing order system required 14 taps to place a single item. Staff were frustrated, errors were common, and customers were waiting longer than they should. We redesigned it from the ground up.",
    problem: "Staff had to navigate through multiple screens to add modifiers, confirm allergies, and submit orders. During peak hours, this created a bottleneck at every till. The cognitive load was high and mistakes were frequent.",
    process: "We started with two days of observation — watching staff at peak service, counting taps, noting where people hesitated or made mistakes. From there we ran rapid prototyping sessions with three different flow models. We tested all three with real staff before a single line of code was written.",
    outcome: "The redesigned flow reduced the average order to 4 taps. Error rates dropped by 60% in the first month. Staff described it as 'finally feeling like the system is on their side'.",
  },
  "sequence-redesign": {
    tag: "Product Design",
    title: "Sequence Redesign",
    subtitle: "Turning a dense scheduling interface into something people actually want to use.",
    year: "2024",
    role: "UX & Visual Designer",
    duration: "6 weeks",
    imageUrl: "https://images.unsplash.com/photo-1627757818592-ce2649563a6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80",
    overview: "Sequence was a scheduling tool used by operations teams. The interface had grown organically over three years — every new feature added on top of the last. Users were spending more time navigating than doing.",
    problem: "The interface had 11 different ways to view the same data, no clear hierarchy, and a sidebar that loaded 40+ options regardless of context. Users reported feeling overwhelmed every time they opened the app.",
    process: "We audited every screen, mapped actual user journeys from session recordings, and ran card sorting with six users. The redesign consolidated views, introduced a contextual sidebar, and added a single 'quick action' command palette.",
    outcome: "Time-on-task for key workflows dropped by 40%. The command palette became the most-used feature within two weeks of launch. The team lead said: 'It feels like half the product, but twice as useful.'",
  },
  "nomad": {
    tag: "Speculative",
    title: "Nomad — Life in Motion",
    subtitle: "A speculative product exploring what a digital nomad's ideal tool would look like if designed from scratch.",
    year: "2023",
    role: "Solo Designer",
    duration: "4 weeks",
    imageUrl: "https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80",
    overview: "This is a speculative project. No client, no brief — just a question: what would the ideal tool look like for someone who works from everywhere, across time zones, with a life that doesn't fit into a 9-5 frame?",
    problem: "Digital nomads use 6–8 different apps to manage work, location, community, and logistics. None of these tools talk to each other. The cognitive overhead of being constantly mobile is huge and mostly invisible.",
    process: "I interviewed five long-term nomads about their actual workflows — not the Instagram version. What emerged was surprising: the biggest pain wasn't productivity, it was continuity. Feeling connected to work and people across the constant change of location.",
    outcome: "Nomad is a concept product centred on 'context portability' — the idea that your work context should travel with you, not live on a specific device or location. The prototype focuses on three key flows: async handoffs, time-zone-aware scheduling, and 'local mode' for arriving somewhere new.",
  },
};

export function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const data = caseStudyData[slug || ""];

  if (!data) {
    return (
      <div style={{ background: "#FFFFEB", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", padding: "48px" }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "rgba(46,53,56,0.50)", marginBottom: "24px" }}>
            This case study content is coming soon.
          </p>
          <Link
            to="/case-studies"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "14px",
              color: "#034F46",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            ← Back to case studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "#FFFFEB", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "140px 48px 64px" }}>
        <ScrollFade>
          <Link
            to="/case-studies"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "13px",
              color: "rgba(46,53,56,0.50)",
              textDecoration: "none",
              marginBottom: "32px",
            }}
          >
            ← Back to work
          </Link>
          <TagLabel label={data.tag} />
          <h1
            style={{
              fontFamily: "'Acorn', serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 700,
              color: "#2E3538",
              lineHeight: 1.15,
              margin: "0 0 20px",
              maxWidth: "700px",
            }}
          >
            {data.title}
          </h1>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "16px",
              color: "rgba(46,53,56,0.65)",
              lineHeight: 1.7,
              maxWidth: "520px",
              margin: 0,
            }}
          >
            {data.subtitle}
          </p>
        </ScrollFade>

        {/* Meta */}
        <ScrollFade delay={100}>
          <div
            style={{
              display: "flex",
              gap: "48px",
              marginTop: "48px",
              flexWrap: "wrap",
            }}
          >
            {[
              { label: "Year", value: data.year },
              { label: "Role", value: data.role },
              { label: "Duration", value: data.duration },
            ].map((m) => (
              <div key={m.label}>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "12px",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(46,53,56,0.40)",
                    margin: "0 0 6px",
                  }}
                >
                  {m.label}
                </p>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "#2E3538",
                    margin: 0,
                  }}
                >
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        </ScrollFade>
      </section>

      {/* Hero Image */}
      <ScrollFade>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 48px",
          }}
        >
          <div
            style={{
              borderRadius: "24px",
              overflow: "hidden",
              height: "480px",
              border: "1px solid rgba(46,53,56,0.12)",
            }}
          >
            <img
              src={data.imageUrl}
              alt={data.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </ScrollFade>

      {/* Content */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "80px 48px 96px" }}>
        {[
          { heading: "Overview", content: data.overview },
          { heading: "The problem", content: data.problem },
          { heading: "Process", content: data.process },
          { heading: "Outcome", content: data.outcome },
        ].map((section, i) => (
          <ScrollFade key={section.heading} delay={i * 80}>
            <div style={{ marginBottom: "60px" }}>
              <h2
                style={{
                  fontFamily: "'Acorn', serif",
                  fontSize: "30px",
                  fontWeight: 700,
                  color: "#2E3538",
                  margin: "0 0 20px",
                  lineHeight: 1.3,
                }}
              >
                {section.heading}
              </h2>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "16px",
                  color: "rgba(46,53,56,0.70)",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {section.content}
              </p>
            </div>
          </ScrollFade>
        ))}

        {/* Back */}
        <ScrollFade>
          <Link
            to="/case-studies"
            className="btn-secondary"
            style={{
              display: "inline-block",
              background: "transparent",
              color: "#2E3538",
              borderRadius: "100px",
              padding: "12px 28px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
              border: "1.5px solid #2E3538",
            }}
          >
            ← Back to all work
          </Link>
        </ScrollFade>
      </section>

      {/* Divider */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 48px" }}>
        <hr style={{ border: "none", borderTop: "1px solid rgba(46,53,56,0.08)" }} />
      </div>

      <Footer />
    </div>
  );
}