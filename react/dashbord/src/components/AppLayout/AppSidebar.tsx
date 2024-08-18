import useIsMobileScreenSize from "@/hooks/useIsMobileScreenSize";
import React, { useState } from "react";
import { isModuleNamespaceObject } from "util/types";

const AppSidebar = () => {
    const useIsMobileMoileWidth = useIsMobileScreenSize(640);
    cost[isMobliMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const handleClick = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }
    return (
        <nav className={cn("h-full transition", {
            "w-fit": isScreenMobileWidth,
            "absolute h-screen w-screen backdrop-blur": isScreenMobileWidth && isMobileOpen,
            "w-64": !isScreenMobileWidth

        })}>
            <div className={cn("h-full bg-background"), {
                "border-r w-3/6 min-w-64": isScreenMoileWidth && isMobileMenuOpen
            })}>
            {idScreenMobileWidth && <SidebarMobileMenu />}
            {!isScreenMobileWidth && <SidebarDesktopMenu/>}

        </div>

        </nav >
    )
}
export default AppSidebar