import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';

interface TreeNode {
  label: string;
  children?: TreeNode[];
  expanded?: boolean;
}

@Component({
  selector: 'app-custom-tree',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-tree.component.html',
  styleUrl: './custom-tree.component.scss',
})
export class CustomTreeComponent {
  nodes = input.required<TreeNode[]>();
}
