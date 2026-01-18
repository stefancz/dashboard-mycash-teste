import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronLeft, ChevronRight, Home, CreditCard, FileText, User, LogOut } from "lucide-react";
import svgPaths from "@/imports/svg-4csgexenem";
import imgMembers from "@/assets/2d2d4de26d16019c939c7468d658dc71ae4fb8f0.png";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

interface NavItem {
  path: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    path: "/",
    label: "Home",
    icon: <Home className="size-[20px] shrink-0" />,
  },
  {
    path: "/cartoes",
    label: "Cartões",
    icon: <CreditCard className="size-[20px] shrink-0" />,
  },
  {
    path: "/transacoes",
    label: "Transações",
    icon: <FileText className="size-[20px] shrink-0" />,
  },
  {
    path: "/perfil",
    label: "Perfil",
    icon: <User className="size-[20px] shrink-0" />,
  },
];

export function Sidebar({ isOpen, onToggle, onClose }: SidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Auto-collapse on mobile when navigating
  useEffect(() => {
    if (window.innerWidth < 1024) {
      onClose();
    }
  }, [location.pathname, onClose]);

  // Check if path is active
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const handleLogout = () => {
    // TODO: Implement logout logic with Supabase
    navigate("/");
  };

  const sidebarWidth = isCollapsed ? "lg:w-[80px]" : "lg:w-[280px]";
  const sidebarPosition = isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0";

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:relative
          ${sidebarWidth}
          w-[280px]
          h-full
          bg-white
          border-r border-[#E5E7EB]
          flex flex-col
          z-50
          transition-all duration-300 ease-in-out
          ${sidebarPosition}
          shadow-lg lg:shadow-none
        `}
      >
        {/* Header Section */}
        <div className="flex items-center justify-between p-[24px] lg:p-[32px] border-b border-[#E5E7EB] shrink-0">
          {/* Logo - Hidden when collapsed */}
          {!isCollapsed && (
            <div className="h-[29.818px] w-[139.648px] animate-in fade-in slide-in-from-left">
              <Link to="/" className="block">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139.648 29.8184">
                  <g>
                    <path d={svgPaths.p2d732980} fill="#060A11" />
                    <path d={svgPaths.p2590a480} fill="#060A11" />
                    <path d={svgPaths.p3cad3300} fill="#060A11" />
                    <path d={svgPaths.p5133700} fill="#060A11" />
                    <path d={svgPaths.p23415d40} fill="#060A11" />
                    <path d={svgPaths.p1113c900} fill="#060A11" />
                    <path d={svgPaths.pbb75a40} fill="#060A11" />
                  </g>
                </svg>
              </Link>
            </div>
          )}

          {/* Logo Icon - Shown when collapsed */}
          {isCollapsed && (
            <div className="w-[40px] h-[40px] rounded-[12px] bg-[#d7ff00] flex items-center justify-center mx-auto animate-in fade-in scale-in">
              <span className="text-[20px] font-bold text-[#080b12]">M</span>
            </div>
          )}

          {/* Close button - Mobile only */}
          <button
            onClick={onClose}
            className="lg:hidden p-[8px] rounded-[8px] hover:bg-[#F3F4F6] transition-colors duration-200"
            aria-label="Fechar menu"
          >
            <X className="size-[20px] text-[#080b12]" />
          </button>

          {/* Collapse button - Desktop only */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:flex absolute -right-[12px] top-[40px] bg-white p-[8px] rounded-full shadow-lg border border-[#E5E7EB] transition-all duration-300 hover:scale-110 hover:shadow-xl"
            aria-label={isCollapsed ? "Expandir sidebar" : "Recolher sidebar"}
          >
            {isCollapsed ? (
              <ChevronRight className="size-[16px] text-[#080b12]" />
            ) : (
              <ChevronLeft className="size-[16px] text-[#080b12]" />
            )}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto py-[24px] px-[16px] lg:px-[24px]">
          <div className="flex flex-col gap-[8px]">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    group
                    flex items-center
                    gap-[12px]
                    px-[16px]
                    py-[12px]
                    rounded-[100px]
                    transition-all duration-300
                    relative
                    ${active
                      ? "bg-[#d7ff00] shadow-sm"
                      : "hover:bg-[#F3F4F6]"
                    }
                    ${isCollapsed ? "justify-center" : ""}
                  `}
                  title={isCollapsed ? item.label : undefined}
                >
                  <span
                    className={`
                      transition-colors duration-300
                      ${active ? "text-[#080b12]" : "text-[#6B7280] group-hover:text-[#080b12]"}
                    `}
                  >
                    {item.icon}
                  </span>
                  {!isCollapsed && (
                    <span
                      className={`
                        font-semibold text-[16px] lg:text-[18px]
                        transition-all duration-300
                        animate-in fade-in slide-in-from-left
                        ${active ? "text-[#080b12]" : "text-[#080b12]"}
                      `}
                    >
                      {item.label}
                    </span>
                  )}
                  {active && !isCollapsed && (
                    <div className="ml-auto w-[6px] h-[6px] rounded-full bg-[#080b12] animate-in fade-in scale-in shrink-0" />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* User Section */}
        <div className={`
          border-t border-[#E5E7EB]
          p-[24px] lg:p-[32px]
          shrink-0
          ${isCollapsed ? "px-[16px]" : ""}
        `}>
          {/* User Info */}
          {!isCollapsed && (
            <div className="flex items-center gap-[12px] mb-[16px] animate-in fade-in slide-in-from-left">
              <img
                src={imgMembers}
                alt="User"
                className="size-[40px] rounded-full border-2 border-[#E5E7EB] shrink-0 transition-transform duration-300 hover:scale-110"
              />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-[16px] text-[#080b12] truncate">Lucas Marte</p>
                <p className="text-[14px] text-[#6B7280] truncate">lucasmarte@gmail.com</p>
              </div>
            </div>
          )}
          {isCollapsed && (
            <div className="flex justify-center mb-[16px] animate-in fade-in scale-in">
              <img
                src={imgMembers}
                alt="User"
                className="size-[40px] rounded-full border-2 border-[#E5E7EB] shrink-0 transition-transform duration-300 hover:scale-110"
              />
            </div>
          )}

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className={`
              w-full
              flex items-center
              gap-[12px]
              px-[16px]
              py-[12px]
              rounded-[100px]
              text-[#6B7280]
              hover:bg-[#F3F4F6]
              hover:text-[#E61E32]
              transition-all duration-300
              ${isCollapsed ? "justify-center" : ""}
            `}
            title={isCollapsed ? "Sair" : undefined}
          >
            <LogOut className="size-[20px] shrink-0 transition-transform duration-300 group-hover:rotate-12" />
            {!isCollapsed && (
              <span className="font-semibold text-[16px] lg:text-[18px] animate-in fade-in slide-in-from-left">
                Sair
              </span>
            )}
          </button>
        </div>
      </aside>
    </>
  );
}
