/* App.js */
import  { useContext } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
import { VacsCtxt } from '../App';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Chart(){	
    const { vacs } = useContext(VacsCtxt);
      const options = {
        theme: "light2",
        title: {
          text: "Followers Report"
        },
        data: [{				
                  type: "column",
                  dataPoints: vacs.filter(v => v.follow>0).map(v => { return {label:v.destination,y: v.follow}})
                  /*[
                      { label: "Apple",  y: 10  },
                      { label: "Orange", y: 15  },
                      { label: "Banana", y: 25  },
                      { label: "Mango",  y: 30  },
                      { label: "Grape",  y: 28  }
                  ]
                  */
         }]
     }
          
     return (
        <div>
          <CanvasJSChart options = {options}
              /* onRef = {ref => this.chart = ref} */
          />
        </div>
      );
    } 
export default Chart