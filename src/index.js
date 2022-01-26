import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"

const Home = () => (
  <div> <h2> TKTL notes app </h2> </div>
)

const Notes = () => (
  <div> <h2>Notes</h2> </div>
)

const Users = () => (
  <div> <h2>Users</h2> </div>
)

const App = () => {
  const [page, setPage] = useState('home')

  const toPage = (page) => (event) => {
    event.preventDefault()
    setPage(page)
  }

  const content = () => {
    if (page === 'home') {
      return <Home />
    } else if (page === 'notes') {
      return <Notes />
    } else if (page === 'users') {
      return <Users />
    }
  }

  const padding = {
    padding: 5
  }

  return (
    <div>
      <div>
        <a href="" onClick={toPage('home')} style={padding}> {/* eslint-disable-line */}
          home
        </a>
        <a href="" onClick={toPage('notes')} style={padding}> {/* eslint-disable-line */}
          notes
        </a>
        <a href="" onClick={toPage('users')} style={padding}> {/* eslint-disable-line */}
          users
        </a>
      </div>

      {content()}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))