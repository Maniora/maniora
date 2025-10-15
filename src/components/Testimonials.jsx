import { Container, Typography, Grid, Card, CardContent, Avatar, Box, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

const testimonials = [
  {
    name: "Akhil",
    role: "Founder - Pixelfable18",
    feedback:
      "Working with MANIORA was an amazing experience. They built us a preset-selling website with an admin panel that makes it super easy to manage orders and track presets. Our business finally has a professional online presence!",
    avatar: "/pixelfable18testimonial.jpg", // keep your image here
  },
  {
    name: "Krishna Kanth",
    role: "Founder - 4KMedia (Digital Marketing Agency)",
    feedback:
      "The MANIORA team nailed our website for 4KMedia. The output is clean, fast, and on-brand—but the real highlight is the animated illustrations. They bring the site to life and make our story pop. Super impressed!",
    avatar: "/4kmedia.png",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const timerRef = useRef(null);

  const goTo = (i) => setIndex(((i % total) + total) % total);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [index]);

  const pause = () => clearInterval(timerRef.current);
  const resume = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 5000);
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #111 0%, #000 100%)',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="md">
        {/* Section Header */}
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
              fontWeight: 800,
              fontSize: { xs: '1.8rem', md: '2.4rem' },
              mb: 2,
              color: 'white',
              letterSpacing: 1,
              textTransform: 'uppercase',
            }}
          >
            Client Testimonials
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 5, md: 8 } }}>
            <Box
              sx={{
                width: 70,
                height: 4,
                borderRadius: 2,
                background: 'linear-gradient(90deg, #FF2C1F, #FF6B35)',
              }}
            />
          </Box>
        </motion.div>

        {/* Mobile/Tablet: Slider */}
        <Box sx={{ position: 'relative', maxWidth: 720, mx: 'auto', display: { xs: 'block', md: 'none' } }} onMouseEnter={pause} onMouseLeave={resume}>
          <Box sx={{ overflow: 'hidden', borderRadius: 4 }}>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {(() => {
                const t = testimonials[index];
                return (
                  <Card
                    sx={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 4,
                      boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                      p: { xs: 3, md: 4 },
                      textAlign: 'center',
                      color: 'white',
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 4,
                          fontSize: { xs: '1rem', md: '1.15rem' },
                          fontStyle: 'italic',
                          lineHeight: 1.8,
                          color: 'rgba(255,255,255,0.85)',
                        }}
                      >
                        “{t.feedback}”
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Avatar
                          src={t.avatar}
                          alt={t.name}
                          sx={{
                            width: 70,
                            height: 70,
                            mr: 2.5,
                            border: '3px solid #FF6B35',
                          }}
                        />
                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: 700,
                              fontSize: '1.1rem',
                              color: '#FF6B35',
                            }}
                          >
                            {t.name}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                            {t.role}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                );
              })()}
            </motion.div>
          </Box>

          {/* Controls */}
          <IconButton onClick={prev} sx={{ position: 'absolute', top: '50%', left: -8, transform: 'translateY(-50%)', color: 'white' }} aria-label="Previous">
            <ArrowBackIosNew />
          </IconButton>
          <IconButton onClick={next} sx={{ position: 'absolute', top: '50%', right: -8, transform: 'translateY(-50%)', color: 'white' }} aria-label="Next">
            <ArrowForwardIos />
          </IconButton>

          {/* Dots */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2 }}>
            {testimonials.map((_, i) => (
              <Box
                key={i}
                onClick={() => goTo(i)}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  bgcolor: i === index ? '#FF2C1F' : 'rgba(255,255,255,0.3)',
                  cursor: 'pointer'
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Desktop: Side-by-side cards */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Grid container spacing={3} justifyContent="center">
            {testimonials.map((t) => (
              <Grid item md={6} key={t.name}>
                <Card
                  sx={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 4,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                    p: 4,
                    textAlign: 'center',
                    color: 'white',
                    height: '100%'
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 4,
                        fontSize: '1.15rem',
                        fontStyle: 'italic',
                        lineHeight: 1.8,
                        color: 'rgba(255,255,255,0.85)',
                      }}
                    >
                      “{t.feedback}”
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Avatar
                        src={t.avatar}
                        alt={t.name}
                        sx={{
                          width: 70,
                          height: 70,
                          mr: 2.5,
                          border: '3px solid #FF6B35',
                        }}
                      />
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 700,
                            fontSize: '1.1rem',
                            color: '#FF6B35',
                          }}
                        >
                          {t.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                          {t.role}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
