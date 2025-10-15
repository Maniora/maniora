import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Box, 
  Card, 
  CardContent
} from '@mui/material';
import { 
  Business, 
  EmojiEvents, 
  TrendingUp, 
  Group,
  Lightbulb,
  Rocket,
  CheckCircle,
  TrackChanges,
  Visibility
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const About = () => {
  const timelineData = [
    {
      year: '2025',
      title: 'Research & Innovation',
      description: 'Embarked on a new phase focused on research, advanced digital solutions, and setting new standards in the industry.',
      icon: Lightbulb
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of the curve with cutting-edge technologies and creative solutions.'
    },
    {
      icon: Rocket,
      title: 'Excellence',
      description: 'Every project is crafted with attention to detail and commitment to quality.'
    },
    {
      icon: Group,
      title: 'Collaboration',
      description: 'We work closely with our clients to ensure their vision becomes reality.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About MANIORA | Premium Web Agency</title>
        <meta name="description" content="Learn about MANIORA, a premium web agency crafting custom websites and digital solutions from scratch. Discover our mission, vision, and values." />
        <meta name="keywords" content="about MANIORA, web agency, custom websites, digital solutions, premium web design, Hyderabad, brand story" />
        <meta property="og:title" content="About MANIORA | Premium Web Agency" />
        <meta property="og:description" content="Discover MANIORA's story, mission, and values. Premium custom website development and digital solutions." />
        <meta property="og:image" content="/logo2White.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://maniora.in/about" />
        <meta name="twitter:card" content="/home.png" />
        <meta name="twitter:title" content="About MANIORA | Premium Web Agency" />
        <meta name="twitter:description" content="Discover MANIORA's story, mission, and values. Premium custom website development and digital solutions." />
        <meta name="twitter:image" content="/logo2White.png" />
        {/* Google Tag Manager */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W25MGLNG');`}
        </script>
        {/* End Google Tag Manager */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://maniora.in/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About",
                  "item": "https://maniora.in/about"
                }
              ]
            }
          `}
        </script>
      </Helmet>

      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="lg">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h1"
              align="center"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.7rem' },
                mb: { xs: 2.5, md: 1.5 },
                letterSpacing: 2,
                textTransform: 'uppercase',
                color: 'white',
              }}
            >
              About MANIORA
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 3.5, md: 3 } }}>
              <Box sx={{ width: 48, height: 4, borderRadius: 2, background: 'linear-gradient(90deg, #FF2C1F, #FF6B35)' }} />
            </Box>
            <Typography
              variant="h2"
              align="center"
              sx={{
                fontWeight: 400,
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                color: 'rgba(255, 255, 255, 0.7)',
                mb: { xs: 5, md: 7 },
                letterSpacing: 0.5,
              }}
            >
              Transforming digital experiences through innovation and excellence
            </Typography>
          </motion.div>

          {/* About Us Information Section */}
          <Box sx={{ py: { xs: 4, md: 8 }, background: 'rgba(255, 255, 255, 0.02)', mb: { xs: 5, md: 8 }, borderRadius: 4 }}>
            <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
              <Grid item xs={12} md={6}>
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                      width: '100%',
                      maxWidth: { xs: '100%', md: 480 },
                      mx: { xs: 'auto', md: 0 },
                      mb: { xs: 3.5, md: 0 },
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
                      src="/aboutus.png"
                      alt="MANIORA Team"
                      sx={{
                        width: '100%',
                        height: { xs: '220px', sm: '300px', md: '400px' },
                        objectFit: 'cover',
                        display: 'block',
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
                        height: { xs: '220px', sm: '300px', md: '400px' },
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

              <Grid item xs={12} md={6}>
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      mb: { xs: 2.2, md: 3 },
                      fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
                      textAlign: { xs: 'center', md: 'left' },
                      color: 'white',
                    }}
                  >
                    Who We Are
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: { xs: '0.98rem', md: '1.08rem' },
                      lineHeight: 1.7,
                      mb: { xs: 2.2, md: 3 },
                      textAlign: { xs: 'center', md: 'left' },
                    }}
                  >
                    MANIORA is a passionate team of digital craftsmen dedicated to creating exceptional websites and digital solutions. We believe every business deserves a unique online presence that stands out and delivers real results.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: { xs: '0.98rem', md: '1.08rem' },
                      lineHeight: 1.7,
                      mb: { xs: 2.2, md: 3 },
                      textAlign: { xs: 'center', md: 'left' },
                    }}
                  >
                    Our approach is simple: we build from scratch, think outside the box, and never compromise on quality. From concept to launch, every pixel and line of code is crafted with purpose, ensuring your website not only looks stunning but performs exceptionally.
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.5, md: 2 }, alignItems: { xs: 'center', md: 'flex-start' }, mt: { xs: 1.5, md: 0 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ width: 24, height: 24, borderRadius: '50%', background: '#FF2C1F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CheckCircle sx={{ color: 'white', fontSize: 18 }} />
                      </Box>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: { xs: '0.95rem', md: '1.05rem' } }}>
                        Custom-built websites from scratch
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ width: 24, height: 24, borderRadius: '50%', background: '#FF2C1F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CheckCircle sx={{ color: 'white', fontSize: 18 }} />
                      </Box>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: { xs: '0.95rem', md: '1.05rem' } }}>
                        No templates or limitations
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ width: 24, height: 24, borderRadius: '50%', background: '#FF2C1F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CheckCircle sx={{ color: 'white', fontSize: 18 }} />
                      </Box>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: { xs: '0.95rem', md: '1.05rem' } }}>
                        Complete creative freedom
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Box>

          {/* Mission & Vision */}
          <Grid container spacing={5} sx={{ mb: { xs: 6, md: 10 } }} alignItems="stretch">
            {/* Mobile animation for Mission */}
            <Grid item xs={12} md={6}>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    background: 'rgba(255, 255, 255, 0.07)',
                    backdropFilter: 'blur(12px)',
                    border: '1.5px solid rgba(255, 255, 255, 0.13)',
                    borderRadius: 4,
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
                    minHeight: 260,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%',
                    mb: { xs: 1.5, md: 0 },
                  }}
                >
                  <CardContent sx={{ p: { xs: 2.5, md: 4 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: { xs: 2.7, md: 2 } }}>
                      <Box sx={{ width: 38, height: 38, borderRadius: '50%', background: '#FF2C1F', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 1 }}>
                        <TrackChanges sx={{ color: 'white', fontSize: 22 }} />
                      </Box>
                      <Typography variant="h4" sx={{ fontWeight: 700, color: 'white', letterSpacing: 1 }}>
                        Our Mission
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontSize: '1.08rem',
                        lineHeight: 1.8,
                        mb: { xs: 0.5, md: 0 },
                      }}
                    >
                      To empower businesses with cutting-edge digital solutions that drive growth, 
                      enhance user experiences, and create lasting impact in the digital landscape. 
                      We believe every business deserves a website that not only looks stunning 
                      but also performs exceptionally.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            {/* Mobile animation for Vision */}
            <Grid item xs={12} md={6}>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    background: 'rgba(255, 255, 255, 0.07)',
                    backdropFilter: 'blur(12px)',
                    border: '1.5px solid rgba(255, 255, 255, 0.13)',
                    borderRadius: 4,
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
                    minHeight: 260,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%',
                    mt: { xs: 0, md: 0 },
                  }}
                >
                  <CardContent sx={{ p: { xs: 2.5, md: 4 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: { xs: 2.7, md: 2 } }}>
                      <Box sx={{ width: 38, height: 38, borderRadius: '50%', background: '#FF2C1F', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 1 }}>
                        <Visibility sx={{ color: 'white', fontSize: 22 }} />
                      </Box>
                      <Typography variant="h4" sx={{ fontWeight: 700, color: 'white', letterSpacing: 1 }}>
                        Our Vision
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontSize: '1.08rem',
                        lineHeight: 1.8,
                        mb: { xs: 0.5, md: 0 },
                      }}
                    >
                      To be the leading force in digital transformation, recognized for our creativity, 
                      technical expertise, and unwavering commitment to client success.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>

          {/* Core Values Section - Restyled for theme harmony */}
          <Box sx={{ background: 'rgba(30,30,32,0.85)', borderRadius: 4, py: { xs: 4, md: 8 }, mb: { xs: 1.5, md: 6 }, boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.08)', px: { xs: 0.5, md: 4 } }}>
            <Typography
              variant="h6"
              align="center"
              sx={{ color: 'white', fontWeight: 700, mb: { xs: 2.5, md: 3 }, letterSpacing: 1.2, textTransform: 'uppercase', fontSize: { xs: '1rem', md: '1.15rem' } }}
            >
              Core Values
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 2.5, md: 3 } }}>
              <Box sx={{ width: 32, height: 3, borderRadius: 2, background: '#FF2C1F', boxShadow: '0 0 6px 1px #FF2C1F33' }} />
            </Box>
            <Grid container spacing={{ xs: 2, md: 2.5 }} justifyContent="center">
              {values.map((value, idx) => (
                <Grid item xs={12} md={4} key={value.title}>
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card sx={{
                      background: 'rgba(40,40,44,0.92)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: 3,
                      boxShadow: '0 1px 8px 0 #FF2C1F08',
                      p: { xs: 2.2, md: 2 },
                      transition: 'box-shadow 0.3s, border-color 0.3s',
                      minHeight: 150,
                      width: '100%',
                      maxWidth: 400,
                      mx: 'auto',
                      mb: { xs: 2.5, md: 0 },
                    }}>
                      <CardContent sx={{ textAlign: 'center', p: 0 }}>
                        <Box sx={{ width: 40, height: 40, borderRadius: '50%', background: '#FF2C1F', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 1.2, boxShadow: '0 1px 6px 0 #FF2C1F22' }}>
                          <value.icon sx={{ color: 'white', fontSize: 22 }} />
                        </Box>
                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 600, mb: 0.5, fontSize: '1.01rem' }}>
                          {value.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.95rem' }}>
                          {value.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default About; 