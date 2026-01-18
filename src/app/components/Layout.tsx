import { ReactNode, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Menu, Search, SlidersHorizontal, Calendar as CalendarIcon } from "lucide-react";
import { Sidebar } from "./Sidebar";
import { DateRangePicker } from "./DateRangePicker";
import { FilterDialog } from "./FilterDialog";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface LayoutProps {
  children: ReactNode;
  showSearch?: boolean;
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
  showDatePicker?: boolean;
  title?: string;
  actionButton?: ReactNode;
  onFilterChange?: (filters: {
    category?: string;
    type?: "income" | "expense" | "all";
    account?: string;
  }) => void;
}

export function Layout({
  children,
  showSearch = true,
  searchQuery = "",
  onSearchChange,
  showDatePicker = true,
  title,
  actionButton,
  onFilterChange,
}: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2026, 0, 1),
    to: new Date(2026, 0, 31),
  });

  const handleApplyFilters = (filters: {
    category?: string;
    type?: "income" | "expense" | "all";
    account?: string;
  }) => {
    onFilterChange?.(filters);
  };

  return (
    <div className="flex h-screen bg-[#F9FAFB] overflow-hidden">
      {/* Sidebar Component */}
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        onClose={() => setSidebarOpen(false)}
      />

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
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setFilterDialogOpen(true)}
                  className="shrink-0 transition-all duration-300 hover:scale-110 hover:bg-gray-100 active:scale-95"
                  aria-label="Filtrar"
                >
                  <SlidersHorizontal className="size-[16px] transition-transform duration-300 hover:rotate-90" />
                </Button>
              )}

              {/* Date selector - Hidden on mobile */}
              {showDatePicker && (
                <div className="hidden md:block shrink-0">
                  <DateRangePicker
                    date={dateRange}
                    onDateChange={setDateRange}
                  >
                    <div className="flex items-center gap-[8px] px-[24px] py-[12px] border border-[#9CA3AF] rounded-[100px] shrink-0 transition-all duration-300 hover:border-[#2a89ef] hover:bg-[#2a89ef]/5 cursor-pointer group">
                      <CalendarIcon className="size-[16px] transition-colors duration-300 text-[#6B7280] group-hover:text-[#2a89ef]" />
                      <span className="text-[14px] whitespace-nowrap">
                        {dateRange?.from && dateRange?.to
                          ? `${format(dateRange.from, "dd MMM", { locale: ptBR })} - ${format(dateRange.to, "dd MMM yyyy", { locale: ptBR })}`
                          : "01 Jan - 31 Jan 2026"}
                      </span>
                    </div>
                  </DateRangePicker>
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

      {/* Filter Dialog */}
      {onFilterChange && (
        <FilterDialog
          open={filterDialogOpen}
          onOpenChange={setFilterDialogOpen}
          onApplyFilters={handleApplyFilters}
        />
      )}
    </div>
  );
}
