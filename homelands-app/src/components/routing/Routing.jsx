import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home/Home'
import { HousingList } from '../pages/housing/HousingList'

export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/housing">
                <Route index element={<HousingList/>}/>

            </Route>
        </Routes>
    )
}