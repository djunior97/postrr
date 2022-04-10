import { styled as customize } from '@mui/material/styles'
import { Paper } from '@mui/material'

export const FeedContainer = customize(Paper)({
  display: 'flex',
  flexDirection: 'column',
  padding: '16px',
})
