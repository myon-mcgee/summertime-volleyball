// VideoPlayer.jsx

import React, { useState } from 'react';
import videoData from './videoData'; // Import video data
import './videoPlayer.css'; // Assuming your styles are here
import logo from '../../assets/Its Summertime White.png'
import { useNavigate } from 'react-router-dom';

const VideoPlayer = () => {
  const [mainVideoUrl, setMainVideoUrl] = useState(videoData[0].videoUrl); // Default to the first video
  const [filteredVideos, setFilteredVideos] = useState(videoData); // Initially, show all videos
  const [selectedYear, setSelectedYear] = useState('All'); // Initially no filter applied

  // Function to handle changing the main video
  const handleVideoChange = (newVideoUrl) => {
    setMainVideoUrl(newVideoUrl);
  };

  // Function to handle filtering by year
  const handleYearFilter = (year) => {
    setSelectedYear(year);
    if (year === 'All') {
      setFilteredVideos(videoData); // Show all videos if 'All' is selected
    } else {
      const filtered = videoData.filter(video => video.year === parseInt(year));
      setFilteredVideos(filtered); // Filter videos by selected year
    }
  };

  return (
    <div className="videoFrame">
    <div className='banner'>
        <img src={logo} alt="" />
    </div>
      {/* Main Video iframe */}
      <div className="mainVideo">
        <iframe
          src={mainVideoUrl}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          title="video"
          className="video"
          allowFullScreen
        />
      </div>

      <a href="#contact" className="btn">Contact</a>

      {/* Year Filter (Dropdown) */}
      <div className="filter">
        <label htmlFor="yearFilter">Filter by Year:</label>
        <select
          id="yearFilter"
          value={selectedYear}
          onChange={(e) => handleYearFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>

      <div className="work__container grid">
        {filteredVideos.map((video) => {
          const {id, title, thumbnailUrl, videoUrl} = video;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img
                  src={thumbnailUrl}
                  alt={title}
                  className="work__img"
                  onClick={() => handleVideoChange(videoUrl)} // Update the main video
                />
                <div className="work__mask"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoPlayer;
