import React from 'react';
import LifecycleExample from './LifecycleExample';

class LifecycleExampleApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {hasDestroyed: false};
  }
  componentDidMount() {
    this.setState({hasDestroyed: true});
  }
  render() {
    return (
      <div>
          {this.state.hasDestroyed ? null : <LifecycleExample />}
      </div>
    );
  }
}

export default LifecycleExampleApp;
