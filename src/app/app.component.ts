import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ThemeToggleComponent } from "./theme-toggle/theme-toggle.component";
import { Infos } from '../model/infos';
import { infos } from './api/infos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ThemeToggleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'le_roi_shawarma_ui';

  infos:Infos=infos;
}
