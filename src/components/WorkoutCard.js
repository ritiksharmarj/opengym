import React from 'react';
import { Link } from 'react-router-dom';

const WorkoutCard = ({ workout }) => (
  <Link to='/workout/'>
    <div>{workout.name}</div>
  </Link>
);

export default WorkoutCard;
