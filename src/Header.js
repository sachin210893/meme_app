import React from 'react'
import ReactDOM from 'react-dom'

class Header extends React.Component{
    constructor(){
        super()
        this.state= {}
    }
    render(){
        return(
            <header>
                <img src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" alt="problem?" />
                <p>Meme Generator</p>
            </header>
        )
    }
}

export default Header