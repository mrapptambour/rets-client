import { Client, IGetAutoLogoutClient } from './client';
import { RetsError, RetsParamError, RetsProcessingError, RetsReplyError, RetsServerError } from './errors';
export const getAutoLogoutClient: IGetAutoLogoutClient;
export const getReplyTag: any;

export interface IRetsClientStaticApi {
  getAutoLogoutClient: IGetAutoLogoutClient;
  getReplyTag: any;
}

export {
  Client,
  RetsError,
  RetsReplyError,
  RetsServerError,
  RetsProcessingError,
  RetsParamError,
};
