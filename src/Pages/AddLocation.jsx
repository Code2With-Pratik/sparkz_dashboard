import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import { Button } from "@/components/ui/button";

// Update these paths to match your actual image file names inside assets/images
import CloudBg from "../assets/images/Cloud.png"; 
import AlertImage from "../assets/images/404.png"; 

export default function AddLocation() {
  // Simple function to reload the page when "Refresh" is clicked
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-[75vh] px-4">
        
        {/* Illustration Container */}
        <div className="relative flex flex-col items-center justify-center w-full max-w-2xl mb-8 mt-10">
          
          {/* Background Cloud */}
          {/* Note: If your cloud and 404 alert are a single combined image, 
              you can just use one <img> tag here and remove the layering below. */}
          <div className="relative w-full flex justify-center items-center">
            <img 
              src={CloudBg} 
              alt="Cloud Background" 
              className="md:w-255 object-contain invert-5" 
            />
             
            {/* Foreground Content Layered over the Cloud */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
              {/* Giant 404 Text */}
              <h1 className="text-9xl md:mb-25 md:text-[300px] font-semibold text-[#187498] leading-none tracking-tight">
                404
              </h1>
              
              {/* Alert / People Graphic */}
              <img 
                src={AlertImage} 
                alt="Error Alert" 
                className="sm:w-50 md:-mt-30 sm:-mt-10 object-contain z-10" 
              />
            </div>
          </div>

        </div>

        {/* Text Section */}
        <div className="text-center space-y-3 mt-4">
          <h2 className="text-3xl md:text-5xl font-medium text-gray-800">
            Error Found
          </h2>
          <p className="text-gray-600  sm:text-base font-normal max-w-2xl px-2">
            The Page You Are Trying To Access Has Restricted Access Please Refresh.
          </p>
        </div>

        {/* Refresh Button */}
        <div className="mt-8">
          <Button 
            onClick={handleRefresh}
            className="px-11 py-7 bg-[#187498] hover:bg-[#13607e] text-white rounded-full text-base font-medium cursor-pointer"
          >
            Refresh
          </Button>
        </div>

      </div>
    </MainLayout>
  );
}