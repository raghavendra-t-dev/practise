import logo from './logo.svg';
import './App.css';
import ToDo from './Components';
import Counter from './Components/Counter';
import Form from './Components/Form';
import FetchData from './Components/Fetch';
import Timer from './Components/Timer';
import Signal from './Components/Signal';
import { createContext, useState } from 'react';

export  const AppContext = createContext()

const App =()=> {


  const [store,setStore] = useState({
    name:"Raghava"
  })


  return (
    <AppContext.Provider value={{store,setStore}}>

    <div className="App">
      {/* <Signal/> */}
      <ToDo/>
      <Counter/>
      {/* <FetchData/> */}
      {/* <Form/> */}
      {/* <Timer/> */}
    </div>
       </AppContext.Provider>

  );
}

export default App;
