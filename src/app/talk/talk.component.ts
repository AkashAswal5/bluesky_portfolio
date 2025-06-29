import { Component, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-talk',
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './talk.component.html',
  styleUrl: './talk.component.css'
})
export class TalkComponent {
  meetingDetails: any;
  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router){}

  ngOnInit(): void {
    this.meetingDetails = this.formBuilder.group({
      date: [new Date().toISOString()],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      service: [''],
      message: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(100)]],
      total_time: [0],
    });
  }

  times = [30,45,60,90];
  time_index = signal(-1)

  services = ["Mobile App","Website","Desktop App","Web Security","AI Application"]
  service_index = signal(-1)

  about = "we are a team of developers who are passionate about building great software. We are dedicated to creating high-quality applications that solve real-world problems. Our team has a diverse set of skills and experiences, allowing us to tackle a wide range of challenges. We believe in continuous learning and improvement, and we are always looking for new ways to enhance our skills and knowledge. We are excited to share our journey with you and hope to inspire others to pursue their passions in software development XD"
  addTime(index:number){
    this.time_index.update( value => index)
  }
  addService(index:number){
    this.service_index.update( value => index)
  }
  
  
  
  API_URL = 'https://bluesky-portfolio-backend.onrender.com'; // Replace with your real endpoint

  formSubmitted = false;
  submitForm(): void {
    this.formSubmitted = true;
    if (this.meetingDetails?.valid && this.time_index() !==-1 && this.service_index() !== -1) {
      this.meetingDetails.patchValue({ 
        total_time: this.times[this.time_index()],
        service: this.services[this.service_index()]
      });

      this.postToAPI()
    }
  }

  postToAPI(){
    const formData = this.meetingDetails.value;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post(this.API_URL, formData, { headers }).subscribe({
      next: (response) => {
        console.log('Form submitted successfully:');
        this.gotoHome();
      },
      error: (error) => {
        console.error('Form submission error:', error);
      }
    });
  }

  redirectedTime = signal(5)
  messageclass = ['hidden']
  gotoHome(){
    this.messageclass = ['block']

     const interval = setInterval(() => {
      const current = this.redirectedTime();
      if (current <= 1) {
        clearInterval(interval);
        this.router.navigate(['']);  // Navigate only when timer ends
      } else {
        this.redirectedTime.update(value => value - 1);
      }
    }, 1000);
  }
}
