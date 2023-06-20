declare module '@island.is/login' {
  export type ErrorId =
    | 'INVALID-TOKEN-XML'
    | 'CERTIFICATE-INVALID'
    | 'AUDIENCEURL-MISSING'
    | 'LOGIN-REQUEST-EXPIRED'
    | 'AUDIENCEURL-NOT-MATCHING';

  export interface VerifyUser {
    kennitala: string;
    mobile: string;
    fullname: string;
    ip: string;
    userAgent: string;
    destinationSSN: string;
    authId: string;
    authenticationMethod: string;
  }

  export interface VerifyExtra {
    destination: string;
    audienceUrl: string;
    dates: {
      notBefore: Date;
      notOnOrAfter: Date;
    };
  }

  export interface VerifyError {
    id: ErrorId;
    reason: string;
  }

  export interface VerifyResult {
    user?: VerifyUser;
    extra?: VerifyExtra;
    error?: VerifyError;
  }

  class IslandisLogin {
    constructor({
      verifyDates = true,
      audienceUrl = null,
      cert = undefined,
      certPath = undefined
    }: {
      verifyDates?: boolean;
      audienceUrl: string | null;
      cert?: string;
      certPath?: string;
    }) { }

    verify(token: string): Promise<VerifyResult>;
  }

  export default IslandisLogin;
}
