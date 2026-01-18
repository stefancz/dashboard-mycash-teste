interface BudgetCardProps {
  category: string;
  spent: number;
  allocated: number;
}

export function BudgetCard({ category, spent, allocated }: BudgetCardProps) {
  const percentage = allocated > 0 ? Math.round((spent / allocated) * 100) : 0;
  const circumference = 2 * Math.PI * 32; // radius = 32
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px] border border-[#e5e7eb]">
      <div className="flex flex-col items-center justify-center size-full p-[24px] gap-[12px]">
        {/* Circular Progress */}
        <div className="relative w-[72px] h-[72px]">
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
              className="transition-all duration-500"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[12px] font-normal text-[#080b12]">{percentage}%</span>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-[4px] items-center justify-center w-full">
          <p className="text-[14px] font-normal leading-[20px] text-[#080b12] text-center">
            {category}
          </p>
          <p className="text-[20px] font-bold leading-[28px] text-[#080b12] w-[137px] text-center">
            R$ {spent.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
      </div>
    </div>
  );
}
