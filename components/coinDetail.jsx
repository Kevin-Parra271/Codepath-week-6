import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

let params = useParams();
const [fullDetails, setFullDetails] = useState(null);

useEffect(() => {
    const getCoinDetail = async () => {
      const details = await fetch(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${params.symbol}&tsyms=USD&api_key=` +
          API_KEY
      );
      const description = await fetch(
        `https://min-api.cryptocompare.com/data/all/coinlist?fsym=${params.symbol}&api_key=` +
          API_KEY
      );
  
      const detailsJson = await details.json();
      const descripJson = await description.json();
  
      setFullDetails({"numbers": detailsJson.DISPLAY, "textData": descripJson.Data});
    };
    
    getCoinDetail().catch(console.error);
  
    return (
        <div>
          <h2>{coinInfo.FullName}</h2>
          <img
            src={`https://www.cryptocompare.com${coinData.IMAGEURL}`}
            alt={`${symbol} icon`}
          />
          <p>{coinInfo.Description}</p>
          <table>
        <tbody> 
         <tr>
            <th>Launch Date </th>
            <td> </td>
            </tr>
            <tr>
            <th>Website </th>
            <td> </td>
            </tr>
            <tr>
            <th>Whitepaper </th>
            <td> </td>
            </tr>
            <tr>
        <th>Monetary Symbol </th>
        <td> </td>
         </tr>
         <tr>
            <th>Market </th>
            <td> </td>
            </tr>
            <tr>
            <th>Last Transaction </th>
            <td> </td>
            </tr>
            <tr>
            <th>Last Transaction Value</th>
            <td> </td>
            </tr>
         <tr>
            <th>Volume </th>
            <td> </td>
            </tr>
            <tr>
             <th>Today's Open Price </th>
            <td> </td>
           </tr>
         <tr>
             <th>Highest Price during the Day </th>
             <td> </td>
           </tr>
            <tr>
              <th>Lowest Price during the Day </th>
              <td> </td>
            </tr>
            <tr>
              <th>Change from Previous Day </th>
              <td> </td>
            </tr>
            <tr>
             <th>Market Cap </th>
              <td> </td>
            </tr>
          </tbody>
        </table>

        </div>
      );


}, [params.symbol]);
  
  