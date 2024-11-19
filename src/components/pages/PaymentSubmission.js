import React, { useState } from "react";
import { Upload, ChevronDown, FileText } from "lucide-react";

export default function PaymentSubmission() {
  const [files, setFiles] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    // Handle file drop logic here
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-2 text-black">Submit for payment</h2>
      <p className="text-sm text-gray-600 mb-6">
        You need to upload invoice and confirm payment method
      </p>

      {/* Invoice Total */}
      <div className="border rounded-lg mb-6">
      <div className="flex items-center gap-3 p-4 justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="font-semibold">$900.55</span>
        </div>
        <span className="text-gray-500 text-sm ">Invoice total</span>
      </div>
      </div>

      {/* Upload Section */}
      <div className="mb-6">
        <p className="text-sm font-medium mb-2">Upload Invoice</p>
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className="flex justify-center mb-3">
            <Upload className="text-gray-400" size={24} />
          </div>
          <p className="text-sm text-gray-600 mb-1">
            Drag and drop any files related to this claim
          </p>
          <p className="text-sm text-gray-600">
            or <span className="text-blue-600">click here</span> to upload
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Word, PDF, JPEG, PNG (Max 4mb)
          </p>
        </div>
      </div>

      {/* Selected Files */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-3">
          <span>Select Invoice from Files</span>
          <button className="text-gray-500">See All</button>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="border rounded-lg p-3 flex flex-col items-center">
            <FileText size={20} className="text-gray-500 mb-1" />
            <p className="text-xs text-gray-600">Invoice</p>
            <p className="text-xs text-gray-400">07934.docx</p>
          </div>
          <div className="border rounded-lg p-3 flex flex-col items-center">
            <FileText size={20} className="text-gray-500 mb-1" />
            <p className="text-xs text-gray-600">Claim</p>
            <p className="text-xs text-gray-400">data.docx</p>
          </div>
          <div className="border rounded-lg p-3 flex flex-col items-center">
            <FileText size={20} className="text-gray-500 mb-1" />
            <p className="text-xs text-gray-600">Endurance</p>
            <p className="text-xs text-gray-400">Numbers.pdf</p>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-sm">Payment method</span>
          <button className="text-sm text-gray-500">Edit</button>
        </div>
        <div className="flex items-center justify-between p-3 border rounded-lg">
          <div className="flex items-center gap-2">
            <Upload className="text-gray-500" size={20} />
            <span className="text-sm">Wire Transfer</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Ending in 9898</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>

      {/* Checkbox */}
      <div className="flex items-center gap-2 mb-6">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          className="rounded border-gray-300"
        />
        <span className="text-sm">All related invoices are provided</span>
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button className="text-sm text-gray-600">Cancel</button>
        <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
          Submit for payment
        </button>
      </div>
    </div>
  );
}
