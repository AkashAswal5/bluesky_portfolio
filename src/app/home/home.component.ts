import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

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
  constructor(private http: HttpClient) {}
  
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


