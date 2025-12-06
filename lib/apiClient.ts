export async function apiFetch(path: string, opts: RequestInit = {}) {
  const base = process.env.NEXT_PUBLIC_API_URL || 'https://endearing-trust-production.up.railway.app';
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  // 🔥 FIX: force headers to a string->string record
  const headers: HeadersInit = {
    ...(opts.headers as Record<string, string> || {}),
  };

  if (token) (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;

  const res = await fetch(base + path, { ...opts, headers });

  if (res.status === 401 || res.status === 403) {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      window.location.href = '/login';
    }
    throw new Error('unauthorized');
  }

  return res;
}

/* -------------------------
   ADD THESE FUNCTIONS 👇
-------------------------- */

export async function apiGet(path: string) {
  const res = await apiFetch(path, { method: "GET" });
  return res.json();
}

export async function apiPost(path: string, body: any) {
  const res = await apiFetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return res.json();
}
