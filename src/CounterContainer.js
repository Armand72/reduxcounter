import React, { Component } from 'react';
import {connect} from 'react-redux'

class CounterContainer extends Component {
    render() { 
      const{count, dispatch} = this.props
        return (

            <div>
            <p id="render-store" />
          
            <p>{count}</p>
            <button onClick={() => dispatch({type: 'ONE'})} id="addone">+1</button>
            <button onClick={() => dispatch({type: 'TEN'})} id="addten">+10</button>
            <button onClick={() => dispatch({type: 'MINUSONE'})} id="removeone">-1</button>
            <button onClick={() => dispatch({type: 'MINUSTEN'})} id="removeten">-10</button>
            <button onClick={() => dispatch({type: 'RESET'})} id="reset">/</button>
          
          
          </div>


          );
    }
}

const mapStateToProps = state => ({

count: state

});

const CounterComponent= connect(mapStateToProps) (CounterContainer);

export default CounterComponent