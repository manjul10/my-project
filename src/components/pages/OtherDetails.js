import React from "react";

const OtherDetailsCard = () => {
  return (
    <div className="bg-white border rounded-xl overflow-hidden mt-4">
      <div className="p-6">
        <h2 className="text-lg font-bold mb-4">Other Details</h2>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <h3 className="text-sm font-medium mb-1">APPROVED</h3>
            <p className="text-base">Towed</p>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-1">COMMENTS / USE</h3>
            <p className="text-base">No</p>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-1">PHYSICAL DAMAGE</h3>
            <p className="text-base">No</p>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-1">MODIFICATIONS</h3>
            <p className="text-base">Oversize Wheels</p>
          </div>
        </div>
      </div>
      <div className="border-t p-6">
        <div className="flex items-center mb-4">
          <img
            src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=1024x1024&w=is&k=20&c=iGtRKCTRSvPVl3eOIpzzse5SvQFfImkV0TZuFh-74ps="
            alt="Customer"
            className="w-10 h-10 bg-contain rounded-full mr-4"
          />
          <div>
            <h3 className="text-sm font-medium">Devon Lang</h3>
            <p className="text-xs text-gray-500">Active</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <h3 className="text-sm font-medium mb-1">CUSTOMER</h3>
            <p className="text-base">EADX20001016</p>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-1">TERM</h3>
            <p className="text-base">60 mo. / 100,000 mi.</p>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-1">VIN</h3>
            <p className="text-base">3C7TRTGAG141119811</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherDetailsCard;
