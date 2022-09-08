import axios from "axios"
import { useState, useEffect } from "react"
import { Staff } from "./Staff"
import Style from './staffcontainer.module.scss'


export const StaffContainer = () => {
    
    const [staffData, setStaffData] = useState()

    useEffect(() => {
        const getStaff = async () => {
            const result = await axios.get('https://api.mediehuset.net/homelands/staff')
            setStaffData(result.data.items)
        }
        getStaff()
    }, [])

    return (
        <>
         <h2>Mød vores ansatte</h2>
        <div className={Style.staffcontainer}>
             {staffData && staffData.map((item, index) => {
        return (
            <Staff item={item} key={index} />
            )
            })}
        </div>
        </>
    )
}