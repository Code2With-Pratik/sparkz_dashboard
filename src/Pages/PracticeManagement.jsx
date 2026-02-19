import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { 
  PlusCircle, 
  Lock,
  Trash2 
} from "lucide-react";
import { CgLockUnlock } from "react-icons/cg";
import pencil from "../assets/images/pencil.png" 
import upload from "../assets/images/upload.png" 
import logout from "../assets/images/logout.png" 
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import PracticeCreation from "../components/practice/PracticeCreation";
import UploadModal from "../components/practice/UploadModal";
import ExportModal from "../components/practice/ExportModal";
import PracticeDeleteAlert from "../components/practice/PracticeDeleteAlert";

export default function PracticeManagement() {
  // Dummy data matching your screenshot
  const practices = [
    { id: 1, teamName: "Web Designer", practiceId: "P-XY-1", practiceName: "P-XY-1" },
    { id: 2, teamName: "Frontend", practiceId: "P-XY-1", practiceName: "" },
    { id: 3, teamName: "Backend", practiceId: "P-XY-1", practiceName: "" },
  ];

  return (
    <MainLayout>
       {/* Page Header */}
       <div className="flex flex-col md:flex-row justify-between items-center mb-6 px-2">
          <h1 className="text-2xl font-medium text-[#187498] mb-4 md:mb-0">
            Practice Management
          </h1>
          
          {/* WRAPPED BUTTON IN PRACTICE CREATION COMPONENT */}
          <PracticeCreation 
            trigger={
              <Button className="bg-white text-[#187498] hover:bg-gray-50 font-medium border border-gray-100 shadow-sm px-6 py-5 rounded-sm cursor-pointer">
                 <PlusCircle size={20} className="mr-2" /> 
                 Practice Creation
              </Button>
            }
          />
       </div>

       {/* Table Container */}
       <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden min-h-100 mt-15">
          <div className="overflow-x-auto">
             <Table className="min-w-200">
                {/* Table Header */}
                <TableHeader className="bg-[#F8F9FA]">
                   <TableRow className="border-b border-gray-100">
                      <TableHead className="text-[#187498] font-bold pl-6 h-14">Team Name</TableHead>
                      <TableHead className="font-bold text-gray-700">Practice ID</TableHead>
                      <TableHead className="font-bold text-gray-700">Practice Name</TableHead>
                      <TableHead className="font-bold text-gray-700 text-center">Locking</TableHead>
                      <TableHead className="font-bold text-gray-700 text-center">Action</TableHead>
                   </TableRow>
                </TableHeader>

                {/* Table Body */}
                <TableBody>
                   {practices.map((item) => (
                      <TableRow key={item.id} className="hover:bg-gray-50 border-b border-gray-100 h-16">
                         
                         <TableCell className="font-medium text-gray-600 pl-6">
                            {item.teamName}
                         </TableCell>
                         
                         <TableCell className="text-gray-500">
                            {item.practiceId}
                         </TableCell>
                         
                         <TableCell className="text-gray-500">
                            {item.practiceName}
                         </TableCell>
                         
                         {/* Locking Column - Centered Lock Icon */}
                         <TableCell className="text-center">
                            <div className="flex justify-center">
                               <CgLockUnlock size={18} className="text-[#187498]" />
                            </div>
                         </TableCell>

                         {/* Action Column - 4 Buttons */}
                         <TableCell>
                            <div className="flex justify-center gap-3">
                               {/* Edit Button */}
                               <div className="h-8 w-8 flex items-center justify-center bg-[#e6f3f76b] rounded-md text-[#187498] cursor-pointer hover:bg-[#d0eef7] transition">
                                  <img src={pencil} alt="pencil" className="h-5" />
                               </div>
                               
                               {/* Download Button */}
                               <UploadModal 
                                trigger={
                                  <div className="h-8 w-8 flex items-center justify-center bg-[#e6f3f7a1] rounded-md text-[#187498] cursor-pointer hover:bg-[#d0eef7] transition">
                                      <img src={upload} alt="upload" className="h-5" />
                                  </div>
                                  }
                               />
                                {/* Transfer/Export Button */}
                               <ExportModal
                                trigger={
                                  <div className="h-8 w-8 flex items-center justify-center bg-[#e6f3f7cb] rounded-md text-[#187498] cursor-pointer hover:bg-[#d0eef7] transition">
                                      <img src={logout} alt="logout" className="h-4" />
                                  </div>
                                   }
                               />
                               
                               {/* Delete Button */}
                               <PracticeDeleteAlert
                                  trigger={
                                    <div className="h-8 w-8 flex items-center justify-center bg-[#FFECEC] rounded-md text-[#FF5B5B] cursor-pointer hover:bg-[#ffe0e0] transition">
                                        <Trash2 size={15} />
                                    </div>
                                  }
                               />
                            </div>
                         </TableCell>

                      </TableRow>
                   ))}
                </TableBody>
             </Table>
          </div>
       </div>
    </MainLayout>
  );
}