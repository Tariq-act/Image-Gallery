import { useState, useEffect } from 'react';
import axios from 'axios';
const count = 1;
function LoadImage() {
  const url = `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_CLIENT_ID}`;
  const [image, setImage] = useState([]);

  useEffect(() => {
    const fetchImage = async () => {
      const response = await axios.get(url);
      const Data = await response.data;
      setImage(Data);
      return Data;
    };
    fetchImage();
  }, [url, count]);
  return image;
}

function SearchImage(query) {
  const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_CLIENT_ID}`;
  const [image, setImage] = useState([]);

  useEffect(() => {
    const fetchImage = async () => {
      const response = await axios.get(url);
      const Data = await response.data.results;
      setImage(Data);
      console.log(Data);
      return Data;
    };
    fetchImage();
  }, [query]);
  return image;
}

export { LoadImage, SearchImage };
