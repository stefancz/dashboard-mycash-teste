import { Card, Icon } from '@/components/ui'
import { formatCurrency } from '@/utils/formatters'
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
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
          <XAxis dataKey="name" stroke="#666" style={{ fontSize: '12px' }} />
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
          <Legend />
          <Bar dataKey="Receitas" fill="#A7FF00" radius={[8, 8, 0, 0]} />
          <Bar dataKey="Despesas" fill="#FF0000" radius={[8, 8, 0, 0]} />
        </RechartsBarChart>
      </ResponsiveContainer>
    </Card>
  )
}
