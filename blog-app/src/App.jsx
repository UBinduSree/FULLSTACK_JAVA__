// import { useState } from 'react'
// import {BrowserRouter,Route,Routes} from "react-router-dom"
// import {Link} from 'react-router-dom'
// import Nav from "./Components/Nav.jsx"
// import Head, {Footer} from "./Components/Base.jsx"
// import Toggle from "./Components/Toggle.jsx"
// import Home from "./Pages/Home.jsx"
// import About from "./Pages/About.jsx"
// import Contact from "./Pages/Contact.jsx"
// import './App.css'
// import { use } from 'react'

// // function App() {
// //   const[name,setName]=useState("");
// //   const[message,setMessage]=useState("");
// //   const onSubmit=(e)=>{
// //     e.preventDefault();
// //     alert(`Hello ${name} Welcome Your message is ${message}`)
// //   }

// //   return (
// //     <>
//     // <BrowserRouter>
  
//     // <nav>
//     //     <Link to="/">Home</Link>
//     //     <Link to="/about">About</Link>
//     //     <Link to="/contact">Contact</Link>
//     // </nav>
//     //     <Routes>
//     //         <Route path='/' element={<Home/>}></Route>
//     //         <Route path='/about' element={<About/>}></Route>
//     //         <Route path='/contact' element={<Contact/>}></Route>
//     //     </Routes>
//     //   </BrowserRouter>
// //       <h1>Form</h1>
// //       <form onSubmit={onSubmit}>
// //         <input type="text" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>
// //         <br />
// //         <input type="textarea" placeholder='Enter your message' value={message} onChange={(e)=>setMessage(e.target.value)}/>
// //         <br />
// //         <button type='submit'>Submit</button>
// //       </form>
  
// //     </>
// //   )
// // }

// // export default App
// function App(){
//   return(
//     <>
//     <BrowserRouter>
//       <Toggle/>
//       <Head/>
//       <Nav/>
    
//         <Routes>
//             <Route path='/' element={<Home/>}></Route>
//             <Route path='/about' element={<About/>}></Route>
//             <Route path='/contact' element={<Contact/>}></Route>
//         </Routes>
//         <Footer/>
//       </BrowserRouter>
//     </>
//   )
// }
// export default App
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav.jsx";
import Head, { Footer } from "./Components/Base.jsx";
import Toggle from "./Components/Toggle.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  const appStyle = {
    backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
    color: darkMode ? "#f5f5f5" : "#000000",
    minHeight: "100vh",
    transition: "all 0.3s ease",
    padding: "20px",
  };

  return (
    <div style={appStyle}>
      <BrowserRouter>
        {/* Toggle Button */}
        <Toggle darkMode={darkMode} toggleMode={toggleMode} />

        {/* Header, Nav, Pages, Footer */}
        <Head darkMode={darkMode} />
        <Nav darkMode={darkMode} />

        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          
        </Routes>

        <Footer darkMode={darkMode} />
      </BrowserRouter>
    </div>
  );
}

export default App;
