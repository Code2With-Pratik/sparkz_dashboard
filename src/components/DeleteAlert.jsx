import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { LuTriangleAlert } from "react-icons/lu";

export default function DeleteAlert({ trigger, onConfirm }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {/* This renders whatever button you pass from the parent */}
        {trigger}
      </AlertDialogTrigger>
      
      {/* Made fully responsive with w-[90vw] for ultra-small screens */}
      <AlertDialogContent className="w-[90vw] sm:max-w-125 px-6 py-6 sm:px-8 bg-white rounded-xl shadow-lg">
        <AlertDialogHeader className="flex flex-col items-center gap-4">
          
          {/* Icon Circle - Centered properly (removed md:ml-48), fixed background color */}
          <div className="flex h-15 w-15 md:ml-48 items-center justify-center rounded-full bg-[#FFECEC] text-[#FF5B5B]">
            <LuTriangleAlert size={42} />
          </div>
          
          <div className="text-center space-y-2 w-full">
             {/* Main Title "Alert" */}
             <AlertDialogTitle className="text-2xl font-medium text-gray-700">
               Alert
             </AlertDialogTitle>
             
             {/* Subtitle / Question */}
             <AlertDialogDescription className="text-lg text-gray-700 font-medium">
               Do you want to delete this employee?
             </AlertDialogDescription>

             {/* Note Section */}
             <div className="flex flex-col items-center space-y-1 mt-5">
                <h3 className="text-primary text-lg font-medium">
                   Note:
                </h3>
                <p className="text-gray-500 text-center text-sm leading-relaxed font-poppins">
                   The data of the employee will get deleted.<br/>
                   This action cannot be undone.
                </p>
             </div>
          </div>

        </AlertDialogHeader>

        {/* Footer Buttons - Using w-1/2 to ensure they fit perfectly on all screens */}
        <AlertDialogFooter className="sm:justify-center gap-3 sm:gap-4 mt-8 w-full flex-row">
          
          <AlertDialogCancel className="w-1/2 py-6 m-0 border-none cursor-pointer bg-primary text-white hover:bg-[#13607e]! hover:text-white rounded-lg text-base font-medium">
            Cancel
          </AlertDialogCancel>
          
          <AlertDialogAction 
            className="w-1/2 py-6 m-0 cursor-pointer text-red-500 bg-[#FFECEC]! hover:bg-[#ff0000]! hover:text-white border-none rounded-lg text-base font-medium shadow-none"
            onClick={onConfirm}
          >
            Delete
          </AlertDialogAction>

        </AlertDialogFooter>

      </AlertDialogContent>
    </AlertDialog>
  );
}