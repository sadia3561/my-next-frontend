"use client";

import { useState } from "react";

export default function SupplierForm() {
  const [formData, setFormData] = useState({
    // Section A
    companyName: "",
    registeredAddress: "",
    branchAddress: "",
    contactPerson: "",
    designation: "",
    mobile: "",
    email: "",
    website: "",

    // Section B
    businessEntity: "",
    yearEstablishment: "",
    productmaterialsservicessupplied: "",
    manufacturingdealer: "",
    majorClientsserved: "",
    currentsupplytoANI: "",

    // Section C
    panno: "",
    gstinno: "",
    cinregisterationno: "",
    msmensicregistration: "",
    isoqualitycertifications: "",
    esipfregistrationno: "",

    // Section D
    bankName: "",
    branch: "",
    accountNo: "",
    accountType: "",
    ifsccode: "",
    cancelledChequeAttached: "",

    // Section E
    panCard: null as File | null,
    gstRegistrationCertificate: null as File | null,
    incorporation: null as File | null,
    msmeIso: null as File | null,
    cancelledCheque: null as File | null,
    balanceSheet: null as File | null,
    


    // Section F
    declaration: false,
    authorizedSignatory: "",
    signatoryNameDesignation: "",
    companySeal: "",
    declarationDate: "",
    declarationPlace: "",
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
    console.log("Supplier Form Submitted:", formData);
    alert("Supplier form submitted successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 sm:p-6 max-w-full sm:max-w-4xl mx-auto bg-white rounded-lg shadow"
    >
      {/* Section A */}
      <h2 className="text-xl font-semibold">Section A: Supplier Information</h2>
      <input type="text" name="companyName" placeholder="Company Name" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="registeredAddress" placeholder="Registered Address" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="branchAddress" placeholder="Branch/Office Address" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="contactPerson" placeholder="Contact Person Name" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="designation" placeholder="Designation" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="mobile" placeholder="Mobile Number" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="email" name="email" placeholder="Email ID" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="website" placeholder="Website" onChange={handleChange} className="w-full p-2 border rounded" />

      {/* Section B */}
      <h2 className="text-xl font-semibold">Section B: Business Details</h2>
      <select name="businessEntity" onChange={handleChange} className="w-full p-2 border rounded">
        <option value="">Select Business Entity</option>
        <option value="Proprietorship">Proprietorship</option>
        <option value="Partnership">Partnership</option>
        <option value="Pvt Ltd">Pvt. Ltd.</option>
        <option value="LLP">LLP</option>
        <option value="Public Ltd">Public Ltd.</option>
      </select>
      <input type="text" name="yearEstablished" placeholder="Year of Establishment" onChange={handleChange} className="w-full p-2 border rounded" />
      <textarea name="services" placeholder=" Manufacturing/ Products / Materials/ Services Supplied" onChange={handleChange} className="w-full p-2 border rounded"></textarea>
      <textarea name="manufacturingdealer" placeholder=" Trading/ Distributor/ Dealer" onChange={handleChange} className="w-full p-2 border rounded"></textarea>
      <input type="text" name="majorClients" placeholder="Major Clients Served" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="aniBusiness" placeholder="Current Supply to ANI (if any)" onChange={handleChange} className="w-full p-2 border rounded" />

      {/* Section C */}
      <h2 className="text-xl font-semibold">Section C: Statutory & Compliance Information</h2>
      <input type="text" name="pan" placeholder="PAN No." onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="gstin" placeholder="GSTIN No." onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="cin" placeholder="CIN / Registration No." onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="msme" placeholder="MSME / NSIC Registration (if applicable)" onChange={handleChange} className="w-full p-2 border rounded" />
       <input type="text" name="iso" placeholder="ISO / Quality Certifications (if any)" onChange={handleChange} className="w-full p-2 border rounded" />
       <input type="text" name="esiPf" placeholder="ESI / PF Registration No." onChange={handleChange} className="w-full p-2 border rounded" />

      {/* Section D */}
      <h2 className="text-xl font-semibold">Section D: Banking Details</h2>
      <input type="text" name="bankName" placeholder="Bank Name" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="branch" placeholder="Branch" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="accountNo" placeholder="Account No." onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="accountType" placeholder="Account Type" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="ifsc" placeholder="IFSC Code" onChange={handleChange} className="w-full p-2 border rounded" />
        <div>
  <label className="block font-medium">Cancelled Cheque Attached</label>
  <div className="flex gap-4 mt-2">
    <label className="flex items-center">
      <input
        type="radio"
        name="cancelledChequeAttached"
        value="Yes"
        checked={formData.cancelledChequeAttached === "Yes"}
        onChange={handleChange}
        className="mr-2"
      />
      Yes
    </label>
    <label className="flex items-center">
      <input
        type="radio"
        name="cancelledChequeAttached"
        value="No"
        checked={formData.cancelledChequeAttached === "No"}
        onChange={handleChange}
        className="mr-2"
      />
      No
    </label>
  </div>
</div>
      {/* Section E */}
      <h2 className="text-xl font-semibold">Section E: Documents</h2>
      <div className="space-y-3">
        <div>
          <label className="block font-medium">PAN Card Copy</label>
          <input type="file" name="panCard" onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block font-medium">GST Registration Certificate</label>
          <input type="file" name="gstCertificate" onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block font-medium">Company Incorporation / Partnership Deed</label>
          <input type="file" name="incorporation" onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block font-medium">MSME / ISO Certificates (if any)</label>
          <input type="file" name="msmeIso" onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block font-medium">Cancelled Cheque</label>
          <input type="file" name="cancelledCheque" onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block font-medium">Last 2 years’ Balance Sheet / IT Returns</label>
          <input type="file" name="balanceSheet" onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        

      </div>

      {/* Section F */}
      <h2 className="text-xl font-semibold">Section F: Declaration</h2>
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
          I/We hereby declare that the information provided above is true and correct to the best of my/our knowledge. I/We agree to abide by the terms & conditions of AABHA NEXUS INNOVATIONS (ANI) for all business transactions.
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">Authorized Signatory</label>
          <input type="text" name="authorizedSignatory" value={formData.authorizedSignatory} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block font-medium">Name & Designation</label>
          <input type="text" name="signatoryNameDesignation" value={formData.signatoryNameDesignation} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block font-medium">Company Seal & Stamp</label>
          <input type="text" name="companySeal" value={formData.companySeal} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block font-medium">Date</label>
          <input type="date" name="declarationDate" value={formData.declarationDate} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block font-medium">Place</label>
          <input type="text" name="declarationPlace" value={formData.declarationPlace} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
      </div>

      <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
}
