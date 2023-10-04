

//  import { Header } from './header';
// import './style.css';
// import './table.css';
import { Provider } from "react-redux";
// import { DefaultStore1 } from "./assignment/store1";
// import { ReduxTable } from "./ReduxTable";
import {BrowserRouter,HashRouter,Route, Routes} from "react-router-dom";

// import { Home } from "./Weather/Home";
// import { Login } from "./Weather/Login";
// import { SignUp } from "./Weather/SignUp";
// import { StoreSet } from "./Weather/store";
import { NavBar } from './TestTrello/Navbar';
import { Home } from "./TestTrello/Home";
import { DefaultStore1 } from "./TestTrello/store";
// import { Video } from "./video";
// import { Update } from "./Edit";



// import { Home } from "./Assignment1/Home";
// import { StoreData } from "./Assignment1/store";
// import { NavBar } from "./eCommerce/NavBar";
// import { Home } from "./eCommerce/Home";
// import { About } from "./eCommerce/About";
// import { Contact } from "./eCommerce/Contact";
// import { Provider } from "react-redux";
// import { StoreSet } from "./eCommerce/store";
// import { Cart } from "./eCommerce/Cart";
// import { CardDetail } from "./eCommerce/CardDetail";
// import { CartDetail } from "./eCommerce/CartDetail";
// import { NavBar} from "./Shopping/NavBar";
// import { Home } from "./Shopping/Home";
// import { Cart } from "./Shopping/Cart";
// import { StoreSet } from "./Shopping/store";

// import { NavBar } from "./News/Navbar";
// import { Home } from "./News/Home";
// import { StoreSet } from "./News/store";
// import { Login } from "./News/Login";
// import { SignUp } from "./News/SignUp";
// import { AuthDetails } from "./News/AuthDetails";




function App(){  
  return(
    <div>
      {/* <NavBar/> */}
       {/* <Provider store ={DefaultStore1}>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<ReduxTable/>}></Route>
     <Route path="/Edit/:id"  element={<Update/>}></Route>
     </Routes>
     </BrowserRouter>
      <Home/> 
  </Provider>
  <Provider store={StoreSet}>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<NavBar/>}>
    <Route index element={<Home/>}/>
   
    <Route path ="about" element={<About/>} />
    <Route path ="contact" element={<Contact/>} />
    <Route path =":id" element={<CartDetail/>}/>  
    <Route path ="cart/:id" element={<Cart/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
   </Provider>  */}
 
<Provider store ={DefaultStore1}>
  <HashRouter>
    <Routes>
      <Route path="/" element={<NavBar/>}/>
    </Routes>
  </HashRouter>
  
{/* <Provider>
  <HashRouter> 
    <BrowserRouter>
  <Routes> */}
      {/* <Route path="/" element={<NavBar/>}> */}
      {/* <Route index element={<Home/>}/> */}
      {/* <Route path ="login" element={<Login/>}/>
      <Route path ="signUp" element={<SignUp/>}/> */}
      {/* </Route> */}

 {/* <Route path="/" element={<Home/>}/> */}
 {/* <Route path ="login" element={<Login/>}/>
      <Route path ="signUp" element={<SignUp/>}/> */}
  {/* <Route path="/" element={<NavBar/>}>
  <Route index element={<Home/>}/>
  </Route>
    </Routes>
    </BrowserRouter>
 </HashRouter> */}
    </Provider>  
   {/* <Header/> */}
 
  </div>
    
  )
}

export default App;
    


