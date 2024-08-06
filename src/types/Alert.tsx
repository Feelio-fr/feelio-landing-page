enum Severity {
    Error = 'error',
    Info = 'info',
    Success = 'success',
    Warning = 'warning'
  }
  
  interface AlertInfo {
    type: Severity | '';
    message: string;
  }