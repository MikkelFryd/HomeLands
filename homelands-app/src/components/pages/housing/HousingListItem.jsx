import Style from "./housinglistitem.module.scss";
import HeartIcon from "../../../assets/images/heart-svg.svg";
import { Link } from "react-router-dom";

export const HousingListItem = (props) => {
  function handlePrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <figure className={Style.houseitem}>
      <Link to={`/housing/${props.data.id}`}>
        <img src={props.data.images[0].filename.medium} alt="" />
      </Link>
      <figcaption>
        <div>
          <b>{props.data.address}</b>
          <img src={HeartIcon} alt="" />
        </div>
        <div className={Style.addressinfo}>
          <p>
            {props.data.zipcode} {props.data.city}
          </p>
          <p>{props.data.type}</p>
        </div>
        <div>
          <p className={Style.energylabel}>{props.data.energy_label_name}</p>
          <p>
            {props.data.num_rooms} værelser, {props.data.floor_space}m&#178;
          </p>
          <h5>{handlePrice(props.data.price)} DKK</h5>
        </div>
      </figcaption>
    </figure>
  );
};
