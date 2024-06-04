import React from 'react'
import { Link } from 'react-router-dom'
export default function Teams() {
  return (
    <div>
      <h1>Teams List</h1>
      <Link to="/teams/team1">Team 1</Link>
      <Link to="/teams/team2">Team 2</Link>
    </div>
  )
}
