import React from 'react';
import ReactPlayer from 'react-player';

interface Video {
    id: string;
    userId: string;
    url: string;
    caption: string;
    likes: number;
    comments: Comment[];
    // ... other properties
  }
  
  interface Comment {
    id: string;
    userId: string;
    text: string;
    createdAt: Date;
  }

interface VideoCardProps {
  video: Video; // Pass the video data as a prop
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <div className="mb-4">
      <ReactPlayer url={video.url} width="100%" height="300px" />
      {/* ... other video card content */}
    </div>
  );
};

export default VideoCard;