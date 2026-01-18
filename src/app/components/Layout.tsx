import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Menu, X, ChevronLeft, Search, SlidersHorizontal, Calendar, User } from "lucide-react";
import svgPaths from "@/imports/svg-4csgexenem";
import imgMembers from "@/assets/2d2d4de26d16019c939c7468d658dc71ae4fb8f0.png";

interface LayoutProps {
  children: ReactNode;
  showSearch?: boolean;
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
  showDatePicker?: boolean;
  title?: string;
  actionButton?: ReactNode;
}

export function Layout({
  children,
  showSearch = true,
  searchQuery = "",
  onSearchChange,
  showDatePicker = true,
  title,
  actionButton,
}: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex h-screen bg-[#F9FAFB] overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <>
          {/* Overlay for mobile */}
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />

          {/* Sidebar */}
          <div className="bg-white fixed lg:relative lg:w-[300px] w-[280px] h-full border-r border-[#E5E7EB] p-[24px] lg:p-[32px] flex flex-col justify-between shrink-0 z-50 transition-transform">
            {/* Logo */}
            <div className="flex flex-col gap-[40px] lg:gap-[56px]">
              <div className="h-[29.818px] w-[139.648px]">
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
              </div>

              {/* Menu */}
              <div className="flex flex-col gap-[8px]">
                <Link
                  to="/"
                  className={`rounded-[100px] flex items-center gap-[8px] px-[16px] py-[12px] w-full transition-all duration-300 ${
                    isActive("/")
                      ? "bg-[#d7ff00]"
                      : "hover:bg-[#F3F4F6]"
                  }`}
                >
                  <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                    <path d={svgPaths.pf7ed600} fill="#080B12" />
                  </svg>
                  <span className="font-semibold text-[18px] text-[#080b12]">Home</span>
                </Link>
                <Link
                  to="/cartoes"
                  className={`rounded-[100px] flex items-center gap-[8px] px-[16px] py-[12px] w-full transition-all duration-300 ${
                    isActive("/cartoes")
                      ? "bg-[#d7ff00]"
                      : "hover:bg-[#F3F4F6]"
                  }`}
                >
                  <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p320ad300} fill="#080B12" />
                    <path d={svgPaths.p2e706500} fill="#080B12" />
                  </svg>
                  <span className="font-semibold text-[18px] text-[#080b12]">Cartões</span>
                </Link>
                <Link
                  to="/transacoes"
                  className={`rounded-[100px] flex items-center gap-[8px] px-[16px] py-[12px] w-full transition-all duration-300 ${
                    isActive("/transacoes")
                      ? "bg-[#d7ff00]"
                      : "hover:bg-[#F3F4F6]"
                  }`}
                >
                  <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                    <path d="M2 2h12v12H2V2zm1 1v10h10V3H3z" fill="#080B12" />
                    <path d="M5 5h6v1H5V5zm0 2h6v1H5V7zm0 2h4v1H5V9z" fill="#080B12" />
                  </svg>
                  <span className="font-semibold text-[18px] text-[#080b12]">Transações</span>
                </Link>
                <Link
                  to="/perfil"
                  className={`rounded-[100px] flex items-center gap-[8px] px-[16px] py-[12px] w-full transition-all duration-300 ${
                    isActive("/perfil")
                      ? "bg-[#d7ff00]"
                      : "hover:bg-[#F3F4F6]"
                  }`}
                >
                  <User className="size-[16px]" />
                  <span className="font-semibold text-[18px] text-[#080b12]">Perfil</span>
                </Link>
              </div>
            </div>

            {/* User info */}
            <div className="flex flex-col gap-[12px]">
              <img src={imgMembers} alt="User" className="size-[24px] rounded-full" />
              <div>
                <p className="font-semibold text-[16px] text-[#080b12]">Lucas Marte</p>
                <p className="text-[14px] text-[#080b12] truncate">lucasmarte@gmail.com</p>
              </div>
            </div>

            {/* Toggle button - Desktop only */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute bg-white -right-[12px] top-[35px] p-[4px] rounded-full shadow-lg border border-[#E5E7EB] hidden lg:block transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="size-[16px]" />
            </button>

            {/* Close button - Mobile only */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-[24px] right-[24px] p-[4px] lg:hidden transition-all duration-300 hover:scale-110"
            >
              <X className="size-[20px]" />
            </button>
          </div>
        </>
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-[16px] sm:p-[24px] lg:p-[32px] max-w-[1400px] mx-auto">
          {/* Navbar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[16px] mb-[24px] lg:mb-[32px]">
            {/* Left side - Search and filters */}
            <div className="flex items-center gap-[8px] w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
              {/* Menu button - shows when sidebar is closed */}
              {!sidebarOpen && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSidebarOpen(true)}
                  className="shrink-0 transition-all duration-300 hover:scale-110 active:scale-95"
                >
                  <Menu className="size-[20px]" />
                </Button>
              )}

              {/* Title or Search */}
              {title ? (
                <h1 className="text-[24px] sm:text-[28px] font-bold text-[#080b12] animate-in fade-in slide-in-from-left-4">
                  {title}
                </h1>
              ) : (
                showSearch && (
                  <div className="flex items-center gap-[8px] px-[16px] sm:px-[24px] py-[12px] border border-[#9CA3AF] rounded-[100px] min-w-[140px] sm:w-[175px] shrink-0 transition-all duration-300 focus-within:border-[#2a89ef] focus-within:ring-2 focus-within:ring-[#2a89ef]/20 hover:border-[#6B7280]">
                    <Search className="size-[16px] shrink-0 transition-colors duration-300 text-[#6B7280] group-focus-within:text-[#2a89ef]" />
                    <Input
                      value={searchQuery}
                      onChange={(e) => onSearchChange?.(e.target.value)}
                      placeholder="Pesquisar"
                      className="border-0 p-0 h-auto focus-visible:ring-0 text-[14px] w-full bg-transparent"
                    />
                  </div>
                )
              )}

              {/* Filter button */}
              {showSearch && (
                <Button variant="ghost" size="icon" className="shrink-0 transition-all duration-300 hover:scale-110 hover:bg-gray-100 active:scale-95">
                  <SlidersHorizontal className="size-[16px] transition-transform duration-300 hover:rotate-90" />
                </Button>
              )}

              {/* Date selector - Hidden on mobile */}
              {showDatePicker && (
                <div className="hidden md:flex items-center gap-[8px] px-[24px] py-[12px] border border-[#9CA3AF] rounded-[100px] shrink-0 transition-all duration-300 hover:border-[#2a89ef] hover:bg-[#2a89ef]/5 cursor-pointer">
                  <Calendar className="size-[16px] transition-colors duration-300 text-[#6B7280] group-hover:text-[#2a89ef]" />
                  <span className="text-[14px] whitespace-nowrap">01 Jan - 31 Jan 2026</span>
                </div>
              )}
            </div>

            {/* Action Button */}
            {actionButton}
          </div>

          {/* Page Content */}
          <div className="animate-in fade-in slide-in-from-bottom-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
