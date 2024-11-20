import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { useState, useEffect, useRef } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "../components/ui/dialog";

import BillingTable from "./pages/BillingTable";
import AccountComponent from "./pages/AccountComponent";
import TotalsTable from "./pages/TotalsTable";
import PaymentSubmission from "./pages/PaymentSubmission";
import OtherDetailsCard from "./pages/OtherDetails";
import { ServiceDetails } from "./pages/ServiceDetails";

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
    <Dialog>
      <Tabs defaultValue="account" className="mt-5 p-5">
        <div
          ref={headerRef}
          className="bg-white sticky top-0 z-40 flex items-center justify-between"
        >
          <div className="w-1/2">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="account" active="true">
                Actions
              </TabsTrigger>
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
        <div>
          <DialogContent className="my-4 ">
            <DialogHeader>
              <DialogDescription>
                <PaymentSubmission />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </div>

        <TabsContent value="account">
          <AccountComponent />
        </TabsContent>

        <TabsContent value="sublets">
          <BillingTable />
        </TabsContent>
        <TabsContent value="services">
          <ServiceDetails />
        </TabsContent>

        <TabsContent value="totals">
          <TotalsTable />
        </TabsContent>

        <TabsContent value="others">
          <OtherDetailsCard />
        </TabsContent>
      </Tabs>
    </Dialog>
  );
}
