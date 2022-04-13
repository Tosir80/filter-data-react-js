import "./App.css";

import { items} from './allData'

import { useState } from "react";
import Menu from "./components/Menu";
import Button from "./components/Button";


const allCategory=["All",...new Set(items.map(item=>item.category))]

function App() {

 const [menuItem,setMenuItem]=useState(items)
 const [buttons,setButtons]=useState(allCategory)


 const filter=(button)=>{
   if(button === "All"){
     setMenuItem(items)
     return
   }
   const filterData=items.filter(item=>item.category==button)
   setMenuItem(filterData)
 }

  return <div className="App">
    <div className="title">
      <h1>Filter data </h1>
    </div>

    <Button buttons={buttons} filter={filter}/>
    {/* menu show  */}
    <Menu  menuItem={menuItem}/>
  </div>;
}

export default App;
