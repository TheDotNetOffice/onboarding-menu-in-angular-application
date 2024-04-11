import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IStepOption, TourMatMenuModule, TourService } from 'ngx-ui-tour-md-menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TourMatMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public readonly tourService = inject(TourService);
  readonly tourSteps: IStepOption[] = [

    {
      anchorId: 'home',
      content: 'This is home menu.',
      title: 'home Menu',
      enableBackdrop: true,
    },
    {
      anchorId: 'about',
      content: 'This is about menu.',
      title: 'about Menu',
      enableBackdrop: true,
    },
    {
      anchorId: 'contact',
      content: 'This is contact Menu.',
      title: 'Contact Menu',
      enableBackdrop: true,
    },

  ]
  constructor() { }

  ngOnInit(): void {
    this.tourService.initialize(this.tourSteps, {});
    this.startTour();
    this.startTour();
    setTimeout(() => {
      this.startTour();
    }, 100);
  }

  startTour() {
    this.tourService.start();

  }
}
