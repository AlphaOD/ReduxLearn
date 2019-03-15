import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

import * as actionTypes from "../../Store/actions";

class Counter extends Component {
  /*   state = {
    counter: 0
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState(prevState => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState(prevState => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  }; */
  //previous 20 lines managed by redux
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl label="Subtract 5" clicked={this.props.onSubCounter} />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}> Store Result </button>
        <ul>
          {this.props.storedResults.map(strResults => (
            <li
              key={strResults.id}
              onClick={() => this.props.onDeleteResult(strResults.id)}
            >
              {" "}
              {strResults.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
//We us the following function as prop for the previous class

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
};

//Same as previous just dispatching rathering than taking state
const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onSubCounter: () => dispatch({ type: actionTypes.SUB, value: 5 }),
    onAddCounter: () => dispatch({ type: actionTypes.ADD, value: 5 }),
    onStoreResult: result =>
      dispatch({ type: actionTypes.STORE_RESULTS, result: result }),
    onDeleteResult: id =>
      dispatch({ type: actionTypes.DELETE_RESULTS, resultsElId: id })
  };
};

//if there is no need for a state you can pass null as first argument
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
