/* @flow */
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Layout (props: {children: any}) {
  return <div className="Layout">
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
    </ul>
    <hr/>
    {props.children}
  </div>
}
