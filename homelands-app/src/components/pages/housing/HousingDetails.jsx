import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../../partials/Footer";
import { Nav } from "../../partials/Nav";
import Style from "./housingdetails.module.scss";
import RoundedHeart from "../../../assets/images/rounded-heart.svg";
import RoundedMap from "../../../assets/images/rounded-map.svg";
import RoundedSquares from "../../../assets/images/rounded-squares.svg";
import RoundedCamera from "../../../assets/images/rounded-camera.svg";
import { Modal } from "../../partials/Modal";

export const HousingDetails = () => {
  const [houseDetails, setHouseDetails] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState();

  const { id } = useParams();

  function handlePrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    const getHouseDetails = async () => {
      const result = await axios.get(
        `https://api.mediehuset.net/homelands/homes/${id}`
      );
      setHouseDetails(result.data.item);
    };
    getHouseDetails();
  }, [id]);

  function handleModal(value) {
    if (showModal === false) {
      setShowModal(true);
      setModalContent(value);
    } else {
      setShowModal(false);
    }
  }

  return (
    <>
      {houseDetails.id ? (
        <section className={Style.detailscontainer}>
          <header className={Style.detailsheader}>
            <Nav />
          </header>
          <figure>
            <section>
              <div>
                <h2>{houseDetails.address}</h2>
                <p>
                  {houseDetails.zipcode} {houseDetails.city}
                </p>
                <p>
                  {houseDetails.type} | {houseDetails.floor_space}m&#178; |
                  {houseDetails.num_rooms} vær
                </p>
                <p>Set {houseDetails.num_clicks} gange</p>
              </div>
              <div className={Style.iconcontainer}>
                <img
                  onClick={() => handleModal(1)}
                  src={RoundedCamera}
                  alt="Images"
                />
                <img
                  onClick={() => handleModal(2)}
                  src={RoundedSquares}
                  alt="Plan_image"
                />
                <img onClick={() => handleModal(3)} src={RoundedMap} alt="Google_map" />
                <img onClick={() => handleModal(4)} src={RoundedHeart} alt="Heart" />
              </div>
              <div>
                <div>
                  <h3>Kontantpris</h3>
                  <h2>{handlePrice(houseDetails.price)}</h2>
                </div>
                <p>Udbetaling {handlePrice(houseDetails.price)}</p>
                <p>Ejerudgift per månded {handlePrice(houseDetails.cost)}</p>
              </div>
            </section>
            <article>
              <div>
                <span>
                  <p>Sagsnr.</p>
                  <b>{houseDetails.id}</b>
                </span>
                <span>
                  <p>Boligareal</p>
                  <b>{houseDetails.floor_space}m&#178;</b>
                </span>
                <span>
                  <p>Grundareal</p>
                  <b>{houseDetails.ground_space}m&#178;</b>
                </span>
                <span>
                  <p>Antal rum</p>
                  <b>{houseDetails.num_rooms}</b>
                </span>
                <span>
                  <p>Antal plan</p>
                  <b>{houseDetails.num_floors}</b>
                </span>
              </div>
              <div>
                <span>
                  <p>Kælder</p>
                  <b>{houseDetails.basement_space}m&#178;</b>
                </span>
                <span>
                  <p>Byggeår</p>
                  <b>{houseDetails.year_construction}</b>
                </span>
                <span>
                  <p>Ombygget</p>
                  <b>{houseDetails.year_rebuilt}</b>
                </span>
                <span>
                  <p>Energimærke</p>
                  <b>{houseDetails.energy_label_name}</b>
                </span>
                <span>
                  <p>Liggetid</p>
                  <p>
                    <b>{houseDetails.date_stamp}</b> dage
                  </p>
                </span>
              </div>
              <div>
                <span>
                  <p>Kontantpris</p>
                  <b>{handlePrice(houseDetails.price)}</b>
                </span>
                <span>
                  <p>Udbetaling</p>
                  <b>{handlePrice(houseDetails.payout)}</b>
                </span>
                <span>
                  <p>Brutto ex. ejerudgift</p>
                  <b>{handlePrice(houseDetails.gross)}</b>
                </span>
                <span>
                  <p>Netto ex. ejerudgift</p>
                  <b>{handlePrice(houseDetails.net)}</b>
                </span>
                <span>
                  <p>Ejerudgift</p>
                  <b>{handlePrice(houseDetails.cost)}</b>
                </span>
              </div>
            </article>
            <figcaption>
              <div>
                <p>{houseDetails.description}</p>
              </div>
              <div className={Style.staffcontainer}>
                <h2>Kontakt</h2>
                <img
                  src={houseDetails.staff.image}
                  alt={houseDetails.staff.firstname}
                />
                <h5>
                  {houseDetails.staff.firstname} {houseDetails.staff.lastname}
                </h5>
                <h5>{houseDetails.staff.position}</h5>
                <h5>Mobil: {houseDetails.staff.phone}</h5>
                <h5>Email: {houseDetails.staff.email}</h5>
              </div>
            </figcaption>
          </figure>
          <Footer />
          {showModal ? (
            <Modal
              houseDetails={houseDetails}
              modalContent={modalContent}
              setShowModal={setShowModal}
            />
          ) : null}
        </section>
      ) : null}
    </>
  );
};
