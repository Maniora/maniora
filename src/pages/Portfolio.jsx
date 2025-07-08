import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Box, 
  Card, 
  CardContent,
  CardMedia,
  Button,
  Chip,
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton
} from '@mui/material';
import { 
  Code, 
  Brush, 
  Settings, 
  Share,
  Close,
  Launch,
  GitHub,
  Visibility,
  Speed,
  Security,
  Devices,
  Analytics
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Build Your Vision",
      category: "Business Website",
      description: "Premium business website specializing in crafting exceptional digital experiences. Features modern design with strategic positioning and comprehensive service offerings.",
      image: "/images/c2007c1a-6aec-42c8-a3f9-01f705ffb55d.png",
      metrics: {
        loadTime: "1.2s",
        lighthouse: "95/100",
        mobile: "Perfect",
        uptime: "99.9%"
      },
      features: [
        "Modern responsive design",
        "Service portfolio showcase",
        "Contact integration",
        "Professional branding"
      ],
      beforeAfter: {
        before: "No online presence for business",
        after: "Complete digital presence with inquiry system"
      },
      liveUrl: "https://www.buildyourvision.in/"
    },
    {
      id: 3,
      title: "N Wellness Studio",
      category: "Healthcare & Wellness",
      description: "Premium wellness and spa services platform featuring aromatherapy, body treatments, and holistic wellness solutions with online booking system.",
      image: "/images/b6159be2-e778-431e-a8f3-be873ca76eb9.png",
      metrics: {
        loadTime: "1.1s",
        lighthouse: "96/100",
        mobile: "Perfect",
        uptime: "99.7%"
      },
      features: [
        "Service booking system",
        "Treatment catalog",
        "Therapist profiles",
        "Online appointment scheduling"
      ],
      beforeAfter: {
        before: "Phone-only booking system",
        after: "24/7 online booking with 40% more appointments"
      },
      liveUrl: "https://nwellness.onrender.com/"
    },
    {
      id: 4,
      title: "Gangadhar Nagarjuna Workshops",
      category: "Workshop Platform",
      description: "Workshop conducting website with admin panel and payment gateway.",
      image: "/images/gangadharnagarjuna-placeholder.png",
      metrics: {},
      features: [],
      beforeAfter: {},
      liveUrl: "http://gangadharnagarjuna.in/"
    }
  ];

  const project = projects[selectedProject];

  return (
    <>
      <Helmet>
        <title>Portfolio | MANIORA - Custom Website Projects</title>
        <meta name="description" content="View MANIORA's portfolio of custom website projects. See our work in bespoke web development, redesign, and digital solutions for premium brands." />
        <meta name="keywords" content="portfolio, website projects, custom websites, web development, MANIORA, premium web agency, digital solutions" />
        <meta property="og:title" content="Portfolio | MANIORA - Custom Website Projects" />
        <meta property="og:description" content="Explore MANIORA's portfolio of custom website projects and digital solutions for premium brands." />
        <meta property="og:image" content="/logo2White.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://maniora.in/portfolio" />
        <meta name="twitter:card" content="/home.png" />
        <meta name="twitter:title" content="Portfolio | MANIORA - Custom Website Projects" />
        <meta name="twitter:description" content="Explore MANIORA's portfolio of custom website projects and digital solutions for premium brands." />
        <meta name="twitter:image" content="/logo2White.png" />
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
                  "name": "Portfolio",
                  "item": "https://maniora.in/portfolio"
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
          pb: 2,
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
                fontWeight: 700,
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.7rem' },
                mb: { xs: 1.5, md: 2 },
                background: 'linear-gradient(45deg, #FFFFFF 30%, #E0E0E0 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: 2,
                textTransform: 'uppercase',
              }}
            >
              OUR PORTFOLIO
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 2.5, md: 3 } }}>
              <Box sx={{ width: 48, height: 4, borderRadius: 2, background: 'linear-gradient(90deg, #FF2C1F, #FF6B35)' }} />
            </Box>
            <Typography
              variant="h2"
              align="center"
              sx={{
                fontWeight: 400,
                fontSize: { xs: '1rem', md: '1.5rem' },
                color: 'rgba(255, 255, 255, 0.7)',
                mb: { xs: 3, md: 6 },
              }}
            >
              Here are the projects our team has built.
            </Typography>
          </motion.div>

          {/* Projects Grid */}
          <Grid container spacing={{ xs: 3, md: 5 }}>
            {projects.map((project, idx) => (
              <Grid item xs={12} sm={6} md={4} key={project.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <Card
                    sx={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 3,
                      overflow: 'hidden',
                      boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)',
                      minHeight: { xs: 320, md: 340 },
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1)',
                      '&:hover': {
                        borderColor: '#FF2C1F',
                        boxShadow: '0 10px 30px #FF2C1F33',
                        transform: 'translateY(-8px) scale(1.02)',
                      },
                    }}
                  >
                    <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: { xs: 2, md: 3 } }}>
                      <Box sx={{ mb: 1.5 }}>
                        <Typography sx={{ fontSize: '1rem', color: '#FF2C1F', fontWeight: 700, mb: 0.5, letterSpacing: 0.5 }}>{project.category}</Typography>
                        <Typography variant="h5" sx={{ fontWeight: 800, color: 'white', mb: 1, fontSize: { xs: '1.18rem', md: '1.28rem' }, lineHeight: 1.25 }}>{project.title}</Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', fontSize: { xs: '1rem', md: '1.08rem' }, lineHeight: 1.6 }}>{project.description}</Typography>
                      </Box>
                      <Button
                        variant="contained"
                        size="medium"
                        fullWidth
                        sx={{
                          background: '#FF2C1F',
                          color: 'white',
                          fontWeight: 700,
                          letterSpacing: 1,
                          borderRadius: 2,
                          mt: 'auto',
                          minHeight: 44,
                          boxShadow: 'none',
                          '&:hover': { background: '#E0241A' },
                        }}
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        View Live Site
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Portfolio; 