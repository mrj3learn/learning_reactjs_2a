import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';

class Counter extends Component {
    state = {
        count: 1,
        tags : [
            'Tag 1',
            'Tag 2',
            'Tag 3',
        ]
    };
    styles_div = {
        backgroundColor : 'grey',
        // minWidth : 300,
        margin : '20px',
        // display : 'flex',
        justifyContent : 'space-around',
        padding : '10px 30px',
    };

    render() {
        
        return (
            <div style={this.styles_div}>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className='btn btn-secondary btn-sm '>Increment</button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>tag</li>)}
                </ul>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-3 ';
        classes += ('badge-' + (this.state.count === 0 ? 'warning' : 'primary'));
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return (count === 0 ? 'Zero' : count);
    }
}

export default Counter;