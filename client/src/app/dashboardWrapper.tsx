"use client";
import React, { useEffect } from 'react'
import Navbar from '@/app/(components)/Navbar';
import Sidebar from '@/app/(components)/Sidebar';
import StoreProvider, {useAppSelector} from './redux';

const DashboardLayout = ({children}: {children: React.ReactNode}) => {

  const isSideBarCollapsed = useAppSelector((state)=> state.global.isSidebarCollapsed)
  const isDarkMode = useAppSelector((state)=> state.global.isDarkMode)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  })

  return (
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
      <Sidebar />
      {/* Main Right */}
      <main className={`flex flex-col w-full bg-gray-50 dark:bg-dark-bg 
        ${isSideBarCollapsed? "": "md:pl-64"}
        `}>
        <Navbar />
        {children}
      </main>
    </div>
  )
}

const DashboardWrapper = ({children}: {children: React.ReactNode}) => {
  return(
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  )
}

export default DashboardWrapper
