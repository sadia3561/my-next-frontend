"use client";

import { useState } from "react";

export default function DesignerForm() {
  const [formData, setFormData] = useState({
    // Section A
    fullName: "",
    dateofbirth: "",
    contactnumber: "",
    email: "",
    currentaddress: "",
    permanentaddress: "",
    

    // Section B
    designspecialization: "",
    yearofexperiance: "",
    portfolio: "",
    keyskills: "",
    professionalcertification: "",

    // Section C
    preferredworktype: "",
    availability: "",
    expectedremuneration: "",
    previousnotableprojects: "",

    // Section D
    pannumber: "",
    aadharnumber: "",
    gstno: "",
    

    // Bank Details for Payment
    accountholdername: "",
    accountnumber: "",
    ifsccode: "",
    bankname: "",
    
    


    // Section F
    declaration: false,
    declarationSignature: "",
    declarationDate: "",
    
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else if (type === "file") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).files?.[0] || null,
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Designer Form Submitted:", formData);
    alert("Designer form submitted successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 sm:p-6 max-w-full sm:max-w-4xl mx-auto bg-white rounded-lg shadow"
    >
      {/* Section A */}
      <div className="pt-24"></div>
      <h2 className="text-xl font-semibold">Section A: Personal Information</h2>
      <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="dateofbirth" placeholder="Date of Birth" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="contactno" placeholder="Contact Number" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="email" name="email" placeholder="Email ID" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="currentaddress" placeholder="Current Address" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="permanentaddress" placeholder="Permanent Address" onChange={handleChange} className="w-full p-2 border rounded" />

     

      {/* Section B */}
      <h2 className="text-xl font-semibold">Section B: Professional Details</h2>
    
      <select name="specialization" onChange={handleChange} className="w-full p-2 border rounded">
        <option value="">Design Specialization</option>
        <option value="">Architecture</option>
        <option value="Electrical">Interior</option>
        <option value="Mechanical">Graphic</option>
        <option value="Civil">Industrial</option>
        <option value="Fire">Other</option>
        </select>
       <input type="text" name="yearofexperiance" placeholder=" Year of Experience" onChange={handleChange} className="w-full p-2 border rounded"/>
       <input type="text" name="portfolio" placeholder="Portfolio/ Website Link" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="keyskills" placeholder="Key Skills(Software,Tools,Techniques)" onChange={handleChange} className="w-full p-2 border rounded"/>
       <input type="text" name="professionalcertification" placeholder="Professional certifications(if any)" onChange={handleChange} className="w-full p-2 border rounded" />


      {/* Section C */}
      <h2 className="text-xl font-semibold">Section C: Work Engagement</h2>
    

      {/* Preferred Work Type */}
      <div>
        <label className="block font-medium mb-2">Preferred Work Type</label>
        <div className="flex flex-col space-y-2">
          <label className="flex items-center">
            <input type="checkbox" name="workType" value="freelance" className="mr-2" />
            Freelance
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="workType" value="contract" className="mr-2" />
            Contract
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="workType" value="fulltime" className="mr-2" />
            Full-Time
          </label>
        </div>
      </div>

      {/* Availability */}
      <div>
        <label className="block font-medium">
          Availability <span className="text">(Immediate / Notice Period)</span>
        </label>
        <input
          type="text"
          
          className="mt-2 w-full border rounded p-2"
        />
      </div>

      {/* Expected Remuneration */}
      <div>
        <label className="block font-medium">Expected Remuneration</label>
        <input
          type="text"
          
          className="mt-2 w-full border rounded p-2"
        />
      </div>

      {/* Previous Notable Project */}
      <div>
        <label className="block font-medium">Previous Notable Project</label>
        <textarea
          rows={3}
        
          className="mt-2 w-full border rounded p-2"
        />
      </div>

    
           {/* Section D */}

      <h2 className="text-xl font-semibold">Section D: Compliance</h2>
      <input type="text" name="pan" placeholder="PAN Number." onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="aadharcard" placeholder="Aadhar No." onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="gstin" placeholder="GST Number (if applicable)." onChange={handleChange} className="w-full p-2 border rounded" />
       <h2 className="text-xl font-semibold"> Bank Details</h2>
      <input type="text" name="accountholdername" placeholder="Account Holder Name" onChange={handleChange} className="w-full p-2 border rounded" />
    <input type="text" name="accountNo" placeholder="Account No." onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name ="ifsc" placeholder="IFSC Code" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="bankName" placeholder="Bank Name" onChange={handleChange} className="w-full p-2 border rounded" />
      
      {/* Section E */}
      
      <h2 className="text-xl font-semibold">Section E: Declaration</h2>
      <div className="mb-4">
        <label className="block font-medium">
          <input
            type="checkbox"
            name="declaration"
            checked={formData.declaration}
            onChange={(e) =>
              setFormData({ ...formData, declaration: e.target.checked })
            }
            className="mr-2"
          />
          I hereby declare that all the information provided above is true and correct to the best of my knowledge. 
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">Signature</label>
          <input type="signature" name="declarationSignature" value={formData.declarationSignature} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
    
        <div>
          <label className="block font-medium">Date</label>
          <input type="date" name="declarationDate" value={formData.declarationDate} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        
      </div>

      <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
}
