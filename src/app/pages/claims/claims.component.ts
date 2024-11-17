import { Component, inject } from '@angular/core';
import { ClaimsHeaderComponent } from './components/claims-header/claims-header.component';
import { SearchbarComponent } from '../../shared/components/searchbar/searchbar.component';
import { TableComponent } from '../../shared/components/table/table.component';
import { IClaimsColumns, IClaimsData } from './interfaces/claims.interface';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-claims',
  standalone: true,
  imports: [
    ClaimsHeaderComponent,
    SearchbarComponent,
    TableComponent,
    RouterOutlet,
  ],
  templateUrl: './claims.component.html',
  styleUrl: './claims.component.scss',
})
export class ClaimsComponent {
  claimsColumns: IClaimsColumns[] = [
    { label: 'Policy Holder', field: 'policyHolder' },
    { label: 'Policy Number', field: 'policyNumber' },
    { label: 'Claim Number', field: 'claimNumber' },
    { label: 'Claim Description', field: 'claimDescription' },
    { label: 'Date of Loss', field: 'dateOfLoss' },
    { label: 'Status', field: 'status' },
    { label: 'Sub Status', field: 'subStatus' },
    { label: 'Cause Code', field: 'causeCode' },
    { label: 'Risk Type', field: 'riskType' },
    { label: 'Risk Description', field: 'riskDescription' },
  ];

  claimsData: IClaimsData[] = [
    {
      policyHolder: 'AYISI, FRANCIS',
      policyNumber: 'STP1374 220',
      claimNumber: 'CL1167845',
      dateOfLoss: '07/09/2017',
      status: 'REP',
      causeCode: 'Collision/Overturning (Motor)',
      riskType: 'Motor',
      riskDescription: '2013 HYUNDAI...',
    },
    {
      policyHolder: 'KWAME, JOHN',
      policyNumber: 'STP1375 221',
      claimNumber: 'CL1167846',
      dateOfLoss: '08/10/2018',
      status: 'PEN',
      causeCode: 'Fire',
      riskType: 'Property',
      riskDescription: 'Building Fire',
    },
    {
      policyHolder: 'KWAME, JOHN',
      policyNumber: 'STP1375 221',
      claimNumber: 'CL1167846',
      dateOfLoss: '08/10/2018',
      status: 'PEN',
      causeCode: 'Fire',
      riskType: 'Property',
      riskDescription: 'Building Fire',
    },
    {
      policyHolder: 'KWAME, JOHN',
      policyNumber: 'STP1375 221',
      claimNumber: 'CL1167846',
      dateOfLoss: '08/10/2018',
      status: 'PEN',
      causeCode: 'Fire',
      riskType: 'Property',
      riskDescription: 'Building Fire',
    },
    {
      policyHolder: 'KWAME, JOHN',
      policyNumber: 'STP1375 221',
      claimNumber: 'CL1167846',
      dateOfLoss: '08/10/2018',
      status: 'PEN',
      causeCode: 'Fire',
      riskType: 'Property',
      riskDescription: 'Building Fire',
    },
    {
      policyHolder: 'KWAME, JOHN',
      policyNumber: 'STP1375 221',
      claimNumber: 'CL1167846',
      dateOfLoss: '08/10/2018',
      status: 'PEN',
      causeCode: 'Fire',
      riskType: 'Property',
      riskDescription: 'Building Fire',
    },
    {
      policyHolder: 'KWAME, JOHN',
      policyNumber: 'STP1375 221',
      claimNumber: 'CL1167846',
      dateOfLoss: '08/10/2018',
      status: 'PEN',
      causeCode: 'Fire',
      riskType: 'Property',
      riskDescription: 'Building Fire',
    },
    {
      policyHolder: 'KWAME, JOHN',
      policyNumber: 'STP1375 221',
      claimNumber: 'CL1167846',
      dateOfLoss: '08/10/2018',
      status: 'PEN',
      causeCode: 'Fire',
      riskType: 'Property',
      riskDescription: 'Building Fire',
    },
    {
      policyHolder: 'KWAME, JOHN',
      policyNumber: 'STP1375 221',
      claimNumber: 'CL1167846',
      dateOfLoss: '08/10/2018',
      status: 'PEN',
      causeCode: 'Fire',
      riskType: 'Property',
      riskDescription: 'Building Fire',
    },
    {
      policyHolder: 'KWAME, JOHN',
      policyNumber: 'STP1375 221',
      claimNumber: 'CL1167846',
      dateOfLoss: '08/10/2018',
      status: 'PEN',
      causeCode: 'Fire',
      riskType: 'Property',
      riskDescription: 'Building Fire',
    },
    {
      policyHolder: 'KWAME, JOHN',
      policyNumber: 'STP1375 221',
      claimNumber: 'CL1167846',
      dateOfLoss: '08/10/2018',
      status: 'PEN',
      causeCode: 'Fire',
      riskType: 'Property',
      riskDescription: 'Building Fire',
    },
    {
      policyHolder: 'KWAME, JOHN',
      policyNumber: 'STP1375 221',
      claimNumber: 'CL1167846',
      dateOfLoss: '08/10/2018',
      status: 'PEN',
      causeCode: 'Fire',
      riskType: 'Property',
      riskDescription: 'Building Fire',
    },
    {
      policyHolder: 'KWAME, JOHN',
      policyNumber: 'STP1375 221',
      claimNumber: 'CL1167846',
      dateOfLoss: '08/10/2018',
      status: 'PEN',
      causeCode: 'Fire',
      riskType: 'Property',
      riskDescription: 'Building Fire',
    },
    {
      policyHolder: 'AMA, ANITA',
      policyNumber: 'STP1376 222',
      claimNumber: 'CL1167845',
      dateOfLoss: '09/11/2019',
      status: 'CLO',
      causeCode: 'Flood',
      riskType: 'Property',
      riskDescription: 'Flood Damage',
    },
  ];

  private _router = inject(Router);
  private _activatedRoute = inject(ActivatedRoute);

  isChildRouteActive(): boolean {
    return this._activatedRoute.firstChild !== null;
  }

  handleRowClick(row: any): void {
    this._router.navigate(['dashboard', 'claims', 'claim-summary'], {
      state: {
        claimNumber: row.claimNumber,
        policyHolder: row.policyHolder,
        policyNumber: row.policyNumber,
      },
    });
  }
}
