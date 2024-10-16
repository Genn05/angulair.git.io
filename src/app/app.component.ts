import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';
import { FaceSnapDSI22Component } from './face-snap-dsi22/face-snap-dsi22.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FaceSnapDSI22Component], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'adem_projetang';
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
    
      {
        title: 'three rock mountain',
        description: 'endroit magnifique',
        imageUrl: 'https://th.bing.com/th/id/OIP.MIrdR-6Qi22q6QrYMhgFeQHaDt?w=333&h=175&c=7&r=0&o=5&pid=1.7',
        createdDate: new Date(),
        snaps: 0
      },
      {
        title: 'un bon repas',
        description: 'ymmm c bon',
        imageUrl: 'https://th.bing.com/th/id/OIP.uJHTCYwb3bb-9aUGi9z3rwHaEM?w=311&h=180&c=7&r=0&o=5&pid=1.7',
        createdDate: new Date(),
        snaps: 0
      },
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis petit!',
        imageUrl: 'https://th.bing.com/th/id/OIF.H53os8VL77Ddz9ltkm0OVg?w=273&h=182&c=7&r=0&o=5&pid=1.7',
        createdDate: new Date(),
        snaps: 0
      }
    ];
  }
}
