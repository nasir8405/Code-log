import { Routes, Route, Navigate } from "react-router-dom";
import { TopNavigation } from "./Component/Navigation/TopNavigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Products } from "./Component/Products/Products";
import ProductPage from "./Pages/Products";
import AccordianPage from "./Pages/Accordian";
import AccordianDragPage from "./Pages/AccordianDrag";
import CounterPage from "./Pages/Counter";
import TabularPage from "./Pages/TabularData";
function App() {
  return (
    <div className="App">
      <TopNavigation />
      <Routes>
        <Route path="/products" element={<ProductPage />}>
          <Route path=":type" element={<Products />} />
          <Route path="/products" element={<Navigate to="/products/all" />} />
        </Route>
        <Route path="/" element={<Navigate to="/products/all" />} />
        <Route path="/accordian" element={<AccordianPage />} />
        <Route path="/AccordianDrag" element={<AccordianDragPage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/tabular" element={<TabularPage />} />
      </Routes>
    </div>
  );
}

export default App;
