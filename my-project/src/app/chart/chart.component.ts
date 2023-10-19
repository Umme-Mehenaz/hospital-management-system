import { Component } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  chartOptions = {
    title: {
      text: "Hospital Patient Chart"
    },
    data: [{
      type: "column",
      dataPoints: [
        { label: "January",  y: 10  },
        { label: "February", y: 25  },
        { label: "March", y: 55  },
        { label: "April",  y: 30  },
        { label: "May",  y: 28  },
        { label: "June",  y: 45  },
        { label: "July",  y: 58  },
        { label: "August",  y: 62  }
      ]
    }]                
  };
}

