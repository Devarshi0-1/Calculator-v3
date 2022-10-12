import { useState, useEffect } from 'react'
import Screen from './Screen'
import KeysContainer from './KeysContainer'
import moonImg from '../assets/moon.svg'
import sunImg from '../assets/sun.svg'

export default function Calculator() {

    const [screenValue, setScreenValue] = useState(localStorage.getItem('screenData') || '')
    const [darkMode, setDarkMode] = useState((true))

    function toggleDarkMode() {
            setDarkMode(prevMode => !prevMode)
        }
    
    const darkModeClassName = darkMode ? 'dark' : ''
    return (
        <div className={`container ${darkModeClassName}`}>
            <div className={`colorMode ${darkModeClassName}`} onClick={toggleDarkMode}>
                <div className={`colorModeSlider ${darkModeClassName}`}>
                    <img className="topIcons" src={moonImg} alt="Moon image" />
                    <img className="topIcons" src={sunImg} alt="Sun image" />
                </div>
            </div>
            <div className={`calculator calculatorAnimation ${darkModeClassName}`}>
                <Screen screenValue={screenValue} isDarkModeOn={darkMode} />
                <KeysContainer screenValue={screenValue} setScreenValue={setScreenValue} isDarkModeOn={darkMode} />
            </div>
        </div>
    )
}