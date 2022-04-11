import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Container } from '@mui/material'

import { Header } from 'components/Header'
import { Feed } from 'components/Feed'
import { UserProfile } from 'components/UserProfile'
import { ModalBase } from 'components/ModalBase'

export function Home() {
  const navigate = useNavigate()
  const location = useLocation()
  const [modalOpen, setModalOpen] = useState(false)
  const handleClose = () => {
    setModalOpen(false)
    navigate(-1)
  }

  useEffect(() => {
    if (location.pathname.includes('/userProfile')) {
      setModalOpen(true)
    } else {
      setModalOpen(false)
    }
  }, [location])

  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Feed />
      </Container>

      <ModalBase isOpen={modalOpen} onClose={handleClose}>
        <UserProfile />
      </ModalBase>
    </>
  )
}
