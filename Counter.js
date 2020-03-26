import React, { Component } from "react";


class Counter extends Component {
 
  
renderTags (){
    if (this.state.tags.length === 0 ) return <p>There are no tags</p>
    return <ul>{  this.state.tags.map( tag => <li key={tag}>{tag}</li>) }
 </ul>
}
//<h4>{this.props.x.id}</h4>
  render() {
        console.log("props", this.props);
        return  (
          <div>
            <span className="badge badge-primary m-2">{this.props.x.value}</span>
            <button onClick={ () => this.props.onIncrement(this.props.x) }className="btn btn-secondary btn-sm">Increment</button>
            <button onClick={() => this.props.onDelete(this.props.x.id)} className="btn btn-danger btn-sm m-2">Delete</button> 
            </div>
                );
           }  
  //onClick={() => this.handleIncrement()}
    
}
export default Counter;
          
