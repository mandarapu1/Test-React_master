import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
    
    render() { 

        const { onReset, counters, OnDelete, onIncrement  } = this.props;
       

        return ( 
        <div>
           <button onClick={onReset} className="btn.btn-primary.btn-sm m-2">Reset</button>
           {counters.map(  x => (
              <Counter
                key={x.id}
                onDelete={ onDelete }
                onIncrement={ onIncrement } 
                x={x}
              ></Counter>       
                 ))}
         </div>       
               );
    }
}
 
export default Counters;