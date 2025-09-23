import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardContent, 
  Box,
  Chip,
  Avatar,
  Divider
} from '@mui/material';
import { 
  Code, 
  Brush, 
  Settings, 
  Share,
  ArrowForward,
  PlayArrow,
  CheckCircle,
  Speed,
  Security,
  Support,
  Star,
  TrendingUp,
  Group,
  Assignment,
  Build,
  Launch,
  Phone,
  Email,
  LocationOn,
  WhatsApp
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Testimonials from '../components/Testimonials';

function CountUp({ end, duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    let frame;
    function animate() {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        frame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, [end, duration]);
  return <span ref={ref}>{count}</span>;
}

const Home = () => {
  const services = [
    {
      icon: Code,
      title: 'Bespoke Website Development',
      description: 'Websites engineered from scratch for your brand, using the latest technologies. No templates, just originality.',
      color: '#FF2C1F'
    },
    {
      icon: Brush,
      title: 'Website Redesign',
      description: 'Transform your online presence with a fresh, modern look and seamless user experience.',
      color: '#FF6B35'
    },
    {
      icon: Settings,
      title: 'Ongoing Website Care',
      description: 'Keep your site secure, fast, and up-to-date with proactive maintenance and support.',
      color: '#FF8E53'
    },
    {
      icon: Share,
      title: 'Social Media Management',
      description: 'Grow your brand and engage your audience with strategic social media solutions.',
      color: '#FFB366'
    }
  ];

  const whyChooseUs = [
    {
      icon: Speed,
      title: 'Truly Unique Builds',
      description: 'Every website is designed and developed from the ground up—no templates, no shortcuts.'
    },
    {
      icon: Security,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and robust infrastructure for peace of mind.'
    },
    {
      icon: Support,
      title: '24/7 Support',
      description: "We're here for you around the clock, so your business never misses a beat."
    },
    {
      icon: CheckCircle,
      title: 'Limitless Flexibility',
      description: 'Full control over design, features, and integrations—your vision, realized.'
    }
  ];

  const statistics = [
    { number: '150+', label: 'Projects Delivered' },
    { number: '100%', label: 'Client Retention' },
    { number: '24/7', label: 'Support Available' },
    { number: '0', label: 'Templates Used' }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We analyze your needs, goals, and target audience to create a strategy tailored to your business.',
      icon: Assignment
    },
    {
      step: '02',
      title: 'Design',
      description: 'Our designers create unique, user-friendly interfaces that convert visitors. No templates, pure creativity.',
      icon: Brush
    },
    {
      step: '03',
      title: 'Development',
      description: 'We build your website from the ground up using cutting-edge technologies. Every line of code is original.',
      icon: Build
    },
    {
      step: '04',
      title: 'Launch',
      description: 'We deploy your website and ensure everything is working perfectly for your business.',
      icon: Launch
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>MANIORA | Bespoke Website Development & Digital Solutions</title>
        <meta name="description" content="MANIORA crafts high-performance, custom websites from scratch. No templates, no limits—just premium web design, redesign, maintenance, and social media management for your brand." />
        <meta name="keywords" content="website development, custom websites, web design, digital solutions, website redesign, social media management, MANIORA, Hyderabad, premium web agency" />
        <meta property="og:title" content="MANIORA | Bespoke Website Development & Digital Solutions" />
        <meta property="og:description" content="Premium, custom-built websites and digital solutions. No templates, just results. Based in Hyderabad, serving global brands." />
        <meta property="og:image" content="/logo2White.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://maniora.in/" />
        <meta name="twitter:card" content="/home.webp" />
        <meta name="twitter:title" content="MANIORA | Website Development & Digital Solutions" />
        <meta name="twitter:description" content="Premium, custom-built websites and digital solutions. No templates, just results." />
        <meta name="twitter:image" content="/logo2White.png" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "MANIORA",
              "url": "https://maniora.in/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://maniora.in/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <Box
        sx={{
          minHeight: { xs: '340px', md: '80vh' },
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          pt: { xs: 7, md: 0 },
          pb: { xs: 3, md: 0 },
        }}
      >
        {/* Animated Background Elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            top: '10%',
            right: { xs: '5%', md: '10%' },
            width: { xs: '100px', md: '200px' },
            height: { xs: '100px', md: '200px' },
            background: 'radial-gradient(circle, rgba(255, 44, 31, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            bottom: { xs: '10%', md: '20%' },
            left: { xs: '5%', md: '5%' },
            width: { xs: '80px', md: '150px' },
            height: { xs: '80px', md: '150px' },
            background: 'radial-gradient(circle, rgba(255, 44, 31, 0.05) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '1.5rem', sm: '2rem', md: '3.5rem', lg: '5rem' },
                    lineHeight: { xs: 1.15, md: 1.1 },
                    mb: { xs: 1, md: 2 },
                    textAlign: { xs: 'center', md: 'left' },
                    background: 'linear-gradient(45deg, #FFFFFF 30%, #E0E0E0 90%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Digital Excellence
                  <span style={{ color: '#FF2C1F' }}>.</span>
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: '1.1rem', sm: '1.3rem', md: '2rem' },
                    color: 'rgba(255, 255, 255, 0.8)',
                    mb: { xs: 2, md: 3 },
                    textAlign: { xs: 'center', md: 'left' },
                    lineHeight: { xs: 1.4, md: 1.2 },
                  }}
                >
                  Websites crafted for your brand—no templates, no limits, just results.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '0.95rem', md: '1.1rem' },
                    color: 'rgba(255, 255, 255, 0.7)',
                    mb: { xs: 3, md: 4 },
                    maxWidth: { xs: '100%', md: '500px' },
                    textAlign: { xs: 'center', md: 'left' },
                    lineHeight: { xs: 1.6, md: 1.5 },
                  }}
                >
                  MANIORA delivers high-performance websites tailored to your business goals. We build from the ground up—no WordPress, no Shopify, no Wix—so your site is truly yours, unique and future-ready.
                </Typography>

                <Box sx={{ 
                  display: 'flex', 
                  gap: { xs: 1, md: 2 }, 
                  flexWrap: 'wrap',
                  justifyContent: { xs: 'center', md: 'flex-start' }
                }}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      component={Link}
                      to="/contact"
                      variant="contained"
                      size="large"
                      sx={{
                        background: '#FF2C1F',
                        color: 'white',
                        px: { xs: 3, md: 4 },
                        py: { xs: 1.2, md: 1.5 },
                        fontSize: { xs: '0.9rem', md: '1.1rem' },
                        fontWeight: 600,
                        width: { xs: '100%', sm: 'auto' },
                        '&:hover': {
                          background: '#E0241A',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Get Started
                      <ArrowForward sx={{ ml: 1 }} />
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      component="a"
                      href="https://wa.me/919640161711?text=Hi%20MANIORA%20Team%2C%20I%20would%20like%20to%20enquire%20about%20your%20website%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      size="large"
                      startIcon={<WhatsApp sx={{ color: '#25D366' }} />}
                      sx={{
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                        color: 'white',
                        px: { xs: 3, md: 4 },
                        py: { xs: 1.2, md: 1.5 },
                        fontSize: { xs: '0.9rem', md: '1.1rem' },
                        fontWeight: 600,
                        width: { xs: '100%', sm: 'auto' },
                        '&:hover': {
                          borderColor: '#25D366',
                          background: 'rgba(37, 211, 102, 0.08)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      WhatsApp Enquiry
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    height: { xs: '220px', sm: '300px', md: '500px' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: { xs: 2, md: 0 },
                  }}
                >
                  {/* Main Red Circle - Enhanced */}
                  <Box
                    sx={{
                      width: { xs: '150px', sm: '200px', md: '300px' },
                      height: { xs: '150px', sm: '200px', md: '300px' },
                      background: 'radial-gradient(circle, #FF2C1F 0%, #FF2C1F 70%, rgba(255, 44, 31, 0.3) 100%)',
                      borderRadius: '50%',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 1,
                      boxShadow: '0 0 50px rgba(255, 44, 31, 0.4)',
                      animation: 'pulse 4s ease-in-out infinite',
                      '@keyframes pulse': {
                        '0%, 100%': {
                          transform: 'translate(-50%, -50%) scale(1)',
                        },
                        '50%': {
                          transform: 'translate(-50%, -50%) scale(1.1)',
                        },
                      },
                    }}
                  />
                  
                  {/* Desktop Floating Elements */}
                  {services.map((service, index) => (
                    <Box
                      key={`desktop-${service.title}`}
                      sx={{
                        position: 'absolute',
                        top: `${20 + index * 15}%`,
                        left: `${10 + index * 20}%`,
                        display: { xs: 'none', md: 'block' },
                        zIndex: 2,
                        animation: `fadeIn 0.5s ease-in-out ${0.5 + index * 0.2}s both`,
                        '@keyframes fadeIn': {
                          '0%': {
                            opacity: 0,
                            transform: 'scale(0)',
                          },
                          '100%': {
                            opacity: 1,
                            transform: 'scale(1)',
                          },
                        },
                      }}
                    >
                      <Chip
                        icon={<service.icon />}
                        label={service.title}
                        sx={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: 'white',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          backdropFilter: 'blur(10px)',
                          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                        }}
                      />
                    </Box>
                  ))}

                  {/* Mobile Floating Elements - Circular Arrangement */}
                  {services.map((service, index) => {
                    // 4 chips, 360/4 = 90deg apart, start at -90deg (top)
                    const angle = (-90 + index * 90) * (Math.PI / 180);
                    const radius = 90; // px, distance from center
                    // Center of the container is 50%/50%, offset by radius
                    const top = `calc(50% + ${radius * Math.sin(angle)}px)`;
                    const left = `calc(50% + ${radius * Math.cos(angle)}px)`;
                    return (
                      <Box
                        key={`mobile-${service.title}`}
                        sx={{
                          position: 'absolute',
                          top,
                          left,
                          transform: 'translate(-50%, -50%)',
                          display: { xs: 'block', md: 'none' },
                          zIndex: 2,
                          animation: `fadeIn 0.5s ease-in-out ${0.5 + index * 0.2}s both`,
                          '@keyframes fadeIn': {
                            '0%': {
                              opacity: 0,
                              transform: 'translate(-50%, -50%) scale(0)',
                            },
                            '100%': {
                              opacity: 1,
                              transform: 'translate(-50%, -50%) scale(1)',
                            },
                          },
                        }}
                      >
                        <Chip
                          icon={<service.icon />}
                          label={service.title}
                          size="small"
                          sx={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            color: 'white',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(10px)',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                            fontSize: '0.75rem',
                            '& .MuiChip-label': {
                              fontSize: '0.75rem',
                            },
                          }}
                        />
                      </Box>
                    );
                  })}
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Us Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, background: 'rgba(255, 255, 255, 0.02)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    mb: { xs: 2, md: 3 },
                    fontSize: { xs: '1.8rem', sm: '2rem', md: '3rem' },
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  About MANIORA
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: { xs: '0.95rem', md: '1.1rem' },
                    lineHeight: 1.6,
                    mb: { xs: 3, md: 4 },
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  MANIORA crafts unique, high-performance websites from scratch—no templates, no shortcuts. We deliver premium digital solutions tailored to your brand for maximum impact.
                </Typography>
                
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: { xs: 2, md: 3 },
                  alignItems: { xs: 'center', md: 'flex-start' }
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <CheckCircle sx={{ color: '#FF2C1F', fontSize: { xs: 20, md: 24 } }} />
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      Custom-built websites from scratch
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <CheckCircle sx={{ color: '#FF2C1F', fontSize: { xs: 20, md: 24 } }} />
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      No templates or limitations
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <CheckCircle sx={{ color: '#FF2C1F', fontSize: { xs: 20, md: 24 } }} />
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      Complete creative freedom
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(255, 44, 31, 0.1) 0%, rgba(255, 44, 31, 0.05) 100%)',
                      zIndex: 1,
                    },
                  }}
                >
                  <Box
                    component="img"
                    src="/home.webp"
                    alt="MANIORA Office or Team"
                    sx={{
                      width: { xs: '100%', md: '120%' },
                      height: { xs: '300px', md: '400px' },
                      objectFit: 'cover',
                      display: 'block',
                      borderRadius: '20px',
                      boxShadow: '0 8px 32px rgba(255,44,31,0.10)',
                      mx: { xs: 0, md: 'auto' },
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback if image doesn't load */}
                  <Box
                    sx={{
                      width: '100%',
                      height: { xs: '300px', md: '400px' },
                      background: 'linear-gradient(135deg, #FF2C1F 0%, #FF6B35 100%)',
                      display: 'none',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      color: 'white',
                    }}
                  >
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                      MANIORA
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', px: 3 }}>
                      Digital Excellence
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Statistics Section */}
      {/* <Box sx={{ pt: { xs: 4, md: 2 }, pb: { xs: 5, md: 6 }, background: 'rgba(255, 44, 31, 0.05)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {statistics.map((stat, index) => (
              <Grid item xs={6} md={3} key={stat.label}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ textAlign: 'center' }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 700,
                      color: '#FF2C1F',
                      fontSize: { xs: '1.8rem', sm: '2rem', md: '3rem' },
                      mb: { xs: 0.5, md: 1 },
                    }}
                  >
                    {stat.label === 'Custom Projects' ? <CountUp end={50} /> :
                     stat.label === 'Custom Code' ? <CountUp end={100} /> :
                     stat.label === 'Support Available' ? '24/7' :
                     stat.label === 'Templates Used' ? '0' : stat.number}
                    {stat.label === 'Custom Projects' && '+'}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontWeight: 500,
                      fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                    }}
                  >
                    {stat.label}
                  </Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box> */}

      {/* Services Highlight Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, background: 'rgba(255, 255, 255, 0.02)' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              align="center"
              sx={{
                fontWeight: 700,
                mb: { xs: 1, md: 1 },
                fontSize: { xs: '1.8rem', sm: '2rem', md: '3rem' },
              }}
            >
              Our Services
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                mb: { xs: 4, md: 6 },
                fontSize: { xs: '0.95rem', md: '1.1rem' },
                px: { xs: 2, md: 0 },
              }}
            >
              Comprehensive digital solutions to elevate your online presence
            </Typography>
          </motion.div>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={service.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card
                    sx={{
                      height: { xs: 300, md: 340 },
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)',
                      '&:hover': {
                        borderColor: service.color,
                        transform: 'translateY(-5px)',
                        boxShadow: `0 10px 30px ${service.color}33`,
                      },
                      p: 0,
                    }}
                  >
                    <CardContent
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexGrow: 1,
                        textAlign: 'center',
                        p: { xs: 3, md: 4 },
                        width: '100%',
                        height: { xs: 210, md: 220 },
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: 54, md: 64 },
                          height: { xs: 54, md: 64 },
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}80 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: { xs: 1, md: 1.2 },
                        }}
                      >
                        <service.icon sx={{ color: 'white', fontSize: { xs: 28, md: 34 } }} />
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          mb: { xs: 0.5, md: 0.7 },
                          color: 'white',
                          fontSize: { xs: '1.08rem', md: '1.18rem' },
                          letterSpacing: 0.2,
                          minHeight: { xs: 48, md: 52 },
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.75)',
                          lineHeight: 1.7,
                          fontSize: { xs: '0.93rem', md: '1.01rem' },
                          mt: 0.2,
                        }}
                      >
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginTop: '3rem' }}
          >
            <Button
              component={Link}
              to="/services"
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'rgba(255, 255, 255, 0.3)',
                color: 'white',
                px: { xs: 3, md: 4 },
                py: { xs: 1.2, md: 1.5 },
                fontSize: { xs: '0.9rem', md: '1.1rem' },
                fontWeight: 600,
                '&:hover': {
                  borderColor: '#FF2C1F',
                  background: 'rgba(255, 44, 31, 0.1)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              View All Services
              <ArrowForward sx={{ ml: 1 }} />
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              align="center"
              sx={{
                fontWeight: 700,
                mb: { xs: 1, md: 1 },
                fontSize: { xs: '1.8rem', sm: '2rem', md: '3rem' },
              }}
            >
              Why Choose Custom Development?
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                mb: { xs: 4, md: 6 },
                fontSize: { xs: '0.95rem', md: '1.1rem' },
                px: { xs: 2, md: 0 },
              }}
            >
              We deliver exceptional results through custom code, innovation, and complete freedom
            </Typography>
          </motion.div>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {whyChooseUs.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={item.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: '#FF2C1F',
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <CardContent sx={{ textAlign: 'center', p: { xs: 3, md: 4 } }}>
                      <Box
                        sx={{
                          width: { xs: 60, md: 70 },
                          height: { xs: 60, md: 70 },
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #FF2C1F 0%, #FF2C1F80 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: { xs: 2, md: 3 },
                        }}
                      >
                        <item.icon sx={{ color: 'white', fontSize: { xs: 30, md: 35 } }} />
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: { xs: 1.5, md: 2 },
                          color: 'white',
                          fontSize: { xs: '1rem', md: '1.1rem' },
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          lineHeight: 1.6,
                          fontSize: { xs: '0.85rem', md: '0.9rem' },
                        }}
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Process Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, background: 'rgba(255, 255, 255, 0.02)' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              align="center"
              sx={{
                fontWeight: 700,
                mb: { xs: 1, md: 1 },
                fontSize: { xs: '1.8rem', sm: '2rem', md: '3rem' },
              }}
            >
              Our Process
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                mb: { xs: 4, md: 6 },
                fontSize: { xs: '0.95rem', md: '1.1rem' },
                px: { xs: 2, md: 0 },
              }}
            >
              A proven methodology that ensures your project's success
            </Typography>
          </motion.div>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {process.map((step, index) => (
              <Grid item xs={12} sm={6} md={3} key={step.step}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      position: 'relative',
                      '&:hover': {
                        borderColor: '#FF2C1F',
                      },
                    }}
                  >
                    <CardContent sx={{ textAlign: 'center', p: { xs: 3, md: 4 } }}>
                      <Box
                        sx={{
                          width: { xs: 70, md: 80 },
                          height: { xs: 70, md: 80 },
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #FF2C1F 0%, #FF2C1F80 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: { xs: 2, md: 3 },
                          position: 'relative',
                        }}
                      >
                        <step.icon sx={{ color: 'white', fontSize: { xs: 35, md: 40 } }} />
                        <Typography
                          variant="h4"
                          sx={{
                            position: 'absolute',
                            top: { xs: '-8px', md: '-10px' },
                            right: { xs: '-8px', md: '-10px' },
                            background: '#000',
                            color: '#FF2C1F',
                            width: { xs: 25, md: 30 },
                            height: { xs: 25, md: 30 },
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: { xs: '0.8rem', md: '0.9rem' },
                            fontWeight: 700,
                          }}
                        >
                          {step.step}
                        </Typography>
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: { xs: 1.5, md: 2 },
                          color: 'white',
                          fontSize: { xs: '1rem', md: '1.1rem' },
                        }}
                      >
                        {step.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          lineHeight: 1.6,
                          fontSize: { xs: '0.85rem', md: '0.9rem' },
                        }}
                      >
                        {step.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Enhanced CTA Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    mb: { xs: 2, md: 3 },
                    fontSize: { xs: '1.8rem', sm: '2rem', md: '3rem' },
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  Ready for a Truly Custom Website?
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: { xs: '0.95rem', md: '1.1rem' },
                    lineHeight: 1.6,
                    mb: { xs: 3, md: 4 },
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  Let's discuss your project and create something truly unique together. 
                  Our team builds custom websites from scratch with complete freedom 
                  and unlimited possibilities.
                </Typography>
                
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: { xs: 1.5, md: 2 },
                  alignItems: { xs: 'center', md: 'flex-start' }
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Phone sx={{ color: '#FF2C1F' }} />
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      +91 9640161711
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Email sx={{ color: '#FF2C1F' }} />
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      maniora.official@gmail.com
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <LocationOn sx={{ color: '#FF2C1F' }} />
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      Hyderabad, Telangana
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    p: { xs: 3, md: 4 },
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 600,
                      mb: { xs: 2, md: 3 },
                      color: 'white',
                      textAlign: 'center',
                      fontSize: { xs: '1.5rem', md: '2rem' },
                    }}
                  >
                    Get Your Free Consultation
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      mb: { xs: 3, md: 4 },
                      textAlign: 'center',
                      fontSize: { xs: '0.9rem', md: '1rem' },
                    }}
                  >
                    Schedule a free 30-minute consultation to discuss your project 
                    and get a custom quote.
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Button
                      component={Link}
                      to="/contact"
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{
                        background: '#FF2C1F',
                        color: 'white',
                        py: { xs: 1.2, md: 1.5 },
                        fontSize: { xs: '0.9rem', md: '1.1rem' },
                        fontWeight: 600,
                        '&:hover': {
                          background: '#E0241A',
                        },
                      }}
                    >
                      Start Your Project
                    </Button>
                    <Button
                      component={Link}
                      to="/portfolio"
                      variant="outlined"
                      size="large"
                      fullWidth
                      sx={{
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                        color: 'white',
                        py: { xs: 1.2, md: 1.5 },
                        fontSize: { xs: '0.9rem', md: '1.1rem' },
                        fontWeight: 600,
                        '&:hover': {
                          borderColor: '#FF2C1F',
                          background: 'rgba(255, 44, 31, 0.1)',
                        },
                      }}
                    >
                      View Our Work
                    </Button>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Testimonials />
    </>
  );
};


export default Home; 
