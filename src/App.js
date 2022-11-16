import NavbarComponent from "./NavbarComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./Hero";
import Collection from "./Collection";
import ItemDetail from "./ItemDetail";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Men from "./Men";
import Women from "./Women";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route exact path="/" element={<Hero/>}></Route>
        <Route path="/collection" element={<Collection/>}></Route>
        <Route path="/Men" element={<Men/>}></Route>
        <Route path="/Women" element={<Women/>}></Route>
        <Route path="/ItemDetail:id" element={<ItemDetail/>}></Route>
      </Routes>
     
    </Router>
  );
}

export default App;
