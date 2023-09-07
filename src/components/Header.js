import "../CSS/components styles/Header.scss";

import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <header>
      <div className="heading">
        <div>
          <h1>Social Media Dashboard</h1>
          <p className="totalFollowers">Total Followers: 23004</p>
        </div>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
