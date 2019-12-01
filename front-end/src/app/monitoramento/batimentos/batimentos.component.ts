import { Component, OnInit } from '@angular/core';

declare var Chart: any

@Component({
  selector: 'app-batimentos',
  templateUrl: './batimentos.component.html',
  styleUrls: ['./batimentos.component.css']
})
export class BatimentosComponent {
  myLineChart;
  labels;
  animationStep;
  ANIMATIONSTEPS = 200;

  constructor() { }
/*
  ngOnInit() {

    setInterval( () => {
      if (this.myLineChart === undefined) {
          var actualData = this.getActualData();
          
          // if we have only a few data points interpolate to fill out enough points to make the animation smooth
          let interpolationSteps = Math.ceil(this.ANIMATIONSTEPS / actualData.length);
          this.labels = []
          let data = []
          let blankData = []
          for (var i = 0; i < (actualData.length - 1); i++) {
            this.labels.push('')
              data.push(actualData[i])
              blankData.push(null)
              
              // push interpolation
              var difference = actualData[i + 1] - actualData[i];
              var interpolationStep = 1 / interpolationSteps;
              for (var j = 1; j < interpolationSteps; j++) {
                this.labels.push('')
                  data.push(actualData[i] + difference * Chart.helpers.easingEffects["linear"](j * interpolationStep));
                  blankData.push(null)
              }
          }
          this.labels.push('')
          data.push(actualData[i])
          blankData.push(null)
          
          let data2 = {
              labels: this.labels,
              datasets: [
                  {
                      strokeColor: "rgba(243, 118, 27, 1)",
                      data: blankData
                  },
                  {
                      strokeColor: "transparent",
                      data
                  }
              ]
          };
          
          var ctx = document.getElementById("canvas").getContext("2d");
          this.myLineChart = new Chart(ctx).line(data2, {
              animation: false,
              datasetFill: false,
              pointDot: false,
              datasetStrokeWidth: 5,
              showTooltips: false,
              scaleOverride: true,
              scaleSteps: 12,
              scaleStepWidth: 5,
              scaleStartValue: 30,
              scaleShowVerticalLines: false,
              scaleShowLabels: false,
          });
          
          this.animationStep = 0;
      }
      
      // the actual animation
      this.myLineChart.datasets[0].points[this.animationStep].value = this.myLineChart.datasets[1].points[this.animationStep].value
      this.myLineChart.update();
      this.animationStep++;
      
      // start new cycle
      if (this.animationStep >= this.labels.length) {
        this.myLineChart.destroy();
          this.myLineChart = undefined;
      }
      
    }, 10);
  
  }

  getActualData() {
    let actualData = []
    for (var m = 0; m < 20; m++)
        actualData.push(45 + Math.random() * 35)
        return actualData;

  }

*/

}








