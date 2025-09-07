import { Container, Typography, Grid, Card, CardContent, Avatar, Box } from '@mui/material';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Akhil",
    role: "Founder - Pixelfable18",
    feedback: "Working with MANIORA was an amazing experience. They built us a preset-selling website with an admin panel that makes it super easy to manage orders and track presets. Our business finally has a professional online presence!",
    avatar: "/pixelfable18testimonial.jpg" // Replace with client image
  }
];

const Testimonials = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)',
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
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
              fontWeight: 700,
              fontSize: { xs: '1.5rem', md: '2.2rem' },
              mb: 2,
              color: 'white',
              letterSpacing: 1,
              textTransform: 'uppercase',
            }}
          >
            Client Testimonials
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 4, md: 6 } }}>
            <Box sx={{ width: 60, height: 4, borderRadius: 2, background: 'linear-gradient(90deg, #FF2C1F, #FF6B35)' }} />
          </Box>
        </motion.div>

        {/* Testimonials Grid */}
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {testimonials.map((t, idx) => (
            <Grid item xs={12} md={4} key={t.name}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 3,
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'white',
                  }}
                >
                  <CardContent sx={{ flex: 1 }}>
                    <Typography variant="body1" sx={{ mb: 3, fontSize: '1rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.85)' }}>
                      "{t.feedback}"
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}>
                      <Avatar src={t.avatar} alt={t.name} sx={{ width: 56, height: 56, mr: 2 }} />
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#FF6B35' }}>
                          {t.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                          {t.role}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
