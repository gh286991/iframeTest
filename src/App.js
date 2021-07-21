import "./styles.css";
import DrawBorad from "./DrawBorad";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";


export default function App() {
  // const useQuery =()=> {
  //   return new URLSearchParams(useLocation().search);
  // }
  // let query = useQuery();
  // const name = query.get("name")
  return (
    <div className="App">
 
      {/* {console.log('name' , name)} */}
      <DrawBorad />

    </div>
  );
}
