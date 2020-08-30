import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global'
import { lightTheme, darkTheme } from '../styles/themes'
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const darkModeValue = localStorage.getItem('DARK_MODE')
    // localStorage returns a string, not a boolean
    setDarkMode(darkModeValue === 'true')
    // Set mounted to `true` only after setting the `darkMode` state
    setMounted(true)
  }, [])

  useEffect(() => {
    localStorage.setItem('DARK_MODE', darkMode)
  }, [darkMode]) // Run every time `darkMode` changes

  if (!mounted) return <div />

  return(
  	    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
  	    <div>
        <button className="themebtn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? 'Light Theme' : 'Dark Theme'}
        </button>
      </div>
  	    <GlobalStyles />
			  <Component {...pageProps} />
		  </ThemeProvider>
)
}

export default MyApp
