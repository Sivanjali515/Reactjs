import {BrowserRouter,Route,Routes} from 'react-router-dom';
import  Layout from './Layout';
import  Home from './Home';
import  Blogs from './Blogs';
import  Contact from './Contact';
import  Nopage from './Nopage';
function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="Blogs" element={<Blogs/>}/>
      <Route path="Contact" element={<Contact/>}/>
      <Route path="*" element={<Nopage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}
export default App;