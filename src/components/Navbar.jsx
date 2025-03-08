import "./Navbar.css";

import home from "../assets/home.png";
import compass from "../assets/compass.png";
import book from "../assets/book.png";
import chat from "../assets/chat.png";
import user from "../assets/user.png";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <img src={home} alt="home icon" className="navbar-icon"></img>
        <img src={compass} alt="search icon" className="navbar-icon"></img>
        <img src={book} alt="book icon" className="navbar-icon"></img>
        <img src={chat} alt="chat icon" className="navbar-icon"></img>
        <img src={user} alt="user icon" className="navbar-icon"></img>
      </div>
    </div>
  );
}

export default Navbar;
