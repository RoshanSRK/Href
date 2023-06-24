import React, { useContext, useEffect } from 'react';
import Text from './Text';
import DropDown from './DropDown';
import { CalcCtx } from './context/CalcValueContext';
import { GraphCtx } from './context/GraphDataContext';

import { Paper, Text as MantineText, Button, Grid } from '@mantine/core';

export default function Form() {
    const [calcCtx, setCalcCtx] = useContext(CalcCtx);
    const [graphCtx, setGraphCtx] = useContext(GraphCtx);

    // build an initial graph based on predefined values
    useEffect(() => {
        buildGraphData();
    }, []);

    const Rate = (interest, payment, compoundFrequency) => {
        return (
            Math.pow(1 + interest / compoundFrequency, compoundFrequency / payment) -
            1
        );
    };

    const nPer = (payment, years) => {
        return payment * years;
    };
// formula to calculate the compound intereste
    const FV = (initial, interest, nper, payment) => {
        return (
            initial * Math.pow(1 + interest, nper) +
            (payment * (Math.pow(1 + interest, nper) - 1)) / interest
        );
    };

    function* Calculate() {
        const frequencyMap = {
            monthly: 12,
            quarterly: 4,
            semiannual: 2,
            yearly: 1
        };

        const {
            initial,
            payment,
            years
        } = calcCtx;

        let {
            compoundFrequency="monthly",
            paymentFrequency="month",
            interest
        } = calcCtx;

        paymentFrequency = frequencyMap[paymentFrequency];
        compoundFrequency = frequencyMap[compoundFrequency];
        interest = interest / 100;

        const rate = Rate(interest, paymentFrequency, compoundFrequency);
        let fv = 0;

        for (let i = 1; i <= years; i++) {
            const nper = nPer(paymentFrequency, i);

            fv = FV(initial, rate, nper, payment);

            const totalPayments = payment * nper + initial;
            const totalInterest = fv - totalPayments;
            const graphItem = {
                year: i,
                totalPayment: totalPayments,
                totalInterest: totalInterest,
                totalMoney: fv
            };

            yield graphItem;
        }

        return fv;
    }

    const buildGraphData = () => {
        const graph = [];

        for (const amount of Calculate()) {
            graph.push(amount);
        }

        setGraphCtx({ values: graph });
    };

    return (
        // creating the form that the user can modify values to calculate 
        <div className="mt-10">
            <Grid>
                <Grid.Col md={6} lg={3}>
                    <Paper style={{ height: '175px' }} shadow="sm" radius="lg" p="md">
                        <span className="block text-sm mb-1">I have a</span>
                        <Text
                            defaultValue={{ name: 'initial', value: calcCtx.initial }}
                            increment={1000}
                            type="money"
                            bounds={{ min: 0, max: 999999999 }}
                        />
                        <span className="block text-sm mt-2">initial investment</span>
                    </Paper>
                </Grid.Col>
                <Grid.Col md={6} lg={3}>
                    <Paper style={{ height: '175px' }} shadow="sm" radius="lg" p="md">
                        <span className="block text-sm mb-1">I&apos;ll add </span>
                        <Text
                            defaultValue={{ name: 'payment', value: calcCtx.payment }}
                            increment={1000}
                            type="money"
                            bounds={{ min: 0, max: 999999999 }}
                        />
                        <span className="block text-sm mt-2">
                            each{" "}
                            <DropDown
                                text="month"
                                property="paymentFrequency"
                                fields={[
                                    { value: "monthly", label: "month" },
                                    { value: "yearly", label: "year" }
                                ]}
                            />
                        </span>
                    </Paper>
                </Grid.Col>
                <Grid.Col md={6} lg={3}>
                    <Paper style={{ height: '175px' }} shadow="sm" radius="lg" p="md">
                        <span className="block text-sm mb-1">I&apos;ll get a</span>
                        <Text
                            defaultValue={{ name: "interest", value: calcCtx.interest }}
                            increment={1}
                            type="percent"
                            showArrows={true}
                            bounds={{ min: 0.01, max: 35 }}
                        />
                        <span className="block text-sm mt-2">
                            return compounded{" "}
                            <DropDown
                                text="monthly"
                                property="compoundFrequency"
                                fields={[
                                    { value: "monthly", label: "monthly" },
                                    { value: "quarterly", label: "quarterly" },
                                    { value: "semiannual", label: "semi-annually" },
                                    { value: "yearly", label: "annually" }
                                ]}
                            />
                        </span>
                    </Paper>
                </Grid.Col>
                <Grid.Col md={6} lg={3}>
                    <Paper style={{ height: '175px' }} shadow="sm" radius="lg" p="md">
                    <span className="block text-sm mb-1">I&apos;ve got</span>
                    <Text
                        defaultValue={{ name: "years", value: 5 }}
                        increment={1}
                        type="year"
                        showArrows={true}
                        bounds={{ min: 1, max: 100 }}
                    />
                    <span className="block text-sm mt-2">years to watch my money grow</span>
                </Paper>
                </Grid.Col>
            </Grid>



            <br />

            <div className="text-center">
                <Button
                    onClick={buildGraphData}                >
                    <span>Calculate</span>
                </Button>
            </div>
        </div>
    );
}


