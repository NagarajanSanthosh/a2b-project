import React from "react";
import Menu from "./components/Menu";
import Addtocart from "./components/Addtocart";
import OrderPlaced from "./components/OrderPlaced";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TableTime from "./components/TableTime";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}>
          </Route>
          <Route path="/menu" element={<Menu />}>
          </Route>
          <Route path="/addtocart" element={<Addtocart />}>
          </Route>
          <Route path="/tablebill" element={<TableTime />}>
          </Route>
          <Route path="/success" element={<OrderPlaced />}>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
