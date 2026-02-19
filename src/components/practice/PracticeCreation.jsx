import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PracticeCreation({ trigger }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      
      {/* Modal Content - matching the white rounded look without X icon */}
      <DialogContent className="w-[90%] sm:max-w-170 max-h-[90vh] overflow-y-auto py-14 px-10 pb-15 bg-white rounded-xl [&>button]:hidden">
        
        <DialogHeader className="mb-6">
          <DialogTitle className="text-center text-2xl font-normal text-gray-700">
            Practice Creation
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Form Grid - 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Team Management ID - Select Dropdown */}
            <div className="space-y-2">
              <Label className="text-gray-800 text-md font-normal mb-5">Team Management ID</Label>
              <Select>
                <SelectTrigger className="w-full bg-[#F8F9FB] border-none py-6 text-gray-500 focus:ring-1 focus:ring-[#187498]">
                  <SelectValue placeholder="Team Management ID" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tm-001">TM-001</SelectItem>
                  <SelectItem value="tm-002">TM-002</SelectItem>
                  <SelectItem value="tm-003">TM-003</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Practice ID */}
            <div className="space-y-2">
              <Label className="text-gray-800 text-md font-normal mb-5">Practice ID</Label>
              <Input
                placeholder="Enter Practice ID" 
                className="bg-[#F8F9FB] border-none py-6 text-gray-600 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#187498]"
              />
            </div>

            {/* Practice Name */}
            <div className="space-y-2">
              <Label className="text-gray-800 text-md font-normal mb-5">Practice Name</Label>
              <Input
                placeholder="Enter Name"
                className="bg-[#F8F9FB] border-none py-6 text-gray-600 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#187498]"
              />
            </div>

            {/* Zip Code */}
            <div className="space-y-2">
              <Label className="text-gray-800 text-md font-normal mb-5">Zip Code</Label>
              <Input
                placeholder="Enter Zip Code"
                className="bg-[#F8F9FB] border-none py-6 text-gray-600 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#187498]"
              />
            </div>

            {/* Street */}
            <div className="space-y-2">
              <Label className="text-gray-800 text-md font-normal mb-5">Street</Label>
              <Input
                placeholder="Enter Street"
                className="bg-[#F8F9FB] border-none py-6 text-gray-600 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#187498]"
              />
            </div>

            {/* City */}
            <div className="space-y-2">
              <Label className="text-gray-800 text-md font-normal mb-5">City</Label>
              <Input
                placeholder="Enter City"
                className="bg-[#F8F9FB] border-none py-6 text-gray-600 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#187498]"
              />
            </div>

            {/* State */}
            <div className="space-y-2">
              <Label className="text-gray-800 text-md font-normal mb-5">State</Label>
              <Input
                placeholder="Enter State"
                className="bg-[#F8F9FB] border-none py-6 text-gray-600 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#187498]"
              />
            </div>

            {/* Country */}
            <div className="space-y-2">
              <Label className="text-gray-800 text-md font-normal mb-8">Country</Label>
              <Input
                placeholder="Enter Country"
                className="bg-[#F8F9FB] border-none py-6 text-gray-600 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#187498]"
              />
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex gap-4 mt-8 pt-2">
            <DialogClose asChild>
              <Button 
                className="flex-1 bg-[#F1F5F9] text-[#187498] hover:bg-gray-200 py-6 text-lg font-normal cursor-pointer"
                variant="ghost"
              >
                Cancel
              </Button>
            </DialogClose>
            
            <Button className="flex-1 bg-[#187498] hover:bg-[#13607e] text-white py-6 text-lg font-normal cursor-pointer">
              Create
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}