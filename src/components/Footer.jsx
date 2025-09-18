import React, { useState } from 'react';
import { Box, Container, Grid, Typography, IconButton, Link, Accordion, AccordionSummary, AccordionDetails, useMediaQuery } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, Email, Phone, LocationOn, YouTube, ExpandMore } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/maniora._/', label: 'Instagram' },
    { icon: YouTube, href: 'https://www.youtube.com/channel/UChQWesrzooTO70klLZKfRQw', label: 'YouTube' },
    { icon: LinkedIn, href: 'https://www.linkedin.com/company/maniora-1/ ', label: 'LinkedIn' },
  ];

  const contactInfo = [
    { icon: Email, text: 'maniora.official@gmail.com', href: 'mailto:maniora.official@gmail.com', external: false },
    { icon: Phone, text: '+91 9640161711', href: 'tel:+919640161711', external: false },
    { icon: LocationOn, text: 'Hyderabad, Telangana', href: 'https://maps.google.com/?q=Hyderabad,Telangana', external: true },
  ];

  // Quick Links for navigation
  const quickLinks = [
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
  ];

  const services = [
    'Website Development',
    'Website Redesign',
    'Website Maintenance',
    'Social Media Management',
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // For mobile accordion state
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        {isMobile ? (
          <Box>
            {/* Brand Section */}
            <Box sx={{ mb: 2 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, justifyContent: 'center' }}>
                  <Link href="/" sx={{ display: 'inline-flex', alignItems: 'center' }}>
                    <img src="/logo2White.png" alt="Maniora Logo" style={{ height: '58px', width: 'auto' }} />
                  </Link>
                </Box>
                <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 3, textAlign: 'center' }}>
                  Transforming digital experiences through innovative web solutions and social media management.
                </Typography>
                {/* Social Links */}
                <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.label}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <IconButton
                        component={Link}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          '&:hover': {
                            color: '#FF2C1F',
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <social.icon />
                      </IconButton>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Box>
            {/* Accordions for each section */}
            <Accordion
              expanded={expanded === 'quickLinks'}
              onChange={handleAccordionChange('quickLinks')}
              sx={{
                background: 'transparent',
                color: 'white',
                border: 'none',
                boxShadow: 'none',
                mb: 1,
                '&:before': { display: 'none' },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: 'white', pr: 2, fontSize: 38 }} />}
                aria-controls="quickLinks-content"
                id="quickLinks-header"
                sx={{
                  px: 0,
                  pl: 1,
                  py: 0.5,
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 2,
                  mb: 1,
                  background: 'rgba(255,255,255,0.02)',
                  boxShadow: '0 1px 4px 0 rgba(0,0,0,0.04)',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600, pl: 1 }}>
                  Quick Links
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 0, pl: 3 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {quickLinks.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          textDecoration: 'none',
                          fontSize: '1rem',
                          pl: 1.5,
                          '&:hover': { color: '#FF2C1F', textDecoration: 'none' },
                          transition: 'color 0.3s ease',
                          cursor: 'pointer',
                        }}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'services'}
              onChange={handleAccordionChange('services')}
              sx={{
                background: 'transparent',
                color: 'white',
                border: 'none',
                boxShadow: 'none',
                mb: 1,
                '&:before': { display: 'none' },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: 'white', pr: 2, fontSize: 38 }} />}
                aria-controls="services-content"
                id="services-header"
                sx={{
                  px: 0,
                  pl: 1,
                  py: 0.5,
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 2,
                  mb: 1,
                  background: 'rgba(255,255,255,0.02)',
                  boxShadow: '0 1px 4px 0 rgba(0,0,0,0.04)',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600, pl: 1 }}>
                  Our Services
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 0, pl: 3 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {services.map((service, index) => (
                    <motion.div
                      key={service}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          pl: 1.5,
                          '&:hover': { color: '#FF2C1F' },
                          cursor: 'pointer',
                          transition: 'color 0.3s ease',
                        }}
                      >
                        {service}
                      </Typography>
                    </motion.div>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'contactInfo'}
              onChange={handleAccordionChange('contactInfo')}
              sx={{
                background: 'transparent',
                color: 'white',
                border: 'none',
                boxShadow: 'none',
                mb: 1,
                '&:before': { display: 'none' },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: 'white', pr: 2, fontSize: 38 }} />}
                aria-controls="contactInfo-content"
                id="contactInfo-header"
                sx={{
                  px: 0,
                  pl: 1,
                  py: 0.5,
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 2,
                  mb: 1,
                  background: 'rgba(255,255,255,0.02)',
                  boxShadow: '0 1px 4px 0 rgba(0,0,0,0.04)',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600, pl: 1 }}>
                  Contact Info
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 0, pl: 3 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {contactInfo.map((contact, index) => (
                    <motion.div
                      key={contact.text}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={contact.href}
                        {...(contact.external && { target: "_blank", rel: "noopener noreferrer" })}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          color: 'rgba(255, 255, 255, 0.7)',
                          textDecoration: 'none',
                          pl: 1.5,
                          '&:hover': {
                            color: '#FF2C1F',
                          },
                          transition: 'color 0.3s ease',
                        }}
                      >
                        <contact.icon sx={{ fontSize: 20 }} />
                        <Typography variant="body2">{contact.text}</Typography>
                      </Link>
                    </motion.div>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        ) : (
          <Grid container spacing={4}>
            {/* Brand Section */}
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <Link href="/" sx={{ display: 'inline-flex', alignItems: 'center' }}>
                    <img src="/logo2White.png" alt="Maniora Logo" style={{ height: '58px', width: 'auto' }} />
                  </Link>
                </Box>
                <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 3 }}>
                  Transforming digital experiences through innovative web solutions and social media management.
                </Typography>
                {/* Social Links */}
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.label}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <IconButton
                        component={Link}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          '&:hover': {
                            color: '#FF2C1F',
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <social.icon />
                      </IconButton>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>
            {/* Quick Links */}
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Typography variant="h6" sx={{ color: 'white', mb: 3, fontWeight: 600 }}>
                  Quick Links
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {quickLinks.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          textDecoration: 'none',
                          fontSize: '1rem',
                          '&:hover': { color: '#FF2C1F', textDecoration: 'none' },
                          transition: 'color 0.3s ease',
                          cursor: 'pointer',
                        }}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>
            {/* Services */}
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Typography variant="h6" sx={{ color: 'white', mb: 3, fontWeight: 600 }}>
                  Our Services
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {services.map((service, index) => (
                    <motion.div
                      key={service}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          '&:hover': { color: '#FF2C1F' },
                          cursor: 'pointer',
                          transition: 'color 0.3s ease',
                        }}
                      >
                        {service}
                      </Typography>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>
            {/* Contact Info */}
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Typography variant="h6" sx={{ color: 'white', mb: 3, fontWeight: 600 }}>
                  Contact Info
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {contactInfo.map((contact, index) => (
                    <motion.div
                      key={contact.text}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={contact.href}
                        {...(contact.external && { target: "_blank", rel: "noopener noreferrer" })}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          color: 'rgba(255, 255, 255, 0.7)',
                          textDecoration: 'none',
                          '&:hover': {
                            color: '#FF2C1F',
                          },
                          transition: 'color 0.3s ease',
                        }}
                      >
                        <contact.icon sx={{ fontSize: 20 }} />
                        <Typography variant="body2">{contact.text}</Typography>
                      </Link>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        )}

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Box
            sx={{
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              mt: 4,
              pt: 3,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: { xs: 1.5, md: 2 },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                © {currentYear} MANIORA. All rights reserved. | Designed with ❤️ for digital excellence
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Link
                  href="/privacy"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: { xs: '0.9rem', md: '0.9rem' },
                    '&:hover': { color: '#FF2C1F', textDecoration: 'none' },
                    transition: 'color 0.3s ease',
                  }}
                >
                  Privacy Policy
                </Link>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.4)', fontSize: { xs: '0.9rem', md: '0.9rem' } }}>|</Typography>
                <Link
                  href="/terms"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: { xs: '0.9rem', md: '0.9rem' },
                    '&:hover': { color: '#FF2C1F', textDecoration: 'none' },
                    transition: 'color 0.3s ease',
                  }}
                >
                  Terms & Conditions
                </Link>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer; 
