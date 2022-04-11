import React from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Avatar,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'

export function Header() {
  const theme = useTheme()

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
            <Avatar
              alt="Michael Scott"
              src="https://www.bu.edu/lernet/artemis/years/2017/projects/StudentWebsites/Dara/images/MichaelScott.png"
            />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
