import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonIcon from '@mui/icons-material/Person';
import Grid from '@mui/material/Grid';

const pages = ['Home', 'Professionals', 'Products', 'Blog'];
const professionalsTopics = ['Architects', 'Interior Designers', 'Construction Companies', 'Landscape Architects', 'Home Builders', 'Painters', 'Carpenters'];
const productsTopics = ['Furniture', 'Hardware Items', 'Gardening Items and Tools', 'Bathware', 'Lighting'];

function TopBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElProfessionals, setAnchorElProfessionals] = React.useState(null);
  const [anchorElProducts, setAnchorElProducts] = React.useState(null);
  // const [isAppBarFixed, setIsAppBarFixed] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenProfessionalsMenu = (event) => {
    setAnchorElProfessionals(event.currentTarget);
  };

  const handleOpenProductsMenu = (event) => {
    setAnchorElProducts(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseProfessionalsMenu = () => {
    setAnchorElProfessionals(null);
  };

  const handleCloseProductsMenu = () => {
    setAnchorElProducts(null);
  };

  // React.useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     const isFixed = scrollTop > 0;
  //     setIsAppBarFixed(isFixed);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);


  return (
    // <AppBar position={isAppBarFixed ? 'fixed' : 'relative'} sx={{ backgroundColor: 'white', color: 'green', transition: 'position 0.2s ease-in-out', }}>
    <AppBar position ="relative" sx={{ backgroundColor: 'white', color: 'green' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleOpenNavMenu}
            sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start', // Logo aligns to the left
            }}
          >
            <img src="Logo.png" alt="" height={65} width={65} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={
                  page === 'Professionals' ? handleOpenProfessionalsMenu : page === 'Products' ? handleOpenProductsMenu : null
                }
                sx={{ my: 2, mx: 2, color: 'green', display: 'block', textAlign: 'center', fontSize: '16px', letterSpacing: '0.1rem' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            <Tooltip title="Sign In">
              <IconButton color="inherit" sx={{ fontSize: 16 }} aria-label="Sign In">
                <PersonIcon color="secondary" />
              </IconButton>
            </Tooltip>
            <Typography variant="body1" color="primary" fontWeight={600} sx={{ mr: 2 }}>
              Sign In
            </Typography>

            <Box sx={{ width: '10px' }} /> {/* Add a gap of 10px between the icons */}

            <Tooltip title="Sign Up">
              <IconButton color="inherit" sx={{ fontSize: 16 }} aria-label="Sign Up">
                <ExitToAppIcon color="secondary" />
              </IconButton>
            </Tooltip>
            <Typography variant="body1" color="primary" fontWeight={600}>
              Sign Up
            </Typography>
          </Box>

          <Menu
            sx={{ mt: '45px', '& .MuiPaper-root': { width: '30rem' } }}
            id="menu-appbar-professionals"
            anchorEl={anchorElProfessionals}
            open={Boolean(anchorElProfessionals)}
            onClose={handleCloseProfessionalsMenu}
          >
            <Grid container>
              {professionalsTopics.map((topic) => (
                <Grid item xs={6} key={topic}>
                  <MenuItem onClick={handleCloseProfessionalsMenu}>
                    <Typography textAlign="center" sx={{ color: 'green' }}>
                      {topic}
                    </Typography>
                  </MenuItem>
                </Grid>
              ))}
            </Grid>
          </Menu>

          <Menu
            sx={{ mt: '45px', '& .MuiPaper-root': { width: '28rem' } }}
            id="menu-appbar-products"
            anchorEl={anchorElProducts}
            open={Boolean(anchorElProducts)}
            onClose={handleCloseProductsMenu}
          >
            <Grid container>
              {productsTopics.map((topic) => (
                <Grid item xs={6} key={topic}>
                  <MenuItem onClick={handleCloseProductsMenu}>
                    <Typography textAlign="center" sx={{ color: 'green' }}>
                      {topic}
                    </Typography>
                  </MenuItem>
                </Grid>
              ))}
            </Grid>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>

  );
}

export default TopBar;

export { pages };
