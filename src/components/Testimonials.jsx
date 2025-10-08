import { Container, Typography, Grid, Card, CardContent, Avatar, Box } from '@mui/material';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Akhil",
    role: "Founder - Pixelfable18",
    feedback:
      "Working with MANIORA was an amazing experience. They built us a preset-selling website with an admin panel that makes it super easy to manage orders and track presets. Our business finally has a professional online presence!",
    avatar: "/pixelfable18testimonial.jpg", // keep your image here
  },
];

const Testimonials = () => {
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

        {/* Testimonials */}
        <Grid container justifyContent="center">
          {testimonials.map((t, idx) => (
            <Grid item xs={12} key={t.name} sx={{ maxWidth: 700 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
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
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
