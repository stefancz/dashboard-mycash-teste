import { Check } from "lucide-react";
import { Button } from "@/app/components/ui/button";

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
  onTogglePaid 
}: UpcomingExpenseProps) {
  return (
    <div className="flex items-center justify-between py-[12px] border-b border-[#E5E7EB] last:border-0">
      <div className="flex-1">
        <p className="text-[14px] font-semibold text-[#080b12]">{description}</p>
        <div className="flex items-center gap-[8px] mt-[4px]">
          <span className="text-[12px] text-[#6B7280]">{dueDate}</span>
          <span className="text-[12px] text-[#6B7280]">•</span>
          <span className="text-[12px] text-[#6B7280]">{account}</span>
        </div>
      </div>
      <div className="flex items-center gap-[12px]">
        <p className="text-[16px] font-bold text-[#080b12]">
          R$ {amount.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
        <Button
          variant="ghost"
          size="icon"
          onClick={onTogglePaid}
          className={`h-[24px] w-[24px] rounded-full border-2 transition-all ${
            isPaid
              ? "bg-[#15BE78] border-[#15BE78] text-white"
              : "border-[#9CA3AF] hover:border-[#15BE78]"
          }`}
        >
          {isPaid && <Check className="h-[14px] w-[14px]" />}
        </Button>
      </div>
    </div>
  );
}
