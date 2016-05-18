import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
  return (
    <li className="list-group-item" onClick={() => onVideoSelect(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
        </div>
        <div className="media-body">
          <h6 className="media-heading">{video.snippet.title}</h6>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;
