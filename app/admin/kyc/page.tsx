//"use client";

//import { useEffect, useState } from 'react';
//import { apiFetch } from '@/lib/apiClient';

//type KYC = {
  //id: string;
  //user: { id: string; name?: string; email?: string };
  //documentType?: string;
  //createdAt: string;
  //status: 'PENDING'|'APPROVED'|'REJECTED';
  //orgName?: string;
//};

//export default function AdminKycPage() {
 // const [list, setList] = useState<KYC[]>([]);
 // const [selected, setSelected] = useState<KYC | null>(null);

  //useEffect(() => {
    //apiFetch('/admin/kyc-queue')
      //.then(r => r.json())
      //.then(setList)
      //.catch(err => console.error(err));
  //}, []);

  //const updateStatus = async (id: string, status: string) => {
    //try {
      //await apiFetch(`/admin/kyc/${id}/status`, {
        //method: 'PATCH',
        //headers: { 'Content-Type': 'application/json' },
        //body: JSON.stringify({ status }),
      //});
      //setList(prev => prev.map(p => p.id === id ? { ...p, status } : p));
      //setSelected(null);
      //alert('Updated');
    //} catch (err) {
     // console.error(err);
     // alert('Failed');
   // }
  //};

  //return (
    //<div className="min-h-screen p-8 bg-gray-100">
      //<h1 className="text-xl font-semibold mb-4">Admin — KYC Queue</h1>
      //<div className="bg-white rounded shadow overflow-auto">
       // <table className="min-w-full">
         // <thead className="bg-gray-200">
           // <tr><th className="p-2">User</th><th>Email</th><th>Submitted</th><th>Status</th><th>Action</th></tr>
          //</thead>
          //<tbody>
           // {list.map(k => (
             // <tr key={k.id} className="border-b">
               // <td className="p-2">{k.user?.name || k.orgName}</td>
                //<td className="p-2">{k.user?.email}</td>
                //<td className="p-2">{new Date(k.createdAt).toLocaleString()}</td>
                //<td className="p-2">{k.status}</td>
               // <td className="p-2">
                 // <button onClick={() => setSelected(k)} className="px-3 py-1 bg-blue-600 text-white rounded">Review</button>
                //</td>
              //</tr>
          //  ))}
        //  </tbody>
        //</table>
      //</div>

      //{selected && (
        //<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          //<div className="bg-white p-6 rounded w-[480px]">
            //<h2 className="text-lg font-semibold mb-2">Review</h2>
            //<p><strong>User:</strong> {selected.user?.name}</p>
            //<p><strong>Email:</strong> {selected.user?.email}</p>
            //<p className="mt-4 flex gap-2">
              //<button onClick={() => updateStatus(selected.id, 'APPROVED')} className="bg-green-600 px-3 py-1 text-white rounded">Approve</button>
              //<button onClick={() => updateStatus(selected.id, 'REJECTED')} className="bg-red-600 px-3 py-1 text-white rounded">Reject</button>
              //<button onClick={() => setSelected(null)} className="px-3 py-1 border rounded">Close</button>
            //</p>
          //</div>
        //</div>
     // )}
    //</div>
 // );
//}
export default function KYCPage() {
  return (
    <div>
      <h1>KYC Page</h1>
    </div>
  );
}
