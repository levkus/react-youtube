import React from 'react';
import _ from 'lodash';
import VideoListItem from './video_list_item';

const VideoList = ({ videos, onVideoSelect }) => {
  const videoItems = _.map(videos, video => {
    return <VideoListItem key={video.etag} video={video} onVideoSelect={() => onVideoSelect(video)}/>
  });

  return(
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;
