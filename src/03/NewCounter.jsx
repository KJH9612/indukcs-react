import React, { Component } from 'react'

export default class NewCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.increaseCount = this.increaseCount.bind(this);
    }
    static getDerivedStateFromProps(props, state) {
        const { count } = props;
        return {
            count,
            newCount : count === state.count ? state.count : count
        }
    }
    increaseCount() {
        this.setState(( { newCount } ) => ({newCount:newCount + 1}))
    }
  render() {
    return (
      <div>NewCounter</div>
    )
  }
}
