import { useCountNumber } from "../hooks/useCountNumber";
import { AnimatedNumber } from "./AnimatedNumber";

interface BudgetCardProps {
  category: string;
  spent: number;
  allocated: number;
  index?: number;
}

export function BudgetCard({ category, spent, allocated, index = 0 }: BudgetCardProps) {
  const { displayValue: percentageDisplay } = useCountNumber(
    allocated > 0 ? Math.round((spent / allocated) * 100) : 0,
    {
      duration: 2000,
      decimals: 0,
      suffix: "%",
    }
  );

  const percentage = allocated > 0 ? Math.round((spent / allocated) * 100) : 0;
  const circumference = 2 * Math.PI * 32; // radius = 32
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div 
      className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px] border border-[#e5e7eb] transition-all duration-300 hover:shadow-lg hover:scale-[1.03] hover:border-[#C4E703]/30 animate-in fade-in slide-in-from-bottom-4"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col items-center justify-center size-full p-[24px] gap-[12px]">
        {/* Circular Progress */}
        <div className="relative w-[72px] h-[72px] transition-transform duration-300 hover:scale-110">
          <svg className="w-full h-full -rotate-90">
            {/* Background circle */}
            <circle
              cx="36"
              cy="36"
              r="32"
              fill="none"
              stroke="#E7E8EA"
              strokeWidth="8"
            />
            {/* Progress circle */}
            <circle
              cx="36"
              cy="36"
              r="32"
              fill="none"
              stroke="#C4E703"
              strokeWidth="8"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[12px] font-normal text-[#080b12] transition-all duration-300">{percentageDisplay}</span>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-[4px] items-center justify-center w-full">
          <p className="text-[14px] font-normal leading-[20px] text-[#080b12] text-center transition-colors duration-300">
            {category}
          </p>
          <p className="text-[20px] font-bold leading-[28px] text-[#080b12] w-[137px] text-center">
            <AnimatedNumber value={spent} duration={2000} />
          </p>
        </div>
      </div>
    </div>
  );
}
