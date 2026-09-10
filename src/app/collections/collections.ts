import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Archivist {
  name: string;
  role: string;
  initials: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './collections.html',
  styleUrls: ['./collections.css']
})
export class CollectionsComponent {
  archivists: Archivist[] = [
    { name: 'Elias Thorne', role: 'Head Conservator', initials: 'ET' },
    { name: 'Lady Genevieve', role: 'Master of the Arcane Stacks', initials: 'LG' },
    { name: 'Arthur Pendelton', role: 'Chief Cartographer', initials: 'AP' }
  ];
}