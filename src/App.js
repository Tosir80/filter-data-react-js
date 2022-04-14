// import "./App.css";

// import { items} from './allData'

// import { useState } from "react";
// import Menu from "./components/Menu";
// import Button from "./components/Button";

// const allCategory=["All",...new Set(items.map(item=>item.category))]

// function App() {

//  const [menuItem,setMenuItem]=useState(items)
//  const [buttons,setButtons]=useState(allCategory)

//  const filter=(button)=>{
//    if(button === "All"){
//      setMenuItem(items)
//      return
//    }
//    const filterData=items.filter(item=>item.category==button)
//    setMenuItem(filterData)
//  }

//   return <div className="App">
//     <div className="title">
//       <h1>Filter data </h1>
//     </div>

//     <Button buttons={buttons} filter={filter}/>
//     {/* menu show  */}
//     <Menu  menuItem={menuItem}/>
//   </div>;
// }

// export default App;

import { useEffect, useState } from "react";
import "./App.css";
import Button from "./showData/Button";
import Menu from "./showData/Menu";


function App() {
  const [items, setItems] = useState([]);
  const [data, setData] = useState([]);
  const [buttons,setButtons]=useState([])




  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) =>{ 
        setItems(data.categories) 
        setData(data.categories)
        
    const allCategory=["All", ...new Set(data.categories.map(item=>item.strCategory))]
    setButtons(allCategory)

      });
    
  }, []);




  

  const filterData = (button) => {
    if (button === "All") {
      setData(items);
      return;
    }
    console.log(button);
    const filterItem = items.filter((item) => item.strCategory == button);
    setData(filterItem);
  };

  return (
    <>
      <h2 style={{ color: "green" }}> Filter Data </h2>

      <Button buttons={buttons} filterData={filterData} />

      {/* ------------------ */}
      <Menu menuItem={data} />
    </>
  );
}

export default App;
