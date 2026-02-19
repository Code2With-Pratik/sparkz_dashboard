import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

export default function BulkUpdate({ trigger }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      
      {/* Responsive modal container, 90vw on small screens */}
      <DialogContent className="w-[90vw] sm:max-w-125 p-4 sm:p-8 bg-white rounded-xl [&>button]:hidden">
        <DialogHeader className="mb-4 sm:mb-6">
          <DialogTitle className="text-center text-lg sm:text-2xl font-normal text-gray-700">
            Bulk Update
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 sm:space-y-6">
          {/* File Input Mockup */}
          <div className="flex w-full items-center border border-gray-200 rounded-md overflow-hidden bg-white">
             <input 
                type="text" 
                placeholder="Bulk Update" 
                className="flex-1 min-w-0 px-2 sm:px-4 py-3 text-xs sm:text-base text-gray-500 outline-none placeholder:text-gray-300"
             />
             <div className="bg-gray-200 text-gray-500 px-3 sm:px-6 py-3 text-xs sm:text-base cursor-pointer hover:bg-gray-300 transition whitespace-nowrap">
                Browser
             </div>
          </div>

          {/* Note Section */}
          <div className="text-center px-1 sm:px-0">
            <p className="text-xs sm:text-base text-gray-800 leading-relaxed">
              <span className="font-bold">Note:</span> Upload File Only In xlsx Formate.{" "}
              <a href="#" className="text-primary hover:underline font-medium">
                Download
              </a>{" "}
              From Here
            </p>
          </div>

          {/* Footer Buttons - Stacked on mobile, side-by-side on larger screens */}
          <div className="flex flex-col-reverse sm:flex-row gap-2 sm:gap-4 mt-2 sm:mt-4">
            <DialogClose asChild>
              <Button 
                className="w-full sm:flex-1 bg-[#F1F5F9] text-primary hover:bg-gray-200 py-5 sm:py-6 text-sm sm:text-base font-normal cursor-pointer"
                variant="ghost"
              >
                Cancel
              </Button>
            </DialogClose>

            <Button className="w-full sm:flex-1 bg-primary hover:bg-[#13607e] text-white py-5 sm:py-6 text-sm sm:text-base font-normal cursor-pointer">
              Add
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}