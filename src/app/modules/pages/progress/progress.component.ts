import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admp-progress',
  templateUrl: './progress.component.html',
  styles: [],
})
export class ProgressComponent implements OnInit {
  progressBlue: number = 15;
  progressGreen: number = 75;

  constructor() {}

  ngOnInit(): void {}

  // updateBlue(value: number) {
  //   console.log(`eventBlue: ${value}`);
  //   this.progressBlue = value;
  // }

  // updateGreen(value: number) {
  //   console.log(`eventGreen: ${value}`);
  //   this.progressGreen = value;
  // }
}
