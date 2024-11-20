import {
  DeviceTabletIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function Claims() {
  return (
    <div className="p-4 bg-gray-50">
      <div className="text-sm text-gray-600 flex items-center mb-2">
        <span className="flex items-center">
          <DeviceTabletIcon className="h-4 w-4" />
          <a href="#" className="hover:underline ml-2">
            Claims
          </a>
        </span>
        <span className="flex items-center ml-2">
          <ChevronRightIcon className="h-4 w-4" />
          <span className="ml-2">Action Needed</span>
        </span>
      </div>

      <h1 className="text-3xl font-semibold mb-6">CL-2467802</h1>

      <div className="grid grid-cols-6 text-sm">
        <div>
          <p className="text-gray-500">TYPE</p>
          <p className="font-medium text-gray-800">Mechanical</p>
        </div>

        <div>
          <p className="text-gray-500">RO NUMBER</p>
          <p className="font-medium text-gray-800">800700123412</p>
        </div>

        <div>
          <p className="text-gray-500">DATE</p>
          <p className="font-medium text-gray-800">5 May 2024</p>
        </div>

        <div>
          <p className="text-gray-500">CLIENT</p>
          <div className="flex items-center font-medium text-gray-800">
            <img
              src="./profile1.png"
              alt="Client"
              className="h-6 w-6 rounded-full mr-2"
            />
            <span>Albert Flores</span>
            <ChevronDownIcon className="h-4 w-4 ml-1" />
          </div>
        </div>

        <div>
          <p className="text-gray-500">ASSIGNED TO</p>
          <div className="flex items-center font-medium text-gray-800">
            <img
              src="./profile2.png"
              alt="Assigned to"
              className="h-6 w-6 rounded-full mr-2"
            />
            <span>David Jackson</span>
            <ChevronDownIcon className="h-4 w-4 ml-1" />
          </div>
        </div>

        <div>
          <p className="text-gray-500">CURRENT ODO</p>
          <p className="font-medium text-gray-800">109,000 mi.</p>
        </div>
      </div>
    </div>
  );
}
