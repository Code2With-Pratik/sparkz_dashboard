import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

export default function EmployeeTable() {
  return (
    // WRAPPER DIV: Keeps the table responsive with a scrollbar on mobile
    <div className="w-full bg-white overflow-hidden">
      <div className="overflow-x-auto">
        <Table className="min-w-250">
          <TableHeader className="bg-[#F8F9FA]">
            <TableRow>
              <TableHead className="w-12 pl-6">
                {/* Added 'rounded-sm' to force square shape */}
                <Checkbox className="rounded-xs border-teal-700 data-[state=checked]:bg-[#187498] data-[state=checked]:border-[#187498]" />
              </TableHead>
              <TableHead className="text-[#187498] font-bold">Full Name</TableHead>
              <TableHead className="font-bold text-gray-700">Email Id</TableHead>
              <TableHead className="font-bold text-gray-700">Phone Number</TableHead>
              <TableHead className="font-bold text-gray-700">Role</TableHead>
              <TableHead className="font-bold text-gray-700">Emp-Code</TableHead>
              <TableHead className="font-bold text-gray-700">Detail</TableHead>
              <TableHead className="font-bold text-gray-700">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {[1, 2, 3, 4, 5].map((item) => (
              <TableRow key={item} className="hover:bg-gray-50 border-b border-gray-100">
                <TableCell className="pl-6">
                  {/* Added 'rounded-sm' here as well for the row checkboxes */}
                  <Checkbox className="rounded-xs border-teal-700 data-[state=checked]:bg-[#187498] data-[state=checked]:border-[#187498]" />
                </TableCell>
                <TableCell className="font-medium text-gray-900">John Doe</TableCell>
                <TableCell className="text-gray-600">john@email.com</TableCell>
                <TableCell className="text-gray-600">9876543210</TableCell>
                <TableCell className="text-gray-600">Manager</TableCell>
                <TableCell className="text-gray-600">EMP00{item}</TableCell>
                <TableCell>
                  <span className="text-blue-500 cursor-pointer hover:underline text-sm">
                    View
                  </span>
                </TableCell>
                <TableCell className="flex gap-2">
                  <Button
                    size="icon"
                    className="h-8 w-8 bg-[#E6F3F7] hover:bg-[#d0eef7] text-[#187498]"
                  >
                    <Pencil size={14} />
                  </Button>
                  <Button
                    size="icon"
                    className="h-8 w-8 bg-[#FFECEC] hover:bg-[#ffe0e0] text-[#FF5B5B]"
                  >
                    <Trash2 size={14} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      {/* Spacer */}
      <div className="h-20 bg-white"></div>
    </div>
  );
}