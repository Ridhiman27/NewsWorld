import React, { useState,useEffect } from 'react'
import Newsitem from './Newsitem' 
import Spinner from './Spinner' 
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props)=>{

  const[articles,setArticles] = useState([]);
  const[loading,setLoading] = useState(true);
  const[page,setPage] = useState(1);
  const[totalResults,setTotalResults] = useState(0);

    

    const updateNews = async()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

      setLoading(true);
  
      let res = await fetch(url);
      let data = await res.json();


      setArticles(data.articles);
      setTotalResults(data.totalResults);
      setLoading(false);
    }

    useEffect(()=>{
      updateNews();
    });

    const fetchMoreData = async()=>{


      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;

      setPage(page+1);


      let res = await fetch(url);
      let data = await res.json();

      setArticles(articles.concat(data.articles));
      setTotalResults(data.totalResults);
     
    };

    return (
        <>
            <h2 className='text-center'>NewsWorld - Top Headlines</h2>
            {loading && <Spinner/>}

            <InfiniteScroll
              dataLength={articles.length} //This is important field to render the next data
              next={fetchMoreData}
              hasMore={articles.length !== totalResults}
              loader={<Spinner/>}
            >

            <div className="container">

            <div className="row">
              {articles.map((element)=>{
              
                return <div className="col-md-4" key={element.url}>
                    <Newsitem  title={element.title} description={element.description?element.description.slice(0,88):""} imageUrl = {element.urlToImage} newsUrl={element.url} author={element.author} date= {element.publishedAt} />   
                </div>

              })}
            </div>

            </div>

            </InfiniteScroll>

        </>
    )
  
}

News.defaultProps = {
  pageSize:6,
  country: "in",
  category: 'general',
}

News.propTypes = {
  pageSize:PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
}

export default News
