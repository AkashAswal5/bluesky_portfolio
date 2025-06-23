import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-features',
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
  standalone: true
})
export class FeaturesComponent implements OnInit {
  
  allowedFeatures = ['web_development','cybersecurity', 'mobile', 'cyber'];
  featurepage:any[] = []
  data:any = {}
  index: number = 0;
  
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const name = params.get('feature')?.trim().toLowerCase();

      if (!name || !this.allowedFeatures.includes(name)) {
        this.router.navigate(['/404']);
        return;
      }

      this.http.get<any[]>('data/features.json').subscribe((data) => {
        const index = data.findIndex(item => item.feature_id?.toLowerCase() === name);
        if (index !== -1) {
          this.data = data[index];
        } else {
          this.router.navigate(['/404']);
        }
      });
    });
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
