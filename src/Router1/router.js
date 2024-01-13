import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import PersonPage from "../pages/PersonPage";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="/profile/:nome" element={<PersonPage/>}/>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;


// PATH PARAMS - parâmetro de URL. Toda vez que eu tiver dois pontos : no path do Route eu estou passando uma variável para minha URL