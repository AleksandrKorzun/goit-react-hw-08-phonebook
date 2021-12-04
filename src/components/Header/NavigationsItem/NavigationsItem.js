import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { tokenSelector } from "../../../redux/auth/authSelectors";
// import mainRoutes from "../../../routes/mainRoutes";
import UserMenu from "../../UserMenu/UserMenu";
import { navItem, navLinkItem} from "./NavigationsItem.module.css"

const NavigationsItem = () => {
    
    const isAuth = useSelector(tokenSelector)
    return (
        <>
            {isAuth ? <><li className={navItem}><NavLink to="/contacts" className={navLinkItem}></NavLink> </li><UserMenu/></>
            : 
            <>
                <li className={navItem}><NavLink to="/login" className={navLinkItem}>LOG IN</NavLink></li>
                <li className={navItem}><NavLink to="/register" className={navLinkItem}>SIGN UP</NavLink></li>
            </>
            }
             
            {/* // {mainRoutes.map(({name, path}) => (
            //     <li className={navItem}>
            //         <NavLink to={path} className={navLinkItem}>{name}</NavLink>
            //     </li>
            // ))} */}
        </>
    );
}

export default NavigationsItem;