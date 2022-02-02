import { useEffect, useState } from 'react';
import axios from 'axios';

const PORT = process.env.PORT || 5000;

function NewsFeed() {

  const [articles, setArticles] = useState(null)

  // Moving this to the backend (server.js)
  // useEffect(() => {

  //   const options = {
  //     method: 'GET',
  //     url: 'https://crypto-news-live3.p.rapidapi.com/news',
  //     headers: {
  //       'x-rapidapi-host': 'crypto-news-live3.p.rapidapi.com',
  //       'x-rapidapi-key': 'bb38151e24msha271fe5e90f5b03p151d27jsnabf027f0721e'
  //     }
  //   };

  //   axios.request(options).then((response) => {
  //     console.log(response.data);
  //     setArticles(response.data)
  //   }).catch((error) => {
  //     console.error(error);
  //   });

  //   }, []);

  useEffect(() => {

    const options = {
      method: 'GET',
      url: `http://localhost:${PORT}/news`
    }

    axios.request(options).then((response) => {
      console.log(response.data);
      setArticles(response.data)
    }).catch((error) => {
      console.error(error);
    });
  },[])

  const firstEightArticles = articles?.slice(0, 8);

  return (
    <div className="news-feed">
      <h2>News Feed</h2>
      {firstEightArticles?.map((article, _index) => (
        <div key={_index}>
          <a href={article.url}><p>{article.title}</p></a>
        </div>))}
    </div>
  );
}

export default NewsFeed;