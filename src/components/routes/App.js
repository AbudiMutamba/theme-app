import * as React from 'react'
// import {Link} from 'react-router-dom'


function App() {
    const [theme, switchTheme ] = React.useState('')

    const handleClick = (switchTo) => {
        switchTheme(switchTo)
        console.log(theme)
    }

    return (
        <div className="base black">
            <h1>The theme is <SayTheme theme={theme} /></h1>

            <input type="button" className="btn black" onclick={() => handleClick('.black')} />

            <input type="button" className="btn blue" onclick={() => handleClick('.blue')}/>

            <input type="button" className="btn yellow" onclick={() => handleClick('.yellow')} />
        </div>
    )
}

export default App


function SayTheme (props) {
    return <span>{props.themeName}</span>
}
