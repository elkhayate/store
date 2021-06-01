import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import style from "./app.module.css";
import Nav from "./Nav";
import info from "./components/Info";

function App() {
  return (
    <Router>
    <div className={style.app}>

        <Nav />
     
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path = "/info" component={info} />
      </Switch>
    </div>
    </Router>
  );
}


function Home() {
  return(
    <div>

    </div>
  )
}
export default App;
