import { useEffect, useRef, useState } from "react";
import { menuData } from "./menuData";

function Menu () {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isActive, setActive] = useState(null)
    const ref = useRef();
   
   
    
    const listMenu = menuData.map((item) => 
    <li 
    onClick={() => setActive(item)} 
    className={isActive === item && 'active'}
    >
        <a href="#">{item}</a></li>)

  
    useEffect(() => {
      const checkIfClickedOutside = (e) => {
        if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
          setIsMenuOpen(false);
        }
      };
      document.addEventListener("click", checkIfClickedOutside);
      return () => {
        document.removeEventListener("click", checkIfClickedOutside);
      };
    }, [isMenuOpen]);

    return (
        <div className="container" ref={ref}>
          <button className="btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span>Account Settings</span>
          <i class="material-icons">public</i>
          </button>
          {isMenuOpen && (
            
             <div data-id="wrapper" className="dropdown-wrapper open">
               <ul data-id="dropdown" className="dropdown">
               {listMenu}
               </ul>
             </div>
          
          )}
        </div>
      );
}

export default Menu
