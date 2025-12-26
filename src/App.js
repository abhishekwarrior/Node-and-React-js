import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';
import ClassVariable from './ClassVariable';
import StateObject from './StateObject';
import CounterExample from './CounterExample';
import Toggaleffect from './toggaleffect';
import PropsComp from './PropsComp';
import ConditionalRendering from './ConditionalRendering';

function App() {
  return (
   <div>
    <h1>This is my first react code</h1>
    <h2>and this is h2 tag</h2>
    <FirstComponent></FirstComponent>
    <ClassVariable></ClassVariable>
    <StateObject></StateObject>
    <CounterExample></CounterExample>
    <Toggaleffect></Toggaleffect>
    <ConditionalRendering></ConditionalRendering>

    <PropsComp name="abhishek" age={45} course="java" marks={85}>
    </PropsComp>
   </div>
  );
}

export default App;
