import React, { useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import DashboardStats from './components/DashboardStats'
import ExpenseChart from './components/Charts/ExpenseChart'
import CategoryChart from './components/Charts/CategoryChart'
import { useLocalStorage } from './hooks/useLocalStorage'
import { calculateStats } from './utils/helpers'

function App() {
  const [transactions, setTransactions] = useLocalStorage('expense-tracker', [])
  const [filter, setFilter] = useState('all') // all, income, expense

  const stats = calculateStats(transactions)
  const filteredTransactions = transactions.filter(transaction => 
    filter === 'all' ? true : transaction.type === filter
  )

  const addTransaction = (transaction) => {
    setTransactions(prev => [{
      id: Date.now().toString(),
      ...transaction,
      amount: parseFloat(transaction.amount),
      date: new Date().toISOString()
    }, ...prev])
  }

  const deleteTransaction = (id) => {
    setTransactions(prev => prev.filter(t => t.id !== id))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Expense Dashboard
          </h1>
          <p className="text-gray-600">Track and visualize your finances</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Forms and List */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats */}
            <DashboardStats stats={stats} />
            
            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ExpenseChart transactions={transactions} />
              <CategoryChart transactions={transactions} />
            </div>

            {/* Transaction Form */}
            <ExpenseForm onAddTransaction={addTransaction} />
          </div>

          {/* Right Column - Transaction List */}
          <div className="space-y-6">
            {/* Filter Buttons */}
            <div className="flex gap-2 bg-white rounded-lg p-2 shadow-sm">
              {['all', 'income', 'expense'].map(type => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium capitalize transition-all ${
                    filter === type 
                      ? type === 'income' 
                        ? 'bg-green-100 text-green-700' 
                        : type === 'expense'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Transaction List */}
            <ExpenseList 
              transactions={filteredTransactions}
              onDeleteTransaction={deleteTransaction}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App