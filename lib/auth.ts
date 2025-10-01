import { apiPost, apiGet } from "./api";

/**
 * Register a new user
 */
export function register(data: { email: string; password: string; name?: string }) {
  return apiPost("/api/auth/register", data);
}

/**
 * Login a user
 */
export function login(data: { email: string; password: string }) {
  return apiPost("/api/auth/login", data);
}

/**
 * Forgot password
 */
export function forgotPassword(data: { email: string }) {
  return apiPost("/api/auth/forgot-password", data);
}

/**
 * MFA setup for a user
 */
export function mfaSetup(data: { userId: string }) {
  return apiPost("/api/auth/mfa-setup", data);
}

/**
 * Example: Fetch current logged-in user
 */
export function getProfile() {
  return apiGet("/api/auth/profile");
}
