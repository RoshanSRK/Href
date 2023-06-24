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
            <div>
                <div style={{display:"flex"}}
                    onClick={() => toggle(!visible)}
                >
                    {text}
                    <div >
                        <ActionIcon>
                            <ChevronDownIcon  aria-hidden='true' />
                        </ActionIcon>
                    </div>

                </div>
                {visible && (
                    <div>
                        {(() => {
                            if (fields && fields.length > 0) {
                                return (
                                    <div role='none'>
                                        <ul>
                                            {fields.map((item, idx) => (
                                                <li
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