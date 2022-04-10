import React, {Component} from 'react';
import MyComponent from './MyComponent';
class MyComponentApp extends Component{
    render(){
        return(
            <div className='body'>
                <MyComponent name='메세지'/>
            </div>
        );
    }
}

export default MyComponentApp;