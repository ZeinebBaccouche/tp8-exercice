import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParkService } from '../../services/park-service';
import { ParkItem } from '../park-item/park-item';

@Component({
  selector: 'app-park-list',
  imports: [ParkItem],
  templateUrl: './park-list.html',
  styleUrl: './park-list.css',
})
export class ParkList implements OnInit {
  private readonly parkService = inject(ParkService);
  private readonly router = inject(Router);

  parks = this.parkService.parks;

  ngOnInit(): void {
    this.parkService.getParks().subscribe({
      error: () => this.router.navigate(['/error']),
    });
  }
}
