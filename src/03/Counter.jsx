import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //초기 카운트 값을 프로퍼티에서 전달된 값으로 설정한다
      count: props.count,
    };
    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
  }
  increaseCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }
  decreaseCount() {
    this.setState(({ count }) => ({ count : count - 1 }));
  }
  render() {
    return (
      <div>
        현재 카운트: {this.state.count}
        <button onClick={this.increaseCount}>카운트 증가</button>
        <button onClick={this.decreaseCount}>카운트 감소</button>
      </div>
    );
  }
}

export default Counter;
