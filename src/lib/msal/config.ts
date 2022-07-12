if (!import.meta.env.VITE_MSAL_CLIENT_ID) {
  throw 'Please set the VITE_MSAL_CLIENT_ID configuration variable. See the .env.example file for more details.';
}

if (!import.meta.env.VITE_MSAL_AUTHORITY) {
  throw 'Please set the VITE_MSAL_AUTHORITY configuration variable. See the .env.example file for more details.';
}

export const msalConfig = {
  auth: {
    clientId: import.meta.env.VITE_MSAL_CLIENT_ID,
    authority: import.meta.env.VITE_MSAL_AUTHORITY,
    redirectUri: import.meta.env.VITE_MSAL_REDIRECT_URI || window.location.origin + window.location.pathname,
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

export const graphBaseUrl = import.meta.env.VITE_MSAL_API_BASE || 'https://graph.microsoft.com/v1.0';

export const scopes = ["User.Read"];
