import React from 'react'
import Card from './UI/Card'
import Button from './UI/Button'
import { formatCurrency, formatDate } from '../utils/helpers'

const ExpenseList = ({ transactions, onDeleteTransaction }) => {
  if (transactions.length === 0) {
    return (
      <Card className="p-6 text-center">
        <p className="text-gray-500">No transactions found</p>
      </Card>
    )
  }

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Transactions</h2>
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {transactions.map(transaction => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800">{transaction.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="capitalize">{transaction.category}</span>
                    <span>•</span>
                    <span>{formatDate(transaction.date)}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${
                    transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type === 'income' ? '+' : '-'}{formatCurrency(transaction.amount)}
                  </p>
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    transaction.type === 'income' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {transaction.type}
                  </span>
                </div>
              </div>
            </div>
            <Button
              variant="danger"
              size="sm"
              onClick={() => onDeleteTransaction(transaction.id)}
              className="ml-3"
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default ExpenseList