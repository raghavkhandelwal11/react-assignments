import logo from './logo.svg';
import './App.css';
import {useRef, useState, useMemo} from "react";
import ContextVariable from './components/context';
import Component1 from './components/Component1';
import LifeCycles from './components/LifeCycles';
import img1 from "./components/component-lifecycles.png";


function App() {
  const [a, update] = useState("");
  const [b, updateB] = useState(0);
  const [c, updateC] = useState("");
  const refVar = useRef();
  let num = 0;

  const updateRef = () => {
    console.log(a);
    console.log(refVar.current);
    refVar.current.style.width = "600px";
  }

  const fibNum = (n) => {
    return (n <= 1) ? 1 : fibNum(n-1) + fibNum(n-2);
  }

  let memoVar = useMemo(() => {return fibNum(b)}, [b])

  return (
    <div className="App">
      <h1>Interview Preparation Day#4</h1>
      <input type="text" ref={refVar} onChange={(e) => {update(e.target.value)}}/>
      <br />
      <button onClick={updateRef}>change by reference</button>

      <hr />


      <h2>On every change in Input field below it will useMemo to avoid repeating the lengthy calculations</h2>
      <input type="text" placeholder="don't you dare input value greater than 37" onChange={(e) => {num = parseInt(e.target.value);}} style={{width: "600px"}}/>
      <button onClick={() => {updateB(num); console.log(b);}}>get nth term</button>
      <h3>the nth value in fibonacci serious is : {memoVar}</h3>


      <hr />

      <h2>What is Context API</h2>
      <p>In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>

      <p>In simpler words the context API lets us pass the data to descending components without props drilling {"(props drilling means to pass the data to every level from parent to child in which we want to use that data )"}</p>

      <ContextVariable.Provider value={"hello world"}>
      <Component1 />
      </ContextVariable.Provider>

      <hr />

      <h2>React Lifecycle</h2>
      <h3>Every React Component has a lifecycle of its own, lifecycle of a component can be defined as the series of methods that are invoked in different stages of the component’s existence. The definition is pretty straightforward but what do we mean by different stages? A React Component can go through four stages of its life as follows.</h3>
       <ul style={{textAlign: "left"}}>
         <li>Initialization: This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.</li>
         <li>Mounting: Mounting is the stage of rendering the JSX returned by the render method itself.</li>
         <li>Updating: Updating is the stage when the state of a component is updated and the application is repainted.
</li>
         <li>Unmounting: As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.
</li>
       </ul>

       <img src={img1} alt="" />

      <LifeCycles val={c}/>
      <input type="text" onChange={(e) => {updateC(e.target.value)}} />


      <p>open console to see the lifecycle methods logging accordingly</p>


      <hr />

        <h2>Props Drilling and state uplifting concept</h2>
        <h3>Props Drilling: Prop drilling refers to transporting this data/state as props to the intended destination through intermediate components. This means that in order to access the data via props all the intermediate components between that parent and child will have to pass the same in order to propagate it to the required destination</h3>

        <h3>
          State Uplifting: Every component in React has its own state. Because of this sometimes data can be redundant and inconsistent. So, by Lifting up the state we make the state of the parent component as a single source of truth and pass the data of the parent in its children.
        </h3>

      <hr />

        <h2>Difference between useEffect and useContext</h2>

        <h3>useEffect and useContext both are important hooks in the react library however they used for different purpose</h3>

        <h3>useEffect Hook is mainly used when want to execute some extra effects or funtionality whenever any value in the depnedency array changes.  Any change in the dependency array values will result in the execution of code inside useEffect method</h3>

        <h3>
          useContext Hook is used uplift states so all components can access the data without props drilling. we create a context by using React.createContext() method and provide this in some component (parent provider component) and every component under that provider can access the context via useContext hook.
        </h3>

      <hr />

      <h2>Difference Between Callbacks and useCallback hook</h2>

      <p>In JS a Callback function is simply  a function passed to another fuction as an argument, we can pass functions like this whenver we would like to invoke other functions</p>

      <p>useCallback is type of a hook which we can use in JS in order to memorize or cache the function call. If the function call as previous than this hook will simply return the previous saved copy of function without actually creating the function again</p>

      <hr />
      <p>---end----</p>
    </div>
  );
}

export default App;

