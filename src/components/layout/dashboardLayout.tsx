import React, { useState } from 'react'
import DesktopLayout from './DesktopLayout';
import { useLocation } from 'react-router-dom'
import MobileLayout from './MobileLayout'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const location = useLocation();

    const openSidebar = () => {
        setIsOpen(!isOpen);
    }

    const activePage = location.pathname;

    return (
        <>
            <DesktopLayout buttonClick={openSidebar} activePage={activePage} />
            <MobileLayout isOpen={isOpen} closeSideBar={openSidebar }/>
            {children}

        </>
    )
}

export default DashboardLayout
