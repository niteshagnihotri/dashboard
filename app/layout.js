"use client"
import Dashboard from './components/Dashboard';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import './globals.css';

export const metadata = {
  title: 'Dashboard Responsive UI',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='flex flex-col tab:flex-row min-w-full max-h-fit scroll-smooth'>
          <Dashboard />
          <div className='flex flex-col w-full'>
            <Header />
            {children}
          </div>
          <Sidebar/>
        </div>
      </body>
    </html>
  )
}
