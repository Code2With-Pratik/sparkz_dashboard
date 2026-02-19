import { Button } from "@/components/ui/button";
import RegisterEmployee from "./RegisterEmployee";
import BulkRegister from "./BulkRegister";
import BulkUpdate from "./BulkUpdate";

export default function EmployeeHeader() {
  return (
    <div className="flex flex-col sm:flex-row bg-white p-6 gap-4 w-full rounded-xl shadow-sm">
      
      {/* 1. Register Employee with Dialog */}
      <RegisterEmployee 
        trigger={
          <Button className="w-full sm:w-auto sm:flex-1 bg-[#187498] hover:bg-[#13607e] text-white py-6 text-md font-medium rounded-lg shadow-sm cursor-pointer">
            Register Employee
          </Button>
        }
      />

      {/* 2. Bulk Register with Dialog */}
      <BulkRegister 
        trigger={
          <Button className="w-full sm:w-auto sm:flex-1 bg-[#F1F5F9] hover:bg-[#e2e8f0] text-[#187498] py-6 text-md font-medium rounded-lg border border-transparent hover:border-gray-200 cursor-pointer">
            Bulk Register
          </Button>
        }
      />

      {/* 3. Bulk Update with Dialog */}
      <BulkUpdate 
        trigger={
          <Button className="w-full sm:w-auto sm:flex-1 bg-[#F1F5F9] hover:bg-[#e2e8f0] text-[#187498] py-6 text-md font-medium rounded-lg border border-transparent hover:border-gray-200 cursor-pointer">
            Bulk Update
          </Button>
        }
      />

    </div>
  );
}