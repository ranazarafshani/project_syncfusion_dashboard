import React from 'react'
import { ChartsHeader } from '../../components';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, SplineAreaSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';

import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Area = () => {
    const { currentMode } = useStateContext();
    return (
        <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
            <ChartsHeader category="Area" title="Inflation Rate in percentage" />
            <div className='w-full'>
                <ChartComponent
                    id="area-chart"
                    height="420px"
                    primaryXAxis={areaPrimaryXAxis}
                    primaryYAxis={areaPrimaryYAxis}
                    tooltip={{ enable: true }}
                    legendSettings={{ background: 'white' }}
                    chartArea={{ border: { width: 0 } }}
                    background={currentMode === "Dark" ? "#33373E" : ""}
                >
                    <Inject services={[SplineAreaSeries, DateTime, Legend, Tooltip]} />
                    <SeriesCollectionDirective>
                        {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
                    </SeriesCollectionDirective>
                </ChartComponent >
            </div>
        </div>
    )
}

export default Area