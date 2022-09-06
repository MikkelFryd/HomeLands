/**
 * Følgende kode laver et komponent (<AuthProvider>) som kan 
 * transportere data ned i gennem reacts komponent hieraki.
 * Det betyder at vi nemt kan hente en brugers logindata fra alle 
 * child components via et useState hook i et højere rangerende 
 * komponent. 
 * Derfor skal AuthProvider komponentet placeres 
 * så højt som muligt i hierakiet - eksempelvis i filen /src/index.js
 * Filens custom hook (useAuth) bruges desuden på Login siden.
 */
 import { createContext, useContext, useState } from "react";

 // Initialiserer auth context
 const HouseContext = createContext();
 
 // Definerer Contekst Provider
 // med props.children som tilstandsværdi
 const HouseProvider = ({ children }) => {
     const [housingData, setHousingData] = useState([])
 
     return (
         <HouseContext.Provider value={{housingData,setHousingData}}>
             {children}
         </HouseContext.Provider>
     )
 }
 
 // Definerer custom hook
 // Gør at vi nemt kan kalde context
 // Eksempel: const { loginData } = useAuth()
 const useHouse = () => useContext(HouseContext);
 
 export { HouseContext, HouseProvider, useHouse }