import ChartBar from "./ChartBar";

const Chart = (props) => {

    const valueArray = props.dataPoints.map(item => item.value);
    const totalMaximum = Math.max(...valueArray);

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => {
                return <ChartBar key={dataPoint.label} data={dataPoint} maxValue={totalMaximum} />
            })}
        </div>
    )
}

export default Chart;