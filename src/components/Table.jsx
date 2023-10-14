import React from 'react'
function Table(props) {
   const item = props.data;
   
  return (
    <tr className=''>
           
        <td className='text-left '>{item.Campaigns|| item.Group}</td>
        <td className='text-right '>{item.Click || item.Clicks}</td>
        <td className='text-right'>USD {item.Cost}</td>
        <td className='text-right'>{item.Conversions}</td>
        <td  className='text-right'>USD {item.Revenue}</td>

    </tr>
   
  )
}

export default Table