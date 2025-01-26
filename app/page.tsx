import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoCard from './components/VideoCard'; 

function HomePage() {
  const [videos, setVideos] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const fetchVideos = async () => {
    try {
      const response = await axios.get('/api/videos/feed');
      setVideos(response.data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setIsLoading(false); 
    }
  };

  fetchVideos();
}, []);

return (
  <div>
    {isLoading ? (
      <p>Loading...</p>
    ) : (
      videos.map((video) => (
        <VideoCard key={video.id} video={video} /> 
      ))
    )}
  </div>
);
}

export default HomePage;