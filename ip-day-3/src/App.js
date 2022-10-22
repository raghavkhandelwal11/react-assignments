import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useReducer, useMemo} from "react";
import Example from './components/Example';



let initialize = {
  age: 1
};

let reducer = (state, action) => {
  if(action.type === "ADD_ONE") {
    return {age: state.age+1}
  }
}




function App() {
  let [state1, updateState1] = useState(0);
  let [state2, updateState2] = useState(0);
  let [state3, updateState3] = useState(1);
  let [reducedState, dispatch] = useReducer(reducer, initialize);
  let val = useMemo(() => {
    lengthyFunction(state3)
  })
  useEffect(() => {
    console.log(state2);
  }, [state2])
  return (
    <div className="App">
      <h1>
        Difference between Axios and Fetch?
      </h1>

      <p>
          Axios and fetch are methods which lets us connect to other servers using http protocol. More or less both of them are same but axios is backwards compatible and is more widely usable than fetch. The other major difference is we can get the json data directly while using axios while using fetch API we also need to use .json to convert the data to json data.
      </p>

      <hr />


      <h1>
        Implement useState Hook
      </h1>

      <pre>
        useState accepts an initial state and returns two values:
        
        The current state.
        A function that updates the state.
      </pre>

      <p>{state1}</p>
      <button onClick={() => {updateState1(state1+1)}}>add 1</button>

      <hr />

      <h1>
        Implement useEffect hook
      </h1>

      <p>The word effect refers to a functional programming term called a "side effect".

      But to really understand what a side effect is, we first have to grasp the concept of a pure function.</p>

      <button onClick={() => {updateState2(state2+2)}}>change count1 value</button>


      <hr />

      <h1>Implement useReducer Hook</h1>

      <p>reducedState value is {reducedState.age}</p>
      <button onClick={() =>dispatch({type: "ADD_ONE"})}>add one</button>

      <hr />


      <h1>Implment useMemo hook</h1>

      <p>the value of state3 is {state3}</p>
      <button onClick={() => {updateState3(state3+1)}}>change</button>

      <hr />

      <h1>How do you pass data from parent to child?</h1>

      <Example name="raghav"/>

    </div>
  );
}

export default App;



const lengthyFunction = (num) => {
  for(let i = 0; i <= 100000; i++) {
    num = num;
  }
  console.log("slow function executed!!");
  return num;
}
