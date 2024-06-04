import React from 'react'
import { useParams } from 'react-router-dom';
interface TeamParams {
    teamId: string;
}
export default function Team() {
    const { teamId } = useParams<TeamParams>();
  return (
    <div>
      <h1>Team Details for {teamId}</h1>
    </div>
  )
}
