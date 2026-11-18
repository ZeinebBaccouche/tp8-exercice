import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from './application/components/product-list/product-list';
import { ParkList } from './exercice/components/park-list/park-list';

@Component({
  imports: [RouterOutlet, ProductList, ParkList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('tp8acces_serveur');
}
