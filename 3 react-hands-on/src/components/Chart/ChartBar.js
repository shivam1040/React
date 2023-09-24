import './ChartBar.css'

function ChartBar(props){
    let barFillHeight = "0%"

    if(props.maxValue>0)
        barFillHeight=Math.round((props.value/props.maxValue)*100)+"%"
    
    return <div className='chart-bar'>
        <div className='chart-bar__inner'>
            {/* way to pass css styles in react by means of keys and value and passing them as object in param braces, for key having dash in them convert them to camelcasename */}
            <div className='chart-bar__fill' style={{height : barFillHeight}}></div>
        </div>
        <div className='chart-bar__label'>{props.label}</div>
    </div>
}

export default ChartBar