import React, {  useState } from 'react';
import data from '../data';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { PiCaretDownBold, PiCaretUpBold } from 'react-icons/pi';
import Table from './Table';
import { Doughnut } from 'react-chartjs-2';
import { Chart, Tooltip, Title , ArcElement, Legend } from 'chart.js/auto'
import {BiSolidDoughnutChart} from 'react-icons/bi'
import {MdOutlineTableChart} from 'react-icons/md'
import data2 from '../data2'

Chart.register(
  Tooltip, Title,ArcElement,Legend 
  );
  
 
function AdInsights() {
 
  const [doughnutshow, setdoughnutshow] = useState(true);
  const [tableshow, settableshow] = useState(false);
  const [AdsDropmenu, setAdsDropmenu] =  useState("Click");


  function Dropmenuchangehandler(event){
    const {value} = event.target;
      setAdsDropmenu(value);
   
  }
  
  function switchbtnhandler(){
    if(tableshow){

      settableshow(false);
      setdoughnutshow(true);
    }
    else{
      settableshow(true);
      setdoughnutshow(false);
      }
    }


    var arrdata2 = [];

      arrdata2= data2.map((data)=>
      {
      return data[AdsDropmenu];
      }
      );
    var totalamt=arrdata2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(totalamt);
 
  
const mydata = {
  labels: [
    'Male',
    'Female',
    'Unknown'
  ],
  datasets: [{
    label: 'Ads Insight Chart',
    data: [...arrdata2],
    backgroundColor: [
      'orange',
      'blue',
      'black'
    ],
    hoverOffset: 4
  }]
};


 
  return (
    <div className='w-[100%] flex flex-col  lg:flex-row h-auto justify-center  lg:gap-x-6 pt-5'>
      <div className='lg:w-[40%] w-[100%]  h-auto max-auto border-2 rounded-md border-gray-300 bg-white'>
      
      <div className='flex  w-full items-center pr-5 pl-5 text-md font-medium h-12 justify-between'>
                  <div>Ads Insights</div>
                  <div>
                    <AiOutlineQuestionCircle
                      className='text-gray-400 font-light cursor-pointer text-2xl'
                      title='Ask Question ?'
                    />
                  </div>
        </div>
        <table className='border-b-1 w-[95%]  lg:w-[100%]'>
          <thead className=''>
              <tr>
              <th className='text-center' >
                <div className='flex items-center'>
                  Campaigns
                  <span className='pt-[8px] pl-[2px]'>
                    <PiCaretUpBold className='text-[10px] cursor-pointer' />
                    <PiCaretDownBold className='text-[10px] cursor-pointer' />
                  </span>
                </div>
              </th>
              <th className='text-right flex justify-end'>
                <div className='flex flex-row justify-end items-center text-righ'>
                  Clicks
                  <span className='pt-[8px] pl-[2px]'>
                    <PiCaretUpBold className='text-[10px] cursor-pointer' />
                    <PiCaretDownBold className='text-[10px] cursor-pointer' />
                  </span>
                </div>
              </th>
              <th className='text-right'>
                <div className='flex flex-row justify-end items-center text-righ'>
                  Cost
                  <span className='pt-[8px] pl-[2px]'>
                    <PiCaretUpBold className='text-[10px] cursor-pointer' />
                    <PiCaretDownBold className='text-[10px] cursor-pointer' />
                  </span>
                </div>
              </th>
              <th className='text-right'>
                <div className='flex flex-row justify-end items-center text-righ'>
                  Conversions
                  <span className='pt-[8px] pl-[2px]'>
                    <PiCaretUpBold className='text-[10px] cursor-pointer' />
                    <PiCaretDownBold className='text-[10px] cursor-pointer' />
                  </span>
                </div>
              </th>
              <th className='text-righ  '>
                <div className='flex flex-row justify-end items-center text-right'>
                  Revenue
                  <span className='flex flex-col items-center'>
                    <PiCaretUpBold className='text-[10px] cursor-pointer' />
                    <PiCaretDownBold className='text-[10px] cursor-pointer' />
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className='text-gray-500'>
            {data.map((item, index) => (
              <Table data={item} key={index} />
            ))}
            <tr className='bg-gray-100'>
              <td className='text-left'>Total</td>
              <td className='text-center'>26,510</td>
              <td className='text-center'>USD 1,43,819</td>
              <td className='text-right'>489</td>
              <td className='text-right'>USD 15,73,563</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='lg:w-[50%] w-[100%] md:w-[100%] border-2 bg-white rounded-md flex flex-col  lg:justify-between pb-5'>
        {
          doughnutshow ? 
            ( <>            
              <div className='flex border-b-2 border-gray-100   w-full items-center pr-5 pl-5 text-md font-medium h-12 justify-between'>
                    <div>Ads Insights</div>
                  
                    <div className='flex flex-row gap-x-5 text-gray-400 font-normal text-sm '>
                      <div className='border-2 border-gray-200 rounded-md'>
                          <form >
                            <select 
                            id='Adinsights'
                            name='Adinsights'
                            value={AdsDropmenu.value}
                            onChange={Dropmenuchangehandler}
                            className=' rounded-md'>
                              
                              <option  name='Click' >Click</option>
                              <option name='Cost'>Cost</option>
                              <option  name='Conversions'>Conversions</option>
                              <option   name='Revenue'>Revenue</option>
                            </select>
                            </form>
                      </div>
                        <div>
                          <AiOutlineQuestionCircle
                          className='text-gray-400 font-light cursor-pointer text-2xl'
                          title='Ask Question ?'/>
                        </div>
                  </div>
                </div>
                 <div className='w-[300px] h-[300px] mt-[5px] gap-x-40 justify-between flex flex-row'>
                   <div>
                    <Doughnut data={mydata} className='' />
                   </div>

                    <div className='flex justify-center gap-y-4  text-left items-center flex-col'>
                        <div className='flex flex-row font-medium items-center justify-between w-full'>
                          <div className='bg-orange-400 rounded-md left-0 w-[80px] h-[20px]'>

                          </div>
                          <div className='flex flex-row'>
                            {Math.floor(arrdata2[0]/totalamt*100)}%Men
                          </div>
                        </div>
                        <div className='flex flex-row font-medium justify-between w-full items-center gap-x-4'>
                          <div className='bg-blue-400 rounded-md w-[80px] h-[20px]'>

                          </div>
                          <div className='flex flex-row'>
                            {Math.floor(arrdata2[1]/totalamt*100)}%Female
                          </div>
                        </div>
                        <div className='flex flex-row font-medium justify-between w-full items-center gap-x-4'>
                          <div className='bg-black w-[80px] rounded-md h-[20px]'>

                          </div>
                          <div className='flex flex-row'>
                            {Math.floor(arrdata2[2]/totalamt*100)}%Unknown
                          </div>
                        </div>
                    </div>
                 </div>
            </>

          )
          :
          (
            <div className=''>
                 <div className='flex  w-full items-center pr-5 pl-5 text-md font-medium h-12 justify-between'>
                  <div>Ads Insights</div>
                  <div>
                    <AiOutlineQuestionCircle
                      className='text-gray-400 font-light cursor-pointer text-2xl'
                      title='Ask Question ?'
                    />
                  </div>
              </div>
        <table className='border-b-1 border-collapse w-[100%]'>
          <thead className=''>
              <tr>
              <th className='text-center'>
                <div className='flex items-center'>
                  Group
                  <span className='pt-[8px] pl-[2px]'>
                    <PiCaretUpBold className='text-[10px] cursor-pointer' />
                    <PiCaretDownBold className='text-[10px] cursor-pointer' />
                  </span>
                </div>
              </th>
              <th className='text-right flex justify-end'>
                <div className='flex flex-row justify-end items-center text-righ'>
                  Clicks
                  <span className='pt-[8px] pl-[2px]'>
                    <PiCaretUpBold className='text-[10px] cursor-pointer' />
                    <PiCaretDownBold className='text-[10px] cursor-pointer' />
                  </span>
                </div>
              </th>
              <th className='text-right'>
                <div className='flex flex-row justify-end items-center text-righ'>
                  Cost
                  <span className='pt-[8px] pl-[2px]'>
                    <PiCaretUpBold className='text-[10px] cursor-pointer' />
                    <PiCaretDownBold className='text-[10px] cursor-pointer' />
                  </span>
                </div>
              </th>
              <th className='text-right'>
                <div className='flex flex-row justify-end items-center text-righ'>
                  Conversions
                  <span className='pt-[8px] pl-[2px]'>
                    <PiCaretUpBold className='text-[10px] cursor-pointer' />
                    <PiCaretDownBold className='text-[10px] cursor-pointer' />
                  </span>
                </div>
              </th>
              <th className='text-righ  '>
                <div className='flex flex-row justify-end items-center text-right'>
                  Revenue
                  <span className='flex flex-col items-center'>
                    <PiCaretUpBold className='text-[10px] cursor-pointer' />
                    <PiCaretDownBold className='text-[10px] cursor-pointer' />
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className='text-gray-500'>
            {data2.map((item, index) => (
              <Table data={item} key={index} />
            ))}
            <tr className='bg-gray-100'>
              <td className='text-left'>Total</td>
              <td className='text-right'>1,145</td>
              <td className='text-right'>USD 41,383</td>
              <td className='text-right'>80</td>
              <td className='text-right'>USD 71,782</td>
            </tr>
          </tbody>
        </table>
             </div>
  
          )
        }
       
        

        <div className='flex w-full flex-row justify-end items-end align-botton  '>
          <div className='bg-gray-100 w-[12%] pr-1 pl-1 rounded-lg mr-3 flex flex-row items-center justify-between'>
          <div className={` ${doughnutshow ? "w-fit rounded-full cursor-pointer bg-blue-500 scale-120 p-1": "w-fit rounded-full cursor-pointer"}`}>

            <BiSolidDoughnutChart onClick={switchbtnhandler} className="w-[30px] h-[30px]"/>
           
          </div>
          <div  className={` ${tableshow ? "bg-blue-500 scale-120 p-1 w-fit rounded-full cursor-pointer": "w-fit rounded-full cursor-pointer"}`}>
            <MdOutlineTableChart className="w-[30px] h-[30px]" onClick={switchbtnhandler}
           
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}


export default AdInsights;