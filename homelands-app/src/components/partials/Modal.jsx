import Style from './modal.module.scss'
import { Slider } from '../slider/Slider'
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

export const Modal = props => {


    return (
        <div className={Style.modal}>
            <section>
                <IconButton  onClick={() => props.setShowModal(false)}>
                    <CloseIcon/>
                </IconButton>
                {props.modalContent === 1 ? 
                    <Slider carouselItems={props.houseDetails.images} time={6000} shouldChange={false}/>
                : props.modalContent === 2 ? 
                <img src={props.houseDetails.floorplan} alt={props.houseDetails.address} /> 
                : props.modalContent === 3 ? 
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2170.025365187455!2d9.961884216138131!3d57.05110459857963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464932b0e615f8cd%3A0xedefd7fe11250457!2sR%C3%B8rdalsvej%2010%2C%209000%20Aalborg!5e0!3m2!1sda!2sdk!4v1662667295250!5m2!1sda!2sdk" title="google map" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                : 
                props.modalContent === 4 ? 
                <section></section> 
                : null}
            </section>
        </div>
    )
}