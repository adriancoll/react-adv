import {
  BrowserRouter as Router,
  Navigate,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";

import { routes } from "./routes";

import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            {routes.map(({ to, name }) => (
              <li>
                <NavLink
                  to={to}
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Routes>
          {routes.map(({ path, Component }) => (
            <Route path={path} element={<Component/>} />
          ))}
          <Route element={<Navigate to="/lazy1" replace />} path="/*" />
        </Routes>
      </div>
    </Router>
  );
};
