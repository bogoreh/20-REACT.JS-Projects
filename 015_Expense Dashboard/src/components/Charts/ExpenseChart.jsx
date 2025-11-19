import React from 'react'
import Card from '../UI/Card'
import { formatCurrency } from '../../utils/helpers'

const ExpenseChart = ({ transactions }) => {
  const last7Days = [...Array(7)].map((_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - i)
    return date.toISOString().split('T')[0]
  }).reverse()

  const dailyData = last7Days.map(date => {
    const dayTransactions = transactions.filter(t => 
      t.date.split('T')[0] === date
    )
    
    const income = dayTransactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0)
    
    const expenses = dayTransactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0)

    return {
      date: new Date(date).toLocaleDateString('en-US', { weekday: 'short' }),
      income,
      expenses
    }
  })

  const maxAmount = Math.max(
    ...dailyData.map(d => Math.max(d.income, d.expenses))
  )

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Weekly Overview</h2>
      <div className="space-y-4">
        {dailyData.map((day, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="w-16 text-sm text-gray-600 font-medium">
              {day.date}
            </div>
            
            {/* Income Bar */}
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-600">Income</span>
                <span className="text-xs font-medium text-gray-800">
                  {formatCurrency(day.income)}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all duration-500"
                  style={{ 
                    width: maxAmount ? `${(day.income / maxAmount) * 100}%` : '0%' 
                  }}
                ></div>
              </div>
            </div>

            {/* Expense Bar */}
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-xs text-gray-600">Expenses</span>
                <span className="text-xs font-medium text-gray-800">
                  {formatCurrency(day.expenses)}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-red-500 h-2 rounded-full transition-all duration-500"
                  style={{ 
                    width: maxAmount ? `${(day.expenses / maxAmount) * 100}%` : '0%' 
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default ExpenseChart