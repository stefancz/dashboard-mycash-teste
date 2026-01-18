import { AnimatedNumber } from "./AnimatedNumber";

interface AccountCardProps {
  name: string;
  balance: number;
  dueDate: string;
  lastDigits: string;
  logo: string;
  color: string;
}

export function AccountCard({ name, balance, dueDate, lastDigits, logo, color }: AccountCardProps) {
  return (
    <div className="flex items-center justify-between py-[12px] transition-all duration-300 hover:bg-gray-50/50 rounded-lg px-2 -mx-2 cursor-pointer group">
      <div className="flex items-center gap-[12px]">
        <div 
          className="w-[8px] h-[8px] rounded-sm shrink-0 transition-all duration-300 group-hover:scale-125"
          style={{ backgroundColor: color }}
        />
        <img 
          src={logo} 
          alt={name} 
          className="w-[24px] h-[24px] object-contain transition-transform duration-300 group-hover:scale-110"
        />
        <div className="flex flex-col">
          <span className="text-[14px] font-semibold text-[#080b12] transition-colors duration-300 group-hover:text-[#2a89ef]">{name}</span>
          <span className="text-[12px] text-[#6B7280]">{dueDate}</span>
        </div>
      </div>
      <div className="flex items-center gap-[12px]">
        <div className="text-right">
          <p className="text-[16px] font-bold text-[#080b12] transition-transform duration-300 group-hover:scale-105">
            <AnimatedNumber value={balance} duration={1500} />
          </p>
          <p className="text-[12px] text-[#6B7280]">**** {lastDigits}</p>
        </div>
      </div>
    </div>
  );
}
