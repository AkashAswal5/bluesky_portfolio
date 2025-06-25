import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface BlobStyle {
  bottom: string;
  left: string;
  background: string;
  animationDelay: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  
  homepage_features:any[] = []
  homepage_statistics:any[] = []
  displayCounts: number[] = [];
  blobs: BlobStyle[] = [];
  constructor(private http: HttpClient) {
    this.generateBlobs(2);
  }
  generateBlobs(count: number) {
    for (let i = 0; i < count; i++) {
      this.blobs.push({
        bottom: `${10 + Math.random() * 100}px`,
        left: `${10 + Math.random() * 1000}px`,
        background: `linear-gradient(to bottom,
          rgba(147, 51, 234, 0.7),
          rgba(14, 165, 233, 0.7),
          rgba(37, 99, 235, 0.7))`,
        animationDelay: `${(Math.random() * 3).toFixed(2)}s`
      });
    }
  }

  ngOnInit(): void {
    this.http.get<any>('data/home.json').subscribe((data) => {
      this.homepage_features = data.features;
      this.homepage_statistics = data.statistics;
      
      this.homepage_statistics.forEach((item, index) => {
        this.displayCounts[index] = 0;
        this.increaseCount(index, item.stats_value);
      });
    });

    
  }

  increaseCount(index: number, target: number) {
    if (this.displayCounts[index] < target) {
      setTimeout(() => {
        this.displayCounts[index]++;
        this.increaseCount(index, target);
      }, 100);
    }
  }

  scrollto(id:string){
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      console.warn(`Element with ID "${id}" not found.`);
    }
  }
}


