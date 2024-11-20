import React from "react";
import { CheckIcon } from "lucide-react";

const SuccessScreen = () => {
  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-sm">
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">You're all set!</h2>
        <p className="text-sm text-gray-600">
          Feel free to send us a message with any extra details or files
        </p>

        <div className="flex justify-center py-8">
          <div className="animate-bounce">
            <CheckIcon
              size={64}
              className="text-emerald-600 animate-[spin_1s_ease-in-out]"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
              <span className="text-sm">Invoice reviewing</span>
            </div>
            <span className="text-sm text-gray-600">29 July</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
              <span className="text-sm">Payment release</span>
            </div>
            <span className="text-sm text-gray-600">29 July</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
              <span className="text-sm">Money on your account</span>
            </div>
            <span className="text-sm text-gray-600">30 July</span>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-full hover:bg-gray-50">
            Send message
          </button>
          <button className="flex-1 px-4 py-2 text-sm text-white bg-black rounded-full hover:bg-gray-800">
            Back home
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;
