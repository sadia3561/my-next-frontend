import KycUploadForm from "components/KycUploadForm";

export default function KycUploadPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">KYC Document Upload</h1>
      <KycUploadForm />
    </div>
  );
}
