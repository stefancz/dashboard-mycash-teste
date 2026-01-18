import { Card, Icon } from '@/components/ui'
import { formatCurrency } from '@/utils/formatters'
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
              <stop offset="5%" stopColor="#A7FF00" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#A7FF00" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="colorDespesas" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF0000" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FF0000" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
          <XAxis
            dataKey="month"
            stroke="#666"
            style={{ fontSize: '12px' }}
          />
          <YAxis
            stroke="#666"
            style={{ fontSize: '12px' }}
            tickFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip
            formatter={(value: number | undefined) => value ? formatCurrency(value) : ''}
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #E5E5E5',
              borderRadius: '8px',
              padding: '8px',
            }}
          />
          <Legend
            iconType="circle"
            wrapperStyle={{ paddingTop: '20px' }}
          />
          <Area
            type="monotone"
            dataKey="Receitas"
            stroke="#A7FF00"
            fillOpacity={1}
            fill="url(#colorReceitas)"
          />
          <Area
            type="monotone"
            dataKey="Despesas"
            stroke="#FF0000"
            fillOpacity={1}
            fill="url(#colorDespesas)"
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </Card>
  )
}
