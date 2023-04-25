import React from 'react'
import { useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { FaCheck } from "react-icons/fa"





const YearData = [
    { title: "Sort By Year" },
    { title: "1700-1800" },
    { title: "1800-1900" },
    { title: "1900-2000" },
    { title: "2000-2010" },
    { title: "2010-2020" },
]

const TimeData = [
    { title: "Sort By Hours" },
    { title: "1 - 5hrs" },
    { title: "5 - 10 hrs" },
    { title: "10 - 15 hrs" },

]

const RateData = [
    { title: "Sort By Rates" },
    { title: "1 star" },
    { title: "2 star" },
    { title: "3 star" },
    { title: "4 star" },
    { title: "5 star" },

]


const Filters = () => {
    const [category, setCategory] = useState({ title: "Category" })
    const [year, setYear] = useState(YearData[0])
    const [times, setTimes] = useState(TimeData[0])
    const [rates, setRates] = useState(RateData[0])

    const Filter = [
        {
            value: year,
            onChange: setYear,
            items: YearData,

        },
        {
            value: times,
            onChange: setTimes,
            items: TimeData,

        },
        {
            value: rates,
            onChange: setRates,
            items: RateData,

        }
    ]

    return (
        <div className="my-6 bg-gray-900 text-gray-300 border-gray-800 mg:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6">
            {
                Filter.map((item, index) => (
                    <Listbox className="" key={index} value={item.value} onChange={item.onChange}>
                        <div className="relative ">
                            <Listbox.Button className="relative w-full flex flex-col border border-gray-800 text-white  bg-black rounded-lg cursor-default py-4 pl-6 pr-10 text-left text-xs  ">
                                <span className="truncate block">{item.value.title}</span>
                                <span className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-2">
                                    <ChevronUpDownIcon className='h-5 w-5 ' aria-hidden="true" />
                                </span>
                            </Listbox.Button>
                            <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom='opacity-100' leaveTo='opacity-0'>
                                <Listbox.Options className="absolute z-10 mt-1 w-full bg-gray-200 border border-gray-800 text-zinc-900 rounded-md shadow-lg max-h-60 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                    {
                                        item.items.map((iterm, i) => (
                                            <Listbox.Option
                                                key={i}
                                                className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-[#FF0000] text-white" : "text-black"}`}
                                                value={iterm}
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span className={`block truncated ${selected ? " font-semibold" : "font-normal"}`}>
                                                            {iterm.title}

                                                        </span>
                                                        {
                                                            selected ? (
                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 ">
                                                                    <FaCheck className='h-5 w-5 ' aria-hidden="true" />
                                                                </span>
                                                            ) : null
                                                        }
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))
                                    }

                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                ))
            }

        </div>
    )
}

export default Filters;
