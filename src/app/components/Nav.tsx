import { Link, useLocation } from "react-router";

const acornBold: React.CSSProperties = {
  fontFamily: "'Acorn', serif",
  fontWeight: 700,
  fontStyle: "normal",
};

const navStyles = `
  .nav-text-link {
    transition: opacity 0.18s ease;
  }
  .nav-text-link:hover {
    opacity: 0.7;
  }
  .nav-cta-btn {
    transition: background 0.18s ease, color 0.18s ease, transform 0.15s ease;
  }
  .nav-cta-btn:hover {
    background: #ffffeb !important;
    color: #034f46 !important;
    transform: scale(1.03);
  }
`;

const links = [
  { label: "Work", href: "/case-studies" },
  { label: "Playground", href: "/ai-playground" },
  { label: "About", href: "/about" },
];

export function Nav() {
  const location = useLocation();

  return (
    <>
      <style>{navStyles}</style>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "65px",
          background: "#034f46",
          borderBottom: "1px solid rgba(255,255,235,0.15)",
          boxShadow: "0px 2px 20px 0px rgba(46,53,56,0.10)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            padding: "0 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              ...acornBold,
              fontSize: "20px",
              color: "#ffffeb",
              textDecoration: "none",
              letterSpacing: "-0.2px",
              whiteSpace: "nowrap",
            }}
          >
            Disha Jain
          </Link>

          {/* Links + CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "36px" }}>
            {links.map((link) => {
              const isActive = location.pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className="nav-text-link"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: isActive ? 500 : 400,
                    fontSize: "16px",
                    color: isActive ? "#ffffeb" : "rgba(255,255,235,0.65)",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    opacity: 1,
                  }}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* CTA */}
            
          </div>
        </div>
      </nav>
    </>
  );
}
