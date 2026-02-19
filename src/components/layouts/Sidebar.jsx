import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ShieldCheck,
  MapPin,
  Settings,
  Users2,
  X // Added close icon for mobile
} from "lucide-react";
import Sparkz from "../../assets/images/sparkz.png";

export default function Sidebar({ collapsed, setCollapsed }) {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Employee Details", icon: Users, path: "/employees" },
    { name: "Roles & Permission", icon: ShieldCheck, path: "/roles" },
    { name: "Team Management", icon: Users2, path: "/team" },
    { name: "Add Location", icon: MapPin, path: "/location" },
    { name: "Practice Management", icon: Settings, path: "/practice" },
  ];

  return (
    <>
      {/* Mobile Overlay Backdrop */}
      {!collapsed && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setCollapsed(true)}
        />
      )}

      <aside
        className={`fixed left-0 top-0 h-full bg-[#1a1f37] text-gray-400 transition-all duration-300 z-50 
        ${collapsed ? "-translate-x-full md:translate-x-0 md:w-16" : "translate-x-0 w-66"}
        `}
      >
        {/* Logo Area */}
        <div className="h-16 flex items-center justify-between px-6 font-bold text-lg text-white mb-4">
          <div className="flex items-center">
            <img src={Sparkz} alt="logo" className="h-8 w-auto mr-2" />
          </div>
          
          {/* Mobile Close Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setCollapsed(true)}
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="space-y-1 px-2">
          {menu.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={index}
                to={item.path}
                onClick={() => window.innerWidth < 768 && setCollapsed(true)} // Close sidebar on mobile click
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "bg-transparent text-white font-medium"
                    : "hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon size={20} className={isActive ? "text-white" : "text-gray-400"} />
                {/* Logic: Show text if Sidebar is open (mobile or desktop) */}
                <span className={`${collapsed ? "hidden md:hidden" : "block"} md:${collapsed ? "hidden" : "block"}`}>
                  {item.name}
                </span>
                
                {/* Tooltip for desktop collapsed view */}
                {collapsed && (
                  <span className="hidden md:block absolute left-14 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                    {item.name}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}