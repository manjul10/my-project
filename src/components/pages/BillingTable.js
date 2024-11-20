const BillingTable = () => {
  return (
    <>
      <div className="flex gap-2 mt-5 items-center mb-4">
        <h2 className="text-lg font-semibold">Sublets</h2>
        <span className="text-lg text-gray-600 font-semibold">$250.00</span>
      </div>
      <div className="w-full border rounded-lg mt-1 p-5 ">
        <table className="w-full">
          <thead>
            <tr className="text-gray-500 uppercase text-xs border-b">
              <th className="py-3 text-left">Name of the Bullet</th>
              <th className="py-3 text-center">QTY</th>
              <th className="py-3 text-center">Cost per</th>
              <th className="py-3 text-right">Requested</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-b">
              <td className="py-4">Rental Car Service (Max 5 Days)</td>
              <td className="py-4 text-center">2</td>
              <td className="py-4 text-center">$30.00</td>
              <td className="py-4 text-right">$60.00</td>
            </tr>
            <tr className="border-b">
              <td className="py-4">Tow Service - Towing up to 50 miles</td>
              <td className="py-4 text-center">1</td>
              <td className="py-4 text-center">$150.00</td>
              <td className="py-4 text-right">$150.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BillingTable;
