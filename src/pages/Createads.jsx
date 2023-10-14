import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import mediaAds from "../mediaAds.png";
import TextAd from "../TextAd.PNG";



function Createads() {
  const [textCheckbox, setTextCheckbox] = useState(false);
  const [mediaCheckbox, setMediaCheckbox] = useState(false);
  const navigate = useNavigate();
 function ClickHandler(){
  if(textCheckbox || mediaCheckbox){
    navigate("/formpage",{state:mediaCheckbox});
  }
  else{
    alert("Please Choose between both of These card");
  }
 }

  return (
   
    <div className='w-[95%] mx-auto h-[100%] gap-y-4 pt-5 mt-5  pr-5 pl-5 pb-3 border-2 bg-white rounded-md '>
        <h1 className='font-medium'>Create Ads</h1>
        <div className='flex justify-center lg:flex-row flex-col gap-y-10 lg:gap-x-10 items-center'>
          <div htmlFor='textcheckbox' className="card mt-5 lg:w-[25%] w-[95%] flex flex-col justify-between cursor-pointer h-fit lg:h-[70vh] border-none shadow-xl rounded-xl">
            <form>
                   <input  type='checkbox' className='w-[1rem] h-[1rem] lg:w-[1.6rem] absolute  lg:h-[1.6rem] m-3  rounded-[0.25rem] border-[1px]
                    cursor-pointer border-solid  border-neutral-300 outline-none  shadow-sm ' onChange={()=>{
                      setTextCheckbox((state)=> !state)
                    }}/>
                  </form>
                <div>
                  <div className='flex pl-3  lg:w-auto w-[90%]  justify-center mt-8 '>
                        <img src={TextAd} alt='MediaAds' />
                  </div>
                </div>
                <div className='flex flex-col h-[30%] lg:h-[25%] leading-8 lg:leading-tight w-full rounded-b-lg items-center justify-center bg-gray-100'>
                    <h3 className='text-[1rem] text-gray-400'>Create</h3>
                    <h1 className='text-[1.2rem] font-medium'>Text Ads</h1>
                </div>
          
          </div>
          <div className="card mt-5 lg:w-[25%] w-[95%] flex flex-col justify-between cursor-pointer h-fit lg:h-[70vh] border-none shadow-xl rounded-xl">
                <form>
                   <input type='checkbox'  className='w-[1rem] h-[1rem] lg:w-[1.6rem] absolute  lg:h-[1.6rem] m-3  rounded-[0.25rem] border-[1px]
                    cursor-pointer border-solid  border-neutral-300 outline-none  shadow-sm ' onChange={()=>{
                      setMediaCheckbox((state)=> !state)
                    }}/>
                  </form>
                <div>
                  <div className='flex pl-3  lg:w-auto w-[90%]  justify-center mt-8 '>
                        <img src={mediaAds} alt='MediaAds' />
                  </div>
                </div>
                <div className='flex flex-col h-[30%] lg:h-[25%] leading-8 lg:leading-tight w-full rounded-b-lg items-center justify-center bg-gray-100'>
                    <h3 className='text-[1rem] text-gray-400'>Create</h3>
                    <h1 className='text-[1.2rem] font-medium'>Media Ads</h1>
                </div>
               
          </div>
        </div>
      <div className='cursor-pointer mt-12 mb-6 lg:mb-0 lg:mt-0 flex justify-end pr-5'>
        
         <button className='bg-blue-500 rounded-md  text-white w-[140px] h-[35px]' onClick={ClickHandler}>Next</button>
          
        
      </div>
    </div>
   
  )
}

export default Createads