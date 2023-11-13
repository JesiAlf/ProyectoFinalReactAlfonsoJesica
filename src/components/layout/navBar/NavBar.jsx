
import CartWidget from "../../common/cartWidget/CartWidget";
import "../navBar/NavBar.css";
import {Link, Outlet} from "react-router-dom";

export const NavBar = () => {
  return (
    <>
    <div className={"containerNavBar"}>
        <img
          src="https://res.cloudinary.com/dphzc4d5r/image/upload/v1695681451/logotransp_pprvix.png"
          alt="logo"
        />
        <Link to="/">
          <h4>Arte Alfonso</h4>
        </Link>
        <ul className="categories">
          <Link to="/">
            <li>Todas</li>
          </Link>
          <Link to="/category/decoracion">
            <li>decoracion</li>
          </Link>
          <Link to="/category/relojes">
            <li>relojes</li>
          </Link>
        </ul>
        <CartWidget />

      </div>
  
    </>
     );
    };
      