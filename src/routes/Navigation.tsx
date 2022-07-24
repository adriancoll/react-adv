import {
  BrowserRouter as Router,
  Navigate,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";

import { routes } from "./routes";

import logo from "../logo.svg";
import { Suspense } from "react";

export const Navigation = () => {
  return (
    <Suspense fallback={null} >
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
              <Route path={path} element={<Component />} />
            ))}
            <Route element={<Navigate to={routes[0].to} replace />} path="/*" />
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
};
