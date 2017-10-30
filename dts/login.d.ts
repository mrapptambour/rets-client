export interface ILoginHeaderInfo {
  retsVersion: string;
  retsServer?: string;
  retsRequestId?: string;
}

export interface ILoginResponse {
  actionUrl: string;
  balance: string;
  broker: string;
  changePasswordUrl: string;
  metadataUrl: string;
  objectUrl: string;
  loginCompleteUrl: string;
  loginUrl: string;
  logoutUrl: string;
  MmemberName: string;
  metadataTimestamp: string;
  metadataVersion: string;
  minMetadataTimestamp: string;
  officeList: string;
  passwordExpire: string;
  searchUrl: string;
  serverInformationUrl: string;
  timeout: string;
  updateUrl: string;
  UserInfo: string;
}
