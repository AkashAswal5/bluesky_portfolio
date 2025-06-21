import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  save_time_text = "Analyzing payloads...";
  
  ngOnInit(): void {
    this.changeText();
  }
  changeText(){
    const save_time_text_list = ["Scanning ports...", "Detecting threats...", "Analyzing vulnerabilities...", "Generating report..."]
    let i =0
    setInterval(()=>{
      this.save_time_text = save_time_text_list[i]
      i = (i + 1) % save_time_text_list.length
    }, 3000)
  }
}
