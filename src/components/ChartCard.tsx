import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from 'recharts'
import Card from './Card'

type Props = {
  title: string
  kind?: 'line' | 'bar'
  data: { name: string; value: number }[]
}

export default function ChartCard({ title, kind = 'line', data }: Props) {
  return (
    <Card title={title}>
      <div className="h-64">
        <ResponsiveContainer>
          {kind === 'line' ? (
            <LineChart data={data} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" strokeWidth={2} dot={false} />
            </LineChart>
          ) : (
            <BarChart data={data} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
