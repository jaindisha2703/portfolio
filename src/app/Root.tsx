import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Nav } from "./components/Nav";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function Root() {
  return (
    <div style={{ background: "#FFFFEB", fontFamily: "'Space Grotesk', sans-serif" }}>
      <ScrollToTop />
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}