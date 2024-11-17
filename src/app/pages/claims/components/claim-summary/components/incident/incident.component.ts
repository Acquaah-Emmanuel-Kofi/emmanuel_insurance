import { Component } from '@angular/core';
import { ClaimDetailsCardComponent } from './components/claim-details-card/claim-details-card.component';

@Component({
  selector: 'app-incident',
  standalone: true,
  imports: [ClaimDetailsCardComponent],
  templateUrl: './incident.component.html',
  styleUrl: './incident.component.scss',
})
export class IncidentComponent {
  policyHolderItems = [
    { label: 'Policy Holder', value: 'AYSI.FRANCIS' },
    { label: 'Policy Number', value: 'STP1374220' },
    { label: 'Status', value: 'REP' },
    { label: 'Sub Status', value: null },
    { label: 'Cause Code', value: 'Collision/Overturning (Motor)' },
    {
      label: 'Sub Cause Code',
      value: 'Collision with Third Party property (Vehicle)',
    },
    { label: 'Registered Date', value: '07/09/2017 12:15 PM' },
    { label: 'Incident Date', value: '07/09/2017 12:15 PM' },
  ];

  incidentAddressItems = [
    { label: 'Address Line 1', value: null },
    { label: 'Address Line 2', value: null },
    { label: 'Address Line 3', value: null },
    { label: 'Suburb', value: null },
    { label: 'Town', value: null },
    { label: 'Postal Code', value: null },
  ];

  contactDetailsItems = [
    { label: 'Phone Number', value: null },
    { label: 'Fax Number', value: null },
    { label: 'Cellphone Number', value: null },
    { label: 'Email Address', value: null },
  ];
}
