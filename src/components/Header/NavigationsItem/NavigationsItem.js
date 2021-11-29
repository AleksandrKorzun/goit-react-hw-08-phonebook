import { NavLink } from "react-router-dom";
import mainRoutes from "../../../routes/mainRoutes";
import { navItem, navLinkItem} from "./NavigationsItem.module.css"

const NavigationsItem = () => {
    return (
        <>
            {mainRoutes.map(({name, path}) => (
                <li className={navItem}>
                    <NavLink to={path} className={navLinkItem}>{name}</NavLink>
                </li>
            ))}
        </>
    );
}

export default NavigationsItem;