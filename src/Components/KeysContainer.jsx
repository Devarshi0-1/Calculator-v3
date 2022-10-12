export default function KeysContainer({ screenValue, setScreenValue, isDarkModeOn }) {

    function handleClick(event) {
        if (event.target.matches('span')) {
            let keyValue = event.target.innerText
            if (keyValue === 'Clear')
                setScreenValue("")
            else if (keyValue === '=' && screen.value !== '')
                setScreenValue(eval(screenValue))
            else if (keyValue === '>')
                setScreenValue(screenValue.slice(0, -1))
            else
                setScreenValue(prevValue => prevValue + keyValue)            
        }
    }

    const darkMode = isDarkModeOn ? 'dark' : ''

    return (
        <div className='keysContainer screenKeysAnimation' onClick={handleClick}>
            <span id="clear" className="keys">Clear</span>
            <span className={`keys ${darkMode}`}>/</span>
            <span className={`keys ${darkMode}`}>*</span>
            <span className={`keys ${darkMode}`}>7</span>
            <span className={`keys ${darkMode}`}>8</span>
            <span className={`keys ${darkMode}`}>9</span>
            <span className={`keys ${darkMode}`}>-</span>
            <span className={`keys ${darkMode}`}>4</span>
            <span className={`keys ${darkMode}`}>5</span>
            <span className={`keys ${darkMode}`}>6</span>
            <span id="plus" className={`keys ${darkMode}`}>+</span>
            <span className={`keys ${darkMode}`}>1</span>
            <span className={`keys ${darkMode}`}>2</span>
            <span className={`keys ${darkMode}`}>3</span>
            <span id="backspace" className={`keys ${darkMode}`}>&gt;</span>
            <span className={`keys ${darkMode}`}>0</span>
            <span className={`keys ${darkMode}`}>00</span>
            <span className={`keys ${darkMode}`}>.</span>
            <span id="equal" className={`keys ${darkMode}`}> =</span>
        </div>
    )
}
