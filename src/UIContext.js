import { createContext, useContext, useState, useMemo } from 'react'

const UIContext = createContext(null)

export const useUIContext = () => useContext(UIContext)

export const UIContextProvider = ({ children }) => {
  const [state, setState] = useState({
    isMenuOpen: false
  })
  const value = useMemo(() => {
    const toggleMenu = () => setState({
      ...state,
      isMenuOpen: !state.isMenuOpen
    })
    return {
      ...state,
      toggleMenu
    }
  }, [state])

  return (
    <UIContext.Provider value={value}>
      {children}
    </UIContext.Provider>
  )
}
