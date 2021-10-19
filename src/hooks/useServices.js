import { useEffect, useState } from "react"

const useServices = ()=>{
    const [services, setServices] = useState([])
    const [priceItems, setPriceItem] =useState([])
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    useEffect(()=>{
        fetch('/pricingData.json')
        .then(res=>res.json())
            .then(data => setPriceItem(data))
    },[])
    return {
        services, priceItems
    }
}
export default useServices;