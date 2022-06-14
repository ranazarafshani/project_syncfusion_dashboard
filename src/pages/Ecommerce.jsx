import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import {
    earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData,
    SparklineAreaData, ecomPieChartData
} from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';


const Ecommerce = () => {
    const { currentColor } = useStateContext();

    return (
        <div className="mt-12">
            <div className="flex flex-wrap lg:flex-nowrap justify-center">
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 
                bg-hero-pattern bg-no-repeat bg-cover bg-center">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-bold text-gray-400">Earnings</p>
                            <p className="text-2xl">$63,448.78</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Button
                            color="white"
                            bgColor={currentColor}
                            text="Download"
                            borderRadius="10px"
                            size="md"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-1 m-3">
                    {earningData.map((item) => (
                        <div key={item.title}
                            className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
                        >
                            <button type="button"
                                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                                className="text-2xl opacity-90 rounded-full p-4 hover:drop-shadow-xl">
                                {item.icon}
                            </button>
                            <p className="mt-3">
                                <span className="text-lg font-semibold">{item.amount}</span>
                                <span className={`text-sm ml-2 text-${item.pcColor}`}>{item.percentage}</span>
                            </p>
                            <p className="text-sm text-gray-400 mt-1">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-10">
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
                    <div className="flex justify-between">
                        <p className="font-semibold text-xl">Revenue Updates</p>
                        <div className="flex items-center gap-4">
                            <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                                <span><GoPrimitiveDot /></span>
                                <span>Expense</span>
                            </p>
                            <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                                <span><GoPrimitiveDot /></span>
                                <span>Budget</span>
                            </p>
                        </div>
                    </div>
                    <div className='mt-10 flex gap-10 flex-wrap justify-center'>
                        <div className='border-r-1 border-color m-4 pr-10'>
                            <div>
                                <p>
                                    <span className='text-3xl font-semibold'>$93,438</span>
                                    <span className='bg-green-400 rounded-full text-white text-xs p-1.5
                                     hover:drop-shadow-xl cursor-pointer ml-3'>23%</span>
                                </p>
                                <p className='text-gray-500 mt-1'>Budget</p>
                            </div>
                            <div className='mt-8'>
                                <p>
                                    <span className='text-3xl font-semibold'>$48,487</span>
                                </p>
                                <p className='text-gray-500 mt-1'>Expense</p>
                            </div>
                            <div className="mt-5">
                                <SparkLine
                                    currentColor={currentColor}
                                    id="line-sparkLine"
                                    type="Line"
                                    height="80px"
                                    width="250px"
                                    data={SparklineAreaData}
                                    color={currentColor} />
                            </div>
                            <div className='mt-10'>
                                <Button
                                    bgColor={currentColor}
                                    color="white"
                                    size="md"
                                    borderRadius="10px"
                                    text="Download Report"
                                />
                            </div>
                        </div>
                        <div>
                            <Stacked
                                width="320px"
                                height="360px"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ backgroundColor: currentColor }} className="rounded-2xl md:w-400 p-4 m-3">
                        <div className='flex justify-between items-center '>
                            <p className='text-2xl font-semibold text-white'>Earning</p>
                            <div>
                                <p className='text-white text-2xl font-semibold mt-8'>$63,448.78</p>
                                <p className='text-gray-200'>Monthly revenue</p>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <SparkLine
                                height="100px"
                                width="320px"
                                id="column-sparkLine"
                                data={SparklineAreaData}
                                type="Column"
                                color="rgb(242, 252, 253)"
                                currentColor={currentColor}
                            />
                        </div>
                    </div>
                    <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounde-2xl md:w-400 p-8 m-3
                    flex justify-center items-center gap-10'>
                        <div>
                            <p className='text-2xl font-semibold'>$43,246</p>
                            <p className='text-gray-400'>Yearly sales</p>
                        </div>
                        <div className='w-40'>
                            <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap justify-center gap-10 m-4'>
                <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6'>
                    <div className='flex items-center justify-between gap-2'>
                        <p className='font-semibold text-xl'>Recent Transactions</p>
                        <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
                            <DropDownListComponent id="time" dataSource={dropdownData} style={{ border: 'none' }} fields={{ text: 'Time', value: 'Id' }} value="1" popupHeight="220px" popupWidth="120px" />
                        </div>
                    </div>
                    <div className="mt-10 w-72 md:w-400">
                        {recentTransactions.map((item) => (
                            <div key={item.title} className="flex justify-between mt-4">
                                <div className='flex items-center gap-2'>
                                    <button
                                        type='button'
                                        className="p-4 hover:drop-shadow-xl rounded-lg text-2xl"
                                        style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                                    >
                                        {item.icon}
                                    </button>
                                    <div>
                                        <p className='text-md font-semibold'>{item.title}</p>
                                        <p className='text-gray-400 text-sm'>{item.desc}</p>
                                    </div>
                                </div>
                                <p className={`text-${item.pcColor} `}>{item.amount}</p>
                            </div>
                        ))}
                    </div>
                    <div className='border-t-1 border-color flex justify-between items-center mt-5 pt-4'>
                        <Button
                            bgColor={currentColor}
                            borderRadius="10px"
                            size="md"
                            color="white"
                            text="Add"
                        />
                        <p className='text-gray-400 text-sm'>36 Recent Transaction</p>
                    </div>
                </div>
                <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 w-96 md:w-760'>
                    <div className='flex items-center justify-between gap-2 mb-10'>
                        <p className='font-semibold text-xl'>Sales Overview</p>
                        <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
                            <DropDownListComponent id="time" dataSource={dropdownData} style={{ border: 'none' }} fields={{ text: 'Time', value: 'Id' }} value="1" popupHeight="220px" popupWidth="120px" />
                        </div>
                    </div>
                    <div className='md:w-full overflow-auto'>
                        <LineChart />
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap justify-center'>
                <div className='md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3'>
                    <div className='flex items-center justify-between gap-2'>
                        <p className='font-semibold text-xl'>Weekly States</p>
                        <button type="button" className="text-xl font-semibold text-gray-500">
                            <IoIosMore />
                        </button>
                    </div>
                    <div className="mt-10">
                        {weeklyStats.map((item) => (
                            <div key={item.title} className='flex justify-between w-full mt-4 gap-2'>
                                <div className='flex gap-4'>
                                    <button
                                        type='button'
                                        className="p-3 hover:drop-shadow-xl rounded-full text-2xl text-white"
                                        style={{ backgroundColor: item.iconBg }}
                                    >
                                        {item.icon}
                                    </button>
                                    <div>
                                        <p className='text-md font-semibold'>{item.title}</p>
                                        <p className='text-gray-400 text-sm'>{item.desc}</p>
                                    </div>
                                </div>
                                <p className={`text-${item.pcColor} `}>{item.amount}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <SparkLine
                            currentColor={currentColor}
                            id="area-sparkLine"
                            type="Area"
                            height="160px"
                            width="320px"
                            data={SparklineAreaData}
                            color="rgb(242, 252, 253)" />
                    </div>
                </div>

                <div className='w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3'>
                    <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6'>
                        <div className='flex items-center justify-between gap-2'>
                            <p className='font-semibold text-xl'>MedicalPro Branding</p>
                            <button type="button" className="text-xl font-semibold text-gray-500">
                                <IoIosMore />
                            </button>
                        </div>
                        <p className="text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-24 bg-orange-400 py-0.5 px-2 text-gray-200 mt-10">
                            16 APR, 2021
                        </p>
                        <div className='flex gap-4 border-b-1 border-color mt-6'>
                            {medicalproBranding.data.map((item) => (
                                <div key={(item.title)} className='border-r-1 border-color pr-4 pb-2'>
                                    <p className='text-gray-400 text-xs'>{item.title}</p>
                                    <p className='text-sm'>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="border-b-1 border-color pb-4 mt-2">
                            <p className="text-md font-semibold mb-2">Teams</p>
                            <div className='flex gap-4'>
                                {medicalproBranding.teams.map((item) => (
                                    <p
                                        key={item.name}
                                        style={{ background: item.color }}
                                        className="cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 rounded-lg text-xs"
                                    > {item.name}</p>
                                ))}
                            </div>
                        </div>
                        <div className="mt-2">
                            <p className="text-md font-semibold mb-2">Leaders</p>
                            <div className='flex gap-4'>
                                {medicalproBranding.leaders.map((item) => (
                                    <img key={item.image} src={item.image} className="rounded-full w-8 h-8" />
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-5 border-t-1 border-color">
                            <div className="mt-3">
                                <Button
                                    bgColor={currentColor}
                                    borderRadius="10px"
                                    size="md"
                                    color="white"
                                    text="Add"
                                />
                            </div>
                            <p className='text-gray-400 text-sm'>36 Recent Transaction</p>
                        </div>
                    </div>
                </div>

                <div className='w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3'>
                    <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6'>
                        <div className='flex items-center justify-between gap-2'>
                            <p className='font-semibold text-xl'>Daily Activities</p>
                            <button type="button" className="text-xl font-semibold text-gray-500">
                                <IoIosMore />
                            </button>
                        </div>
                        <img src={product9} className="md:w-96 h-50 mt-10" />
                        <p className='font-semibold mt-8 text-lg'>React 18 coming soon!</p>
                        <p className='text-gray-400'>By Johnathan Doe</p>
                        <p className='text-gray-400 text-sm mt-8'>This will be the small description for the news you have shown here. There could be some great info.</p>
                        <div className="mt-3">
                            <Button
                                bgColor={currentColor}
                                borderRadius="10px"
                                size="md"
                                color="white"
                                text="Read More"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ecommerce