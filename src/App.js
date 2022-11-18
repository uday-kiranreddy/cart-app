import NavbarComponent from "../src/Components/NavbarComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import Sneakers from "../src/Components/Sneakers";
import Collection from "../src/Components/Collection";
import ItemDetail from "../src/Components/ItemDetail";
import CheckOut from "../src/Components/CheckOut";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Men from "../src/Components/Men";
import Women from "../src/Components/Women";


function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route exact path="/" element={<Collection/>}></Route>
        <Route path="/sneakers" element={<Sneakers/>}></Route>
        <Route path="/Men" element={<Men/>}></Route>
        <Route path="/Women" element={<Women/>}></Route>
        <Route path="/ItemDetail:id" element={<ItemDetail/>}></Route>
        <Route path="/checkOut" element={<CheckOut/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
