import { useState } from "react";
import { Nav } from "../../partials/Nav";
import { HousingListItem } from "./HousingListItem";
import Style from "./housinglist.module.scss";
import { useHouse } from "../../context/houses/Housing";

export const HousingList = () => {
  const { housingData } = useHouse();
  const [type, setType] = useState("Villa");

  const handleChange = (e) => {
    setType(e.target.value);
  };

  return (
    <>
      <Nav />
      <section>
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
          {housingData &&
            housingData.map((housing) => {
              return type === housing.type ? (
                <HousingListItem key={housing.id} data={housing} />
              ) : null;
            })}
        </article>
      </section>
    </>
  );
};
