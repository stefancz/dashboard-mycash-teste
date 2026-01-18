import { Card, Icon } from '@/components/ui'
import { formatCurrency } from '@/utils/formatters'
import { chartColors } from '@/utils/chartColors'
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

interface BarChartProps {
  title: string
  data: Array<{
    name: string
    Receitas: number
    Despesas: number
  }>
}

export function BarChart({ title, data }: BarChartProps) {
  return (
    <Card padding="lg" className="w-full">
      <div className="flex items-center gap-2 mb-6">
        <Icon name="chart" size={20} />
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <RechartsBarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={chartColors.getGray100()} />
          <XAxis dataKey="name" stroke={chartColors.getGray600()} style={{ fontSize: '12px' }} />
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
          <Legend />
          <Bar dataKey="Receitas" fill={chartColors.getLime()} radius={[8, 8, 0, 0]} />
          <Bar dataKey="Despesas" fill={chartColors.getRed()} radius={[8, 8, 0, 0]} />
        </RechartsBarChart>
      </ResponsiveContainer>
    </Card>
  )
}
