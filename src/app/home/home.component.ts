
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

  export class HomeComponent implements OnInit {
    currentSlideIndex = 0;
    slides = [
      'assets/Slider_1.jpg',
      'assets/Slider_2.jpg'
    ];
  
    constructor() { }
  
    ngOnInit(): void {
      this.startSlider();
    }
  
    startSlider() {
      setInterval(() => {
        this.nextSlide();
      }, 3000); 
    }
  
    nextSlide() {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    }
  }
  






  
