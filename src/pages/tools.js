import React, { useState } from "react";
import { CalcCtx } from "../components/tools/context/CalcValueContext";
import { GraphCtx } from "../components/tools/context/GraphDataContext";
import Tips from "../components/tools/Tips";
import Form from "../components/tools/Form";
import Graph from "../components/tools/Graph";
import Table from "../components/tools/Table";

export default function Home() {
  const initialCalcProps = {
    initial: 50000,
    payment: 1000,
    paymentFrequency: "monthly",
    interest: 7,
    compoundFrequency: "monthly",
    years: 25,
  };

  const initialGraphProps = {
    values: [],
  };

  const [calcCtx, setCalcCtx] = useState(initialCalcProps);
  const [graphCtx, setGraphCtx] = useState(initialGraphProps);

  return (
    <div className="flex flex-col h-screen justify-between text-slate-500">
      <main className="mb-auto max-w-7xl mx-auto">
        <div className="my-md sm:my-xxl mt-24 mb-12">
          <h1 className="text-5xl font-bold text-center text-slate-800 mb-4">
            Compound Interest Calculator.
          </h1>
          <p className="text-center">
            Get your money in the market and watch it grow over time.
          </p>
          {/* This generates the main part of the page,i.e, the form, the graphs and the yealy breakdown */}
          <CalcCtx.Provider value={[calcCtx, setCalcCtx]}>
            <GraphCtx.Provider value={[graphCtx, setGraphCtx]}>
              <Form />
              <Graph />
              <Table />
            </GraphCtx.Provider>
          </CalcCtx.Provider>
        </div>

        <Tips />
        <br />
        <br />
      </main>
    </div>
  );
}
