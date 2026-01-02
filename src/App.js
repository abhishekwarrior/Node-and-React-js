import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';
import ClassVariable from './ClassVariable';
import StateObject from './StateObject';
import CounterExample from './CounterExample';
import Toggaleffect from './toggaleffect';
import PropsComp from './PropsComp';
import ConditionalRendering from './ConditionalRendering';
import FunctionalComp from './FunctionalComp';
import ChildComp from './ChildComp';
import ConditionalFunctional from './ConditionalFunctional';
import ClassCompoentLifecycle from './ClassCompoentLifecycle';
import DomManupulation from './DomManupulation';
import ShouldComponentUpdate from './ShouldComponentUpdate';
import StudentList from './StudentList';
import ComponentDidUpdate from './ComponentDidUpdate';
import { useState } from 'react';
import Unmount from './Unmount';
import UseEffectMount from './useEffectMount';
import UseEffectUpdate from './UseEffectUpdate';
import UseEffectWithDependence from './UseEffectWithDependence';

function App() {
  let [isvisible,setIsVisible]=useState(true);
  return (
   <div>
    <h1>This is my first react code</h1>
    <h2>and this is h2 tag</h2>
    {/* <FirstComponent></FirstComponent>
    <ClassVariable></ClassVariable>
    <StateObject></StateObject>
    <CounterExample></CounterExample>
    <Toggaleffect></Toggaleffect>
    <ConditionalRendering></ConditionalRendering>
    <FunctionalComp></FunctionalComp>
    <ChildComp age={20} name="abhishek"></ChildComp>
    <ConditionalFunctional ></ConditionalFunctional>

    <DomManupulation></DomManupulation>

    <ClassCompoentLifecycle></ClassCompoentLifecycle>

    <ShouldComponentUpdate></ShouldComponentUpdate> 
    <ComponentDidUpdate></ComponentDidUpdate>  */}

{/*     
    {isvisible?<Unmount></Unmount>:null}
    <button onClick={()=>{setIsVisible(!isvisible)}}>update visible</button>
    Enter age: <input type="number"></input>

    

    <PropsComp name="abhishek" age={45} course="java" marks={85}>
    </PropsComp> */}

    {/* <UseEffectMount></UseEffectMount>
    <UseEffectUpdate></UseEffectUpdate> */}
    <UseEffectWithDependence></UseEffectWithDependence>
   </div>
  );
}

export default App;
