import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppBar, Box, Toolbar, Typography, Container } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { SelectUserInfo } from 'store/userInfo'

import { ProfilePicture } from './styles'

export function Header() {
  const theme = useTheme()
  const navigate = useNavigate()
  const location = useLocation()
  const loggedUser = useSelector(SelectUserInfo)

  return (
    <Box sx={{ flexGrow: 1, marginBottom: '16px' }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#FFF',
        }}
      >
        <Container maxWidth="md">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: theme.palette.primary.main }}
            >
              posterr
            </Typography>
            <ProfilePicture
              alt="Michael Scott"
              src="https://www.bu.edu/lernet/artemis/years/2017/projects/StudentWebsites/Dara/images/MichaelScott.png"
              onClick={() =>
                navigate(`${location.pathname}/userProfile/${loggedUser.id}`)
              }
            />
            <Typography
              variant="subtitle2"
              sx={{
                color: theme.palette.primary.textSecondary,
                marginLeft: '5px',
                cursor: 'pointer',
              }}
              onClick={() =>
                navigate(`${location.pathname}/userProfile/${loggedUser.id}`)
              }
            >
              @{loggedUser.username}
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
