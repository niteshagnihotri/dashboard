import React, { useState } from 'react';
import Profile from './Profile';
import SubTitle from './Links/SubTitle';
import Navlink from './Links/Navlink';
import { CgInbox } from 'react-icons/cg';
import { RiFolderUploadFill, RiHashtag } from 'react-icons/ri';
import { MdDashboardCustomize, MdLockPerson, MdOutlineImageSearch, MdOutlineSpaceDashboard } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';
import { TbAnalyzeFilled } from 'react-icons/tb';
import { BsFillTagFill } from 'react-icons/bs';
import { HiOutlineTable } from 'react-icons/hi';
import { RiListSettingsLine } from 'react-icons/ri';
import { AiFillPlusCircle } from 'react-icons/ai';
import { MdMenuOpen } from 'react-icons/md';

const Dashboard = () => {

  const [show, setShow] = useState(false);

  return (
    <>
      <div className="tab:w-[30vw] lg:w-[25vw] xl:w-[22vw] lg:border-r transition duration-700 ease-in-out">
        
        <div className='flex justify-between items-center flex-row py-7 px-7 lg:px-4 xl:px-8'>
          <h1 className="font-Noto text-xl font-semibold">Dashboard</h1>
          <MdMenuOpen onClick={()=>setShow(!show)} className='text-gray-400 text-2xl lg:text-lg cursor-pointer transition-all' />
        </div>
        <hr />

        <div className={show ? 'block' : 'hidden' + ' tab:flex tab:flex-col '}>
          <Profile />
          <div className=' px-7 lg:px-4 xl:px-8 pb-8'>
            <SubTitle value={"Dashboards"} />
            <div className='space-y-5'>
              <Navlink icon={<CgInbox />} title="Inbox" count="4" />
              <Navlink icon={<RiFolderUploadFill />} title="Drive Files" count="435" />
              <Navlink icon={<MdDashboardCustomize />} title="Boards" count="5" />
              <Navlink icon={<BiTimeFive />} title="Updates" count="4" />
              <Navlink icon={<TbAnalyzeFilled />} title="Analytics" count="4" />
              <Navlink icon={<MdOutlineSpaceDashboard />} title="CRM Dashboard" count="4" />
              <Navlink icon={<BsFillTagFill />} title="Ecommerce" count="0" />
              <Navlink icon={<HiOutlineTable />} title="Cryptocurrency" count="0" />
              <Navlink icon={<MdLockPerson />} title="Projects" count="0" />
              <Navlink icon={<MdOutlineImageSearch />} title="NFT Marketplace" count="0" />
              <Navlink icon={<RiListSettingsLine />} title="Settings" count="2" />
            </div>
            <SubTitle value={"Projects"} />
            <div className='space-y-5'>
              <Navlink icon={<RiHashtag />} title="Additional Calendar" count="6" />
              <Navlink icon={<RiHashtag />} title="Branch Logo Design" count="11" />
              <Navlink icon={<RiHashtag />} title="User Research" count="0" />
              <Navlink icon={<RiHashtag />} title="Marketing Sales" count="23" />
              <Navlink icon={<RiHashtag />} title="New Project Templates" count="2" />
              <Navlink icon={<AiFillPlusCircle />} title="Add New Project" count="0" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard