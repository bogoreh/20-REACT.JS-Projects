import React, { useState } from 'react'
import Card from './UI/Card'
import Button from './UI/Button'

const ExpenseForm = ({ onAddTransaction }) => {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    type: 'expense',
    category: 'food'
  })

  const categories = {
    income: ['salary', 'freelance', 'investment', 'other'],
    expense: ['food', 'transport', 'entertainment', 'shopping', 'bills', 'health', 'other']
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.description.trim() || !formData.amount) return

    onAddTransaction(formData)
    setFormData({
      description: '',
      amount: '',
      type: 'expense',
      category: 'food'
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'type' && { category: value === 'income' ? 'salary' : 'food' })
    }))
  }

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Add Transaction</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="0.00"
              min="0"
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Type
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories[formData.type].map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <Button 
          type="submit" 
          variant={formData.type === 'income' ? 'success' : 'primary'}
          className="w-full"
        >
          Add {formData.type === 'income' ? 'Income' : 'Expense'}
        </Button>
      </form>
    </Card>
  )
}

export default ExpenseForm