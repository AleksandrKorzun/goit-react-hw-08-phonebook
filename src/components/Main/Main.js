import { Navigate, Route, Routes } from "react-router-dom";
import {useSelector} from "react-redux"
import mainRoutes from "../../routes/mainRoutes";
import { tokenSelector } from "../../redux/auth/authSelectors";
import HomePage from "../../pages/HomePage";
import ContactsPage from "../../pages/ContactsPage";
import SignUpPage from "../../pages/SignUpPage";


const Main = () => {
    const isAuth = useSelector(tokenSelector)
    console.log(isAuth)
    return (
        <main>
            <Routes>
                {isAuth ? <Route path="/" element={<Navigate replace to="/contacts"/>}/> : <Route path="/" element={<HomePage/>}/>}
                {isAuth ? <Route path="/register" element={<Navigate replace to="/contacts"/>}/> : <Route path="/register" element={<SignUpPage/>}/>}
                {isAuth ? <Route path="/login" element={<Navigate replace to="/contacts"/>}/> : <Route path="/login" element={<SignUpPage/>}/>}
                {isAuth ? <Route path="/contacts" element={<ContactsPage/>}/> : <Route path="/contacts" element={<Navigate replace to="/login"/>}/>}
            </Routes>
            {/* <Routes>
                {mainRoutes.map(({path, component}) => (
                    <Route path={path} element={component}/>
                ))}
            </Routes> */}
        </main>
    );
}

export default Main;