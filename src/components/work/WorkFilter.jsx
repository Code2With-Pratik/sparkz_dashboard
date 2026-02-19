import { Search, CheckSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function WorkFilter() {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
      
      {/* Search Input */}
      <div className="relative w-full md:w-72">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input 
          placeholder="Search" 
          className="pl-10 bg-white border-gray-200 text-gray-600 placeholder:text-gray-400 h-13 rounded-md" 
        />
      </div>

      {/* Dropdown Filter */}
      <div className="w-full md:w-64">
        <Select>
          <SelectTrigger className="w-full h-12 py-6 bg-white border-gray-200">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem className="cursor-pointer" value="all">All Options</SelectItem>
            <SelectItem className="cursor-pointer" value="active">Active</SelectItem>
            <SelectItem className="cursor-pointer" value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Multiple Selection Button */}
      <Button className="w-full md:w-auto bg-[#187498] hover:bg-[#13607e] text-white h-12 px-6 rounded-md font-medium flex items-center gap-2">
        <CheckSquare size={18} />
        Multiple selection
      </Button>
      
    </div>
  );
}