import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Landing } from "./pages/Landing";
import { CaseStudies } from "./pages/CaseStudies";
import { CaseStudyDetail } from "./pages/CaseStudyDetail";
import { AIPlayground } from "./pages/AIPlayground";
import { AIProjectDetail } from "./pages/AIProjectDetail";
import { About } from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Landing },
      { path: "case-studies", Component: CaseStudies },
      { path: "case-studies/:slug", Component: CaseStudyDetail },
      { path: "ai-playground", Component: AIPlayground },
      { path: "ai-playground/:slug", Component: AIProjectDetail },
      { path: "about", Component: About },
    ],
  },
]);
