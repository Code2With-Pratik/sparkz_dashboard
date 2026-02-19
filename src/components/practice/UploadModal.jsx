import { useRef } from "react"; // 1. Import useRef
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, FolderInput } from "lucide-react"; 

export default function UploadModal({ trigger }) {

  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);

    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      
      <DialogContent className="sm:max-w-135 p-6 bg-white rounded-xl [&>button]:hidden">
        {/* Custom Header with Title and Close Button */}
        <div className="flex items-center justify-between mb-4">
           <div className="flex-1 text-center">
              <DialogTitle className="text-2xl font-normal text-gray-700">
                Upload
              </DialogTitle>
           </div>
           <DialogClose asChild>
              <button className="text-gray-500 hover:text-gray-600 cursor-pointer">
                 <X size={24} />
              </button>
           </DialogClose>
        </div>

        <div className="space-y-2">
          
          {/* Link Name Input */}
          <div className="space-y-2">
            <Label className="text-gray-700 font-normal">Link Name</Label>
            <Input
              placeholder="Enter Link Name" 
              className="bg-white border border-gray-200 py-6 text-gray-600 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#187498]"
            />
          </div>

          {/* "Or" Separator */}
          <div className="relative flex py-2 items-center">
            <div className="grow border-t border-gray-100"></div>
            <span className="shrink-0 mx-4 text-gray-500 text-sm">Or</span>
            <div className="grow border-t border-gray-100"></div>
          </div>

          {/* Dashed Upload Area */}
          <div className="border-2 border-dashed border-[#187498]/40 rounded-lg p-4 bg-white flex flex-col items-center justify-center space-y-4">
             {/* 3. Add the Hidden Input Field */}
             <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept=".csv, .xlsx, .xls"
                onChange={handleFileChange}
             />

             {/* Icon */}
             <div className="text-gray-400">
                <FolderInput size={48} strokeWidth={1.5} />
             </div>
             
             {/* Text */}
             <div className="text-center">
                <p className="text-gray-500 font-medium">Drag and drop file here</p>
                <p className="text-gray-400 text-sm mt-1">xls/csv</p>
             </div>

             {/* Upload Button */}
             <Button 
                onClick={handleButtonClick}
                className="w-40 bg-[#187498] hover:bg-[#13607e] text-white py-6 text-md font-normal rounded-lg cursor-pointer mt-2"
             >
                Upload
             </Button>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}