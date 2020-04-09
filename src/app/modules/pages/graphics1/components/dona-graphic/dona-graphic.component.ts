import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'admp-dona-graphic',
  templateUrl: './dona-graphic.component.html',
  styles: [],
})
export class DonaGraphicComponent implements OnInit {
  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType;
  public graficosLeyenda: string = '';
  @Input() graficos: any = {};

  constructor() {
    // this.graficosLeyenda = this.graficos;
    // console.log(`graficos: ${this.graficosLeyenda}`);
  }

  ngOnInit(): void {
    this.doughnutChartLabels = this.graficos.labels;
    // console.log(`labels[${this.doughnutChartLabels}]: ${this.doughnutChartLabels}`);
    this.doughnutChartData = this.graficos.data;
    // console.log(`data[]: ${this.doughnutChartData}`);
    this.doughnutChartType = this.graficos.type;
    // console.log(`type[]: ${this.doughnutChartType}`);
    this.graficosLeyenda = this.graficos.leyenda;
    // console.log(`leyenda[]: ${this.graficosLeyenda}`);
  }


  // events
  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    // console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    // console.log(event, active);
  }
}
