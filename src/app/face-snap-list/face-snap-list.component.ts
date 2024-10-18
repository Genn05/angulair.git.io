import { Component, OnInit, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { FaceSnapDSI22Component } from '../face-snap-dsi22/face-snap-dsi22.component'; 


@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [CommonModule, NgFor, FaceSnapDSI22Component,],
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.css'] 
})
export class FaceSnapListComponent implements OnInit {
  
  faceSnaps!: FaceSnap[];

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.faceSnaps.length ? 
                     this.faceSnapsService.faceSnaps : 
                     this.getDefaultFaceSnaps();
  }

  private getDefaultFaceSnaps(): FaceSnap[] {
    return [
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
