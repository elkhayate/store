import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import style from "./app.module.css";
import Nav from "./Nav";
import info from "./components/Info";
import Card from "./components/Card";
import youtube from "./img/youtube.png";
import canva from "./img/canva.png";
import deezer from "./img/deezer.jpg";
import netflix from "./img/netflix.jpg";
import spotify from "./img/spotify.png";
import azure from "./img/azure.png";
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
    <>
    <div className={style.home}>
      <h1 className={style.title}>Our Products</h1>
      <div className={style.cards}> 
        <Card link="https://fr.aliexpress.com/item/1005002728796032.html?gps-id=pcStoreJustForYou&scm=1007.23125.137358.0&scm_id=1007.23125.137358.0&scm-url=1007.23125.137358.0&pvid=401533c8-adc7-4b1e-84bc-25b40dbc55da&spm=a2g0o.store_pc_home.smartJustForYou_6000668090037.0" back="#f9f9f9" src={youtube} alt="youtube" title="youtube " />
        <Card src={netflix} alt="netflix" back="black" />
        <Card back="#191919" src={deezer} alt="deezer" />
        <Card back="#5e9beb"src={azure} alt="azure"  />
        <Card src={spotify} alt="spotify" back="black" />
        <Card link="https://fr.aliexpress.com/item/1005002743514695.html?spm=5261.ProductManageOnline.0.0.19334edfmGXsMT" back="#410490" src={canva} alt="canva"/>

      </div>
    </div>
    </>
  )
}
export default App;
