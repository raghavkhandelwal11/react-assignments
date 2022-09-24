import './App.css';
import ButtonOne from "./components/ButtonOne";
import ComponentOne from "./components/FunctionalComponent";
import ButtonTwo from "./components/ButtonTwo";
import ClassComponent from "./components/ClassComponent";

function App() {
  return (
    <div className="App">
      <h1 id="shadow">Styling using functional and class component</h1>
      <ComponentOne id="comp1" style={{color: "Blue"}}/>
      <ButtonOne />
      <ClassComponent id="comp2" style={{color: "Blue"}}/>
      <ButtonTwo />
    </div>
  );
}

export default App;
