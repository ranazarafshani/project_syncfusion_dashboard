import React from 'react'
import {
    AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend,
    PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip
} from '@syncfusion/ej2-react-charts';

import { useStateContext } from '../../contexts/ContextProvider';

const Pie = ({ id, data, legendVisiblity, height }) => {
    const { currentMode } = useStateContext();
    return (
        <AccumulationChartComponent
            id={id}
            legendSettings={{
                visible: legendVisiblity, background: 'white', position: "Top"
            }}
            height={height}
            background={currentMode === 'Dark' ? '#33373E' : '#fff'
            }
            tooltip={{ enable: true }}
        >
            <Inject services={[PieSeries, AccumulationTooltip, AccumulationDataLabel, AccumulationLegend]} />
            <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective
                    name="Sale"
                    dataSource={data}
                    xName="x"
                    yName="y"
                    radius="70%"
                    innerRadius='40%'
                    startAngle={0}
                    endAngle={360}
                    explode
                    explodeOffset='10%'
                    explodeIndex={2}
                    dataLabel={{
                        visible: true,
                        position: 'Inside',
                        name: 'text',
                        font: {
                            color: '#fff',
                            fontWeight: '600',
                        }
                    }}
                >

                </AccumulationSeriesDirective>
            </AccumulationSeriesCollectionDirective>

        </AccumulationChartComponent>
    )
}

export default Pie