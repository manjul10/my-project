export function TotalsTable() {
    return (
      <>
        <h2 className="text-lg font-semibold mt-5 p-4">Totals</h2>
      <div className="w-full border rounded-lg mt-1 p-5">
        
        <div className="divide-y">
          <div className="grid grid-cols-2 p-4 items-center text-sm">
            <div className="text-gray-900">Parts total</div>
            <div className="text-right font-medium">$2,465.00</div>
          </div>
  
          <div className="grid grid-cols-2 p-4 items-center text-sm">
            <div className="text-gray-900">Labor total</div>
            <div className="text-right font-medium">$1,275.00</div>
          </div>
  
          <div className="grid grid-cols-2 p-4 items-center text-sm">
            <div className="text-gray-900">Sublet total</div>
            <div className="text-right font-medium">$440.00</div>
          </div>
  
          <div className="grid grid-cols-2 p-4 items-center text-sm bg-gray-50">
            <div className="text-gray-900 font-medium">Subtotal</div>
            <div className="text-right font-medium">$4,180.00</div>
          </div>
  
          <div className="grid grid-cols-2 p-4 items-center text-sm">
            <div className="text-gray-900">Taxes</div>
            <div className="text-right font-medium">$296.25</div>
          </div>
  
          <div className="grid grid-cols-2 p-4 items-center text-sm">
            <div className="text-gray-900">Deductible for customer</div>
            <div className="text-right font-medium text-red-600">- $100.00</div>
          </div>
  
          <div className="grid grid-cols-2 p-4 items-center text-base bg-gray-50">
            <div className="text-gray-900 font-semibold">Total</div>
            <div className="text-right font-semibold">$4,376.25</div>
          </div>
        </div>
      </div>
      </>
    );
  }

  export default TotalsTable;