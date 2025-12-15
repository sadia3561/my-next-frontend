"use client";

import { useState } from "react";

export default function TransporterForm() {
  const [formData, setFormData] = useState({
    // Section A
    transporterName: "",
    contactperson: "",
    contactnumber: "",
    email: "",
    registerdaddress: "",
    branchaddress: "",
    

    // Section B
    typeoftransport: "",
    yearinoperation: "",
    fleetsize: "",
    vehicletype: "",
    majoroperatingroutes: "",
    currentclients: "",

    // Section C
    panno: "",
    gstnumber: "",
    transportlicenseno: "",
    vehicleregistrationno: "",
    insurancedetails: "",
    pollutioncertificatevalidity: "",

    // Section D
    paymentterms: "",

    // Bank Details for Payment
    accountholdername: "",
    accountnumber: "",
    ifsccode: "",
    bankname: "",
    
    


    // Section E
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
      <h2 className="text-xl font-semibold">Section A: Company / Individual Information</h2>
      <input type="text" name="transportername" placeholder="Transporter / Firm Name" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="contactperson" placeholder="Contact Person" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="contactno" placeholder="Contact Number" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="email" name="email" placeholder="Email ID" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="registeredaddress" placeholder="Registered Address" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="branch" placeholder="Branch/Office Address" onChange={handleChange} className="w-full p-2 border rounded" />

     

      {/* Section B */}
      <h2 className="text-xl font-semibold">Section B: Business Details</h2>
    {/* Type of Transport Service */}
      <div>
        <label className="block font-medium mb-2">Type of Transport Service</label>
        <div className="flex flex-col space-y-2">
          <label className="flex items-center">
            <input type="checkbox" name="workType" value="trucks" className="mr-2" />
            Trucks
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="workType" value="trailers" className="mr-2" />
            Trailers
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="workType" value="containers" className="mr-2" />
            Containers
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="workType" value="other" className="mr-2" />
            Other
          </label>
        </div>
      </div>
       <input type="text" name="yearsinoperation" placeholder=" Years in Operation" onChange={handleChange} className="w-full p-2 border rounded"/>
       <input type="text" name="fleetsize" placeholder="Fleet Size (No. of Vehicles) " onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="vehicletypes" placeholder="Vehicle Types & Capacity (Tons)" onChange={handleChange} className="w-full p-2 border rounded"/>
       <input type="text" name="majoroperatingroutes" placeholder="Major Operating Routes" onChange={handleChange} className="w-full p-2 border rounded" />
       <input type="text" name="currentclients" placeholder="Current Clients / Contracts (if any)" onChange={handleChange} className="w-full p-2 border rounded" />

      {/* Section C */}
       <h2 className="text-xl font-semibold">Section C: Compliance & Documentation</h2>
      <input type="text" name="pan" placeholder="PAN Number." onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="gstnumber" placeholder="GST Number." onChange={handleChange} className="w-full p-2 border rounded" />
     <input type="text" name="transportlicensenumber" placeholder="Transport License Number." onChange={handleChange} className="w-full p-2 border rounded" />
     <input type="text" name="vehicleregistrationnumber" placeholder="Vehicle Registration Number." onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="insurancenumber" placeholder="Insurance Details (Policy No.& Validity)." onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="pollutioncertificate" placeholder="Pollution Certificate Validity." onChange={handleChange} className="w-full p-2 border rounded" />
         
           {/* Section D */}

      <h2 className="text-xl font-semibold">Section D: Financial Details</h2>
      <input type="text" name="paymentterms" placeholder="Payment Terms (Credit/ Advance/ Other)." onChange={handleChange} className="w-full p-2 border rounded" />
    
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
          <label className="block font-medium">Signature(Transporter)</label>
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
