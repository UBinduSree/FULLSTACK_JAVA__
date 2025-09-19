import {BrowserRouter,Route,Routes} from "react-router-dom"
import {Link} from 'react-router-dom'
import Home from "./Pages/Home.jsx"
import About from "./Pages/About.jsx"
import Contact from "./Pages/Contact.jsx"


function F1(){
    return(
    <BrowserRouter>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
    </BrowserRouter>

    );
}
export default F1