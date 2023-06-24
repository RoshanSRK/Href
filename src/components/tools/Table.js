import React, { useContext } from 'react';
import { GraphCtx } from './context/GraphDataContext';
import { formatMoney } from './helpers';
import { Paper, Text, Button, Grid, Table as MTable } from '@mantine/core';

export default function Table () {
  const [graphCtx, setGraphCtx] = useContext(GraphCtx);
  
  if(graphCtx.values.length === 0) return null;

  return (
    <div className='mt-8'>
        <Text fz="xl" fw={700} style={{fontSize:"40px"}}>Overview</Text>
      <br/>
        <Text fz="xl" > Year-by-year breakdown</Text>
       <br/>
      
      <div className='flex flex-col mt-10 bg-gray-50 rounded-xl p-6'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
              <MTable className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-100'>
                  <tr>
                    <th>
                      Year
                    </th>
                    <th>
                      Payment
                    </th>
                    <th>
                      Interest
                    </th>
                    <th>
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {graphCtx.values.map((item) => (
                    <tr
                      key={item.year}
                      className={
                        item.year % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      }
                    >
                      <td>
                        {item.year}
                      </td>
                      <td>
                        {formatMoney(item.totalPayment.toFixed(2))}
                      </td>
                      <td>
                        {formatMoney(item.totalInterest.toFixed(2))}
                      </td>
                      <td>
                        {formatMoney(item.totalMoney.toFixed(2))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </MTable><br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}