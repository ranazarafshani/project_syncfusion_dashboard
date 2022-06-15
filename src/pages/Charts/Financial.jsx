import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, HiloSeries, Tooltip, DateTime, Zoom, Logarithmic, Crosshair } from '@syncfusion/ej2-react-charts';
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { ChartsHeader } from '../../components';

const date1 = new Date('2017, 1, 1');

function filterValue(value) {
    if (value.x >= date1) {
        return value.x, value.high, value.low;
    }
}
const returnValue = financialChartData.filter(filterValue);

const Financial = () => {
    const { currentMode } = useStateContext();
    return (
        <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
            <ChartsHeader category="Area" title="Inflation Rate in percentage" />
            <div className='w-full'>
                <ChartComponent
                    id="area-chart"
                    height="420px"
                    primaryXAxis={FinancialPrimaryXAxis}
                    primaryYAxis={FinancialPrimaryYAxis}
                    tooltip={{ enable: true }}
                    legendSettings={{ background: 'white' }}
                    crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
                    chartArea={{ border: { width: 0 } }}
                    background={currentMode === "Dark" ? "#33373E" : ""}
                >
                    <Inject services={[HiloSeries, Tooltip, Crosshair, Zoom, DateTime, Logarithmic]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective
                            dataSource={returnValue}
                            xName='x'
                            yName='low'
                            name="Apple Inc"
                            type='Hilo'
                            low='low'
                            high='high' />
                    </SeriesCollectionDirective>
                </ChartComponent >
            </div>
        </div>
    )
}

export default Financial