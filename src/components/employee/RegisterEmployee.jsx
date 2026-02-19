import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Camera, User } from "lucide-react";
import { HiOutlinePencilAlt } from "react-icons/hi";

export default function RegisterEmployee({ trigger }) {
  // 1. State for Form Data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    empCode: "",
    image: null,
  });

  // 2. State for Image Preview URL
  const [imagePreview, setImagePreview] = useState(null);

  // 3. Ref for hidden file input
  const fileInputRef = useRef(null);

  // Handle Input Text Changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle Image Selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
    }
  };

  // Trigger File Input Click
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  // Handle Form Submission
  const handleSave = (e) => {
    e.preventDefault(); // Stop page reload

    // Manual check for Image (since hidden inputs don't show validation bubbles)
    if (!formData.image) {
      alert("Please select a profile image.");
      return;
    }

    // Manual check for Password Match (Optional but good UX)
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("----- Employee Registration Data -----");
    console.log(formData);
    
    alert("User Successfully Registered!");
    // Optional: Close dialog here if needed
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      
      <DialogContent className="sm:max-w-165 p-0 overflow-hidden bg-white rounded-xl [&>button]:hidden">
        <div className="p-10 h-[70vh] md:h-full overflow-y-auto custom-scrollbar">
          
          {/* WRAP EVERYTHING IN A FORM TO ENABLE VALIDATION */}
          <form onSubmit={handleSave}>

            {/* Header */}
            <DialogHeader className="relative flex flex-row items-center justify-center mb-6">
              <DialogClose asChild>
                <button 
                  type="button" // Important: keep this as button so it doesn't submit form
                  className="absolute left-0 top-1 text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                  <ArrowLeft size={24} />
                </button>
              </DialogClose>
              <DialogTitle className="text-2xl font-normal text-gray-700">
                Register Employee
              </DialogTitle>
            </DialogHeader>

            {/* Avatar Section */}
            <div className="flex flex-col items-center mb-8">
              {/* Hidden File Input (Removed 'required' to avoid hidden-input error) */}
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*"
                onChange={handleImageChange}
              />

              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-[#E0F2F1] flex items-center justify-center text-[#187498] overflow-hidden">
                  {imagePreview ? (
                    <img 
                      src={imagePreview} 
                      alt="Profile Preview" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User size={48} />
                  )}
                </div>
                
                <div 
                  className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md border border-gray-100 cursor-pointer hover:bg-gray-100"
                  onClick={triggerFileInput}
                >
                  <Camera size={16} className="text-gray-600" />
                </div>
              </div>

              <span 
                className="mt-2 text-gray-500 text-sm cursor-pointer hover:underline flex items-center gap-1"
                onClick={triggerFileInput}
              >
                <HiOutlinePencilAlt /> Edit
              </span>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-gray-600 font-normal">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter First Name"
                  className="bg-[#F8F9FB] border-none py-6 text-gray-600 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#187498]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-gray-600 font-normal">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter Last Name"
                  className="bg-[#F8F9FB] border-none py-6 text-gray-600 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#187498]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-600 font-normal">Phone Number</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter Phone Number"
                  className="bg-[#F8F9FB] border-none py-6 text-gray-600 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#187498]"
                  required
                  pattern="[0-9]{10}" 
                  maxLength={10}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-600 font-normal">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Email ID"
                  className="bg-[#F8F9FB] border-none py-6 text-gray-600 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#187498]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-600 font-normal">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter Password"
                  className="bg-[#F8F9FB] border-none py-6 text-gray-600 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#187498]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-gray-600 font-normal">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Re-Enter Password"
                  className="bg-[#F8F9FB] border-none py-6 text-gray-600 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#187498]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role" className="text-gray-600 font-normal">Roles</Label>
                <Input
                  id="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  placeholder="Enter Roles"
                  className="bg-[#F8F9FB] border-none py-6 text-gray-600 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#187498]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="empCode" className="text-gray-600 font-normal">Employee Code</Label>
                <Input
                  id="empCode"
                  value={formData.empCode}
                  onChange={handleInputChange}
                  placeholder="Enter Employee Code"
                  className="bg-[#F8F9FB] border-none py-6 text-gray-600 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#187498]"
                  required
                />
              </div>
            </div>

            {/* Footer Save Button */}
            <div className="mt-8 mb-2">
              <Button 
                type="submit" // Changed to type="submit" to trigger validation
                className="w-full bg-[#187498] hover:bg-[#13607e] text-white py-6 text-lg rounded-lg cursor-pointer"
              >
                Save
              </Button>
            </div>
            
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}