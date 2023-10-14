import React from 'react'

function Footer() {
  return (
    <div>
        <div>
            {
            true ? (<button>Back</button>):(<div>
                <button>Back</button>
                <button>Next</button>
                </div>)
            }</div>
    </div>
  )
}

export default Footer