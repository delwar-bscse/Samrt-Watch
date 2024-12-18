import React from 'react'
import WatchCard from './components/WatchCard'
import { watchDatas } from './constants/watchData'

const App = () => {
  return (
    <div>
      <WatchCard watchDatas={watchDatas}/>
    </div>
  )
}

export default App