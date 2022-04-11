import React, { Component } from 'react'
import Counter from './Counter'

export default class CounterApp extends Component {
    constructor(props) {
        super(props);
        this.state = { count : 10 };
        this.resetCount = this.resetCount.bind(this);
    }
    resetCount() {
        this.setState(( { count } ) => ({count: 10}))
    }
    render() {
        return (
            <div>
                <Counter count={this.state.count} />
                <button onClick={this.resetCount} >리셋</button>
            </div>
        )
    }
}
