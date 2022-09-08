import Style from './review.module.scss'

export const Review = () => {

    return (
        <section className={Style.reviewcontainer}>
          <h2>Det siger kunderne:</h2>
        <div>
            <h3>Fandt drømmehuset....</h3>
            <i>"HomeLands hjalp os med at finde vores drømmehus i 2018. Efter at vi havde prøvet to andre mæglere lykkedes det dem at sælge vores gamle hus på under tre måneder. Både service og pris var helt i top</i>
            <p>Anna Hattevej, August 2019</p>
        </div>
            <p className={Style.bluep}>Skriv en anmeldelse</p>
        </section>
    )
}