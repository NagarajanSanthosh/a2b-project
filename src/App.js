import Addtocart from './components/Addtocart';
import OrderPlaced from './components/OrderPlaced';
import Menu from './components/Menu';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TableTime from './components/TableTime';

function App() {
  return (

    <div className="App">
      <h1>Hi</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}>
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
