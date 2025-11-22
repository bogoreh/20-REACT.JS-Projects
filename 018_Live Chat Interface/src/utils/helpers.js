export const formatTime = (date) => {
  return new Date(date).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })
}

export const generateId = () => {
  return Date.now() + Math.random().toString(36).substr(2, 9)
}