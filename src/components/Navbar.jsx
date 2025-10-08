import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{
          background: scrolled ? 'rgba(0, 0, 0, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: scrolled ? '0 2px 20px rgba(0, 0, 0, 0.3)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: { xs: 0.5, md: 1 } }}>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="text-decoration-none">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pl: { xs: 1, md: 4 } }}>
                <picture>
                  <source media="(min-width: 900px)" srcSet="/logo2White.png" />
                  <img 
                    src="/logo2White.png" 
                    alt="Maniora Logo" 
                    style={{ height: '36px', width: 'auto', display: 'block' }} 
                  />
                </picture>
              </Box>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Button
                  component={Link}
                  to={item.path}
                  sx={{
                    color: 'white',
                    position: 'relative',
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      width: isActive(item.path) ? '100%' : '0%',
                      height: '2px',
                      background: '#FF2C1F',
                      transition: 'all 0.3s ease',
                      transform: 'translateX(-50%)',
                    },
                    '&:hover::after': {
                      width: '100%',
                    },
                  }}
                >
                  {item.name}
                </Button>
              </motion.div>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ 
              display: { md: 'none' },
              mr: 1,
            }}
          >
            <MenuIcon sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem' } }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: { xs: '280px', sm: '320px' },
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        <Box sx={{ 
          p: { xs: 2, sm: 3 }, 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          <img src="/logo2White.png" alt="Maniora Logo" style={{ height: '40px', width: 'auto' }} />
          <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
            <CloseIcon sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem' } }} />
          </IconButton>
        </Box>
        <List sx={{ pt: 1 }}>
          {navItems.map((item) => (
            <ListItem 
              key={item.name} 
              component={Link} 
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                color: 'white',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                py: { xs: 2, sm: 2.5 },
                '&:hover': {
                  background: 'rgba(255, 44, 31, 0.1)',
                },
              }}
            >
              <ListItemText 
                primary={item.name} 
                sx={{
                  '& .MuiTypography-root': {
                    fontWeight: isActive(item.path) ? 600 : 400,
                    color: isActive(item.path) ? '#FF2C1F' : 'white',
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Spacer for fixed navbar */}
      <Toolbar />
    </>
  );
};

export default Navbar; 