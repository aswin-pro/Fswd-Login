import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Success from "./Success.jsx"
import Fail from "./Fail.jsx"
import {BrowserRouter,Route,Routes} from "react-router-dom"
createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="/success" element={<Success/>}></Route>
        <Route path="/fail" element={<Fail/>}></Route>
    </Routes>
    </BrowserRouter>
)
