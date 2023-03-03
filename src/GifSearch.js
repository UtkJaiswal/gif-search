import React, { useState } from "react";

const GifSearch = () => {

    const [value,setValue]=useState("");
    const [gifs,setGifs]=useState([])

    const onChange = (e)=>{
        setValue(e.target.value)
        // console.log("value-",value)
    }

    const search=(e) =>{
        // console.log("fjfjf",value);
        const url=`https://api.giphy.com/v1/gifs/search?api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65&q=${value}`
        if(url.length>0)
        {
            fetch(url)
            .then((res)=>{
                return res.json()
            })
            .then((result)=>{
                setGifs(result.data.map((gif)=>{
                    return gif.images.fixed_height.url
                }))
            })
            .catch(()=>{
                console.log("Error occured")
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
