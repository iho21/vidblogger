import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoCard from './VideoCard'; // Import the VideoCard component

interface Video {
  id: string;
  userId: string;
  url: string;
  caption: string;
  likes: number;
  comments: Comment[];
}

interface Comment {
  id: string;
  userId: string;
  text: string;
  createdAt: Date;
}

const VideoFeed = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('/api/videos'); 
        setVideos(response.data as Video[]); // Type assertion (be cautious)
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} /> 
      ))}
    </div>
  );
};

export default VideoFeed;