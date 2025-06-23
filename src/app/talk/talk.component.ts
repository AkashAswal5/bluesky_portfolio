import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-talk',
  imports: [RouterLink],
  templateUrl: './talk.component.html',
  styleUrl: './talk.component.css'
})
export class TalkComponent {
  times = ["30 min", "45 min", "60 min", "90 min"];
  about = "we are a team of developers who are passionate about building great software. We are dedicated to creating high-quality applications that solve real-world problems. Our team has a diverse set of skills and experiences, allowing us to tackle a wide range of challenges. We believe in continuous learning and improvement, and we are always looking for new ways to enhance our skills and knowledge. We are excited to share our journey with you and hope to inspire others to pursue their passions in software development XD"
}
