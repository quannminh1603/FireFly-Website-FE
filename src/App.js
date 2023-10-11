

import './App.css';
import ImageWithCaption from './ImageWithCaption/ImageWithCaption';
import Navbar from './Navbar/navbar'
import ProductList from './ProductList/ProductList';
function App() {
  return (
    <div className='App'>

      <Navbar />
      <ImageWithCaption/>
      <ProductList/>
    </div>

  );


}

export default App;