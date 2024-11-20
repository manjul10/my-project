import { ChevronDown, ChevronUp, MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

export const ServiceDetails = () => {
  const [openSections, setOpenSections] = useState([""]);

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
        <div className="border rounded-lg">
          <button
            onClick={() => toggleSection("engine")}
            className="w-full px-4 py-3   hover:bg-gray-50"
          >
            <div className="flex  justify-between gap-4">
              <div className="flex gap-2">
                {isOpen("engine") ? (
                  <MinusIcon className="mr-3" />
                ) : (
                  <PlusIcon className="mr-3" />
                )}
                <span>Engine Overheating</span>
                <span className="text-gray-600">$230.00</span>
              </div>

              <div className="flex gap-2">
                <button className="text-sm text-blue-600">
                  Complaint, Cause, Correction
                </button>
                {isOpen("engine") ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>
            </div>
          </button>
        </div>

        {isOpen("engine") && (
          <div className="mx-4 ">
            <div className="border rounded-lg my-2">
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
                  <ThermostatReplacementCard />
                </div>
              )}
            </div>
          </div>
        )}

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

export const ThermostatReplacementCard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-lg font-bold mb-4">Thermostat Replacement</h2>
        <div className="grid grid-cols-5 gap-4 border-b pb-4 mb-2">
          <div>
            <p className="text-sm font-medium">PART #</p>
            <p className="text-base">112233440C</p>
          </div>
          <div>
            <p className="text-sm font-medium">PART NAME</p>
            <p className="text-base">Thermostat</p>
          </div>
          <div>
            <p className="text-sm font-medium">QTY</p>
            <p className="text-base">1</p>
          </div>
          <div>
            <p className="text-sm font-medium">UNIT COST</p>
            <p className="text-base">$45.00</p>
          </div>
          <div>
            <p className="text-sm font-medium">COST PLUS</p>
            <p className="text-base">$6.75</p>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4 border-b pb-4 my-auto">
          <div>
            <p className="text-sm font-medium">PART #</p>
            <p className="text-base">44332311DD</p>
          </div>
          <div>
            <p className="text-sm font-medium">PART NAME</p>
            <p className="text-base">Gasket</p>
          </div>
          <div>
            <p className="text-sm font-medium">QTY</p>
            <p className="text-base">1</p>
          </div>
          <div>
            <p className="text-sm font-medium">UNIT COST</p>
            <p className="text-base">$15.00</p>
          </div>
          <div>
            <p className="text-sm font-medium">COST PLUS</p>
            <p className="text-base">$2.25</p>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4 pt-4">
          <div>
            <p className="text-sm font-medium">LABOR DESCRIPTION</p>
            <p className="text-base">Technician Labor</p>
          </div>
          <div>
            <p className="text-sm font-medium">MENU</p>
            <p className="text-base text-green-800">✓</p>
          </div>
          <div>
            <p className="text-sm font-medium">HOURS</p>
            <p className="text-base">2</p>
          </div>
          <div>
            <p className="text-sm font-medium">RATE</p>
            <p className="text-base">$40.00</p>
          </div>
          <div>
            <p className="text-sm font-medium">TAX %</p>
            <p className="text-base">15%</p>
          </div>
          <div>
            <p className="text-sm font-medium">TAX PLAN</p>
            <p className="text-base">$6.00</p>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4 pt-4">
          <div>
            <p className="text-sm font-medium">LABOR DESCRIPTION</p>
            <p className="text-base">Junior Technician Labor</p>
          </div>
          <div>
            <p className="text-sm font-medium">MENU</p>
            <p className="text-base text-green-800">✓</p>
          </div>
          <div>
            <p className="text-sm font-medium">HOURS</p>
            <p className="text-base">1</p>
          </div>
          <div>
            <p className="text-sm font-medium">RATE</p>
            <p className="text-base">$35.00</p>
          </div>
          <div>
            <p className="text-sm font-medium">TAX %</p>
            <p className="text-base">16%</p>
          </div>
          <div>
            <p className="text-sm font-medium">TAX PLAN</p>
            <p className="text-base">$5.60</p>
          </div>
        </div>
      </div>
    </div>
  );
};
