import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

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

  // De-structure the workout detail
  const { bodyPart, gifUrl, name, target, equipment } = workoutDetail;

  const workoutExtraDetail = [
    {
      icon: <CheckCircleIcon />,
      name: bodyPart,
      tag: 'Body Part',
    },
    {
      icon: <CheckCircleIcon />,
      name: target,
      tag: 'Target Muscle',
    },
    {
      icon: <CheckCircleIcon />,
      name: equipment,
      tag: 'Equipment',
    },
  ];

  return (
    <>
      <main className='mx-auto max-w-7xl'>
        <div className='flex md:flex-row flex-col items-center md:gap-16 gap-2 px-4 sm:px-6 lg:px-8 pt-14 sm:pt-24'>
          <div className='w-full'>
            <img className='w-full' src={gifUrl} alt={name} loading='lazy' />
          </div>
          <div className='w-full'>
            <h1 className='font-bold text-3xl sm:text-5xl sm:mb-10 mb-6 capitalize'>
              {name}
            </h1>
            <p className='text-slate-700 mb-6 lg:text-lg text-base'>
              Want to maximize your fitness potential? Look no further than this
              exceptional exercise, designed to work your {target} like never
              before. Not only does it provide a challenging and effective
              workout, but it also has the added benefit of improving your mood
              and boosting your energy levels. Whether you're an experienced
              athlete or just starting out on your fitness journey, this
              exercise is a must-try. Incorporate it into your routine today and
              watch your strength and stamina soar!
            </p>

            {workoutExtraDetail.map((item) => (
              <div className='flex items-center gap-2 mb-4 text-slate-700 fill-slate-700 border-b-2 border-gray-300 pb-4'>
                <div className='w-6'>{item.icon}</div>
                <div className='capitalize'>
                  {item.tag} - {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <WorkoutVideos workoutVideos={workoutVideos} name={workoutDetail.name} />
      <SimilarWorkouts
        targetMuscleWorkouts={targetMuscleWorkouts}
        equipmentWorkouts={equipmentWorkouts}
      />
    </>
  );
};

export default SingleWorkoutDetail;
