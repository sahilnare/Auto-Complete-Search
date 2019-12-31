
import React from "react"

class AutoComplete extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            suggestion: [],
            text: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const {name, value} = e.target
        let suggestion = []
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i')
            suggestion = this.props.items.sort().filter(v => regex.test(v))
        }
        this.setState({ suggestion, [name]: value })
    }

    selectSuggestion(value) {
        this.setState({
            text: value,
            suggestion: []
        })
    }

    renderSuggestion() {
        if (this.state.suggestion.length === 0) {
            return null
        } else {
            return (
                <div className="list-container">
                    {this.state.suggestion.map(item => <li onClick={() => this.selectSuggestion(item)}>{item}</li>)}
                </div>
            )
        }
    }

    render() {
        
        return (
            <div className="auto-complete">
                <input type="text" name="text" value={this.state.text} onChange={this.handleChange} autoComplete="off" />
                {this.renderSuggestion()}
            </div>
        )
    }
}

export default AutoComplete
