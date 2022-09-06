import { Slider } from "../slider/Slider"
import { HouseDisplay } from "./HouseDisplay"
import { Nav } from "./Nav"


export const Header = () => {

    return (
        <header>
            <Nav/>
            <Slider />
        </header>
    )
}