// my-next-frontend/lib/apiClient.ts
export async function apiFetch(path: string, opts: RequestInit = {}) {
  const base = process.env.NEXT_PUBLIC_API_URL || 'https://my-next-backend-production.up.railway.app';
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  const headers: HeadersInit = {
    ...(opts.headers || {}),
  };

  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(base + path, { ...opts, headers });

  if (res.status === 401 || res.status === 403) {
    // optional: clear token + redirect to login
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      window.location.href = '/login';
    }
    throw new Error('unauthorized');
  }

  return res;
}
