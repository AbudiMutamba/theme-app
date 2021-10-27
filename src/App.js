import * as React from 'react'
// import {Link} from 'react-router-dom'


function App() {
    const [theme, switchTheme ] = React.useState('')

    const handleClick = (switchTo) => {
        switchTheme(switchTo)
        // console.log(theme)
    }

    return (
        // <div className="base black"}></div>
        <div className={`container ${theme}`}>
            <h1>The theme is <SayTheme themeName={theme} /></h1>

            <input type="button" className="btn red" onClick={() => handleClick('red')} />

            <input type="button" className="btn black" onClick={() => handleClick('black')} />

            <input type="button" className="btn blue" onClick={() => handleClick('blue')}/>

            <input type="button" className="btn yellow" onClick={() => handleClick('yellow')} />

        
        </div>
    )
}

export default App


function SayTheme (props) {
    return <span>{props.themeName}</span>
}
