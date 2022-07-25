import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='React logo' />
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                to='/shop'
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                to='/test'
              >
                test
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='shop' element={<ShoppingPage />} />
          <Route path='/*' element={<Navigate replace to='shop' />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
