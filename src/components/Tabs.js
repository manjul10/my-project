import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { useState, useEffect, useRef } from "react";

import {
  MessageCircle,
  FileText,
  Upload,
  ChevronDown,
  ChevronUp,
  PlusIcon,
  MinusIcon,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog"

export function TabsDemo() {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 1, rootMargin: "-10px 0px 0px 0px" }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <Dialog >
    <Tabs defaultValue="account" className="mt-5 p-5">
      <div
        ref={headerRef}
        className="bg-white sticky top-0 z-40 flex items-center justify-between"
      >
        <div className="w-1/2">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="account" active="true">Actions</TabsTrigger>
            <TabsTrigger value="sublets">Sublets</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="totals">Totals</TabsTrigger>
            <TabsTrigger value="others">Others</TabsTrigger>
          </TabsList>
        </div>
        <div className="ml-auto">
          <DialogTrigger asChild>


          <button
            className={`bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 ${
              isSticky ? "flex" : "hidden"
            }`}
          >
            Submit for payment
          </button>
          </DialogTrigger>
        </div>
      </div>

      <DialogContent  className="sm:max-w-[425px]">

      <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            
          </div>
        </div>
        <DialogFooter>
          <button type="submit">Save changes</button>
        </DialogFooter>
      </DialogContent>

      <TabsContent value="account">
        <AccountComponent />
        <BillingTable />
        <ServiceDetails />
        <TotalsTable />
      </TabsContent>

      <TabsContent value="sublets"></TabsContent>
      <TabsContent value="services"></TabsContent>

      <TabsContent value="totals"></TabsContent>

      <TabsContent value="others"></TabsContent>
    </Tabs>
    </Dialog>
  );
}

const AccountComponent = () => {
  return (
    <div className="flex gap-4 w-full">
      {/* Support Chat Section */}
      <div className="flex-1 border rounded-lg p-4 bg-white shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
            S
          </div>
          <h2 className="font-semibold text-gray-700">SUPPORT CHAT</h2>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Do you have any questions or additional notes about this Client? Write
          it here!
        </p>
        <div className="relative">
          <textarea
            className="w-full border rounded-lg p-3 pr-10 h-20 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Type your message..."
          />
          <button className="absolute right-3 bottom-3 text-gray-400 hover:text-gray-600">
            <MessageCircle size={20} />
          </button>
        </div>
      </div>

      {/* Notes Section */}
      <div className="flex-1 border rounded-lg p-4 bg-white shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-6 h-6 text-gray-600" />
          <h2 className="font-semibold text-gray-700">NOTES</h2>
        </div>
        <textarea
          className="w-full border rounded-lg p-3 h-20 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="You can write any notes here..."
        />
      </div>

      {/* Files Section */}
      <div className="flex-1 border rounded-lg p-4 bg-white shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-6 h-6 text-gray-600" />
          <h2 className="font-semibold text-gray-700">FILES</h2>
        </div>
        <div className="flex flex-col items-center justify-center h-20 border rounded-lg border-dashed">
          <p className="text-sm text-gray-500 text-center">
            Drag and drop any files related to this claim or{" "}
            <button className="text-blue-500 hover:text-blue-600">
              click here to upload
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

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
            <span>Engine Overheating</span>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">$230.00</span>
              {isOpen("engine") ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </div>
          </button>
          {isOpen("engine") && (
            <div className="px-4 py-2 border-t">
              <div className="flex justify-end mb-2">
                <button className="text-sm text-blue-600">
                  Complaint, Cause, Correction
                </button>
              </div>
            </div>
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