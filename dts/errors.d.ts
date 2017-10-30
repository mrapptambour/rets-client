import { IHeaderInfo, IRetsQueryOptions, RetsContext } from './client';
export interface IRetsError {
  replyTag: string;
  replyCode: string;
  replyText: string;
}
export class RetsError extends Error implements IRetsError, Partial<RetsContext> {
  public replyTag: string;
  public replyCode: string;
  public replyText: string;

  public headerInfo?: IHeaderInfo;
  public retsMethod?: 'search';
  public queryOptions?: IRetsQueryOptions;
}

export class RetsParamError extends RetsError { }
export class RetsServerError extends RetsError {
  constructor(retsContext: RetsContext, replyCode?: any, replyText?: string)
}
export class RetsReplyError extends RetsError {
  constructor(retsContext: RetsContext, replyCode?: any, replyText?: string)
}
/**
 * This error can raise with sourceError: "Unexpected end of xml stream"
 * It inherits from Bluebird OperationalError, but the { cause } property not set
 */
export class RetsProcessingError extends RetsError {
  public isOperational: boolean;
  public sourceError: string;
  constructor(retsContext: RetsContext, message?: string)
}
export class RetsPermissionError extends RetsError { }
