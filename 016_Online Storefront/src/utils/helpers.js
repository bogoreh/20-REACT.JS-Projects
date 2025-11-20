export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}

export const calculateDiscount = (originalPrice, discountPrice) => {
  return Math.round(((originalPrice - discountPrice) / originalPrice) * 100)
}