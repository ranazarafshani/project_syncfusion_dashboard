import React from 'react'
import { ChartsHeader } from '../../components';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, DataLabel, Legend, Tooltip, Category } from '@syncfusion/ej2-react-charts';

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Bar = () => {
    const { currentMode } = useStateContext();
    return (
        <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
            <ChartsHeader category="Bar" title="Olympic Medal Counts - RIO" />
            <div className='w-full'>
                <ChartComponent
                    id="bar-charts"
                    primaryXAxis={barPrimaryXAxis}
                    primaryYAxis={barPrimaryYAxis}
                    tooltip={{ enable: true }}
                    legendSettings={{ background: 'white' }}
                    chartArea={{ border: { width: 0 } }}
                    background={currentMode === "Dark" ? "#33373E" : ""}
                >
                    <Inject services={[ColumnSeries, DataLabel, Category, Legend, Tooltip]} />
                    <SeriesCollectionDirective>
                        {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
                    </SeriesCollectionDirective>
                </ChartComponent >
            </div>
        </div>
    )
}

export default Bar