import React from "react"

const NewsItem = ({title,description,url,src}) => {
  const image =`https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg`
  return (
  
      <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 text-center" style={{maxWidth:"300px"}}>
        
  <img src={src?src:image} style={{height:"200px", width:'280px', overflow:"hidden"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,30)}</h5>
    <p className="card-text">{description?description.slice(0,80):"news"}</p>
    <a href={url} className="btn btn-primary">Read more...</a>
  </div>
</div>
  
  )
}

export default NewsItem