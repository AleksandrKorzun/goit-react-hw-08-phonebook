import ContactsPage from "../pages/ContactsPage";
import HomePage from "../pages/HomePage";
import LogInPages from "../pages/LogInPages";
import SignUpPage from "../pages/SignUpPage";

const mainRoutes = [
    {
        name: "home",
        path: "/",
        component: <HomePage/>,
    },
    {
        name: "My Contacts",
        path: "/contacts",
        component: <ContactsPage/>
    },
    {
        name: "LOG IN",
        path: "/login",
        component: <SignUpPage/>,
    },
    {
        name: "SIGN UP",
        path: "/register",
        component: <SignUpPage/>,
    },
]
export default mainRoutes;