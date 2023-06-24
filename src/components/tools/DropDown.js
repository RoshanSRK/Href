import React, { useState, Fragment, useContext } from 'react'
import { CalcCtx } from './context/CalcValueContext'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { ActionIcon,Select } from "@mantine/core";

export default function Text(props) {
    // use of props to pass data to other modules
    const { fields, property, text: defaultText } = props;
    const [visible, setVisible] = useState(false);
    const [text, setText] = useState(defaultText);
    const [calcCtx, setCalcCtx] = useContext(CalcCtx);

    const toggle = (isVisible) => {
        setVisible(isVisible)
    }

    const setValue = (label, value) => {
        calcCtx[property] = value;

        setText(label);
        setVisible(false);
        setCalcCtx(setCalcCtx);
    }


    return (
        <Fragment>
            <div className='relative inline-block text-left'>
                <div style={{display:"flex"}}
                    className='inline-flex cursor-pointer underline font-bold'
                    onClick={() => toggle(!visible)}
                >
                    {text}
                    <div class='flex flex-col justify-center'>
                        <ActionIcon>
                            <ChevronDownIcon class='-mr-1 ml-0 h-5 w-5' aria-hidden='true' />
                        </ActionIcon>
                    </div>

                </div>
                {visible && (
                    <div className='z-10 left-0 md:origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        {(() => {
                            if (fields && fields.length > 0) {
                                return (
                                    <div className='py-1' role='none'>
                                        <ul>
                                            {fields.map((item, idx) => (
                                                <li
                                                    className='text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-50 hover:text-slate-900'
                                                    key={`${item.value}-${idx}`}
                                                    onClick={() => setValue(item.label, item.value)}
                                                >
                                                    {item.label}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )
                            }
                        })()}
                    </div>
                )}
            </div>
        </Fragment>
    )
}