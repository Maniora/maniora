import React, { useState, useRef } from 'react';
import { 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Grid, 
  Box, 
  Card, 
  CardContent,
  Alert,
  Snackbar,
  CircularProgress,
  MenuItem
} from '@mui/material';
import { 
  Email, 
  Phone, 
  LocationOn, 
  Send,
  CheckCircle,
  Error as ErrorIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
    service: '',
    budget: '',
    budgetCustom: ''
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const contactInfo = [
    {
      icon: Email,
      title: 'Email',
      value: 'info@maniora.in',
      href: 'mailto:info@maniora.in'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9640161711',
      href: 'tel:+919640161711'
    },
    {
      icon: LocationOn,
      title: 'Location',
      value: 'Hyderabad, Telangana',
      href: '#'
    }
  ];

  const services = [
    'Website Development',
    'Website Redesign', 
    'Website Maintenance',
    'Social Media Management',
    'Other'
  ];

  const budgets = [
    'Below ₹25,000',
    '₹25,000 – ₹50,000',
    '₹50,000 – ₹1,00,000',
    '₹1,00,000 – ₹2,00,000',
    'Above ₹2,00,000',
    'Custom amount'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // EmailJS Configuration
      const emailjsConfig = {
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      };

      if (!emailjsConfig.serviceId || !emailjsConfig.templateId || !emailjsConfig.publicKey) {
        throw new Error('EmailJS environment variables are missing. Please configure .env');
      }

      // Send email via EmailJS
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          subject: 'New Contact Form Submission',
          from_name: formData.name,
          from_email: formData.email,
          mobile: formData.mobile,
          message: formData.message,
              service: formData.service,
              budget: formData.budget === 'Custom amount' && formData.budgetCustom
                ? formData.budgetCustom
                : formData.budget,
          to_name: 'MANIORA Team'
        },
        emailjsConfig.publicKey
      );

      // Save to Google Sheets (you'll need to set up Google Apps Script)
      await saveToGoogleSheets(formData);

      setSnackbar({
        open: true,
        message: 'Thank you! Your message has been sent successfully.',
        severity: 'success'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        mobile: '',
        message: '',
        service: '',
        budget: '',
        budgetCustom: ''
      });

    } catch (error) {
      console.error('Error sending message:', error);
      setSnackbar({
        open: true,
        message: 'Sorry, there was an error sending your message. Please try again.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const saveToGoogleSheets = async (data) => {
    try {
      // Configurable via env. If not provided, skip saving to Sheets.
      const scriptURL = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;
      if (!scriptURL) {
        console.warn('VITE_GOOGLE_APPS_SCRIPT_URL is not set; skipping Google Sheets save.');
        return;
      }
      
      // Use no-cors to avoid preflight errors in development; response will be opaque
      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          mobile: data.mobile,
          message: data.message,
          service: data.service,
          budget: data.budget === 'Custom amount' && data.budgetCustom ? data.budgetCustom : data.budget,
          timestamp: new Date().toISOString()
        })
      });

      // no-cors mode: response is opaque; intentionally no logging

    } catch (error) {
      if (import.meta.env.MODE !== 'production') {
        console.error('Error saving to Google Sheets:', error);
      }
      // Don't throw error here as email was already sent
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <>
      <Helmet>
        <title>Contact | MANIORA - Start Your Project</title>
        <meta name="description" content="Contact MANIORA for bespoke website development, redesign, maintenance, and digital solutions. Start your premium web project today." />
        <meta name="keywords" content="contact, MANIORA, website development, web design, digital solutions, premium web agency, Hyderabad" />
        <meta property="og:title" content="Contact | MANIORA - Start Your Project" />
        <meta property="og:description" content="Contact MANIORA for bespoke website development, redesign, maintenance, and digital solutions. Start your premium web project today." />
        <meta property="og:image" content="/logo2White.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://maniora.in/contact" />
        <meta name="twitter:card" content="aboutus.png" />
        <meta name="twitter:title" content="Contact | MANIORA - Start Your Project" />
        <meta name="twitter:description" content="Contact MANIORA for bespoke website development, redesign, maintenance, and digital solutions. Start your premium web project today." />
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
                  "name": "Contact",
                  "item": "https://maniora.in/contact"
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
              CONTACT US
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 2.5, md: 3 } }}>
              <Box sx={{ width: 48, height: 4, borderRadius: 2, background: 'linear-gradient(90deg, #FF2C1F, #FF6B35)' }} />
            </Box>
            <Typography
              variant="h2"
              align="center"
              sx={{
                fontWeight: 400,
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                color: 'rgba(255, 255, 255, 0.7)',
                mb: 6,
              }}
            >
              Ready to transform your digital presence? Let's discuss your project.
            </Typography>
          </motion.div>

          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card
                  sx={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    p: 4,
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 600,
                      mb: 3,
                      color: 'white',
                    }}
                  >
                    Send us a message
                  </Typography>

                  <form ref={formRef} onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: 'white',
                              '& fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: '#FF2C1F',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#FF2C1F',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(255, 255, 255, 0.7)',
                              '&.Mui-focused': {
                                color: '#FF2C1F',
                              },
                            },
                          }}
                        />
                      </Grid>
                      
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Your Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: 'white',
                              '& fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: '#FF2C1F',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#FF2C1F',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(255, 255, 255, 0.7)',
                              '&.Mui-focused': {
                                color: '#FF2C1F',
                              },
                            },
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Mobile Number"
                          name="mobile"
                          type="tel"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          required
                          inputProps={{ pattern: '[0-9]{10,15}' }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: 'white',
                              '& fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: '#FF2C1F',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#FF2C1F',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(255, 255, 255, 0.7)',
                              '&.Mui-focused': {
                                color: '#FF2C1F',
                              },
                            },
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Service Interest"
                          name="service"
                          select
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: 'white',
                              '& fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: '#FF2C1F',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#FF2C1F',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(255, 255, 255, 0.7)',
                              fontWeight: 600,
                              '&.Mui-focused': {
                                color: '#FF2C1F',
                              },
                            },
                            '& .MuiSelect-icon': {
                              color: '#FF2C1F',
                            },
                            mb: 2,
                          }}
                        >
                          <MenuItem value="" disabled>
                            Select a service
                          </MenuItem>
                          {services.map((service) => (
                            <MenuItem key={service} value={service}>
                              {service}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Estimated Budget"
                          name="budget"
                          select
                          value={formData.budget}
                          onChange={handleInputChange}
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: 'white',
                              '& fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: '#FF2C1F',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#FF2C1F',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(255, 255, 255, 0.7)',
                              fontWeight: 600,
                              '&.Mui-focused': {
                                color: '#FF2C1F',
                              },
                            },
                            '& .MuiSelect-icon': {
                              color: '#FF2C1F',
                            },
                            mb: 2,
                          }}
                        >
                          <MenuItem value="" disabled>
                            Select a budget range
                          </MenuItem>
                          {budgets.map((range) => (
                            <MenuItem key={range} value={range}>
                              {range}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>

                      {formData.budget === 'Custom amount' && (
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Enter Custom Budget (e.g., ₹1,50,000)"
                            name="budgetCustom"
                            value={formData.budgetCustom}
                            onChange={handleInputChange}
                            required
                            placeholder="₹"
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                color: 'white',
                                '& fieldset': {
                                  borderColor: 'rgba(255, 255, 255, 0.3)',
                                },
                                '&:hover fieldset': {
                                  borderColor: '#FF2C1F',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: '#FF2C1F',
                                },
                              },
                              '& .MuiInputLabel-root': {
                                color: 'rgba(255, 255, 255, 0.7)',
                                '&.Mui-focused': {
                                  color: '#FF2C1F',
                                },
                              },
                            }}
                          />
                        </Grid>
                      )}

                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Your Message"
                          name="message"
                          multiline
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: 'white',
                              '& fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: '#FF2C1F',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#FF2C1F',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(255, 255, 255, 0.7)',
                              '&.Mui-focused': {
                                color: '#FF2C1F',
                              },
                            },
                          }}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          disabled={loading}
                          startIcon={loading ? <CircularProgress size={20} /> : <Send />}
                          sx={{
                            background: '#FF2C1F',
                            color: 'white',
                            px: 4,
                            py: 1.5,
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            '&:hover': {
                              background: '#E0241A',
                            },
                            '&:disabled': {
                              background: 'rgba(255, 44, 31, 0.5)',
                            },
                          }}
                        >
                          {loading ? 'Sending...' : 'Send Message'}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Card>
              </motion.div>
            </Grid>

            {/* Contact Information */}
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    mb: 4,
                    color: 'white',
                  }}
                >
                  Contact Information
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 0.5, md: 1 } }}>
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      <Card
                        component="a"
                        href={info.href}
                        sx={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            borderColor: '#FF2C1F',
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box
                              sx={{
                                width: 50,
                                height: 50,
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #FF2C1F 0%, #FF2C1F80 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <info.icon sx={{ color: 'white', fontSize: 24 }} />
                            </Box>
                            <Box>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontWeight: 600,
                                  color: 'white',
                                  mb: 0.5,
                                }}
                              >
                                {info.title}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: 'rgba(255, 255, 255, 0.7)',
                                }}
                              >
                                {info.value}
                              </Typography>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </Box>

                {/* Additional Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <Card
                    sx={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      mt: 4,
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: 'white',
                          mb: 2,
                        }}
                      >
                        Business Hours
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          lineHeight: 1.8,
                        }}
                      >
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
            icon={snackbar.severity === 'success' ? <CheckCircle /> : <ErrorIcon />}
          sx={{
            width: '100%',
            background: snackbar.severity === 'success' ? '#4caf50' : '#f44336',
            color: 'white',
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Contact; 