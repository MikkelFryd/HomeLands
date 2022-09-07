import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home/Home'
import { HousingDetails } from '../pages/housing/HousingDetails'
import { HousingList } from '../pages/housing/HousingList'
import { Login } from '../pages/login/Login'

export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/housing">
                <Route index element={<HousingList/>}/>
                <Route path=":id" element={<HousingDetails />} />
            </Route>
        </Routes>
    )
}