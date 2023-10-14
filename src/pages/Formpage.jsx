import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {BsCheckCircleFill} from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
  
function Formpage() {

const [submitbtn, setsubmitbtn] = useState(false);
    const navigate = useNavigate();
    const navigate2 = useNavigate();
    
    const location = useLocation();
    const mediaCheckbox = location.state;
    


    function formsubmithandler(event){
        event.preventDefault();
        console.log("redirecting nhi hua");
        setsubmitbtn(true);
        setTimeout(() => {
        // navigate("/");
        navigate2("/createads");
            
        }, 600);

    }
    function backbtnhandler(){
        navigate("/createads");

    }



  return (
    <div className=' bg-gray-100 relative z-10 w-[100%] h-[100vh] '  >
             <div className={`w-[95%] pt-3  pr-6 pl-3 bg-white  border-2 mt-6 rounded-md mx-auto h-[100%] ${submitbtn ? "blur-md": "" } `}>
                     <h1 className="font-medium">Create Text {'&'} Media</h1>
                     <form onSubmit={formsubmithandler} >
                     <div className='flex lg:flex-row flex-col  justify-between items-center gap-x-10 pt-4 w-[100%] h-50% '>
                         <div className='lg:w-[50%] w-[95%] h-[100%] flex  gap-y-2  flex-col '>
                             <div>
                                 <label htmlFor='heading01' >Heading 01</label>
                                 <input
                                 id='heading01' 
                                 type='text'
                                 placeholder='Add a heading that whould make users interested' 
                                 className='w-[100%] mt-2 outline-none border-gray-100 border-2 p-2 rounded'/>
                             </div>
                             <div>
                                 <label htmlFor='heading01' >Heading 01</label>
                                 <input
                                 id='heading01' 
                                 type='text'
                                 placeholder='Add a heading that whould make users interested' 
                                 className='w-[100%] mt-2 outline-none border-gray-100 border-2 p-2 rounded'/>
                             </div>
                         </div>
                         <div className='lg:w-[50%]  w-[95%] lg:mt-0 mt-2 '>
                                 <label htmlFor='Description01' >Description 01</label>
                                 <textarea   
                                 id='Description01' 
                                 
                                 placeholder='Add primary text to help users understand more about your products, service or offers ' 
                                 className='w-[100%]  h-[7.7rem] mt-2 flex flex-grow resize-none 
                                 outline-none border-gray-100 border-2 p-2 rounded'/>
                             </div>
                     </div>

                     {
                        mediaCheckbox &&
                        <div >
                        <div className='flex lg:flex-row flex-col justify-between pt-4   w-[100%]  '>
                         <div className='lg:w-[30%] w-[95%] '>
                                 <label htmlFor='landscapeimg' >Landscape Marketing image {'(1.9:1)'} </label>
                                 <input
                                 id='landscapeimg' 
                                 type='text'
                                 placeholder='Add the URL of the image you want to use for the ad' 
                                 className='w-[100%] mt-2 outline-none border-gray-100 border-2 p-2 rounded'/>
                         </div>
                         <div  className='lg:w-[30%] w-[95%] '>
                                 <label htmlFor='heading01' >Portrait Marketing image {'(4:5)'}</label>
                                 <input
                                 id='portraitimg' 
                                 type='text'
                                 placeholder='Add the URL of the image you want to use for the ad' 
                                 className='w-[100%] mt-2 outline-none border-gray-100 border-2 p-2 rounded'/>
                         </div>
                         <div className='lg:w-[30%] w-[95%] '>
                                 <label htmlFor='Description01' >Square Marketing Image {'(1:1)'}</label>
                                 <input
                                 type='text'   
                                 id='Description01' 
                                 placeholder='Add the URL of the image you want to use for the ad' 
                                 className='w-[100%]  mt-2 h-auto flex flex-grow resize-none 
                                 outline-none border-gray-100 border-2 p-2 rounded'/>
                         </div>
                     </div >
                         <div className='pt-4'>
                                 <label htmlFor='videourl' >Video URL</label>
                                 <input
                                 type='text'   
                                 id='videourl' 
                                 placeholder='Add the URL of the video you want to use for the ad' 
                                 className='w-[100%] mt-2 h-auto flex flex-grow 
                                 resize-none outline-none border-gray-100 border-2 p-2 rounded'/>
                         </div>  
                     </div> 
                     }
                     
         
         
                     <div >
                         <div className='w-[100%]  flex flex-col lg:flex-row gap-x-10 justify-between'>
                             <div className='lg:w-[50%] w-[100%] pt-4'>
                                     <label htmlFor='bussinessname' >Bussiness Name</label>
                                     <input
                                     id='bussinessname' 
                                     type='text'
                                     placeholder='Add your bussiness name' 
                                     className='w-[100%]  mt-2 outline-none border-gray-100 border-2 p-2 rounded'/>
                             </div>
                             <div  className='lg:w-[50%] w-[100%] pt-4'>
                                     <label htmlFor='buttonlabel' >Button Label</label>
                                     {/* <input
                                     id='buttonlabel' 
                                     type='text'
                                     placeholder='Add the URL of the image you want to use for the ad' 
                                     className='w-[100%] mt-2 outline-none border-gray-100 border-2 p-2 rounded'/> */}
         
                                     <select 
                                         placeholder='Select a label that best suits your ad' 
                                         className='w-[100%] outline-none mt-2 border-gray-100 border-2 p-2 text-gray-400 rounded'>
                                         <option defaultValue >Select a label that best suits your ad</option>
                                         <option>Option 1</option>
                                         <option>Option 2</option>
                                     </select>
                         
                             </div>
                         </div>
                         <div className='w-[100%] pt-4'>
                             
                                     <label htmlFor='websiteurl' >Website URL </label>
                                     <input
                                     id='websiteurl' 
                                     type='text'
                                     placeholder='Add the URL of the landing page you want to redirect users to' 
                                     className='w-[100%] outline-none mt-2 border-gray-100 border-2 p-2  rounded'/>
                                     
                         
                         </div>
                     </div>
                         <div className='w-full flex justify-center items-center gap-x-8  pr-0 lg:pr-10 flex-row pt-6 pb-6 lg:pb-0 lg:pt-10'>
                             <div>
                                 <button 
                                 className=' rounded-md w-[130px] 
                                  border-gray-300 border-2 bg-gray-100 
                                  text-sm font-medium h-[40px]'
                                  onClick={backbtnhandler}> 
                                  Back </button>
                             </div>
                             <div >
                                 <button className='bg-blue-500 text-white rounded-md w-[130px] text-sm font-medium  h-[40px]' type='submit' > Submit </button>
                             </div>
                         </div>
                     </form>
                        
                     
            </div>
       
            <>            
                { submitbtn &&
                  <div className='flex justify-center bg-transparent absolute  top-0 items-center w-full h-full align-middle '> 
                  <div className = 'w-[300px] top-0  h-[150px] shadow-md bg-white flex justify-center flex-col items-center rounded-md border-2'>
                      <div>
                          <BsCheckCircleFill className='text-blue-600 text-2xl'/>
                      </div>
                      <div className='text-xl font-medium text-black'>
                          Submitted
                       </div>    
                  </div>
                  </div>          
                }    
                
            </>

            </div>
        
    
  )
}

export default Formpage;