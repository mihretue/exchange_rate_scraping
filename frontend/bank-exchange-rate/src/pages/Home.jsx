import React, { useEffect, useState } from 'react'

const data = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 35 },
]

export default function Home() {
    const [ columns, setColumns] = useState([])
    const [scrapedData, setScrapedData] = useState([])

    useEffect(()=>{
        fetchData()
    },[])
    const fetchData= async ()=>{
        try{ 
        const response = fetch('http://127.0.0.1:8000/api/scraped/info/')
        const scraped_data = await response.json()
        setColumns(scraped_data.column_name)
        setScrapedData(scraped_data.transposed_data)
        } catch (err){
            console.log(err)
        }

    }


  return (
<div class="overflow-x-auto font-[sans-serif] container ">
      <table class="min-w-full bg-white">
        <thead class="whitespace-nowrap bg-gray-100 rounded">
            { columns.map((data)=>(
        <tr>
            <th class="p-4 text-left text-sm font-semibold text-black">
                {data}
            </th>

          </tr>
            ))
         
}
        </thead>

        <tbody class="whitespace-nowrap">
            { scrapedData.map((item,index)=>(
<tr class="hover:bg-gray-50" key={index}>
    {item.map((cell, cellIndex)=>(
            <td class="p-4 text-sm text-black" key={cellIndex}>
                {cell}
            </td>))
}
            </tr>
            ))


          
}
        </tbody>
      </table>

      <div class="md:flex m-4">
        <p class="text-sm text-gray-500 flex-1">Showind 1 to 5 of 100 entries</p>
        <div class="flex items-center max-md:mt-4">
          <p class="text-sm text-gray-500">Display</p>

          <select class="text-sm text-gray-500 border border-gray-400 rounded px-1 py-2 mx-4 outline-none">
            <option>5</option>
            <option>10</option>
            <option>20</option>
            <option>50</option>
            <option>100</option>
          </select>

          <div class="border flex rounded divide-x-2 border-gray-400 divide-gray-400">
            <button type="button" class="px-4 py-2 hover:bg-gray-50 text-sm">Previous</button>
            <button type="button" class="px-4 py-2 hover:bg-gray-50 text-sm">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}
