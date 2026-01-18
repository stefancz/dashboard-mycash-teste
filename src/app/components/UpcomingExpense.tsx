import { AnimatedNumber } from "./AnimatedNumber";
import { Check } from "lucide-react";

interface UpcomingExpenseProps {
  description: string;
  amount: number;
  dueDate: string;
  account: string;
  isPaid: boolean;
  onTogglePaid: () => void;
}

export function UpcomingExpense({
  description,
  amount,
  dueDate,
  account,
  isPaid,
  onTogglePaid,
}: UpcomingExpenseProps) {
  return (
    <div className="flex items-center justify-between py-[12px] border-b border-[#E5E7EB] last:border-0 transition-all duration-300 hover:bg-gray-50/50 rounded-lg px-2 -mx-2 group">
      <div className="flex-1">
        <p className="text-[14px] font-semibold text-[#080b12] transition-colors duration-300 group-hover:text-[#2a89ef]">{description}</p>
        <div className="flex items-center gap-[8px] mt-[4px]">
          <span className="text-[12px] text-[#6B7280]">{dueDate}</span>
          <span className="text-[12px] text-[#6B7280]">•</span>
          <span className="text-[12px] text-[#6B7280]">{account}</span>
        </div>
      </div>
      <div className="flex items-center gap-[12px]">
        <p className="text-[16px] font-bold text-[#080b12] transition-transform duration-300 group-hover:scale-105">
          <AnimatedNumber value={amount} duration={1200} />
        </p>
        <button
          onClick={onTogglePaid}
          className={`h-[24px] w-[24px] rounded-full border-2 transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95 ${
            isPaid
              ? "bg-[#15BE78] border-[#15BE78] text-white shadow-md"
              : "border-[#9CA3AF] hover:border-[#15BE78] hover:bg-[#15BE78]/10"
          }`}
          aria-label={isPaid ? "Mark as unpaid" : "Mark as paid"}
        >
          {isPaid && <Check className="size-[14px] animate-in fade-in scale-in" />}
        </button>
      </div>
    </div>
  );
}
