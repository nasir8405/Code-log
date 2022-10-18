import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom'
import { TopNavigation } from './Component/Navigation/TopNavigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductPage from './Pages/Products';
import GalleryPage from './Pages/Gallery';
import { Products } from './Component/Products/Products';
function App() {
  return (
    <div className="App">
      <TopNavigation/>
        <Routes>
          <Route path='/products' element={<ProductPage/>}>
              <Route path=':type' element={<Products/>}/>
            </Route>

          <Route path='/gallery' element={<GalleryPage/>}/>
          <Route path='/' element={<Navigate  to="/products/all"/>}/>
        </Routes>
    </div>
  );
}

export default App;
