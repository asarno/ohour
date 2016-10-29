import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import Home from './components/Home'
import ProfessorDashboard from './components/ProfessorDashboard'
import ProfessorLogin from './components/ProfessorLogin'
import Queue from './components/Queue'
import RouteNotFound from './components/RouteNotFound'
import StudentLogin from './components/StudentLogin'

const Nav = () => (
  <div>
    <Link to='/student-login'>Student Login</Link>&nbsp;
    <Link to='/professor-login'>Professor Login</Link>
  </div>
)

const Container = (props) => (
  <div>
    <Nav />
    {props.children}
  </div>
)

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='/student-login' component={StudentLogin} />
          <Route path='/professor-login' component={ProfessorLogin} />
          <Route path='/queue' component={Queue} />
          <Route path='*' component={RouteNotFound} />
        </Route>
      </Router>
    )
  }
}

export default App
