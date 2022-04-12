import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Container } from '@mui/material'

import { Header } from 'components/Header'
import { Feed } from 'components/Feed'
import { UserProfile } from 'components/UserProfile'
import { ModalBase } from 'components/ModalBase'
import { Quote } from 'components/Quote'

export function Home() {
  const navigate = useNavigate()
  const location = useLocation()
  const [modalQuoteOpen, setModalQuoteOpen] = useState(false)
  const [modalUserOpen, setModalUserOpen] = useState(false)
  const handleCloseQuoteModal = () => {
    setModalQuoteOpen(false)
  }
  const handleCloseUserProfile = () => {
    setModalUserOpen(false)
    navigate(-1)
  }

  useEffect(() => {
    if (location.pathname.includes('/userProfile')) {
      setModalUserOpen(true)
    } else {
      setModalUserOpen(false)
    }
  }, [location])

  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Feed openQuoteModal={() => setModalQuoteOpen(true)} />
      </Container>

      <ModalBase isOpen={modalUserOpen} onClose={handleCloseUserProfile}>
        <UserProfile backButtonAction={handleCloseUserProfile} />
      </ModalBase>

      <ModalBase isOpen={modalQuoteOpen} onClose={handleCloseQuoteModal}>
        <Quote />
      </ModalBase>
    </>
  )
}
