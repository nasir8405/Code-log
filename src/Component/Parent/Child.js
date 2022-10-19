import React from 'react'

export const Child = React.memo( (props) => {
        console.log("child Render",props.count)
        return (
            <div className='my-2 d-flex'>
                <button onClick={props.handleClick} className="mr-2">Handle Click</button>
                <div className='ms-2'>child:{props.count}</div>
                <div className='ms-2'>{props.data.n}</div>
            </div>
        )
    }
)
