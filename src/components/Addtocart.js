import React from 'react'
import exampleImage from '../assets/a2blogo.jpg';
import '../styles/Addtocart.css';


const Addtocart = () => {

  const itemsarray = [
    {
      item: "dosa",
      quantity:4,
      Rate: 50,
      Total: 200
    },
    {
      item: "biriyani",
      quantity: 1,
      Rate: 150,
      Total: 150
    },
    {
      item: "soup",
      quantity: 2,
      Rate: 50,
      Total: 100
    },

  ]

  return (
    <div className="main">
      <div className="pdhead">
        <img src={exampleImage} alt="" />
        <h1>ADYAR ANANDA BHAVAN</h1>
      </div>
      <br />
      <h2>Cart</h2>
      <div className="items_table">
        <table>
          <thead>
            <tr>
              <th>Items</th>
              <th>Quantity</th>
              <th>Rate</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {itemsarray.map((item, index) => (
              <tr key={index}>
                <td>{item.item}</td>
                <td>{item.quantity}</td>
                <td>{item.Rate}</td>
                <td>{item.Total}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="4">{itemsarray.reduce((acc, curr) => acc + curr.Total, 0)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button className='addmorebutton'>Addmore</button>
      <button className='orderbtn'>order</button>
      <br />
      <br />



    </div>
  )
}

export default Addtocart