import {useState, useEffect} from "react";
import { BASE_URL, API_KEY, END_POINT } from "../helpers/constants";
import axios from 'axios';



const LOADING = "LOADING"

export default function useApplicationData () { 
  const [nasaInfo, setNasaInfo] = useState({});
  const [loading, setLoading] = useState(true)
  const fetchNasaInfo = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/${END_POINT}&api_key=${API_KEY}`)
      setNasaInfo(data.photos)  
      setTimeout(() => {setLoading(false)}, 3000);

    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => { 
    fetchNasaInfo()
  },[])

  return {
    nasaInfo,
    loading
  }
}