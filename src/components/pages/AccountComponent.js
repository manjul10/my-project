import{MessageCircle,
    FileText,
    Upload,} from  "lucide-react";
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

  export default AccountComponent;