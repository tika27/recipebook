import './App.css';
import "./key";
import Axios from "axios";
import { useState } from "react";



function App() {
  const [query, setquery] = useState("");

const YOUR_APP_ID = "6cdfb818";
const YOUR_APP_KEY = "780569e39b588d37e2b08b1486ab55eb";

  var url = `https://api.edamam.com/search?q={query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free`;

  async function getRecipes(){
    var result = await Axios.get(url);
    console.log(result.data);

  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="app">
     <h1>Food Recipes Pizza</h1>
     <form className="app__searchForm" onSubmit={onSubmit}>
       <input 
       type="text" 
       className="app__input"
       placeholder="enter ingredient" 
       value={query} 
       onChange={(e) => setquery(e.target.value)}
       />
       <input className="app__submit" type="submit" value="Search" />
     </form>

     <div>
       
     </div>

    </div>
  );
}

export default App;
