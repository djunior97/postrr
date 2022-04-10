import React from 'react'
import { Container } from '@mui/material'

import { Header } from 'components/Header'
import { Feed } from 'components/Feed'

export function Home() {
  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Feed />
      </Container>
    </>
  )
}
