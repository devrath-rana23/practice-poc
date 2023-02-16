import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import ImageUrls from "../../../utils/constants/ImageUrls";

const headers = [{ title: "Dashboard", active: false, path: "/dashboard" }];

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [icons, setIcons] = useState(headers);

  useEffect(() => {
    setIcons(
      headers.map((i) => {
        return {
          ...i,
          active: location.pathname.includes(i.path.split("?")[0]),
        };
      })
    );
  }, [location]);

  const changeHeaderTab = (index) => {
    navigate(icons[index].path);
  };

  const { logo } = ImageUrls;
  return (
    <header className="header">
      <nav className="header-nav">
        <figure className="header-logo-image-container">
          <img onClick={() => navigate("/projects")} src={logo} alt="logo" />
        </figure>
        <ul className="header-nav-links-container">
          {icons.map((item, index) => (
            <li
              key={index}
              onClick={() => changeHeaderTab(index)}
              className={`header-nav-link ${
                item.active ? "header-nav-link-active" : ""
              }`}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
