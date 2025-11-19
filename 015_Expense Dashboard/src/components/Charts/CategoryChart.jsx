import React from 'react'
import Card from '../UI/Card'
import { formatCurrency } from '../../utils/helpers'

const CategoryChart = ({ transactions }) => {
  const categoryData = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, transaction) => {
      const { category, amount } = transaction
      acc[category] = (acc[category] || 0) + amount
      return acc
    }, {})

  const totalExpenses = Object.values(categoryData).reduce((sum, amount) => sum + amount, 0)

  const colors = [
    'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 
    'bg-red-500', 'bg-purple-500', 'bg-pink-500', 'bg-indigo-500'
  ]

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Expenses by Category</h2>
      <div className="space-y-3">
        {Object.entries(categoryData)
          .sort(([,a], [,b]) => b - a)
          .map(([category, amount], index) => {
            const percentage = totalExpenses ? (amount / totalExpenses) * 100 : 0
            
            return (
              <div key={category} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-700 capitalize">
                    {category}
                  </span>
                  <span className="text-gray-600">
                    {formatCurrency(amount)} ({percentage.toFixed(1)}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${colors[index % colors.length]}`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            )
          })}
        
        {Object.keys(categoryData).length === 0 && (
          <p className="text-gray-500 text-center py-4">No expense data available</p>
        )}
      </div>
    </Card>
  )
}

export default CategoryChart