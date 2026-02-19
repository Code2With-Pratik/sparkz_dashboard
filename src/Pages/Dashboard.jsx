import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import WorkFilter from "../components/work/WorkFilter";
import WorkTable from "../components/work/WorkTable";

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="px-2 md:px-6 py-4 w-full mx-auto">
        
        {/* Page Title - Left Aligned */}
        <div className="mb-6">
          <h1 className="text-xl font-medium text-[#187498]">Work Centre</h1>
        </div>
        
        {/* Filters Section */}
        <WorkFilter />
        
        {/* Table Section */}
        <div className="mt-4">
          <WorkTable />
        </div>

      </div>
    </MainLayout>
  );
};

export default Dashboard;