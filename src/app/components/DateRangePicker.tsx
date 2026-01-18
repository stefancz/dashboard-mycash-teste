import { useState } from "react";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { DateRange } from "react-day-picker";
import { cn } from "./ui/utils";

interface DateRangePickerProps {
  date?: DateRange;
  onDateChange?: (date: DateRange | undefined) => void;
  className?: string;
  children?: React.ReactNode;
}

export function DateRangePicker({
  date,
  onDateChange,
  className,
  children,
}: DateRangePickerProps) {
  const [selectedDate, setSelectedDate] = useState<DateRange | undefined>(
    date || {
      from: new Date(2026, 0, 1),
      to: new Date(2026, 0, 31),
    }
  );
  const [open, setOpen] = useState(false);

  const handleSelect = (range: DateRange | undefined) => {
    setSelectedDate(range);
    onDateChange?.(range);
    // Close popover when range is selected
    if (range?.from && range?.to) {
      setOpen(false);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        {children || (
          <Button
            id="date"
            variant="outline"
            className={cn(
              "justify-start text-left font-normal border border-[#9CA3AF] rounded-[100px] px-[24px] py-[12px] bg-transparent hover:bg-[#2a89ef]/5 hover:border-[#2a89ef] transition-all duration-300",
              !selectedDate && "text-muted-foreground",
              className
            )}
          >
            <CalendarIcon className="size-[16px] mr-[8px] text-[#6B7280] transition-colors duration-300 group-hover:text-[#2a89ef]" />
            {selectedDate?.from ? (
              selectedDate.to ? (
                <>
                  {format(selectedDate.from, "dd MMM", { locale: ptBR })}{" "}
                  - {format(selectedDate.to, "dd MMM yyyy", { locale: ptBR })}
                </>
              ) : (
                format(selectedDate.from, "dd MMM yyyy", { locale: ptBR })
              )
            ) : (
              <span className="text-[14px]">Selecione o período</span>
            )}
          </Button>
        )}
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-0 bg-white border border-[#E5E7EB] rounded-[20px] shadow-lg"
        align="start"
      >
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={selectedDate?.from}
          selected={selectedDate}
          onSelect={handleSelect}
          numberOfMonths={2}
          locale={ptBR}
          classNames={{
            months: "flex flex-col sm:flex-row gap-4 p-4",
            month: "space-y-4",
            caption: "flex justify-center pt-1 relative items-center",
            caption_label: "text-sm font-semibold text-[#080b12]",
            nav: "space-x-1 flex items-center",
            nav_button: cn(
              "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 hover:bg-[#F3F4F6] text-[#080b12]"
            ),
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell:
              "text-[#6B7280] rounded-md w-9 font-normal text-[12px]",
            row: "flex w-full mt-2",
            cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-[#d7ff00]/20 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
            day: cn(
              "h-9 w-9 p-0 font-normal aria-selected:opacity-100 rounded-md hover:bg-[#F3F4F6] transition-colors duration-200 text-[#080b12]",
              "aria-selected:bg-[#d7ff00] aria-selected:text-[#080b12] aria-selected:font-semibold"
            ),
            day_range_start:
              "day-range-start aria-selected:bg-[#d7ff00] aria-selected:text-[#080b12] aria-selected:rounded-l-md",
            day_range_end:
              "day-range-end aria-selected:bg-[#d7ff00] aria-selected:text-[#080b12] aria-selected:rounded-r-md",
            day_selected:
              "bg-[#d7ff00] text-[#080b12] hover:bg-[#d7ff00]/80 hover:text-[#080b12] focus:bg-[#d7ff00] focus:text-[#080b12] font-semibold",
            day_today: "bg-[#F3F4F6] text-[#080b12] font-semibold",
            day_outside:
              "day-outside text-[#6B7280] opacity-50 aria-selected:bg-[#d7ff00]/50 aria-selected:text-[#080b12] aria-selected:opacity-100",
            day_disabled: "text-[#6B7280] opacity-50 cursor-not-allowed",
            day_range_middle:
              "aria-selected:bg-[#d7ff00]/30 aria-selected:text-[#080b12] rounded-none",
            day_hidden: "invisible",
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
