import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Container, Modal } from '@mui/material'

import { Header } from 'components/Header'
import { Feed } from 'components/Feed'

export function Home() {
  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
    navigate(-1)
  }

  useEffect(() => {
    if (location.pathname.includes('/userProfile')) setOpen(true)
  }, [location])

  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Feed />
      </Container>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <h1>hello</h1>
      </Modal>
    </>
  )
}
