import { Card, Icon } from '@/components/ui'
import { formatCurrency } from '@/utils/formatters'
import { chartColors } from '@/utils/chartColors'
import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

interface AreaChartProps {
  title: string
  incomeData: number[]
  expenseData: number[]
  months: string[]
  maxValue: number
}

export function AreaChart({
  title,
  incomeData,
  expenseData,
  months,
}: AreaChartProps) {
  const chartData = months.map((month, index) => ({
    month,
    Receitas: incomeData[index] || 0,
    Despesas: expenseData[index] || 0,
  }))

  return (
    <Card padding="lg" className="w-full">
      <div className="flex items-center gap-2 mb-6">
        <Icon name="chart" size={20} />
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <RechartsAreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorReceitas" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={chartColors.getLime()} stopOpacity={0.8} />
              <stop offset="95%" stopColor={chartColors.getLime()} stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="colorDespesas" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={chartColors.getRed()} stopOpacity={0.8} />
              <stop offset="95%" stopColor={chartColors.getRed()} stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={chartColors.getGray100()} />
          <XAxis
            dataKey="month"
            stroke={chartColors.getGray600()}
            style={{ fontSize: '12px' }}
          />
          <YAxis
            stroke={chartColors.getGray600()}
            style={{ fontSize: '12px' }}
            tickFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip
            formatter={(value: number | undefined) => value ? formatCurrency(value) : ''}
            contentStyle={{
              backgroundColor: 'var(--gray-0)',
              border: `1px solid var(--gray-100)`,
              borderRadius: 'var(--radius-md)',
              padding: 'var(--spacing-sm)',
            }}
          />
          <Legend
            iconType="circle"
            wrapperStyle={{ paddingTop: '20px' }}
          />
          <Area
            type="monotone"
            dataKey="Receitas"
            stroke={chartColors.getLime()}
            fillOpacity={1}
            fill="url(#colorReceitas)"
          />
          <Area
            type="monotone"
            dataKey="Despesas"
            stroke={chartColors.getRed()}
            fillOpacity={1}
            fill="url(#colorDespesas)"
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </Card>
  )
}
