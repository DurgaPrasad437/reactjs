import React, { Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from  './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent' 
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput'
class App extends Component {
  render() {
   return (
    <div className="App">
      <FocusInput />
     {/*<RefsDemo />
      {/* <ParentComp />
      {/*<Table />
       {/*<FragmentDemo />
       {/* <LifecycleA />
           {/*<Form />
     {/* <h1 className='error'>Error</h1>
     <h1 className ={styles.success}>Success</h1>
         {/*   <Inline />
     {/* <Stylesheet primary={true} />
     {/* <NameList />
       {/* <UserGreeting />
     {/*  <ParentComponent />
     {/* <EventBind /> 
      {/*<FunctionClick />*/}
      {/* <ClassClick />
      {/* <Counter />*/}
     {/*  <Message/>*/} 
   {/* <Greet name="Steve Rogers" heroName="Captain America"> 
    <p>This is children props</p> </Greet>
    <Greet name="Tony Starc"  heroName="Iron Man"> 
    <button>Action</button>
     </Greet>
    <Greet name ="tChala" heroName="Black Panther"/>  
     <Welcome name="Steve Rogers" heroName="Captain America"/>
     <Welcome name="Tony Starc" heroName="Iron Man"/>
     <Welcome name ="tChala" heroName="Black Panther"/>
    {/*<Hello /> */}
    </div>
  )
}
}
export default App;
