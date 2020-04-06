import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'admp-increaser',
  templateUrl: './increaser.component.html',
  styles: [],
})
export class IncreaserComponent implements OnInit {
  @ViewChild('inputProgress') inputProgress: ElementRef;

  @Input() legend: string = 'Legend';
  @Input() progress: number = 15;

  @Output() changeValue: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    // console.log(`Legend: ${this.legend}; Progess: ${this.progress}`);
  }

  ngOnInit(): void {
    // console.log(`Legend: ${this.legend}; Progess: ${this.progress}`);
  }

  switchValue(value: number) {
    if (this.progress > 95) {
      /* TODO:
       * - [paraHacer] tooltip avisando que han llegado al límite
       */
      this.progress = 100;
    }

    if (this.progress < 5) {
      /* TODO:
       * - [paraHacer] tooltip avisando que han llegado al límite
       */
      this.progress = 0;
    }

    this.progress += value;

    this.changeValue.emit(this.progress);
  }

  onChanges(value: number) {
    if (value >= 100) {
      this.progress = 100;
    } else if (value <= 0) {
      this.progress = 0;
    } else {
      this.progress = value;
    }
    /* TODO:
       * - [paraHacer] tooltip información no letras + mín=0 y max=100
       */

    this.inputProgress.nativeElement.value = this.progress;

    this.changeValue.emit(this.progress);

    this.inputProgress.nativeElement.focus();
  }
}
