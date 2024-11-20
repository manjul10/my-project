import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog";
import PaymentSubmission from "./pages/PaymentSubmission";
const TransactionTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden justify-around">
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 uppercase text-sm border-b ">
            <th className="px-6 py-4 font-medium pr-48">Status</th>
            <th className="px-6 py-4 font-medium">Details</th>
            <th className="px-6 py-4 font-medium text-right">
              Additional / Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:bg-gray-50">
            <td className="px-6 py-4 flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-gray-800">Authorized</span>
            </td>
            <td className="px-6 py-4 text-gray-800 ">
              <span>$120.80</span> &middot; <span>24 March 2022</span> &middot;{" "}
              <span>10:24 PM</span>
            </td>
            <td className="px-6 py-4 text-right">
              <GetPayment />
            </td>
          </tr>
          <tr className="border-b hover:bg-gray-50">
            <td className="px-6 py-4 flex items-center space-x-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span className="text-gray-800">Pending</span>
            </td>
            <td className="px-6 py-4 text-gray-800 ">
              <span>$95.25</span> &middot; <span>24 March 2022</span> &middot;{" "}
              <span>09:30 AM</span>
            </td>
            <td className="px-6 py-4 text-gray-600 text-right">
              Approx. to approve:{" "}
              <span className=" text-black font-semibold">1 business day</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export const GetPayment = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800">
          Submit for payment
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div>
          <PaymentSubmission />
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default TransactionTable;
