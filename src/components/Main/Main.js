import { Route, Routes } from "react-router";
import HomePage from "../../pages/HomePage";
import mainRoutes from "../../routes/mainRoutes";

const Main = () => {
    return (
        <main>
            <Routes>
                {mainRoutes.map(({path, component}) => (
                    <Route path={path} element={component}/>
                ))}
            </Routes>
        </main>
    );
}

export default Main;