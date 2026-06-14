import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import Layout from "./components/layout/Layout";
import AnimatedRoutes from "./components/AnimatedRoutes";
import IntroLoader from "./components/IntroLoader";

const queryClient = new QueryClient();

const AppWrapper = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const hideTimer = setTimeout(() => setShowIntro(false), 10000);
    return () => clearTimeout(hideTimer);
  }, []);

  return (
    <BrowserRouter>
      {showIntro && <IntroLoader />}
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
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
