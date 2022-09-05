import { useState, useEffect } from "react"
import axios from 'axios'
import { Nav } from "../../partials/Nav"
import { HousingListItem } from "./HousingListItem"
import Style from './housinglist.module.scss'

export const HousingList = () => {
    const [housingData, setHousingData] = useState([])
    const [type, setType] = useState("default")

    const url = 'https://api.mediehuset.net/homelands/homes'

    useEffect(() => {
        const getHousingData = async () => {
            const result = await axios.get(url)
            setHousingData(result.data.items)
        }
        getHousingData()
    }, [])

    console.log(housingData)

    const handleChange = (e) => {
        setType(e.target.value)
    }

    return (
        <>
            <Nav />
            <section className={Style.section}>
                <div className={Style.sortcontainer}>
                    <h2>Boliger til salg</h2>
                    <p>Sorter efter prisniveau</p>
                    <select defaultValue={type} onChange={handleChange}>
                        <option value="default" disabled hidden>
                            Sorter efter type
                        </option>
                        <option value="Villa">Villa</option>
                        <option value="Ejerlejlighed">Ejerlejlighed</option>
                        <option value="Andelsbolig">Andelsbolig</option>
                    </select>
                </div>
                <article className={Style.gridcontainer}>
                {housingData && housingData.map(housing => {
                    return (
                        <HousingListItem key={housing.id} data={housing} />
                    )
                })}
                </article>
            </section>
        </>
    )
}