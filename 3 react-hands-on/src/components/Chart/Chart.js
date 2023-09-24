import './Chart.css'
import ChartBar from './ChartBar'

function Chart(props){
    const valueDataPoints = props.dataPoints.map(d => d.value)
    //getting all the values from arr and storing them as separated arguements
    const max=Math.max(...valueDataPoints)

    return (
        <div className='chart'>
          {props.dataPoints.map((dataPoint) => (
            <ChartBar
              key={dataPoint.label}
              value={dataPoint.value}
              maxValue={max}
              label={dataPoint.label}
            />
          ))}
        </div>
      )
    }

export default Chart