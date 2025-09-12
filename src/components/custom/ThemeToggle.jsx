import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 shadow-md ${
        darkMode 
          ? 'bg-slate-800 hover:bg-slate-700 text-amber-300 shadow-amber-300/20 hover:shadow-amber-300/40' 
          : 'bg-gray-100 hover:bg-gray-200 text-gray-700 shadow-gray-300/30 hover:shadow-gray-400/50'
      }`}
      title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? 
        <Sun className="w-4 h-4 hover:animate-spin" /> : 
        <Moon className="w-4 h-4 hover:animate-bounce" />
      }
    </button>
  )
}

export default ThemeToggle
