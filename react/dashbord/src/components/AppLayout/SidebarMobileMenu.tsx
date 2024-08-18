import { ButtonIcon, ChevronLeftIcon } from "@radix-ui/react-icons";
import { Separator } from "@radix-ui/react-separator";
import React from "react";

interface ISidebarMobileMenuProps {
    isMobileMenuOpent: boolean;
    onMenuButtonClike: () => void;
}
const SidebarMobileMenu = ({isMobileMenuOpen, onMenuButtonClike}: ISidebarMobileMenuProps) => {
    return(
       <div className="flex flex-col gap4 p-4">{isMobileMenuOpen && (
        <>
        <Button>
            <ChevroLeftIcon
            className ="h-4 w-4 mr-2"/>Close
        </Button>
        <Separator/>
        <div className="h-10 w-full bg-muted rounded flex items-center justify-center text-sm">
            YOUR DASHBOARD
        </div>
        <SidebarButton/>
        <UserCard/>
        </>
       )}
       {!isMobileMenuOpen && (
        <Button {onMenuButtonClike}variant={"outline"}>
            <ChevronLeftIcon className="h-4 w-4"
        </Button>
       )}
       </div>
    )
}
export default SidebarMobileMenu