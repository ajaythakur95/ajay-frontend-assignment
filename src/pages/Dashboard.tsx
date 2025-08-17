import ChartCard from '../components/ChartCard'

const weekly = [
  { name: 'Mon', value: 10 },
  { name: 'Tue', value: 14 },
  { name: 'Wed', value: 12 },
  { name: 'Thu', value: 18 },
  { name: 'Fri', value: 22 },
  { name: 'Sat', value: 19 },
  { name: 'Sun', value: 15 },
]

const monthly = [
  { name: 'Jan', value: 120 },
  { name: 'Feb', value: 145 },
  { name: 'Mar', value: 160 },
  { name: 'Apr', value: 150 },
  { name: 'May', value: 180 },
  { name: 'Jun', value: 170 },
]

export default function Dashboard() {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      <ChartCard title="Weekly Visits" kind="line" data={weekly} />
      <ChartCard title="Monthly Signups" kind="bar" data={monthly} />
    </section>
  )
}
