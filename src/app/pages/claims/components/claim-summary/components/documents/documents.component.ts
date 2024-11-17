import { Component } from '@angular/core';
import { CustomTreeComponent } from '../../../../../../shared/components/custom-tree/custom-tree.component';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CustomTreeComponent],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.scss',
})
export class DocumentsComponent {
  treeData = [
    {
      label: 'CL1167845',
      expanded: false,
      children: [
        { label: 'Attached Documents' },
        { label: 'Emails Received' },
        { label: 'Miscellaneous' },
      ],
    },
  ];
}
