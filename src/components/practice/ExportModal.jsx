import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { X, Download } from "lucide-react"; 

export default function ExportModal({ trigger }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      
      <DialogContent className="sm:max-w-125 px-14 py-8 bg-white rounded-lg [&>button]:hidden">
        {/* Header with Title and Close Button */}
        <div className="flex items-center justify-between relative">
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <DialogTitle className="text-2xl font-normal text-gray-700 pointer-events-auto">
                Export
              </DialogTitle>
           </div>
           <DialogClose asChild className="ml-auto pointer-events-auto z-10">
              <button className="text-gray-700 hover:text-gray-400 cursor-pointer">
                 <X size={25} />
              </button>
           </DialogClose>
        </div>

        <div className="flex flex-col items-center justify-center space-y-6">
          
          {/* Download Icon Circle */}
          <div className="flex h-16 w-16 items-center justify-center rounded-full text-[#187498]">
            <Download size={25} strokeWidth={2} />
          </div>

          {/* Description Text */}
          <p className="text-gray-400 text-center text-sm font-normal">
            Your file will be downloaded after generating link
          </p>

          {/* Action Button */}
          <Button className="w-full sm:w-auto px-8 bg-[#187498] hover:bg-[#13607e] text-white py-6 text-xs font-semilight rounded-sm cursor-pointer">
            Generating Download Link
          </Button>

        </div>
      </DialogContent>
    </Dialog>
  );
}