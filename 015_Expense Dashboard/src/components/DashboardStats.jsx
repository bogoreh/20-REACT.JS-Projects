import React from 'react'
import Card from './UI/Card'
import { formatCurrency } from '../utils/helpers'

const StatCard = ({ title, amount, type, icon }) => {
  const colors = {
    balance: 'bg-gradient-to-r from-blue-500 to-blue-600',
    income: 'bg-gradient-to-r from-green-500 to-green-600',
    expenses: 'bg-gradient-to-r from-red-500 to-red-600'
  }

  return (
    <Card className={`text-white ${colors[type]} p-6`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-blue-100 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold mt-1">{formatCurrency(amount)}</p>
        </div>
        <div className="text-3xl opacity-80">
          {icon}
        </div>
      </div>
    </Card>
  )
}

const DashboardStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard
        title="Total Balance"
        amount={stats.balance}
        type="balance"
        icon="💰"
      />
      <StatCard
        title="Total Income"
        amount={stats.income}
        type="income"
        icon="📈"
      />
      <StatCard
        title="Total Expenses"
        amount={stats.expenses}
        type="expenses"
        icon="📉"
      />
    </div>
  )
}

export default DashboardStats