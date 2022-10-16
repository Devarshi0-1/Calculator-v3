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

    const keyDataArr = [{ data: 'Clear', id: 'clear' }, { data: '/' }, { data: '*' }, { data: '7' }, { data: '8' }, { data: '9' }, { data: '-' }, { data: '4' }, { data: '5' }, { data: '6' }, { data: '+', id: "plus" }, { data: '1' }, { data: '2' }, { data: '3' }, { data: '>', id: "backspace" }, { data: '0' }, { data: '00' }, { data: '.' }, { data: '=', id: "equal" }]

    const renderKeys = keyDataArr.map(key => {
        return <span className={`keys ${darkMode}`}  id={key.id ? `${key.id}` : ''}>{key.data}</span>
    })

    return (
        <div className='keysContainer screenKeysAnimation' onClick={handleClick}>
            {renderKeys}
        </div>
    )
}
