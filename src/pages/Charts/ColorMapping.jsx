import React from 'react'
import { ChartsHeader } from '../../components';
import {
    ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Tooltip, Legend,
    RangeColorSettingsDirective, RangeColorSettingDirective
} from '@syncfusion/ej2-react-charts';

import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const ColorMapping = () => {
    const { currentMode } = useStateContext();
    return (
        <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
            <ChartsHeader category="Color Mappping" title="USA CLIMATE - WEATHER BY MONTH" />
            <div className='w-full'>
                <ChartComponent
                    id="area-chart"
                    height="420px"
                    primaryXAxis={ColorMappingPrimaryXAxis}
                    primaryYAxis={ColorMappingPrimaryYAxis}
                    tooltip={{ enable: true }}
                    legendSettings={{ mode: 'Range', background: 'white' }}
                    chartArea={{ border: { width: 0 } }}
                    background={currentMode === "Dark" ? "#33373E" : ""}
                >
                    <Inject services={[ColumnSeries, Legend, Tooltip, Category]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective
                            dataSource={colorMappingData[0]}
                            name="USA"
                            xName="x"
                            yName="y"
                            type="Column"
                            cornerRadius={{
                                topLeft: 10,
                                topRight: 10,
                            }}
                        />
                    </SeriesCollectionDirective>
                    <RangeColorSettingsDirective>
                        {rangeColorMapping.map((item, index) => <RangeColorSettingDirective key={index} {...item} />)}
                    </RangeColorSettingsDirective>
                </ChartComponent >
            </div>
        </div>
    )
}

export default ColorMapping