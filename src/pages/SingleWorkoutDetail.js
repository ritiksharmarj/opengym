import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchData, workoutOptions, youtubeOptions } from '../utils/fetchData';
import { WORKOUT_DATABASE_URL, YT_SEARCH_URL } from '../utils/config';

const SingleWorkoutDetail = () => {
  const { id } = useParams();
  const [workoutDetail, setWorkoutDetail] = useState({});
  const [workoutVideos, setWorkoutVideos] = useState([]);

  useEffect(() => {
    // IIFE
    (async () => {
      // Fetch single workout data by ID
      const singleWorkoutDetailData = await fetchData(
        `${WORKOUT_DATABASE_URL}/exercises/exercise/${id}`,
        workoutOptions
      );
      setWorkoutDetail(singleWorkoutDetailData);

      // Fetch workout videos by workout name
      const workoutVideosData = await fetchData(
        `${YT_SEARCH_URL}/search?query=${singleWorkoutDetailData.name} exercise`,
        youtubeOptions
      );
      setWorkoutVideos(workoutVideosData.contents);
    })();
  }, [id]);

  return <div>SingleWorkoutDetail</div>;
};

export default SingleWorkoutDetail;
