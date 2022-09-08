import React, { useEffect, useState } from 'react'

import Style from './slider.module.scss'

import useMediaQuery from '../hooks/useMediaQuery';


export const Slider = (props) => {
 
    const [index, setIndex] = useState(0)

    const next = () => {
        setIndex(prev => prev < props.carouselItems.length-1 ? prev+1 : 0)
    }
    const prev = () => {
        setIndex(prev => prev > 0 ? prev -1 : props.carouselItems.length -1)
    }

    
    function Item(props){
        const isDesktop = useMediaQuery('(min-width: 960px)')
        return (
        <div className={`${isDesktop ? Style.desktop : Style.mobile}`}>
            <img alt={props.alt} src={props.url}></img>
        </div>
    ) 
    }

    useEffect(() => {
        if(props.shouldChange){
            const timer = setInterval(next, props.time)
            return (() => {clearInterval(timer)})
        }
    },[])
    
    return (
        <div className={Style.carousel}>
        {props.carouselItems?.map((item, i) => { 
            return index === i ? <Item alt={item.alt} key={i} url={item.url ? item.url : item.filename.medium}/> : null
        })}
            <div className={Style.buttonContainer}>
                <span className={Style.leftbutton} onClick={prev}></span>
                <span className={Style.rightbutton} onClick={next}></span>
            </div>
        </div>   
    )
 
}