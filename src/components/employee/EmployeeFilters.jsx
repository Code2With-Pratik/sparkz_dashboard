import { Search, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Delete from "../../assets/images/Delete.png"; // Make sure this path is correct
import DeleteAlert from "@/components/DeleteAlert"; // This import now works!
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function EmployeeFilters() {

  const handleDelete = () => {
    console.log("Deleted!");
    // Your delete logic here
  };

  return (
    <div className="p-6 space-y-6">
      
      {/* ROW 1: Search & Deleted User History */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* Search Bar */}
        <div className="relative w-full md:w-105">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={25} />
          <Input 
            placeholder="Search" 
            className="pl-12 py-6 bg-[#F8F9FA] border-none text-2xl text-gray-600 placeholder:text-gray-400 h-10 rounded-md md:text-xl" 
          />
        </div>

        {/* Delete Alert Component */}
        <DeleteAlert 
          title="Delete User History?"
          description="Are you sure you want to delete the user history? This action cannot be undone."
          onConfirm={handleDelete}
          trigger={
            // PASSING THE BUTTON AS A PROP
            <Button 
              variant="outline" 
              className="bg-[#FFECEC] font-medium py-6 text-[#FF5B5B] border-none hover:bg-[#ffe0e0] hover:text-red-400 cursor-pointer"
            >
              <span className="mr-2">
                <img src={Delete} alt="Delete" className="h-4"/>
              </span> 
              Deleted User History
            </Button>
          }
        />
      </div>

      {/* ROW 2: Filters (Role, Team) & Actions */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        
        <div className="flex flex-wrap items-end gap-4 w-full md:w-auto">
          {/* Role Filter */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Role</label>
            <Select>
              <SelectTrigger className="w-75 py-6 border-gray-200">
                <SelectValue placeholder="See All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">See All</SelectItem>
                <SelectItem value="manager">Manager</SelectItem>
                <SelectItem value="staff">Staff</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Team Filter */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Team</label>
            <Select>
              <SelectTrigger className="w-75 py-6 border-gray-200">
                <SelectValue placeholder="All Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Location</SelectItem>
                <SelectItem value="ny">New York</SelectItem>
                <SelectItem value="la">Los Angeles</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Export Button */}
          <Button className="text-[#187498] bg-gray-100/50 w-30 hover:bg-[#187498] hover:text-white py-6 cursor-pointer">
            <Upload size={16} className="mr-2" /> Export
          </Button>
        </div>

        {/* Show Entries */}
        <div className="flex items-center gap-2">
           <span className="text-sm text-gray-500">Show Entries</span>
           <Select defaultValue="100">
              <SelectTrigger className="w-18 border-gray-200">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="min-w-8">
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="50">50</SelectItem>
                <SelectItem value="100">100</SelectItem>
              </SelectContent>
            </Select>
        </div>
      </div>
    </div>
  );
}