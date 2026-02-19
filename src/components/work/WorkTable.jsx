import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Settings, Clock, CheckCircle2, Award } from "lucide-react";
import User from "../../assets/images/User.jpg"; // Adjust path if needed

export default function WorkTable() {
  // Dummy data representing the rows in the image
  const workData = [
    { id: 1, practiceId: "XYZ", status1: "Pending", status2: "Pending", statusType: "warning" },
    { id: 2, practiceId: "XYZ", status1: "Approved", status2: "Approved", statusType: "success" },
    { id: 3, practiceId: "XYZ", status1: "Success", status2: "Success", statusType: "info" },
    { id: 4, practiceId: "XYZ", status1: "Pending", status2: "Pending", statusType: "warning" },
    { id: 5, practiceId: "XYZ", status1: "Approved", status2: "Approved", statusType: "success" },
    { id: 6, practiceId: "XYZ", status1: "Success", status2: "Success", statusType: "info" },
  ];

  // Helper to render the correct status icon and color
  const renderStatus = (text, type) => {
    let Icon = Clock;
    let colorClass = "text-orange-400";

    if (type === "success") {
      Icon = CheckCircle2;
      colorClass = "text-green-500";
    } else if (type === "info") {
      Icon = Award;
      colorClass = "text-blue-500";
    }

    return (
      <div className={`flex items-center gap-1.5 ${colorClass} font-medium text-sm`}>
        <Icon size={16} />
        {text}
      </div>
    );
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <Table className="min-w-200">
          
          <TableHeader className="bg-[#F8F9FA]">
            <TableRow className="border-b border-gray-100">
              <TableHead className="w-12.5 pl-6 h-14">
                <Checkbox className="rounded-xs border-gray-300 data-[state=checked]:bg-[#187498] data-[state=checked]:border-[#187498]" />
              </TableHead>
              <TableHead className="text-[#187498] font-bold text-center">Practice ID</TableHead>
              <TableHead className="font-bold text-gray-700"></TableHead> {/* Empty header for comments */}
              <TableHead className="font-bold text-gray-700 text-center" colSpan={2}>Sub-Status</TableHead>
              <TableHead className="font-bold text-gray-700 text-center">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {workData.map((row, index) => (
              <TableRow key={index} className="hover:bg-gray-50 border-b border-gray-100 h-16">
                
                {/* Checkbox */}
                <TableCell className="pl-6">
                  <Checkbox 
                    defaultChecked={index === 0} // First row checked in screenshot
                    className="rounded-xs border-gray-300 data-[state=checked]:bg-[#187498] data-[state=checked]:border-[#187498]" 
                  />
                </TableCell>
                
                {/* Practice ID */}
                <TableCell className="font-medium text-gray-800 text-center">
                  {row.practiceId}
                </TableCell>
                
                {/* Comments Button with Popover */}
                <TableCell className="text-center">
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="bg-[#E6F3F7] text-[#187498] hover:bg-[#d0eef7] px-4 py-1.5 rounded-md text-sm font-medium transition cursor-pointer">
                        Comments
                      </button>
                    </PopoverTrigger>
                    
                    {/* The Popover Card */}
                    <PopoverContent 
                      className="w-75 md:w-95 px-4 py-2 rounded-xl shadow-lg border border-gray-100 bg-white" 
                      side="top" 
                      align="start"
                      sideOffset={8}
                    >
                      <div className="flex gap-3">
                        <Avatar className="h-10 w-10 border border-gray-100">
                          <AvatarImage src={User} alt="User" />
                          <AvatarFallback>AT</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col flex-1">
                          <span className="text-sm font-bold text-gray-800">Abhishek Thakur</span>
                          <span className="text-sm text-[#187498] mt-1 leading-snug">
                            "Data is well-organized and easy to read."
                          </span>
                          <span className="text-[11px] text-gray-400 self-end mt-2 font-medium">15:34</span>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>

                {/* Status 1 */}
                <TableCell className="text-center">
                  <div className="flex justify-center">
                    {renderStatus(row.status1, row.statusType)}
                  </div>
                </TableCell>

                {/* Status 2 */}
                <TableCell className="text-center">
                  <div className="flex justify-center">
                    {renderStatus(row.status2, row.statusType)}
                  </div>
                </TableCell>

                {/* Action Icon */}
                <TableCell>
                  <div className="flex justify-center">
                    <button className="text-[#187498] hover:bg-gray-100 p-1.5 rounded-md transition cursor-pointer">
                      <Settings size={20} strokeWidth={1.5} />
                    </button>
                  </div>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}