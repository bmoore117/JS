import React from 'react'

export default class Preview extends React.Component {
    render() {

        var style = {
            width: '50px',
            height: '50px',
            border: '3px solid black'
        }

        return(<div style={style}>
            <pre>{this.props[note]}</pre>
        </div>)
    }
}