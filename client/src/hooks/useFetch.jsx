import React, {useEffect, useState} from "react";

const API_KEY = import.meta.env.VITE_GIPHY_API;

const useFetch = ({keyword}) => {
    const [gifUrl, setGifUrl] = useState('');

    const fetchGifs = async () => {
        try{
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(' ').join('')}&limit=1`);
            const {data} = await response.json();

            setGifUrl(data[0]?.images?.downsized_medium?.url)
            console.log(`image!!: ${data[0]?.images?.downsized_medium?.url}`);
            console.log(`keyword:!!! ${keyword}`);
        }catch (error) {
            setGifUrl('https://metro.co.uk/wp-content/uploads/2015/03/google_gif.gif?quality=90&strip=all&zoom=1&resize=480%2C218')
        }
    }
    useEffect(() => {
        if(keyword) fetchGifs();
    },[keyword]);

    return gifUrl;
}

export default useFetch;
