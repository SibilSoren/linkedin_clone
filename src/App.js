import React from 'react'
import Header from './componets/Header';
import Sidebar from "./componets/Sidebar";
import Feed from './componets/Feed';
import "./App.css"
const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>

      {/* Feed */}
      {/* Widget */}
    </div>
  )
}

export default App
