import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { Infos } from '../model/infos';
import { infos } from './api/infos';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, HeaderComponent, FooterComponent],
    template: `
    <app-header></app-header>
    <router-outlet>
    <div class="fixed-buttons">
        <!-- Mobile Call Button -->
        <a href="tel:{{ infos.phoneNumber }}" class="call-button">
          <i class="bi bi-telephone"></i>
        </a>
        <!-- Phone Call Button -->
        <a href="tel:{{ infos.phoneNumber }}" class="call-button">
          <i class="bi bi-phone"></i>
        </a>
        <div class="pt-5">
            <a class="call-button btn" href="{{ infos.tiktok }}"><i class="bi bi-tiktok"></i></a>
            <a class="call-button btn" href="{{ infos.instagram }}"><i class="bi bi-instagram"></i></a>
            <a class="call-button btn" href="{{ infos.instagram }}"><i class="bi bi-snapchat"></i></a>
        </div>
        
    </div>
    </router-outlet>
    <app-footer></app-footer>
  `,
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'le_roi_shawarma_ui';

  infos:Infos=infos;
}
