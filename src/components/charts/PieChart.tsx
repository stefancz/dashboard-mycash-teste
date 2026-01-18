import { Card, Icon } from '@/components/ui'
import { formatCurrency } from '@/utils/formatters'
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts'

interface PieChartProps {
  title: string
  data: Array<{
    name: string
    value: number
    color: string
  }>
}

const COLORS = ['#A7FF00', '#FF0000', '#007BFF', '#FF9800', '#9C27B0', '#28A745']

export function PieChart({ title, data }: PieChartProps) {
  return (
    <Card padding="lg" className="w-full">
      <div className="flex items-center gap-2 mb-6">
        <Icon name="chart" size={20} />
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color || COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number | undefined) => value ? formatCurrency(value) : ''} />
          <Legend />
        </RechartsPieChart>
      </ResponsiveContainer>
    </Card>
  )
}
