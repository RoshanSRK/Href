import React, { useState } from 'react'
import { CalcCtx } from '../components/tools/context/CalcValueContext'
import { GraphCtx } from '../components/tools/context/GraphDataContext'
// import 'tailwindcss/base';
// import 'tailwindcss/components';
// import 'tailwindcss/utilities';
import { Container, Button, Group, Grid, Alert } from "@mantine/core";
import { createStyles, Paper, Text, Title, useMantineTheme, rem } from '@mantine/core';

// import { CalcProps, GraphProps } from '../types'
// import Head from 'next/head'
// import Footer from '../components/Footer'
// import Header from '../components/Header'
import Tips from '../components/tools/Tips'
import Form from '../components/tools/Form'
import Graph from '../components/tools/Graph'
import Table from '../components/tools/Table'

export default function Home() {
    const initialCalcProps = {
        initial: 50000,
        payment: 1000,
        paymentFrequency: 'monthly',
        interest: 7,
        compoundFrequency: 'monthly',
        years: 25
    }

    const initialGraphProps = {
        values: []
    }

    const [calcCtx, setCalcCtx] = useState(initialCalcProps)
    const [graphCtx, setGraphCtx] = useState(initialGraphProps)

    return (
        <div className='flex flex-col h-screen justify-between text-slate-500'>
            <main className='mb-auto max-w-7xl mx-auto'>
                <div className='my-md sm:my-xxl mt-24 mb-12'>
                    <h1 className='text-5xl font-bold text-center text-slate-800 mb-4'>
                        Compound Interest Calculator.
                    </h1>
                    <p className='text-center'>
                        Get your money in the market and watch it grow over time. 
                    </p>
                    <CalcCtx.Provider value={[calcCtx, setCalcCtx]}>
                        <GraphCtx.Provider value={[graphCtx, setGraphCtx]}>
                            <Form />
                            <Graph />
                            <Table />
                        </GraphCtx.Provider>
                    </CalcCtx.Provider>
                </div>
                <div>
                    <div className='flex flex-col sm:flex-row justify-center items-center'></div>
                </div>
                <div></div>
                <Tips />
                {/* <Footer /> */}
            </main>
        </div>
    )
}