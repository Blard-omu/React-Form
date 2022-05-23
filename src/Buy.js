import React from 'react'
import { Link } from 'react-router-dom'

const Buy = () => {
  return (
    <div>
        <button>
        <Link to='/Buy' >
            Buy
        </Link>
        </button>


        <button>
        <Link to='/Sell' >
            Sell
        </Link>
        </button>
        <h2>Instant Buy</h2>
        <form >
            <div className="bio">
            <label htmlFor="">Name : </label>
            <input type="text" name="" id="" />
            </div>
            <div className="bio">
            <label htmlFor="">Name : </label>
            <input type="text" name="" id="" />
            </div>
            <div className="bio">
            <label htmlFor="">Name : </label>
            <input type="text" name="" id="" />
            </div>
            <div className="bio">
            <label htmlFor="">Name : </label>
            <input type="text" name="" id="" />
            </div>
        </form>
    </div>
  )
}

export default Buy