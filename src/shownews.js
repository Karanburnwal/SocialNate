import React from 'react'

const showNews = ({news}) => {
    return (
        <article className='news-container'>
            <a className="image" href={news.url}>
            <img src={news.urlToImage} alt="error"/>
            </a>
            <div className="news-info">
                <a href={news.url}><h3>{news.title}</h3></a>
                <h4>-{news.author}</h4>
                <a href={news.url}><p>{news.description.substr(0,150)}...</p></a>
                <p>{news.publishedAt}</p>
            </div>
        </article>
        
    )
}

export default showNews
