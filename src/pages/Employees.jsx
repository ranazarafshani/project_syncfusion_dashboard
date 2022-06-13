import React from 'react'
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page, Toolbar, Sort } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {

    const editing = { allowDeleting: true, allowEditing: true };
    return (
        <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
            <Header title="Employees" category="Page" />
            <GridComponent
                dataSource={employeesData}
                width="auto"
                allowSorting
                allowPaging
                pageSettings={{ pageCount: 5 }}
                editSettings={editing}
                toolbar={['Search']}
            >
                <ColumnsDirective>
                    {employeesGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Search, Toolbar, Sort]} />
            </GridComponent>
        </div>
    )
}

export default Employees