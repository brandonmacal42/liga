import { useState, useEffect } from "react";
import "./menuBar.scss";
import logo from "../../assets/images/image-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function MenuBar() {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState("");
  const [isFixed, setIsFixed] = useState(false);

  const menuItems = [
    {
      id: "menu1",
      label: "Categoría 1",
      submenu: ["Opción 1.1", "Opción 1.2", "Opción 1.3"],
    },
    {
      id: "menu2",
      label: "Categoría 2",
      submenu: ["Opción 2.1", "Opción 2.2", "Opción 2.3"],
    },
    {
      id: "menu3",
      label: "Categoría 3",
      submenu: ["Opción 3.1", "Opción 3.2", "Opción 3.3"],
    },
    {
      id: "menu4",
      label: "Categoría 4",
      submenu: ["Opción 4.1", "Opción 4.2", "Opción 4.3"],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = (id: string) => {
    setExpandedMenu(expandedMenu === id ? null : id);
  };

  return (
    <nav className={`navbar ${isFixed ? "navbar-fixed" : ""}`}>
      {/* Icono Izquierda */}
      <div className="navbar-left">
        <button className="icon-btn">
          <img src={logo} alt="Logo" />
        </button>
      </div>

      {/* Centro - Menú con Submenú */}
      <div className="navbar-center">
        <div className="menu-items">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-item">
              <button
                className="menu-button"
                onClick={() => toggleMenu(item.id)}
              >
                {item.label}
                <span
                  className={`arrow ${expandedMenu === item.id ? "open" : ""}`}
                >
                  ▼
                </span>
              </button>
              {expandedMenu === item.id && (
                <div className="submenu">
                  {item.submenu.map((sub, idx) => (
                    <a key={idx} href="#" className="submenu-item">
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Derecha - Carrito, Buscador, Usuario */}
      <div className="navbar-right">
        {/* Buscador */}
        <div className="search-container">
          <button className="search-btn">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        {/* Carrito */}
        <button className="icon-btn cart-btn">
          <span className="cart-badge">
            <FontAwesomeIcon icon={faCartShopping} />
          </span>
        </button>

        {/* Usuario */}
        <button className="icon-btn user-btn">
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
    </nav>
  );
}

export default MenuBar;
