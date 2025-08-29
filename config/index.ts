declare global {
  interface Window {
    ENV?: Record<string, string>;
  }
}

type Config = {
  baseUrl: string;
  apiUrl: string;
};

let _config: Config;

if (typeof window === "undefined") {
  _config = {
    baseUrl: process.env.PUBLIC_BASE_URL || "http://localhost:3000",
    apiUrl: process.env.API_URL || "/api",
  };
} else {
  _config = {
    baseUrl: window.ENV?.PUBLIC_BASE_URL || "http://localhost:3000",
    apiUrl: window.ENV?.PUBLIC_API_URL || "/api",
  };
}

const config = _config;

export default config;
