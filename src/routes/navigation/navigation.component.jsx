import { Outlet, Link } from "react-router-dom";
import {ReactComponent as DvLogo} from '../../assets/dv.svg'
import './navigation.style.scss'


const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div><DvLogo className="logo"/></div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            <div>SHOP </div>
          </Link>
          <Link className="nav-link" to="/sign-in">
            <div>SIGN-IN </div>
          </Link>
        </div>
        
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
