// import React from 'react';

// const TransactionCard = () => {
//     return (
//       <div className="bg-white shadow-md rounded-lg p-6">
//         <div className="grid grid-cols-3 gap-4">
//           <div className="col-span-1 items-center">
//             <div className="text-gray-800 font-medium">STATUS</div>
//             <div className="font-bold flex items-center gap-2 border-b border-gray-200 pb-2 mb-2">
//               <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//               Authorized
//             </div>
//             <div className="flex items-center gap-2 font-bold">
//               <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
//               Pending
//             </div>
//           </div>
//           <div className="col-span-1">
//             <div className="text-gray-800 font-medium">DETAIL</div>
//             <div className="border-b border-gray-200 pb-2 mb-2">$120.80 · 24 March 2022, 10:34 PM</div>
//             <div>$95.25 · 24 March 2022, 09:30 AM</div>
//           </div>
//           <div className="col-span-1 flex flex-col justify-between">
//             <div className="text-gray-800 font-medium">ADDITIONAL ACTIONS</div>
//             <div className="border-b border-gray-200 pb-2 mb-2">
//               <button className="bg-black text-white py-2 px-4 rounded-full text-sm hover:bg-gray-800">
//                 Submit for payment
//               </button>
//             </div>
//             <div>Approx. 1 business day</div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default TransactionCard;
  

const TransactionTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden justify-around">
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 uppercase text-sm border-b ">
            <th className="px-6 py-4 font-medium pr-48">Status</th>
            <th className="px-6 py-4 font-medium">Details</th>
            <th className="px-6 py-4 font-medium text-right">Additional / Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:bg-gray-50">
            <td className="px-6 py-4 flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-gray-800">Authorized</span>
            </td>
            <td className="px-6 py-4 text-gray-800 ">
              <span>$120.80</span> &middot; <span>24 March 2022</span> &middot; <span>10:24 PM</span>
            </td>
            <td className="px-6 py-4 text-right">
              <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800">
                Submit for payment
              </button>
            </td>
          </tr>
          <tr className="border-b hover:bg-gray-50">
            <td className="px-6 py-4 flex items-center space-x-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span className="text-gray-800">Pending</span>
            </td>
            <td className="px-6 py-4 text-gray-800 ">
              <span>$95.25</span> &middot; <span>24 March 2022</span> &middot; <span>09:30 AM</span>
            </td>
            <td className="px-6 py-4 text-gray-600 text-right">
              Approx. to approve: <span className=" text-black font-semibold">1 business day</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;