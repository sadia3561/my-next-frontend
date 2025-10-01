"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface RegistrationFormProps {
  role?: string; // optional
}

interface FormData {
  // Section A: Client Information
  clientName: string;
  registeredAddress: string;
  branchAddress: string;
  contactPerson: string;
  designation: string;
  mobile: string;
  email: string;
  website: string;

  // Section B: Business Details
  industry: string;
  natureOfBusiness: string;
  yearEstablished: string;
  annualTurnover: string;
  preferredCommunication: "Email" | "Phone" | "Both" | "";

  // Section C: Project Requirements with ANI
  scopeOfWork: string;
  estimatedProjectSize: string;
  projectTimeline: string;
  previousBusiness: string;

  // Section D: Statutory Information
  gstin: string;
  pan: string;
  cin: string;
  msmeIso: string;

  // Section E: Banking / Payment Information
  preferredPaymentMethod: "Bank Transfer" | "Cheque" | "Other" | "";
  billingContact: string;
  billingAddress: string;

  // Section F: Documents
  gstCertificate: File | null;
  panCard: File | null;
  incorporationProof: File | null;
  msmeIsoCertificates: File | null;
  previousWorkOrders: File | null;

  // Section G: Declaration
  declaration: boolean;
  authorizedSignatory: string;
  signatoryNameDesignation: string;
  companySeal: string;
  declarationDate: string;
  declarationPlace: string;
}

export default function RegistrationForm({ role }: RegistrationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    clientName: "",
    registeredAddress: "",
    branchAddress: "",
    contactPerson: "",
    designation: "",
    mobile: "",
    email: "",
    website: "",

    industry: "",
    natureOfBusiness: "",
    yearEstablished: "",
    annualTurnover: "",
    preferredCommunication: "",

    scopeOfWork: "",
    estimatedProjectSize: "",
    projectTimeline: "",
    previousBusiness: "",

    gstin: "",
    pan: "",
    cin: "",
    msmeIso: "",

    preferredPaymentMethod: "",
    billingContact: "",
    billingAddress: "",

    gstCertificate: null,
    panCard: null,
    incorporationProof: null,
    msmeIsoCertificates: null,
    previousWorkOrders: null,

    declaration: false,
    authorizedSignatory: "",
    signatoryNameDesignation: "",
    companySeal: "",
    declarationDate: "",
    declarationPlace: "",
  });

  type InputEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

  const handleChange = (e: InputEvent) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: (e.target as HTMLInputElement).files?.[0] || null });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Client Form Submitted:", formData);
    alert("Client form submitted successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-4 sm:p-6 max-w-full sm:max-w-4xl mx-auto bg-white rounded-lg shadow"
    >
      {/* Section A */}
      <h2 className="text-xl font-semibold">Section A: Client Information</h2>
      <input type="text" name="clientName" placeholder="Client/Organization Name" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="registeredAddress" placeholder="Registered Address" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="branchAddress" placeholder="Branch/Office Address (if any)" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="contactPerson" placeholder="Contact Person Name" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="designation" placeholder="Designation" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="mobile" placeholder="Mobile Number" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="email" name="email" placeholder="Email ID" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="website" placeholder="Website" onChange={handleChange} className="w-full p-2 border rounded" />

      {/* Section B */}
      <h2 className="text-xl font-semibold">Section B: Business Details</h2>
      <input type="text" name="industry" placeholder="Industry / Sector" onChange={handleChange} className="w-full p-2 border rounded" />
      <textarea name="natureOfBusiness" placeholder="Nature of Business / Services" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="yearEstablished" placeholder="Year of Establishment" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="annualTurnover" placeholder="Approximate Annual Turnover" onChange={handleChange} className="w-full p-2 border rounded" />

      <div className="flex gap-4 mt-2">
        {["Email", "Phone", "Both"].map((option) => (
          <label key={option} className="flex items-center">
            <input type="radio" name="preferredCommunication" value={option} checked={formData.preferredCommunication === option} onChange={handleChange} className="mr-2" />
            {option}
          </label>
        ))}
      </div>

      {/* Section C */}
      <h2 className="text-xl font-semibold">Section C: Project Requirements with ANI</h2>
      <textarea name="scopeOfWork" placeholder="Scope of Work Required (MEPF/ELV/Other)" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="estimatedProjectSize" placeholder="Estimated Project Size (₹)" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="projectTimeline" placeholder="Tentative Project Timeline" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="previousBusiness" placeholder="Previous Business with ANI (if any)" onChange={handleChange} className="w-full p-2 border rounded" />

      {/* Section D */}
      <h2 className="text-xl font-semibold">Section D: Statutory Information</h2>
      <input type="text" name="gstin" placeholder="GSTIN No." onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="pan" placeholder="PAN No." onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="cin" placeholder="CIN / Registration No." onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="msmeIso" placeholder="MSME / ISO Certificates (if applicable)" onChange={handleChange} className="w-full p-2 border rounded" />

      {/* Section E */}
      <h2 className="text-xl font-semibold">Section E: Banking / Payment Information</h2>
      <div className="flex gap-4 mt-2">
        {["Bank Transfer", "Cheque", "Other"].map((option) => (
          <label key={option} className="flex items-center">
            <input type="radio" name="preferredPaymentMethod" value={option} checked={formData.preferredPaymentMethod === option} onChange={handleChange} className="mr-2" />
            {option}
          </label>
        ))}
      </div>
      <input type="text" name="billingContact" placeholder="Billing Contact Person" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="billingAddress" placeholder="Billing Address (if different)" onChange={handleChange} className="w-full p-2 border rounded" />

      {/* Section F */}
      <h2 className="text-xl font-semibold">Section F: Documents to be Attached</h2>
      <div>
        <label className="block font-medium">GST Certificate</label>
      <input type="file" name="gstCertificate" onChange={handleChange} className="w-full p-2 border rounded" />
      </div>
     <div>
          <label className="block font-medium">PAN Card Copy</label>
          <input type="file" name="panCard" onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block font-medium">Incorporation Proof</label>
          <input type="file" name="incorporationProof" onChange={handleChange} className="w-full p-2 border rounded" />
      </div>
      <div>
          <label className="block font-medium">MSME ISO Certificates</label>
      <input type="file" name="msmeIsoCertificates" onChange={handleChange} className="w-full p-2 border rounded" />
       </div>
       <div>
          <label className="block font-medium">Previous Work Orders</label>
      <input type="file" name="previousWorkOrders" onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
      {/* Section G */}
      <h2 className="text-xl font-semibold">Section G: Declaration</h2>
      <label className="block mb-4 font-medium">
        <input type="checkbox" name="declaration" checked={formData.declaration} onChange={handleChange} className="mr-2" />
        I/We hereby declare that the information provided above is true and correct to the best of my/our knowledge. I/We agree to abide by the terms & conditions of ANI for all business transactions.
      </label>

      <input type="text" name="authorizedSignatory" placeholder="Authorized Signatory" value={formData.authorizedSignatory} onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="signatoryNameDesignation" placeholder="Name & Designation" value={formData.signatoryNameDesignation} onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="companySeal" placeholder="Company Seal & Stamp" value={formData.companySeal} onChange={handleChange} className="w-full p-2 border rounded" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
 