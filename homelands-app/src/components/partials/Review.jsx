import Style from './review.module.scss'

export const Review = () => {

    return (
      <section className={Style.reviewcontainer}>
        <h3>Det siger kunderne:</h3>
        <span>
            <h4>Fandt drømmehuset....</h4>
            <i>"HomeLands hjalp os med at finde vores drømmehus i 2018. Efter at vi havde prøvet to andre mæglere lykkedes det dem at sælge vores gamle hus på under tre måneder. Både service og pris var helt i top</i>
            <p>Anna Hattevej, August 2019</p>
        </span>
        <p>Skriv en anmeldelse</p>
      </section>
    )
}