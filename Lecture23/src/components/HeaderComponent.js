
const HeaderComponent = () => {
  return (
    <div id="header-container">
      <div className="site-identity">
        <h1>
          <a href="#">ECommerce</a>
        </h1>
      </div>
      <nav className="site-navigation">
        <ul className="nav">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderComponent;
