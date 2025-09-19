// import {Link} from "react-router-dom"
// export default function Nav(){
//     return(
//     <nav>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//     </nav>
//     )
// }
import { Link } from "react-router-dom";

function Nav({ darkMode }) {
  return (
    <nav style={{ marginBottom: "20px", color: darkMode ? "#ddd" : "#333" }}>
      <Link to="/" style={{ marginRight: "15px", color: darkMode ? "#f5f5f5" : "#000000" }}>Home</Link>
      <Link to="/about" style={{ marginRight: "15px", color: darkMode ? "#f5f5f5" : "#000000" }}>About</Link>
      <Link to="/contact" style={{ color: darkMode ? "#f5f5f5" : "#000000" }}>Contact</Link>
    </nav>
  );
}

export default Nav;
