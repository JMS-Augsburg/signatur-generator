import { AccountInfo, AuthenticationResult, Configuration, InteractionRequiredAuthError, PublicClientApplication, RedirectRequest } from '@azure/msal-browser';
import { graphBaseUrl, msalConfig, scopes } from './config'

export class MsalClient {
  private client: PublicClientApplication;
  private account: AccountInfo;

  public constructor(config: Configuration = msalConfig) {
    this.client = new PublicClientApplication(config);
  }

  public async ready() {
    await this.client.handleRedirectPromise();

    const currentAccounts = this.client.getAllAccounts();
    if (currentAccounts.length < 1) {
      await this.client.loginRedirect({scopes});
      // we should never arrive here since we navigate away
      // from this page in the previous line
      throw 'MSAL login failed';
    }

    this.account = currentAccounts[0];
  }

  public async fetchProfile() {
    return this.callEndpoint('/me');
  }

  public async callEndpoint(endpoint: string) {
    const url = graphBaseUrl + endpoint;
    const token = await this.getTokenRedirect({
      scopes,
      account: this.account,
    });

    return this.__callEndpoint(url, token);
  }

  private async getTokenRedirect(request: RedirectRequest) {
    try {
      return this.client.acquireTokenSilent(request)
    } catch(error) {
      if (error instanceof InteractionRequiredAuthError) {
        // fallback to interaction when silent call fails
        // this will navigate away from current page
        this.client.acquireTokenRedirect(request);
      }

      throw error;
    }
  }

  private async __callEndpoint(endpoint: string, token: AuthenticationResult) {
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${token.accessToken}`);

    const options = {
      method: 'GET',
      headers: headers,
    };

    const response = await fetch(endpoint, options);

    return response.json()
  }
}
