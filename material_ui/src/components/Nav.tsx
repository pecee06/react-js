import {AppBar, Box, Toolbar, Typography, Button, IconButton} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'

const Nav = () => {
  return (
    <Box
      component="nav"
      sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Our Album
          </Typography>
          <Button color="inherit" variant="outlined">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Nav