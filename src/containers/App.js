/* @flow */
import { connect } from 'react-redux'
import React from 'react'
// eslint-disable-next-line
import type { Connector } from 'react-redux'
import type { PageState, Dispatcher } from '../types'
import Hello from '../components/Hello'
import Layout from '../components/Layout'

type PageProps = PageState & Dispatcher;

function Page ({ location }: PageProps) {
  return (
    <Layout>
      <div>Location: {location}</div>
      <Hello/>
    </Layout>
  )
}

const connector: Connector<{}, PageProps> = connect(({ page }) => page)

export default connector(Page)
