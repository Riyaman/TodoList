import React from 'react';
export interface IAppLayoutProps {
    children: ReactNode;
}
const AppLayout = ({children}:IAppLayoutProps) =>{
    return (
        <div className="w-full h-screen flex flex-row">AppLayout
        <AppSidebar/>
        <Separator orientation="vertical"/>
        <div className="w-full h-full flex flex-col">
            <header>
                <AppHeader/>
            </header>
            <main className="w-full h-full p-4">{children}</main>
        </div>
        </div>
    )
}

export default AppLayout;