import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Box, 
  Card, 
  CardContent,
  Button,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { 
  Code, 
  Brush, 
  Settings, 
  Share,
  ExpandMore,
  CheckCircle,
  ArrowForward,
  Speed,
  Security,
  Devices,
  Analytics,
  Support
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const Services = () => {
  const [expanded, setExpanded] = useState(false);

  const services = [
    {
      icon: Code,
      title: 'Website Development',
      description: 'Custom websites built with modern technologies and best practices.',
      color: '#FF2C1F',
      features: [
        'Custom website design and development',
        'Responsive design for all devices',
        'SEO optimization',
        'Fast loading times',
        'Modern UI/UX design',
        'Content management system',
        'E-commerce integration',
        'Third-party API integration'
      ],
      process: [
        'Discovery & Planning',
        'Design & Prototyping',
        'Development & Testing',
        'Launch & Optimization'
      ]
    },
    {
      icon: Brush,
      title: 'Website Redesign',
      description: 'Transform your existing website with modern design and improved UX.',
      color: '#FF6B35',
      features: [
        'Complete website redesign',
        'Improved user experience',
        'Modern design trends',
        'Performance optimization',
        'Mobile-first approach',
        'Brand consistency',
        'A/B testing',
        'Analytics integration'
      ],
      process: [
        'Current Site Analysis',
        'Design Strategy',
        'Redesign & Development',
        'Testing & Launch'
      ]
    },
    {
      icon: Settings,
      title: 'Website Maintenance',
      description: 'Keep your website secure, updated, and performing at its best.',
      color: '#FF8E53',
      features: [
        'Regular security updates',
        'Performance monitoring',
        'Backup management',
        'Content updates',
        'Plugin updates',
        'Security scanning',
        'Uptime monitoring',
        'Technical support'
      ],
      process: [
        'Initial Assessment',
        'Maintenance Plan',
        'Regular Updates',
        'Performance Reports'
      ]
    },
    {
      icon: Share,
      title: 'Social Media Management',
      description: 'Strategic social media presence to grow your brand and engage customers.',
      color: '#FFB366',
      features: [
        'Content creation and curation',
        'Social media strategy',
        'Community management',
        'Paid advertising campaigns',
        'Analytics and reporting',
        'Brand voice development',
        'Influencer partnerships',
        'Crisis management'
      ],
      process: [
        'Strategy Development',
        'Content Planning',
        'Execution & Monitoring',
        'Analysis & Optimization'
      ]
    }
  ];

  const technologies = [
    'React.js', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS',
    'Material UI', 'WordPress', 'Shopify', 'MongoDB', 'PostgreSQL',
    'AWS', 'Vercel', 'Netlify', 'Git', 'Docker'
  ];

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Helmet>
        <title>Services | MANIORA - Custom Website Development</title>
        <meta name="description" content="Explore MANIORA's bespoke website development, redesign, maintenance, and social media management services. Premium digital solutions for your brand." />
        <meta name="keywords" content="services, website development, web design, website redesign, website maintenance, social media management, MANIORA, premium web agency" />
        <meta property="og:title" content="Services | MANIORA - Custom Website Development" />
        <meta property="og:description" content="Bespoke website development, redesign, maintenance, and social media management by MANIORA. Premium digital solutions for your brand." />
        <meta property="og:image" content="/logo2White.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://maniora.in/services" />
        <meta name="twitter:card" content="/aboutus.png" />
        <meta name="twitter:title" content="Services | MANIORA - Custom Website Development" />
        <meta name="twitter:description" content="Bespoke website development, redesign, maintenance, and social media management by MANIORA. Premium digital solutions for your brand." />
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
                  "name": "Services",
                  "item": "https://maniora.in/services"
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
                mb: { xs: 2, md: 1.5 },
                letterSpacing: 2,
                textTransform: 'uppercase',
                color: 'white',
              }}
            >
              Our Services
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 2.5, md: 3 } }}>
              <Box sx={{ width: 48, height: 4, borderRadius: 2, background: 'linear-gradient(90deg, #FF2C1F, #FF6B35)' }} />
            </Box>
            <Typography
              variant="h2"
              align="center"
              sx={{
                fontWeight: 400,
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                color: 'rgba(255, 255, 255, 0.7)',
                mb: { xs: 4, md: 7 },
                letterSpacing: 0.5,
              }}
            >
              Comprehensive digital solutions to elevate your online presence
            </Typography>
          </motion.div>

          {/* Services Grid */}
          <Grid container spacing={{ xs: 2.5, md: 5 }} sx={{ mb: { xs: 4, md: 10 } }}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} key={service.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Card
                    sx={{
                      background: 'rgba(255, 255, 255, 0.07)',
                      backdropFilter: 'blur(12px)',
                      border: '1.5px solid rgba(255, 255, 255, 0.13)',
                      borderRadius: 4,
                      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
                      height: '100%',
                      transition: 'all 0.55s cubic-bezier(0.4,0,0.2,1)',
                      '&:hover': {
                        borderColor: service.color,
                        boxShadow: `0 12px 36px 0 ${service.color}33`,
                        transform: 'translateY(-8px) scale(1.02)',
                      },
                      p: { xs: 1.5, md: 4 },
                      mb: { xs: 2, md: 0 },
                    }}
                  >
                    <CardContent sx={{ p: 0 }}>
                      <Box
                        sx={{
                          width: { xs: 44, md: 64 },
                          height: { xs: 44, md: 64 },
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${service.color} 60%, #1a1a1a 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: { xs: 1.5, md: 2.5 },
                          boxShadow: `0 2px 12px 0 ${service.color}22`,
                        }}
                      >
                        <service.icon sx={{ color: 'white', fontSize: { xs: 22, md: 32 } }} />
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          mb: { xs: 1, md: 1.5 },
                          color: 'white',
                          letterSpacing: 1,
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          mb: { xs: 1.5, md: 2.5 },
                          lineHeight: 1.7,
                          fontSize: { xs: '0.93rem', md: '1.08rem' },
                        }}
                      >
                        {service.description}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 700,
                          mb: { xs: 0.7, md: 1.2 },
                          color: service.color,
                          letterSpacing: 0.5,
                          textTransform: 'uppercase',
                        }}
                      >
                        What's Included
                      </Typography>
                      <Box sx={{
                        background: 'rgba(255,255,255,0.04)',
                        borderRadius: 2,
                        p: { xs: 1, md: 2 },
                        mb: { xs: 0.7, md: 1 },
                        border: `1px solid ${service.color}22`,
                      }}>
                        <List dense sx={{ p: 0 }}>
                          {service.features.slice(0, 5).map((feature, idx) => (
                            <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                              <ListItemIcon sx={{ minWidth: 30 }}>
                                <CheckCircle sx={{ color: service.color, fontSize: { xs: 15, md: 18 } }} />
                              </ListItemIcon>
                              <ListItemText
                                primary={feature}
                                sx={{
                                  '& .MuiListItemText-primary': {
                                    color: 'rgba(255, 255, 255, 0.88)',
                                    fontSize: { xs: '0.91rem', md: '0.97rem' },
                                  },
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Additional Expertise Section */}
          <Box sx={{
            background: 'linear-gradient(135deg, #23242a 60%, #232526 100%)',
            borderRadius: 4,
            py: { xs: 3.5, md: 9 },
            mb: { xs: 4, md: 10 },
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
            px: { xs: 0.5, md: 4 },
          }}>
            <Typography
              variant="h6"
              align="center"
              sx={{ color: 'white', fontWeight: 800, mb: 4, letterSpacing: 1.5, textTransform: 'uppercase', fontSize: { xs: '1.1rem', md: '1.25rem' } }}
            >
              Additional Expertise
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Box sx={{ width: 40, height: 4, borderRadius: 2, background: '#FF2C1F', boxShadow: '0 0 8px 2px #FF2C1F44' }} />
              </motion.div>
            </Box>
            <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="center">
              <Grid item xs={12} md={4}>
                <motion.div
                  whileHover={{ scale: 1.045 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card sx={{
                    background: 'rgba(36,37,42,0.98)',
                    border: '1.5px solid rgba(255,255,255,0.10)',
                    borderRadius: 4,
                    boxShadow: '0 2px 16px 0 #FF2C1F11',
                    p: { xs: 1.5, md: 3 },
                    transition: 'box-shadow 0.3s, border-color 0.3s',
                    minHeight: 220,
                    '&:hover .expertise-icon': {
                      boxShadow: '0 0 0 6px #FF2C1F33, 0 2px 16px 0 #FF2C1F66',
                      background: 'linear-gradient(135deg, #FF2C1F 70%, #FF6B35 100%)',
                    },
                  }}>
                    <CardContent sx={{ textAlign: 'center', p: 0 }}>
                      <Box className="expertise-icon" sx={{ width: { xs: 38, md: 56 }, height: { xs: 38, md: 56 }, borderRadius: '50%', background: '#FF2C1F', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: { xs: 1, md: 2 }, boxShadow: '0 2px 12px 0 #FF2C1F33', transition: 'all 0.3s' }}>
                        <Devices sx={{ color: 'white', fontSize: { xs: 20, md: 32 } }} />
                      </Box>
                      <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, mb: 1, fontSize: { xs: '1rem', md: '1.15rem' } }}>
                        Responsive Design
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', fontSize: { xs: '0.93rem', md: '1.01rem' } }}>
                        Mobile-first design that works perfectly on all devices
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={4}>
                <motion.div
                  whileHover={{ scale: 1.045 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card sx={{
                    background: 'rgba(36,37,42,0.98)',
                    border: '1.5px solid rgba(255,255,255,0.10)',
                    borderRadius: 4,
                    boxShadow: '0 2px 16px 0 #FF6B3511',
                    p: { xs: 1.5, md: 3 },
                    transition: 'box-shadow 0.3s, border-color 0.3s',
                    minHeight: 220,
                    '&:hover .expertise-icon': {
                      boxShadow: '0 0 0 6px #FF6B3533, 0 2px 16px 0 #FF6B3566',
                      background: 'linear-gradient(135deg, #FF6B35 70%, #FF2C1F 100%)',
                    },
                  }}>
                    <CardContent sx={{ textAlign: 'center', p: 0 }}>
                      <Box className="expertise-icon" sx={{ width: { xs: 38, md: 56 }, height: { xs: 38, md: 56 }, borderRadius: '50%', background: '#FF6B35', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: { xs: 1, md: 2 }, boxShadow: '0 2px 12px 0 #FF6B3533', transition: 'all 0.3s' }}>
                        <Analytics sx={{ color: 'white', fontSize: { xs: 20, md: 32 } }} />
                      </Box>
                      <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, mb: 1, fontSize: { xs: '1rem', md: '1.15rem' } }}>
                        SEO Optimization
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', fontSize: { xs: '0.93rem', md: '1.01rem' } }}>
                        Built-in SEO best practices for better search rankings
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={4}>
                <motion.div
                  whileHover={{ scale: 1.045 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card sx={{
                    background: 'rgba(36,37,42,0.98)',
                    border: '1.5px solid rgba(255,255,255,0.10)',
                    borderRadius: 4,
                    boxShadow: '0 2px 16px 0 #FF8E5311',
                    p: { xs: 1.5, md: 3 },
                    transition: 'box-shadow 0.3s, border-color 0.3s',
                    minHeight: 220,
                    '&:hover .expertise-icon': {
                      boxShadow: '0 0 0 6px #FF8E5333, 0 2px 16px 0 #FF8E5366',
                      background: 'linear-gradient(135deg, #FF8E53 70%, #FF2C1F 100%)',
                    },
                  }}>
                    <CardContent sx={{ textAlign: 'center', p: 0 }}>
                      <Box className="expertise-icon" sx={{ width: { xs: 38, md: 56 }, height: { xs: 38, md: 56 }, borderRadius: '50%', background: '#FF8E53', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: { xs: 1, md: 2 }, boxShadow: '0 2px 12px 0 #FF8E5333' }}>
                        <Security sx={{ color: 'white', fontSize: { xs: 20, md: 32 } }} />
                      </Box>
                      <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, mb: 1, fontSize: { xs: '1rem', md: '1.15rem' } }}>
                        Web Accessibility
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: { xs: '0.93rem', md: '1.01rem' } }}>
                        WCAG compliant websites accessible to all users
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            </Grid>
          </Box>

          {/* Call to Action */}
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 220 }}>
            <Card sx={{
              background: 'linear-gradient(135deg, #1a1a1a 60%, #232526 100%)',
              borderRadius: 4,
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
              px: { xs: 1.5, md: 8 },
              py: { xs: 2.5, md: 7 },
              width: '100%',
              maxWidth: 700,
              textAlign: 'center',
            }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 700, color: 'white', mb: 2, letterSpacing: 1 }}
              >
                Ready to Start Your Project?
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'rgba(255,255,255,0.8)', mb: { xs: 2, md: 4 }, fontSize: { xs: '1rem', md: '1.15rem' } }}
              >
                Let's discuss your requirements and create a custom solution that fits your needs.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 1.5, md: 2 }, justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  size="large"
                  href="/contact"
                  sx={{
                    background: '#FF2C1F',
                    color: 'white',
                    px: { xs: 2.5, md: 4 },
                    py: { xs: 1, md: 1.5 },
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    fontWeight: 600,
                    borderRadius: 2,
                    '&:hover': {
                      background: '#E0241A',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Get a Quote
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  href="/portfolio"
                  sx={{
                    borderColor: '#FF2C1F',
                    color: '#FF2C1F',
                    px: { xs: 2.5, md: 4 },
                    py: { xs: 1, md: 1.5 },
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    fontWeight: 600,
                    borderRadius: 2,
                    '&:hover': {
                      borderColor: '#E0241A',
                      background: 'rgba(255, 44, 31, 0.08)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  View Our Work
                </Button>
              </Box>
            </Card>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Services; 