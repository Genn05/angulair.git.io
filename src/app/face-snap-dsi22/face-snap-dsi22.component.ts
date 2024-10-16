import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { CommonModule } from '@angular/common'; // Importez CommonModule

@Component({
  selector: 'app-face-snap-dsi22',
  standalone: true,
  templateUrl: './face-snap-dsi22.component.html',
  styleUrls: ['./face-snap-dsi22.component.scss'],
  imports: [CommonModule] 
})
export class FaceSnapDSI22Component implements OnInit {
  @Input() faceSnap!: FaceSnap; 
  buttonText: string = 'Oh Snap!';

  ngOnInit() {}

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.buttonText = 'Oops, unSnap!';
      this.faceSnap.snaps++;
    } else {
      this.buttonText = 'Oh Snap!';
      this.faceSnap.snaps--;
    }
  }
}
