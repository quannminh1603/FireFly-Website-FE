
import logo from './logo.svg';
import './App.css';
// import './Menu.css';
import ImageWithCaption from './ImageWithCaption/ImageWithCaption';
import Navbar from './Navbar/navbar'
import ProductList from './ProductList/ProductList.jsx';
import Noibat from './Noibat/noibat';
import Menu from './menu/Menu.tsx';
function App() {
  return (
    <div className='App'>
      <Menu/>
      <Navbar />
      <ImageWithCaption/>
      <Noibat/>
      <ProductList/>
      
    </div>

  );
}


export default App;