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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#FFF',
        }}
      >
        <Container maxWidth="md">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: theme.palette.primary.main }}
            >
              posterr
            </Typography>
            <Avatar alt="Michael Scott" src="assets/images/avatar.jpg" />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
