import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Post from './Post';
import Shop from './Shop';

function App() {
  return (<BrowserRouter>
    <div>
      <ul>
        <li><Link to ="/">home</Link></li>
        <li><Link to ="/about">About</Link></li>
        <li><Link to ="/post?fname=Apilak&lname=Namwong">Post</Link></li>
        <li><Link to ="/post/1">Post 1</Link></li>
        <li><Link to ="/post/2">Post 2</Link></li>
        <li><Link to ="/Shop">Shop</Link></li>
      </ul>
    </div>
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/about" element= {<About/>}/>
      <Route path="/post" element= {<Post/>}/>
      <Route path="/post/:id" element= {<Post/>}/>
      <Route path="/Shop" element= {<Shop/>}/>
    </Routes>
  </BrowserRouter>


  );
}

export default App;
