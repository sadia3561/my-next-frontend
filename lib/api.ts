const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000";

// ✅ For JSON POST/PUT requests
export async function apiPost(endpoint: string, data: any) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include", // send cookies
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API error ${res.status}: ${text}`);
  }

  return res.json();
}

// ✅ For GET requests
export async function apiGet(endpoint: string) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    credentials: "include",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API error ${res.status}: ${text}`);
  }

  return res.json();
}

// ✅ For file uploads (FormData)
export async function apiUpload(endpoint: string, formData: FormData) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    body: formData, // no Content-Type (browser sets it automatically with boundary)
    credentials: "include",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API error ${res.status}: ${text}`);
  }

  return res.json();
}
