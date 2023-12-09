import {useEffect, useState } from 'react'

const useCurrencyInfo = (currency) => {
    // const [url, setUrl] = useState(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    const [data,setData] = useState({})

    useEffect(()=>{
        fetch(`https://api.exchangeratesapi.io/latest?base=${currency}`)
    .then((response)=> response.json())
    .then((res)=> setData(res[currency]))
},[currency])
console.log(data)

  return data
}

export default useCurrencyInfo