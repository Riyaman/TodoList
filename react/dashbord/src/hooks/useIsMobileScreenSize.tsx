import React, { useEffect, useState } from "react";

const getWindowWidth = () =>{
   return window.innerWidth
}
const useIsMobileScreenSize = (MobileWidthThreshold:number) => {
    const [WindowWidth, setWindowWidth] = useState<number>(getWindowWidth())
    useEffect(()=>{
        const handleResize = () =>{
            setWindowWidth(getWindowWidth())
        }
        window.addEventListener("resize", handleResize)
        return()=> window.removeEventListener("resize", handleResize)
    
    }, [])
    const IsSreenMobileWidth = WindowWidth <= MobileWidthThreshold ? true: 
    false;
    return IsSreenMobileWidth;
    return (
        <div>
            useIsMobileScreenSize</div>
    )
}
export default useIsMobileScreenSize;