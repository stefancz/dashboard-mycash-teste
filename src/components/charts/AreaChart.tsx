import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

interface CashFlowChartProps {
  data: Array<{
    month: string
    receitas: number
    despesas: number
  }>
}

export function CashFlowChart({ data }: CashFlowChartProps) {

  // Helper para obter cor via CSS variable
  const getColor = (varName: string) => {
    if (typeof window === 'undefined') return 'var(--gray-900)'
    const style = getComputedStyle(document.documentElement)
    const value = style.getPropertyValue(varName).trim()
    return value || `var(--${varName.replace('--', '')})` || 'var(--gray-900)'
  }

  const limeColor = getColor('--lime-400')
  const redColor = getColor('--red-300')
  const gray100 = getColor('--gray-100')
  const gray600 = getColor('--gray-600')

  return (
    <div className="bg-background-card rounded-card border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
            <path
              d="M2.5 17.5V7.5M7.5 17.5V2.5M12.5 17.5V10M17.5 17.5V12.5"
              stroke="var(--gray-900)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h3 className="text-lg font-semibold text-text-primary">Fluxo financeiro</h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-lime-400" />
            <span className="text-sm text-text-primary">Receitas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-300" />
            <span className="text-sm text-text-primary">Despesas</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <RechartsAreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorReceitas" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={limeColor} stopOpacity={0.3} />
              <stop offset="95%" stopColor={limeColor} stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorDespesas" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={redColor} stopOpacity={0.3} />
              <stop offset="95%" stopColor={redColor} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={gray100} vertical={false} />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: gray600, fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: gray600, fontSize: 12 }}
            tickFormatter={(value) => `R$ ${(value / 1000).toFixed(1)}k`}
          />
          <Tooltip
            formatter={(value: any) => {
              if (typeof value === 'number') {
                return `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
              }
              return ''
            }}
            contentStyle={{
              backgroundColor: 'var(--gray-0)',
              border: '1px solid var(--gray-200)',
              borderRadius: 'var(--radius-md)',
              padding: '8px 12px',
            }}
          />
          <Area
            type="monotone"
            dataKey="receitas"
            stroke={limeColor}
            strokeWidth={2}
            fill="url(#colorReceitas)"
            name="Receitas"
          />
          <Area
            type="monotone"
            dataKey="despesas"
            stroke={redColor}
            strokeWidth={2}
            fill="url(#colorDespesas)"
            name="Despesas"
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  )
}
