import { Component, inject, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ParkService } from '../../services/park-service';
import { Park } from '../../models/park';

@Component({
  selector: 'app-park-selected',
  imports: [DatePipe],
  templateUrl: './park-selected.html',
  styleUrl: './park-selected.css',
})
export class ParkSelected implements OnInit {
  private readonly parkService = inject(ParkService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  park = signal<Park | undefined>(undefined);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.parkService.getParkById(id).subscribe({
      next: p => this.park.set(p),
      error: () => this.router.navigate(['/error']),
    });
  }

  onBack(): void {
    this.router.navigate(['/parks']);
  }
}
