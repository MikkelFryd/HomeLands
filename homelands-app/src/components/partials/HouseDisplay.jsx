import { useHouse } from "../context/houses/Housing"
import { HousingListItem } from "../pages/housing/HousingListItem"
import Style from './housedisplay.module.scss'


export const HouseDisplay = () => {
    const {housingData} = useHouse()


    const displayArr = housingData.slice(0, 3)
    console.log(displayArr)
 
    return (
        <section className={Style.displayhouses}>
            {displayArr && displayArr.map((item) => {
                return (
                    <HousingListItem key={item.id} data={item} />
                )
            })}
        </section>
    )

}