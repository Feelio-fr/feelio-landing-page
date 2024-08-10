export enum Severity {
  Error = 'error',
  Info = 'info',
  Success = 'success',
  Warning = 'warning'
}

export interface AlertInfo {
  type: Severity | undefined;
  message: string;
}