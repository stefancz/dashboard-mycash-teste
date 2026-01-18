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
    <div className="flex items-center justify-between py-[12px]">
      <div className="flex items-center gap-[12px]">
        <div 
          className="w-[8px] h-[8px] rounded-sm shrink-0"
          style={{ backgroundColor: color }}
        />
        <img 
          src={logo} 
          alt={name} 
          className="w-[24px] h-[24px] object-contain"
        />
        <div className="flex flex-col">
          <span className="text-[14px] font-semibold text-[#080b12]">{name}</span>
          <span className="text-[12px] text-[#6B7280]">{dueDate}</span>
        </div>
      </div>
      <div className="flex items-center gap-[12px]">
        <div className="text-right">
          <p className="text-[16px] font-bold text-[#080b12]">
            R$ {balance.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
          <p className="text-[12px] text-[#6B7280]">**** {lastDigits}</p>
        </div>
      </div>
    </div>
  );
}
