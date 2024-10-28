import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SerieModule } from "../serie/serie.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SerieModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taller';
}
