import Home from "./pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import { productInput, userInput, customerInput, comserviceInput } from "./formSource";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="users">
              <Route index element={<List link="/users/new" />}/>
              <Route path=":userId" element={<Single/>}/>
              <Route path="new" element={<New inputs = {userInput} title = "Add New User" />}/>
            </Route>
            <Route path="products">
              <Route index element={<List link="/products/new" />}/>
              <Route path=":productId" element={<Single/>}/>
              <Route path="new" element={<New inputs = {productInput} title = "Add New Product"/>}/>
            </Route>
            <Route path="customers">
              <Route index element={<List link="/customers/new" />}/>
              <Route path=":customerId" element={<Single/>}/>
              <Route path="new" element={<New inputs = {customerInput} title = "Add New Customer"/>}/>
            </Route>
            <Route path="comservices">
              <Route index element={<List link="/comservices/new" />}/>
              <Route path=":comserviceId" element={<Single/>}/>
              <Route path="new" element={<New inputs = {comserviceInput} title = "Add New Comservice"/>}/>
            </Route>
          </Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
