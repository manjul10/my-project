import {
  MessageCircle,
  FileText,
  Upload,
  ChevronDown,
  ChevronUp,
  PlusIcon,
  MinusIcon,
} from "lucide-react";
import { useState } from "react";

const ServiceDetails = () => {
  const [openSections, setOpenSections] = useState([""]); // Default open section

  const toggleSection = (section) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const isOpen = (section) => openSections.includes(section);

  return (
    <div className="w-full mt-5">
      <div className="flex gap-10 items-center mb-4">
        <h2 className="text-lg font-semibold">Services</h2>
        <span className="text-lg">$1,450.00</span>
      </div>

      <div className="space-y-4">
        {/* Engine Overheating Section */}
        <div className="border rounded-lg">
          <button
            onClick={() => toggleSection("engine")}
            className="w-full px-4 py-3 flex items-center hover:bg-gray-50"
          >
            {isOpen ? (
              <MinusIcon className="mr-3" />
            ) : (
              <PlusIcon className="mr-3" />
            )}
            <div className="items-center">
              <div className="w-full flex justify-between items-center ">
                <div className="flex flex-col">
                <span>Engine Overheating</span>
                {/* <div className="flex items-center gap-4"> */}
                  <span className="text-gray-600">$230.00</span>
                {/* </div> */}
                </div>
                

                {/* <div className="px-4 py-2 border-t"> */}
                {/* <div className="flex justify-end mb-2"> */}
                <button className="text-sm text-blue-600  ml-auto">
                  Complaint, Cause, Correction
                </button>
                {/* </div> */}
                {/* </div> */}
              </div>

              {/* {isOpen("engine") ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )} */}
            </div>
          </button>
          {isOpen("engine") && (
            <div></div>
            // <div className="px-4 py-2 border-t">
            //   <div className="flex justify-end mb-2">
            //     <button className="text-sm text-blue-600">
            //       Complaint, Cause, Correction
            //     </button>
            //   </div>
            // </div>
          )}
        </div>

        {/* Cooling System Repair Section */}
        <div className="border rounded-lg">
          <button
            onClick={() => toggleSection("cooling")}
            className="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-50"
          >
            <span>Cooling System Repair</span>
            <div className="flex items-center gap-4">
              {isOpen("cooling") ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </div>
          </button>
          {isOpen("cooling") && (
            <div className="px-4 py-4 border-t">
              <div className="mb-6">
                <h3 className="font-semibold mb-2">PARTS</h3>
                <table className="w-full text-sm">
                  <thead className="text-gray-500 uppercase text-xs">
                    <tr>
                      <th className="text-left py-2">Part Number</th>
                      <th className="text-left py-2">Part Name</th>
                      <th className="text-center py-2">QTY</th>
                      <th className="text-center py-2">Wt/Add</th>
                      <th className="text-center py-2">Wt/Miles</th>
                      <th className="text-center py-2">Cost per</th>
                      <th className="text-right py-2">Tax per</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="py-2">123456789AA</td>
                      <td className="py-2">Radiator</td>
                      <td className="py-2 text-center">1</td>
                      <td className="py-2 text-center">24</td>
                      <td className="py-2 text-center">50,000</td>
                      <td className="py-2 text-center">$800.00</td>
                      <td className="py-2 text-right">$75.00</td>
                    </tr>
                    <tr className="border-t">
                      <td className="py-2">S785432-BB</td>
                      <td className="py-2">Coolant</td>
                      <td className="py-2 text-center">3</td>
                      <td className="py-2 text-center">12</td>
                      <td className="py-2 text-center">30,000</td>
                      <td className="py-2 text-center">$30.00</td>
                      <td className="py-2 text-right">$4.50</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h3 className="font-semibold mb-2">LABOR</h3>
                <table className="w-full text-sm">
                  <thead className="text-gray-500 uppercase text-xs">
                    <tr>
                      <th className="text-left py-2">Labor Description</th>
                      <th className="text-center py-2">Menu</th>
                      <th className="text-center py-2">Hours</th>
                      <th className="text-center py-2">Rate</th>
                      <th className="text-center py-2">Tax %</th>
                      <th className="text-right py-2">Tax Per</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="py-2">Senior Engineer's Labor</td>
                      <td className="py-2 text-center">✓</td>
                      <td className="py-2 text-center">4</td>
                      <td className="py-2 text-center">$60.00</td>
                      <td className="py-2 text-center">15%</td>
                      <td className="py-2 text-right">$45.00</td>
                    </tr>
                    <tr className="border-t">
                      <td className="py-2">Engineer's Labor</td>
                      <td className="py-2 text-center">✓</td>
                      <td className="py-2 text-center">5</td>
                      <td className="py-2 text-center">$50.00</td>
                      <td className="py-2 text-center">15%</td>
                      <td className="py-2 text-right">$30.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Thermostat Replacement Section */}
        <div className="border rounded-lg">
          <button
            onClick={() => toggleSection("thermostat")}
            className="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-50"
          >
            <span>Thermostat Replacement</span>
            <div className="flex items-center gap-4">
              {isOpen("thermostat") ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </div>
          </button>
          {isOpen("thermostat") && (
            <div className="px-4 py-2 border-t">
              Content for thermostat replacement
            </div>
          )}
        </div>

        {/* Brake System Issue Section */}
        <div className="border rounded-lg">
          <button
            onClick={() => toggleSection("brake")}
            className="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-50"
          >
            <span>Brake System Issue</span>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">$240.00</span>
              {isOpen("brake") ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </div>
          </button>
          {isOpen("brake") && (
            <div className="px-4 py-2 border-t">
              <div className="flex justify-end mb-2">
                <button className="text-sm text-blue-600">
                  Complaint, Cause, Correction
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
