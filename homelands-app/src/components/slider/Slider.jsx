import React, { useEffect, useState } from 'react'
import Slide1 from '../../assets/images/house-1.jpg'
import Slide2 from '../../assets/images/house-2.jpg'
import Slide3 from '../../assets/images/apartment-3.jpg'
import Slide4 from '../../assets/images/house-3.jpg'
import Slide5 from '../../assets/images/house-6.jpg'
import Style from './slider.module.scss'

import useMediaQuery from '../hooks/useMediaQuery';


export const Slider = () => {
 
    const [index, setIndex] = useState(0)

    const next = () => {
        setIndex(prev => prev < carouselItems.length-1 ? prev+1 : 0)
    }
    const prev = () => {
        setIndex(prev => prev > 0 ? prev -1 : carouselItems.length -1)
    }

    const carouselItems = [
        {
            url: Slide1,
            alt: "House Villa"
        },
        {
            url: Slide2,
            alt: "House Villa"
        },
        {
            url: Slide3,
            alt: "House Apartment"
        },
        {
            url: Slide4,
            alt: "House Villa"
        },
        {
            url: Slide5,
            alt: "House Villa"
        },
    ]

    function Item(props){
        const isDesktop = useMediaQuery('(min-width: 960px)')
        return (
        <div className={`${isDesktop ? Style.desktop : Style.mobile}`}>
            <img alt={props.alt} src={props.url}></img>
        </div>
    ) 
    }

    useEffect(() => {
        const timer = setInterval(next, 4000)
        return (() => {clearInterval(timer)})
    },[])
    
    return (
        <div className={Style.carousel}>
        {carouselItems?.map((item, i) => { 
            return index === i ? <Item alt={item.alt} key={i} url={item.url}/> : null
        })}
            <div className={Style.buttonContainer}>
                <span className={Style.leftbutton} onClick={prev}></span>
                <span className={Style.rightbutton} onClick={next}></span>
            </div>
        </div>   
    )
 
}