import { Component } from '@angular/core';

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  colorFrom: string;
  colorTo: string;
}

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
  standalone: true
})
export class FeaturesComponent {
  items = [1,23,4]
  times = ["30 min", "45 min", "60 min", "90 min"];
  about = "Hi, we are a team of developers who are passionate about building great software. We are dedicated to creating high-quality applications that solve real-world problems. Our team has a diverse set of skills and experiences, allowing us to tackle a wide range of challenges. We believe in continuous learning and improvement, and we are always looking for new ways to enhance our skills and knowledge. We are excited to share our journey with you and hope to inspire others to pursue their passions in software development XD"
  services: Service[] = [
    {
      id: 'web',
      title: 'Web Development',
      description: 'Scalable, responsive websites & SPAs with SEO optimization.',
      features: ['Custom UI/UX', 'E‑commerce & CMS', 'SPA & SSR', 'API Integration'],
      icon: 'assets/webdev-icon.svg',
      colorFrom: 'from-blue-600',
      colorTo: 'to-blue-400'
    },
 {
  id: 'cyber',
  title: 'Cybersecurity',
  description: 'Secure your digital assets with professional VAPT, OSINT, and dark web services.',
  features: [
    'Website & Network Penetration Testing',
    'Account Recovery (Gmail, Instagram, etc.)',
    'Dark Web Monitoring & Intelligence',
    'OSINT, Forensics, VAPT & Compliance'
  ],
  icon: 'assets/icons/cyber-icon.svg', // Make sure this exists or replace it
  colorFrom: 'from-gray-900',
  colorTo: 'to-gray-700'
},
    {
      id: 'mobile',
      title: 'Mobile Apps',
      description: 'High-performance cross-platform mobile apps with full backend support.',
      features: ['Flutter & React Native','Push Notifications','Analytics','Store Deployment'],
      icon: 'assets/appdev-icon.svg',
      colorFrom: 'from-green-600',
      colorTo: 'to-green-400'
    }
  ];

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  cardClass(s: Service) {
    return `bg-gradient-to-r ${s.colorFrom} ${s.colorTo} text-white`;
  }
}
