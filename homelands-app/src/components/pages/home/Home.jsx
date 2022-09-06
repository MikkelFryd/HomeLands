import { Header } from "../../partials/Header"
import { HouseDisplay } from "../../partials/HouseDisplay"
import { useEffect } from "react"
import axios from "axios"
import { useHouse } from "../../context/houses/Housing"
import { Review } from "../../partials/Review"
import { Footer } from "../../partials/Footer"


export const Home = () => {

    const {housingData, setHousingData} = useHouse()
    const url = 'https://api.mediehuset.net/homelands/homes'

    useEffect(() => {
        const getHousingData = async () => {
            const result = await axios.get(url)
            setHousingData(result.data.items)
        }
        getHousingData()
    }, [])

    console.log(housingData)

    return (
        <>
            <Header />
            <HouseDisplay />
            <Review />
            <Footer />
        </>
    )
}