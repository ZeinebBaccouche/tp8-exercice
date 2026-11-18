import { Component, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ParkService } from '../../services/park-service';
import { Park } from '../../models/park';

@Component({
  selector: 'app-park-item',
  imports: [RouterLink],
  templateUrl: './park-item.html',
  styleUrl: './park-item.css',
})
export class ParkItem {
  private readonly parkService = inject(ParkService);
  private readonly router = inject(Router);
  park = input.required<Park>();
  onLike(): void {
    const p = this.park();
    this.parkService
      .updatePark({ ...p, nbLikes: p.nbLikes + 1 })
      .subscribe({ error: () => this.router.navigate(['/error']) });
  }

  onDelete(): void {
    this.parkService
      .deletePark(this.park().id)
      .subscribe({ error: () => this.router.navigate(['/error']) });
  }
}
