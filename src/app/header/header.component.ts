import { Component } from '@angular/core';
import { infos } from '../api/infos';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  infos:any=infos;
}
