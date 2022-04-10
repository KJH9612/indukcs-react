import React, {Component} from 'react';
class MyComponent extends Component{
    render(){
            const name = this.props.name;
            return (
            <div>
                <span>{name}</span> 
                <span>{name}</span> 
                <span>{name}</span> 
            </div>
            );
            
    }
}

export default MyComponent;