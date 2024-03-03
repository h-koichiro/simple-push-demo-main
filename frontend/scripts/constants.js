/* eslint-env browser */

// export const GCM_API_KEY = 'AIzaSyBBh4ddPa96rQQNxqiq_qQj7sq1JdsNQUQ';
export const GCM_API_KEY = "AIzaSyCC2e1ja3F7fJlbrUJxYK03t2Z88dwlthQ";
export const APPLICATION_KEYS = {
  publicKey:
    "BDqd3E8zSrSHmMvbyXpdfjttNTShSoVhPUNPqAER_9raqUVUKIlaDX4nclwwEEBLBIoZxpDTYEvK9bU8BjaNGxo",
  privateKey: "TluHdQfOByzDDwd9Y3QbNWl-Yp6V17S5JF-X3H1WAyM",
};

// Hosting on vercel will have the API and frontend served from the
// same origin, so '' is fine.
// For local development the backend url param can be used.
const urlParams = new URLSearchParams(window.location.search);
const backendParam = urlParams.get("backend");
export const BACKEND_ORIGIN = backendParam ? backendParam : "";
