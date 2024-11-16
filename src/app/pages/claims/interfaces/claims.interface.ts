export interface IClaimsData {
  policyHolder: string; 
  policyNumber: string;
  claimNumber: string;
  dateOfLoss: string; 
  status: string; 
  causeCode: string;
  riskType: string; 
  riskDescription: string;
}

export interface IClaimsColumns {
  label: string;
  field: string;
}