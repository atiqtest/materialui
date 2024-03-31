import { Component } from '@angular/core';

@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.component.html',
  styleUrls: ['./swipe.component.css']
})
export class SwipeComponent {
  images: string[] = ['https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/3536991/pexels-photo-3536991.jpeg?auto=compress&cs=tinysrgb&w=600']; // Array of image URLs
  slideIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.slideIndex = (this.slideIndex + 1) % this.images.length;
    }, 5000); // Change slide every 5 seconds
  }
}

