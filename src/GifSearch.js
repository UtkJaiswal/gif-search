import React, { useState } from "react";
import { base_url, api_key } from './config';

const GifSearch = () => {

    const [value,setValue]=useState("");
    const [gifs,setGifs]=useState([])
    const [loader,setLoader] =useState(false)
    

    const search=(e) =>{
        // console.log("fjfjf",value);
        const url=`${base_url}?api_key=${api_key}&q=${value}`
        if(url.length>0)
        {
            setLoader(true)
            fetch(url)
            .then((res)=>{
                return res.json()
            })
            .then((result)=>{
                setGifs(result.data.map((gif)=>{
                    setLoader(true)
                    return gif.images.fixed_height.url
                }))
            })
            .catch(()=>{
                console.log("Error occured")
                setLoader(false);
            })
        }
    }
  return (
    <div>
      <div className="header">
        <div>
          <input type="text" placeholder="Article Name or Keywords" value={value} onChange={(e)=>setValue(e.target.value)} />
          <button onClick={search}>
            Search
          </button>
        </div>
      </div>
      <div className="result">
        {
          (0) ? (
            <div className="loading">
              <div className="loader">
              </div>
            </div>
          ) : (
            <div className="list">
              {
                gifs.map((gif,index)=>{
                  return (
                    <div className="item" key={index}>
                      <img src={gif}/>  
                    </div>
                  )
                })
              }
            </div>
          )
        }
      </div>
    </div>
  );
};

export default GifSearch;
