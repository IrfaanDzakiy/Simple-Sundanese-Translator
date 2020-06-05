import React from 'react'

class Translator extends React.Component{
    constructor(){
        super()
        this.state = {
            before : "",
            after : "",
            insun : true
        }
        this.handleSwitch = this.handleSwitch.bind(this)
    }

    handleSubmit = async e => {
        e.preventDefault()
        const response = await fetch('/', {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json', 
            },
            body : JSON.stringify({ 
                before : this.state.before,
                insun : this.state.insun,
            })
        })
        const body = await response.text()

        this.setState({after: body})
    }

    handleSwitch(){
        this.setState(prevState => {
            return {
                before : prevState.before,
                after : prevState.after,
                insun : !prevState.insun
            }
        })
    }

    handleChange = async e => {
        this.setState({before: e.target.value})
    }

    render (){
        const translateTitle = this.state.insun ? "Indonesia - Sunda" : "Sunda - Indonesia"
        return(
            <div >
                <p className="title">{translateTitle}</p>
                <form onSubmit={this.handleSubmit}>
                    <textarea className="box" value = {this.state.before} onChange={this.handleChange}></textarea>
                    <textarea className="box" value = {this.state.after} readOnly></textarea>
                    <br/>
                    <button className="button" type="submit">TRANSLATE</button>
                    <button className="button" onClick={this.handleSwitch}>SWITCH</button>
                </form>
            </div>
        )
    }
}

export default Translator