import image from "../images/image-avatar.png";
import cartImage from "../images/image-product-1-thumbnail.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Avatar } from "@mui/material";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "../Nav.css";
import { Button } from "@mui/material";
import { useGlobalContext } from "../AppContext/Context";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

function NavbarComponent() {
  const { state, dispatch } = useGlobalContext();
 const {itemName}=state;
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header className="flex justify-between h-15 my-3 w-[80%] mx-auto">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3 className="cursor-pointer font-bold md:ml-36 ">Love❤️Wear</h3>
        </Link>
        <nav ref={navRef}>
          <Link to="/">
            <a href="">Collections</a>
          </Link>
          <Link to="/sneakers">
            <a href="">Sneakers</a>
          </Link>
          <Link to="/Men">
            <a href="#">Men</a>
          </Link>
          <Link to="/Women">
            <a href="#">Women</a>
          </Link>
          <a href="#">Contact</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <div className="shopingCartIcon cursor-pointer two-btns flex align-middle justify-center text-center space-x-3 ">
          {state.cartNumber <= 0 ? (
            <span className=""></span>
          ) : (
            <span className=" rounded-full bg-orange-600 text-white p-2">
              {state.cartNumber}
            </span>
          )}
          <DropdownButton
            variant="light"
            id="dropdown-basic-button"
            title={<ShoppingCartIcon />}
          >
            <Dropdown.Item href="#/action-1">
              <p className="text-sm font-bold">Cart</p>
              <hr />
            
              {state.cartNumber == 0 ? (
                "cart is empty"
              ) : (
                <div className=" py-2  ">
                  <h1 className="text-black-800  text-xs font-semibold">
                  {itemName.map((item)=>{
                    return <p>{item}</p>
                  })}
                   
                    <span className=" text-orange-600">
                      ${state.price} {state.cartNumber}{" "}
                      <span className="text-sm text-black font-bold">
                        
                      </span>
                      <span />{" "}
                    </span>
                    <DeleteIcon
                      onClick={() => dispatch({type:"DELETE"})}
                      className="mb-1"
                    />
                  </h1>
                </div>
              )}
              {state.cartNumber == 0 ? (
                ""
              ) : (
                <Button
                  variant="contained"
                  style={{ backgroundColor: "orangered" }}
                  className="w-full"
                >
                  Checkout
                </Button>
              )}
            </Dropdown.Item>
          </DropdownButton>
          <Avatar src={image} style={{ marginTop: "-8px" }} />
        </div>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
      <hr className="w-[70%] mx-auto" />
    </>
  );
}

export default NavbarComponent;
