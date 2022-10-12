export default function Screen({ screenValue, isDarkModeOn }) {

    const darkMode = isDarkModeOn ? 'dark' : ''

    return (
        <input
            type="text" 
            id='screen' 
            className={`screenKeysAnimation ${darkMode}`}
            placeholder='Enter Number' 
            value={screenValue}
            name='screen'
            onChange={localStorage.setItem("screenData", screenValue)}
            readOnly
        />
    )
}
