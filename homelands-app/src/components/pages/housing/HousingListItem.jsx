import Style from './housinglistitem.module.scss'

export const HousingListItem = props => {

    function handlePrice(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    return (
        <figure className={Style.houseitem}>
            <img src={props.data.images[0].filename.medium} alt="" />
            <figcaption>
                <div className={Style.leftside}>
                    <h5>{props.data.address}</h5>
                    <div>
                        <p>{props.data.zipcode}</p>
                        <p>{props.data.city}</p>
                    </div>
                    <p>{props.data.type}</p>
                    <div>
                        <p className={Style.energylabel}>{props.data.energy_label_name}</p>
                        <p>{props.data.num_rooms} værelser, {props.data.floor_space}m&#178;</p>
                    </div>
                </div>
                <div className={Style.rightside}>
                    <p>heart icon</p>
                    <h5>{handlePrice(props.data.price)} DKK</h5>
                </div>
            </figcaption>
        </figure>
    )
}