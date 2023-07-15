import React from 'react'

export default function Header() {
  return (
    <>
    <div className='header'>

        <div className='left'>
            <ul>
                <li className='route'><span><h1>ToDo</h1></span></li>
                <li className='route'><a href="/">Home</a></li>
                <li className='route'><a href="/">Products</a></li>
                <li className='route'><a href="/">Content</a></li>
                <li className='route'><a href="/">About</a></li>
            </ul>

        </div>

        <div className='right'>
            <input type="text" />
            Search
        </div>

    </div>
    </>
  )
}
