import React, { useState, useRef } from "react";
import MainLayout from "../components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Camera, 
  Pencil, 
  MinusSquare,
  Eye, 
  EyeOff, 
  User 
} from "lucide-react";
import PencilSquare from "../assets/images/pencil.png";

export default function Profile() {
  // --- STATE ---
  // Profile Photo
  const [profilePic, setProfilePic] = useState(null);
  const fileInputRef = useRef(null);

  // Profile Form Data
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    email: "@globussoft.in",
  });

  // Password Form Data
  const [showPasswordSection, setShowPasswordSection] = useState(false);
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
  });

  // Password Visibility Toggles
  const [showOldPass, setShowOldPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);

  // --- HANDLERS ---
  // Handle Profile Inputs & Auto-Update Email
  const handleProfileChange = (e) => {
    const { id, value } = e.target;
    
    setProfileData((prev) => {
      const updatedData = { ...prev, [id]: value };
      
      // Auto-update email when firstName changes
      if (id === "firstName") {
        // Formats to lowercase, removes spaces, and appends the domain
        const formattedName = value.toLowerCase().replace(/\s+/g, '');
        updatedData.email = formattedName ? `${formattedName}@globussoft.in` : "@globussoft.in";
      }
      
      return updatedData;
    });
  };

  // Handle Password Inputs
  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.id]: e.target.value });
  };

  // Handle Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  // Handle Image Remove
  const handleRemoveImage = () => {
    setProfilePic(null);
    if (fileInputRef.current) fileInputRef.current.value = ""; // Reset input
  };

  // Submit Profile Form
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log("----- Profile Saved -----");
    console.log("Profile Data:", profileData);
    console.log("Profile Picture File:", fileInputRef.current?.files[0] || "No new file");
    alert("Profile Updated!");
  };

  // Submit Password Form
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    console.log("----- Password Updated -----");
    console.log("Password Data:", passwordData);
    alert("Password updated Successfully!");
    
    // Optional: Reset and hide section after update
    setPasswordData({ oldPassword: "", newPassword: "" });
    setShowPasswordSection(false);
  };

  return (
    <MainLayout>
      <div className="px-3 md:px-9 w-full max-w-8xl mx-auto">
        
        {/* Page Title */}
        <h1 className="text-xl font-medium text-[#187498] mb-4">Profile</h1>

        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* LEFT COLUMN: Avatar & Quick Info */}
          <div className="w-full md:h-[70vh] lg:w-1/4 bg-white rounded-sm shadow-lg border border-gray-100 p-12 flex flex-col items-center">
            
            {/* Avatar Section */}
            <div className="relative mb-4">
              {/* Hidden File Input */}
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />

              {/* Profile Image Circle */}
              <div className="w-45 h-45 rounded-full overflow-hidden bg-[#E0F2F1] flex items-center justify-center text-[#187498] border-4 border-white shadow-sm">
                {profilePic ? (
                  <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <User size={64} />
                )}
              </div>

              {/* Camera Icon Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="absolute bottom-1 right-1 bg-[#187498] text-white p-2 rounded-full cursor-pointer hover:bg-[#13607e] shadow-md transition">
                    <Camera size={16} />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-30 rounded-sm" align="center">
                  <DropdownMenuItem 
                    className="cursor-pointer gap-2 py-2" 
                    onClick={() => fileInputRef.current.click()}
                  >
                    <Pencil size={16} fill="black" className="text-gray-600" />
                    <span>Edit</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="cursor-pointer gap-2 py-2 text-red-500 hover:text-red-600 focus:text-red-600" 
                    onClick={handleRemoveImage}
                  >
                    <MinusSquare size={16} className="text-red-500" />
                    <span>Remove</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* User Details */}
            <h2 className="text-[#187498] text-xl font-medium mt-2 text-center">
              {profileData.firstName || "User"} {profileData.lastName || "Name"}
            </h2>
            <div className="flex items-center gap-2 text-gray-600 mt-2 text-lg break-all text-center">
              <span>{profileData.email}</span>
              <img src={PencilSquare} alt="PencilSquare" className="h-6 cursor-pointer" />
            </div>
          </div>

          {/* RIGHT COLUMN: Forms */}
          <div className="w-full lg:w-2/3 bg-white rounded-sm shadow-lg border border-gray-100 p-6 md:p-8">
            
            {/* Profile Info Form */}
            <form onSubmit={handleProfileSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-gray-700 font-medium md:text-xl text-base">First Name*</Label>
                  <Input
                    id="firstName"
                    value={profileData.firstName}
                    onChange={handleProfileChange}
                    placeholder="first name"
                    className="h-12 md:h-14 text-xs md:text-lg border-[0.5px] border-gray-200 rounded-md shadow-none focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:ring-[#187498]"
                    required
                  />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-700 font-medium md:text-xl text-base">Last Name*</Label>
                    <Input
                        id="lastName"
                        value={profileData.lastName}
                        onChange={handleProfileChange}
                        placeholder="last name"
                        className="h-12 md:h-14 text-xs md:text-lg border-[0.5px] border-gray-200 rounded-md shadow-none focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:ring-[#187498]"
                        required
                    />
                    </div>
              </div>

              {/* Profile Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-between mt-8 gap-4">
                <Button
                  type="button"
                  onClick={() => setShowPasswordSection(true)}
                  variant="outline"
                  className="w-full sm:w-auto text-primary border-[#187498] hover:bg-sky-50 h-12 md:h-12 px-6 rounded-sm font-medium cursor-pointer"
                >
                  Change Password
                </Button>

                <Button 
                  type="submit" 
                  className="w-full sm:w-45 bg-primary hover:bg-[#13607e] text-white h-12 md:h-12 rounded-sm text-sm font-normal cursor-pointer"
                >
                  Save
                </Button>
              </div>
            </form>

            {/* Password Change Section (Conditional) */}
            {showPasswordSection && (
              <form 
                onSubmit={handlePasswordSubmit} 
                className="mt-8 border border-gray-100 rounded-md p-6 bg-[#FAFEFF] shadow-sm transition-all duration-300 animate-in fade-in slide-in-from-top-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  
                  {/* Old Password */}
                  <div className="space-y-2 relative">
                    <Label htmlFor="oldPassword" className="md:text-xl text-base">Enter Old Password</Label>
                    <div className="relative">
                      <Input
                        id="oldPassword"
                        type={showOldPass ? "text" : "password"}
                        value={passwordData.oldPassword}
                        onChange={handlePasswordChange}
                        placeholder="Old Password"
                        className="h-14 text-xs md:text-lg border-[0.5px] border-gray-200 rounded-md shadow-none focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:ring-[#187498]"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowOldPass(!showOldPass)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary hover:text-sky-600 focus:outline-none cursor-pointer"
                      >
                        {showOldPass ? <Eye size={18} /> : <EyeOff size={18} />}
                      </button>
                    </div>
                  </div>

                  {/* New Password */}
                  <div className="space-y-2 relative">
                    <Label htmlFor="newPassword" className="md:text-xl text-base">Enter New Password</Label>
                    <div className="relative">
                      <Input
                        id="newPassword"
                        type={showNewPass ? "text" : "password"}
                        value={passwordData.newPassword}
                        onChange={handlePasswordChange}
                        placeholder="New Password"
                        className="h-14 text-xs md:text-lg border-[0.5px] border-gray-200 rounded-md shadow-none focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:ring-[#187498]"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPass(!showNewPass)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary hover:text-sky-600 focus:outline-none cursor-pointer"
                      >
                        {showNewPass ? <Eye size={18} /> : <EyeOff size={18} />}
                      </button>
                    </div>
                  </div>

                </div>

                {/* Password Action Buttons - Aligned to the Right on Desktop */}
                <div className="flex flex-col sm:flex-row sm:justify-end mt-6 gap-4">
                  <Button
                    type="button"
                    onClick={() => {
                      setShowPasswordSection(false);
                      setPasswordData({ oldPassword: "", newPassword: "" });
                    }}
                    className="w-full sm:w-auto bg-[#86B9C9] hover:bg-[#72a3b3] text-white h-12 px-12 rounded-sm font-normal text-sm cursor-pointer"
                  >
                    Discard
                  </Button>
                  <Button
                    type="submit"
                    className="w-full sm:w-auto bg-primary hover:bg-[#13607e] text-white h-12 px-12 rounded-sm font-normal text-sm cursor-pointer"
                  >
                    Update
                  </Button>
                </div>
              </form>
            )}

          </div>
        </div>
      </div>
    </MainLayout>
  );
}