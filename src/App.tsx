import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import Layout from "./components/layout/Layout";
import AnimatedRoutes from "./components/AnimatedRoutes"; // your routing component
import IntroLoader from "./components/IntroLoader";

const queryClient = new QueryClient();

const AppWrapper = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out at 9.5s
    const fadeTimer = setTimeout(() => setFadeOut(true), 9500);
    // Remove loader at 10s
    const hideTimer = setTimeout(() => setShowIntro(false), 10000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {showIntro && (
        <div
          className="intro-container"
          style={{ opacity: fadeOut ? 0 : 1, transition: "opacity 0.5s ease" }}
        >
          <h1 className="intro-text">BoluOladipoCode</h1>
        </div>
      )}
      {!showIntro && (
        <div
          style={{
            opacity: showIntro ? 0 : 1,
            animation: "fadeIn 0.8s ease forwards",
          }}
        >
          <BrowserRouter>
            <Layout>
              <AnimatedRoutes />
            </Layout>
          </BrowserRouter>
        </div>
      )}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppWrapper />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
