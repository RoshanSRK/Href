import React, { useState, useEffect, Fragment, useContext } from 'react'
import { CalcCtx } from './context/CalcValueContext'
// import { CalcProps } from '../types'
import { formatMoney } from './helpers'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'
import { ActionIcon, Flex } from "@mantine/core";


// interface ValidationObj {
//   min: number
//   max: number
// }

// interface DefaultObj {
//   name: string
//   value: number
// }
// interface FieldInputProps {
//   increment: number
//   defaultValue: DefaultObj
//   showArrows?: boolean
//   bounds: ValidationObj
//   type: 'money' | 'percent' | 'year'
// }

const friendlyFieldString = ({
    increment,
    defaultValue,
    type
    // }: FieldInputProps) => {
}) => {
    if (type === 'money') {
        const tmp = formatMoney(defaultValue.value)

        return `${tmp}`
    } else if (type === 'percent') {
        return `${defaultValue.value}%`
    } else {
        return `${defaultValue.value}`
    }
}


const validate = (value, type) => {
    if (!value) return true;

    if (type === 'percent') {
        return /^\d+\.{0,1}\d{0,2}$/.test(value);
    } else {
        return /^[0-9]+$/.test(value);
    }

    return true;
}
export default function Text(props) {
    const { increment, type, defaultValue, showArrows, bounds } = props
    const [calcCtx, setCalcCtx] = useContext(CalcCtx)

    const fieldstr = friendlyFieldString(props)

    const [text, setText] = useState(fieldstr)
    const [count, setCount] = useState(defaultValue.value)
    const [visible, setVisible] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const fieldstr = friendlyFieldString({
            increment,
            defaultValue: {
                name: defaultValue.name,
                value: count
            },
            type,
            showArrows,
            bounds
        })

        calcCtx[defaultValue.name] = parseFloat(count);
        setCalcCtx({ ...calcCtx });

        setText(fieldstr)
        setCalcCtx(calcCtx)
    }, [increment, type, count, bounds, calcCtx])
    // }, [bounds, calcCtx, count, defaultValue.name, increment, setCalcCtx, setText, showArrows, type])

    function increase() {
        const newCount = count + increment;

        if (newCount > bounds.max) {
            setError(`Must be between ${bounds.min} and ${bounds.max}`);

            return;
        } else {
            setError('');
        }

        setCount(newCount)
    }

    function decrease() {
        const newCount = count - increment;

        if (newCount < bounds.min) {
            setError(`Must be between ${bounds.min} and ${bounds.max}`);

            return;
        } else {
            setError('');
        }

        setCount(newCount)
    }

    function change(e) {
        if (!validate(e.target.value, type)) {
            return;
        }

        if (e.target.value) {
            const newCount = parseFloat(e.target.value);

            if (newCount > bounds.max || newCount < bounds.min) {
                setError(`Must be between ${bounds.min} and ${bounds.max}`);
            } else {
                setError('');
            }

            setCount(e.target.value)
        } else {
            setCount('')
        }
    }

    function toggle(isVisible) {
        setError('');
        setVisible(isVisible);

        if (!count || error) {
            setCount(bounds.min);
        }
    }

    return (
        <Fragment>
            <div>
                <div style={{ display: "flex", justifyItems: "center" }}>
                    {!visible && (
                        <Fragment>
                            <strong style={{ fontSize: "41px" }}
                                onClick={() => toggle(!visible)}
                            >
                                {text}
                            </strong>
                            {showArrows && (
                                <div>
                                    <ActionIcon>
                                        <ChevronUpIcon
                                            onClick={increase}
                                        />
                                    </ActionIcon>

                                    <ActionIcon>
                                        <ChevronDownIcon
                                            onClick={decrease}
                                        />
                                    </ActionIcon>
                                </div>
                            )}
                        </Fragment>
                    )}
                    {visible && (
                        <input
                            type="text"
                            value={count}
                            autoFocus
                            onBlur={() => toggle(!visible)}
                            onChange={change}
                        />
                    )}
                </div>
            </div>


            {error && <label>{error}</label>}

        </Fragment>
    )
}
