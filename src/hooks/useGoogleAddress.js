import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDDGwB9LKegIhIepp4NqFSFfmn6ARRDM98`;

  useEffect(async () => {
    const response = await axios.get(API);
    setMap(response.data.results[0].geometry.location);
  }, []);

  return map;
};
export default useGoogleAddress;
