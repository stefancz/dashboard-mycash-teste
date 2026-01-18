import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface CashFlowChartProps {
  data: Array<{
    month: string;
    receitas: number;
    despesas: number;
  }>;
}

export function CashFlowChart({ data }: CashFlowChartProps) {
  return (
    <div className="bg-white rounded-[20px] border border-[#e5e7eb] p-[24px]">
      <div className="flex items-center justify-between mb-[24px]">
        <div className="flex items-center gap-[8px]">
          <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
            <path
              d="M2.5 17.5V7.5M7.5 17.5V2.5M12.5 17.5V10M17.5 17.5V12.5"
              stroke="#080B12"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h3 className="text-[18px] font-semibold text-[#080b12]">Fluxo financeiro</h3>
        </div>
        <div className="flex items-center gap-[16px]">
          <div className="flex items-center gap-[8px]">
            <div className="w-[12px] h-[12px] rounded-full bg-[#C4E703]" />
            <span className="text-[14px] text-[#080b12]">Receitas</span>
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="w-[12px] h-[12px] rounded-full bg-[#FF9999]" />
            <span className="text-[14px] text-[#080b12]">Despesas</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorReceitas" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#C4E703" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#C4E703" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorDespesas" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF9999" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#FF9999" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
          <XAxis 
            dataKey="month" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6B7280", fontSize: 12 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6B7280", fontSize: 12 }}
            tickFormatter={(value) => `R$ ${(value / 1000).toFixed(1)}k`}
          />
          <Tooltip 
            formatter={(value: number) => `R$ ${value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
            contentStyle={{ 
              backgroundColor: "white", 
              border: "1px solid #E5E7EB",
              borderRadius: "8px",
              padding: "8px 12px"
            }}
          />
          <Area
            type="monotone"
            dataKey="receitas"
            stroke="#C4E703"
            strokeWidth={2}
            fill="url(#colorReceitas)"
            name="Receitas"
          />
          <Area
            type="monotone"
            dataKey="despesas"
            stroke="#FF9999"
            strokeWidth={2}
            fill="url(#colorDespesas)"
            name="Despesas"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
