import React from 'react'
import ReactDOM from 'react-dom'

class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state= {
            topText : "",
            bottomText : "",
            randomImg : "http://i.imgflip.com/1bij.jpg",
            isLoaded : false,
            allMemeImgs: []
        }
        
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
          .then(response => response.json())
          .then(response => {
            const {memes} = response.data
            console.log(memes[0])
              this.setState({
                isLoaded: true,
                allMemeImgs : memes
              }) 
            })
      }

    handleChange = (event) => {
      const {name, value} = event.target
      this.setState({ [name] : value })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      const randomNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
      const randMemeImg = this.state.allMemeImgs[randomNum].url
      this.setState({ randomImg : randMemeImg })
    }

    render(){
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                  <input type="text" name="topText" value={this.state.topText} placeholder="Text to put on top" onChange={this.handleChange}/>
                  <input type="text" name="bottomText" value={this.state.bottomText} placeholder="Text to put on bottom" onChange={this.handleChange}/>

                  <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt=""/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
                
            </div>
        )
    }
}

export default MemeGenerator