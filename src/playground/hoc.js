// Higher Order Component (HOC) - A compoinent that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract State

import React from 'react'
import ReactDOM from 'react-dom'

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: { props.info }</p>
  </div>
)

const withAdminWarning = WrappedComponent => props => (
  <div>
    { props.isAdmin && <p>This is private info. Please don't share.</p> }
    <WrappedComponent { ...props } />
  </div>
)

const requireAuthentication = WrappedComponent => props => (
  <div>
    {
      props.isAuthenticated ?
      <WrappedComponent { ...props } /> :
      <p>Access Denied! You Are Not Authenticated.</p>
    }    
  </div>
)

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={ false } info='Here are the details' />, document.getElementById('app'))
// ReactDOM.render(<AdminInfo isAdmin={ true } info='Here are the details' />, document.getElementById('app'))
