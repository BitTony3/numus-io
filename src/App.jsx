import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import { motion } from 'framer-motion';

const queryClient = new QueryClient();

const StarryBackground = () => (
  <div className="fixed inset-0 z-[-1] bg-gray-900">
    {[...Array(100)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: Math.random() * 3 + 1,
          height: Math.random() * 3 + 1,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          background: i % 5 === 0 ? '#00A86B' : '#FFFFFF',
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.7, 1, 0.7],
          rotate: 360,
        }}
        transition={{
          duration: Math.random() * 5 + 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <StarryBackground />
      <BrowserRouter>
        <Routes>
          {navItems.map(({ to, page }) => (
            <Route key={to} path={to} element={page} />
          ))}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
