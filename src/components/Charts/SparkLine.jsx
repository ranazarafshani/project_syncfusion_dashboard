import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'

const SparkLine = ({ id, height, width, color, currentColor, type, data }) => {
    return (

        <SparklineComponent
            id={id}
            height={height}
            width={width}
            lineWidth={1}
            valueType="Numeric"
            fill={color}
            border={{ color: currentColor, width: 2 }}
            type={type}
            dataSource={data}
            xName="x"
            yName="yval"
            tooltipSettings={{
                visible: true,
                // eslint-disable-next-line no-template-curly-in-string
                format: '${x} : data ${yval}',
                trackLineSettings: {
                    visible: true,
                },
            }}
            markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
        >
            <Inject services={[SparklineTooltip]} />
        </SparklineComponent >

    )
}

export default SparkLine;