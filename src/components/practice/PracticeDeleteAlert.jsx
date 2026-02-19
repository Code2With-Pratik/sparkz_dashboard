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

export default function PracticeDeleteAlert({ trigger, onConfirm }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {/* This renders whatever button you pass from the parent */}
        {trigger}
      </AlertDialogTrigger>
      
      <AlertDialogContent className="sm:max-w-125 py-4 px-10 bg-white rounded-md shadow-lg">
        <AlertDialogHeader className="flex flex-col items-center gap-4">
          
          {/* Icon Circle - Light red background with red icon */}
          <div className="flex h-15 w-15 md:ml-46 items-center justify-center rounded-full bg-[#FFECEC] text-red-500 mb-2">
            <LuTriangleAlert size={35} />
          </div>
          
          <div className="text-center space-y-3 w-full">
             {/* Main Title "Alert" */}
             <AlertDialogTitle className="text-2xl font-normal text-gray-700">
               Alert
             </AlertDialogTitle>
             
             {/* Description Text */}
             <AlertDialogDescription className="text-sm text-gray-500 font-normal leading-relaxed">
               Are you sure want to delete this Practice ID? all the users 
               will get deleted and this action can not be undone
             </AlertDialogDescription>
          </div>

        </AlertDialogHeader>

        {/* Footer Buttons */}
        <AlertDialogFooter className="sm:justify-center gap-4 mt-6 w-full flex-row space-x-0">
          {/* Cancel Button - Primary Teal Background */}
          <AlertDialogCancel className="w-1/2 py-6 cursor-pointer bg-primary text-white hover:bg-[#157395ce]! hover:text-white border-none text-lg font-medium rounded-lg">
            Cancel
          </AlertDialogCancel>
          
          {/* Delete Button - Light Pink Background, Red Text */}
          <AlertDialogAction 
            className="w-1/2 py-6 cursor-pointer bg-red text-red-500 hover:bg-[#ffdede]! border-none text-lg font-medium rounded-lg shadow-none"
            onClick={onConfirm}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>

      </AlertDialogContent>
    </AlertDialog>
  );
}