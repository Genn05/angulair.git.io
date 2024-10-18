import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FaceSnapListComponent, HeaderComponent], // Ajout de HeaderComponent ici
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adem_projetang';
}
