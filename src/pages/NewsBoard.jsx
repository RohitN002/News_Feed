import { useEffect, useState } from "react"
import NewsItem from "./NewsItem"


const NewsBoard = ({category}) => {
  const [articles,setArticles]=useState([])
  useEffect(()=>{
let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=8207dfe779b14cd5b490e51b5667e813`
fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles))
  },[category])
  return (
    <div>
    <h2 className="text-center">Latest <span className=" badge bg-danger">News </span></h2>
    {
      articles.map((news,index)=>{
return <NewsItem key={index} 
title={news.title}
 description={news.description}
  url={news.url}
   src={news.urlToImage}
    content={news.content}/>
      })
    }
    </div>
  )
}

export default NewsBoard