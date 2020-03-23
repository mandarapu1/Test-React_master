import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
   

    render() { 

        console.log("props", this.props);

        return ( 
        <div>
           <button onClick={this.props.onReset} className="btn.btn-primary.btn-sm m-2">Reset</button>        
            {this.props.counters.map(  x => (
              <Counter
                key={x.id}
                onDelete={ this.props.onDelete }
                onIncrement={ this.props.onIncrement } 
                x={x}
              ></Counter>       
                 ))}
         </div>       
               );
    }
}
 
export default Counters;