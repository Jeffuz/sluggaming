import React from 'react'
import { Link } from 'react-router-dom'

const Teams = () => {
  return (
    <div className='flex items-center h-screen justify-center gap-4'>
      <Link to='/teams/apex_legends'>Apex Legends</Link>
      <Link to='/teams/call_of_duty'>Call of Duty</Link>
      <Link to='/teams/league_of_legends'>League of Legends</Link>
      <Link to='/teams/overwatch'>Overwatch</Link>
      <Link to='/teams/rocket_league'>Rocket League</Link>
      <Link to='/teams/valorant'>Valorant</Link>
    </div>
  )
}

export default Teams