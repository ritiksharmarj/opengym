import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchData, workoutOptions, youtubeOptions } from '../utils/fetchData';
import { WORKOUT_DATABASE_URL, YT_SEARCH_URL } from '../utils/config';
import WorkoutVideos from '../components/WorkoutVideos';
import SimilarWorkouts from '../components/SimilarWorkouts';

const SingleWorkoutDetail = () => {
  const { id } = useParams();
  const [workoutDetail, setWorkoutDetail] = useState({});
  const [workoutVideos, setWorkoutVideos] = useState([]);
  const [targetMuscleWorkouts, setTargetMuscleWorkouts] = useState([]);
  const [equipmentWorkouts, setEquipmentWorkouts] = useState([]);

  useEffect(() => {
    // IIFE
    (async () => {
      // Fetch single workout data using ID
      const singleWorkoutDetailData = await fetchData(
        `${WORKOUT_DATABASE_URL}/exercises/exercise/${id}`,
        workoutOptions
      );
      setWorkoutDetail(singleWorkoutDetailData);

      // Fetch workout videos using workout name
      const workoutVideosData = await fetchData(
        `${YT_SEARCH_URL}/search?query=${singleWorkoutDetailData.name} exercise`,
        youtubeOptions
      );
      setWorkoutVideos(workoutVideosData.contents);

      // Fetch target muscle workouts list
      const targetMuscleWorkoutsData = await fetchData(
        `${WORKOUT_DATABASE_URL}/exercises/target/${singleWorkoutDetailData.target}`,
        workoutOptions
      );
      setTargetMuscleWorkouts(targetMuscleWorkoutsData);

      // Fetch equipment workouts list
      const equipmentWorkoutsData = await fetchData(
        `${WORKOUT_DATABASE_URL}/exercises/equipment/${singleWorkoutDetailData.equipment}`,
        workoutOptions
      );
      setEquipmentWorkouts(equipmentWorkoutsData);
    })();
  }, [id]);

  return (
    <>
      <main></main>
      <WorkoutVideos workoutVideos={workoutVideos} name={workoutDetail.name} />
      <SimilarWorkouts
        targetMuscleWorkouts={targetMuscleWorkouts}
        equipmentWorkouts={equipmentWorkouts}
      />
    </>
  );
};

export default SingleWorkoutDetail;
