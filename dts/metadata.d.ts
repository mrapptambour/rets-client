import { IHeaderInfo, IRetsResponse } from './client';

export interface IClientMetadata {
  getSystem(): Promise<IMetadataSystem>;
  getResources(): Promise<IGetResourcesResponse>;
  /** METADATA-CLASS */
  getClass(resourceId: string): Promise<IGetClassResponse>;
  /** METADATA-TABLE */
  getTable(resourceId: string, classType?: string): Promise<IGetTableResponse>;
  /** METADATA-LOOKUP */

  getLookups(resourceId: string, classType: string): Promise<IGetLookupsResponse>;
  /**
   * METADATA-LOOKUP_TYPE
   * ResourceId:ClassType
   */

  getLookupTypes(resourceId: string, classType?: string): Promise<IGetLookupTypesResponse>;

  getForeignKeys(resourceId: string, classType?: string): Promise<IGetForeignKeysResponse>;

  getObject(resourceId: string, classType?: string): Promise<IGetObjectResponse>;

  getAllClass(): Promise<IGetTableResponse>;

  getAllTable(): Promise<IGetTableResponse>;

  getAllLookups(): Promise<IGetTableResponse>;

  getAllLookupTypes(): Promise<MetadataLookupTypes>;
}

export interface IMetadataLookupResult<TMetdata> {
  info: MetadataLookupInfo;
  metadata: TMetdata[];
}

export interface IMetadataResult<TMetdata> {
  info: MetadataInfo;
  metadata: TMetdata[];
}

export type ITableResult = IMetadataResult<ITableMetadata>;


export interface IGetResourcesResponse extends IRetsResponse<IMetadataResult<IRecordMetadata>> {
  type: 'METADATA-RESOURCE';
}

export interface IGetClassResponse extends IRetsResponse<IMetadataResult<IClassMetadata>> {
  type: 'METADATA-CLASS';
  entriesReceived: number;
}

export interface IGetForeignKeysResponse extends IRetsResponse<IMetadataResult<IClassMetadata>> {
  type: 'METADATA-FOREIGNKEYS';
  entriesReceived: number;
}

export interface IGetObjectResponse extends IRetsResponse<IMetadataResult<IClassMetadata>> {
  type: 'METADATA-OBJECT';
  entriesReceived: number;
}

export interface IGetTableResponse extends IRetsResponse<ITableResult> {
  type: 'METADATA-TABLE';
  entriesReceived: number;
}

export interface IGetLookupsResponse extends IRetsResponse<IMetadataLookupResult<MetadataLookup>> {
  type: 'METADATA-LOOKUP';
  entriesReceived: number;
}

export interface IGetLookupTypesResponse extends IRetsResponse<IMetadataLookupResult<MetadataLookupType>> {
  type: 'METADATA-LOOKUP_TYPE';
  entriesReceived: number;
}

export interface MetadataLookupTypes {
  results: MetadataLookupResult[];
  type: string;
  headerInfo: IHeaderInfo;
  replyCode: string;
  replyTag: string;
  replyText: string;
  entriesReceived: number;
}

export interface MetadataLookupResult {
  info: MetadataLookupInfo;
  metadata: MetadataLookupValue[];
}

export interface MetadataLookupValue {
  MetadataEntryID: string;
  LongValue: string;
  ShortValue: string;
  Value: string;
}

export interface MetadataLookupInfo {
  Resource: string;
  Version: string;
  Date: string;
  Lookup?: string;
  rowsReceived: number;
}

export interface MetadataInfo {
  Resource: string;
  Class?: string;
  Version: string;
  Date: string;
  rowsReceived: number;
}


export interface IRecordMetadata {
  ResourceID?: string;
  StandardName?: string;
  VisibleName?: string;
  ClassDate?: string;
  ObjectVersion?: string;
  ObjectDate?: string;
  SearchHelpVersion?: string;
  SearchHelpDate?: string;
  EditMaskVersion?: string;
  EditMaskDate?: string;
  LookupVersion?: string;
  LookupDate?: string;
  UpdateHelpVersion?: string;
  UpdateHelpDate?: string;
  ValidationExpressionVersion?: string;
  ValidationExpressionDate?: string;
  ValidationLookupVersion?: string;
  ValidationLookupDate?: string;
  ValidationExternalVersion?: string;
  ValidationExternalDate?: string;
}
export interface IClassMetadata {
  ClassName: string;
  StandardName: string;
  VisibleName: string;
  TableVersion: string;
  Description: string;
  TableDate: string;
  UpdateVersion: string;
  UpdateDate: string;
  HasKeyIndex: string;
}
export interface ITableMetadata {
  MetadataEntryID?: string;
  SystemName?: string;
  ShortName?: string;
  LongName?: string;
  DataType?: string;
  Interpretation?: string;
  LookupName?: string;
  StandardName?: string;
  DBName?: string;
  MaximumLength?: string;
  Precision?: string;
  Searchable?: string;
  Alignment?: string;
  UseSeparator?: string;
  EditMaskID?: string;
  MaxSelect?: string;
  Units?: string;
  Index?: string;
  Minimum?: string;
  Maximum?: string;
  Default?: string;
  Required?: string;
  SearchHelpID?: string;
  Unique?: string;
  InKeyIndex?: string;

}

export interface MetadataLookup {
  Date: string;
  LookupName: string;
  MetadataEntryID: string;
  Version: string;
  VisibleName: string;
}
export interface MetadataLookupType {
  Value: string;
  LongValue: string;
}


/**
 * MetadataSystem is an implementation of MetadataElement that represents System metadata.
 */
export interface IMetadataSystem {
  systemId: string;
  systemDescription: string;
  timeZoneOffset?: string;
  metadataDate: string;
  version?: string;
}
