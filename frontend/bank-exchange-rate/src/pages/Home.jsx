import React, { useEffect, useState } from 'react'



export default function Home() {
    // const [ columns, setColumns] = useState([])
    const [scrapedData, setScrapedData] = useState([])

  

    const fetchData= async ()=>{
        try{ 
        const response = await fetch('http://127.0.0.1:8000/api/scraped/info/')

        if(!response.ok){
          throw new Error(response.statusText)
        }
        const data = await response.json()
        console.log(data)
        setScrapedData(data)
        } catch (err){
            console.log(err)
        }

    }
  useEffect(()=>{
        fetchData()
    },[])

  return (
<div className="overflow-x-auto font-[sans-serif] container ">
      <table className="min-w-full bg-white">
        <thead className="whitespace-nowrap bg-gray-100 rounded">
        <tr>
            <th className="p-4 text-left text-sm font-semibold text-black">
                Currency Code
            </th>
            <th className="p-4 text-left text-sm font-semibold text-black">
                Currency Name
            </th>
            <th className="p-4 text-left text-sm font-semibold text-black">
                Cash Buying
            </th>
            <th className="p-4 text-left text-sm font-semibold text-black">
                Cash Selling
            </th>
          </tr>
        </thead>
        <tbody className="whitespace-nowrap">
            { scrapedData.map((item)=>( 
              
              <tr className="hover:bg-gray-50" key={item.id}>
    
                <td className="p-4 text-sm text-black" >
                  {item.currency_code}
                </td>
                <td className="p-4 text-sm text-black" >
                  {item.currency_name}
                </td>
                <td className="p-4 text-sm text-black" >
                  {item.cash_buying}
                </td>
                <td className="p-4 text-sm text-black" >
                  {item.cash_selling}
                </td>
                </tr>
))}
        </tbody>
      </table>

      <div className="md:flex m-4">
        <p className="text-sm text-gray-500 flex-1">Showind 1 to 5 of 100 entries</p>
        <div className="flex items-center max-md:mt-4">
          <p className="text-sm text-gray-500">Display</p>

          <select className="text-sm text-gray-500 border border-gray-400 rounded px-1 py-2 mx-4 outline-none">
            <option>5</option>
            <option>10</option>
            <option>20</option>
            <option>50</option>
            <option>100</option>
          </select>

          <div className="border flex rounded divide-x-2 border-gray-400 divide-gray-400">
            <button type="button" className="px-4 py-2 hover:bg-gray-50 text-sm">Previous</button>
            <button type="button" className="px-4 py-2 hover:bg-gray-50 text-sm">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}
