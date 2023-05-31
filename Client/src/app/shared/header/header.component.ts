import { Component,Input  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}


  @Input() 

  isLoading: boolean = false;
  progressValue: number = 0;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
      setTimeout(() => {
        this.updateProgress();
      }, 100); // Délai de 100 millisecondes avant de démarrer la barre de progression
    }, 100); // Délai de 100 millisecondes avant de définir isLoading sur true
  }

  updateProgress() {
    const duration = 15000; // Durée en millisecondes (15 secondes)
    const intervalDuration = 100; // Durée de l'intervalle en millisecondes
    const totalSteps = duration / intervalDuration;
    const stepValue = 100 / totalSteps;
  
    const interval = setInterval(() => {
      this.progressValue += stepValue;
  
      if (this.progressValue >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          this.isLoading = false; // Masquer la barre de progression après le délai spécifié
        }, 500); // Délai avant de masquer la barre de progression (0,5 seconde)
      }
    }, intervalDuration);
  }

  navigateTo(route: string): void {
    this.router.navigateByUrl(route);
  }
}
