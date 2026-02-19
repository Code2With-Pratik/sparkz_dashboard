import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function MainLayout({ children }) {
  // Default to collapsed (closed) on mobile, open on desktop
  const [collapsed, setCollapsed] = useState(window.innerWidth < 768);

  // Auto-handle resize
  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth < 768) {
            setCollapsed(true);
        } else {
            setCollapsed(false);
        }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex h-screen bg-[#F5F7FA]">
      {/* Pass setCollapsed to Sidebar so we can close it from inside (overlay click/X button) */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div
        className={`flex flex-col flex-1 transition-all duration-300 w-full
        ${collapsed ? "md:ml-16" : "md:ml-64"} ml-0`} 
      >
        <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
        <main className="p-4 md:p-8 overflow-y-auto h-[calc(100vh-64px)]">
          {children}
        </main>
      </div>
    </div>
  );
}