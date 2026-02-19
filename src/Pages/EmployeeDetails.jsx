import MainLayout from "../components/layouts/MainLayout";
import EmployeeHeader from "../components/employee/EmployeeHeader";
import EmployeeFilters from "../components/employee/EmployeeFilters";
import EmployeeTable from "../components/employee/EmployeeTable";

function EmployeeDetails() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Page Title */}
        <h1 className="text-2xl font-semibold text-gray-800">Employee Details</h1>
        
        {/* Top Action Buttons (Register, Bulk, etc.) */}
        <EmployeeHeader />
        
        {/* White Container for Filters & Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 min-h-150">
           <EmployeeFilters />
           <EmployeeTable />
        </div>
      </div>
    </MainLayout>
  );
}

export default EmployeeDetails;