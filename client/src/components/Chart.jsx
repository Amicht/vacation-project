import CanvasJSReact from '../assets/canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Chart({vacations}){	
      const options = {
        theme: "light2",
        title: {
          text: "Followers Report"
        },
        data: [{				
                  type: "column",
                  dataPoints: vacations.filter(v => v.follow>0)
                    .map(v => { return {label:v.destination,y: v.follow}})
         }]
     }
          
     return (
        <div>
          <CanvasJSChart options = {options}/>
        </div>
      );
    } 
export default Chart