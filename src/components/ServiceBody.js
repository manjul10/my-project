import React from 'react'
import Claims from './Claims';
import TransactionTable from './TransactionCard';
import { TabsDemo } from './Tabs';

const ServiceBody = () => {
 
  return (
    <div className='bg-gray-50 h-[35vh]'>
 <div className=" max-w-6xl  mx-auto  pb-12 ">
        <Claims />
        <TransactionTable />
        <TabsDemo />
      </div>
    </div>
   
  )
}

export default ServiceBody;