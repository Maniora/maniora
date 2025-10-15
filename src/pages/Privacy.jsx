import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Helmet } from 'react-helmet';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | MANIORA</title>
        <meta name="description" content="Learn how MANIORA collects, uses, protects, and shares your information, and understand your rights." />
        <meta property="og:title" content="Privacy Policy | MANIORA" />
        <meta property="og:description" content="How MANIORA collects, uses, and protects your personal information." />
        <meta property="og:image" content="/logo2White.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://maniora.in/privacy" />
        {/* Google Tag Manager */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W25MGLNG');`}
        </script>
        {/* End Google Tag Manager */}
      </Helmet>

      <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)', pt: 8, pb: 8 }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography
              variant="h1"
              sx={{ fontWeight: 800, fontSize: { xs: '1.6rem', md: '2.7rem' }, letterSpacing: 2, color: 'white', textTransform: 'uppercase' }}
            >
              Privacy Policy
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
              <Box sx={{ width: 48, height: 4, borderRadius: 2, background: 'linear-gradient(90deg, #FF2C1F, #FF6B35)' }} />
            </Box>
            
          </Box>

          <Section title="1. Introduction">
            This Privacy Policy explains how MANIORA ("we", "us", or "our") collects, uses, discloses, and protects
            information when you visit our website, contact us, or use our services.
          </Section>

          <Section title="2. Information We Collect">
            We may collect: (a) contact details such as name, email, and phone; (b) project information you provide for
            proposals or services; (c) usage and analytics data such as pages visited and interactions; and (d) technical
            data such as IP address, browser type, and device identifiers.
          </Section>

          <Section title="3. How We Use Information">
            We use information to respond to inquiries, deliver and improve services, personalize content, manage
            security and performance, comply with legal obligations, and communicate updates or marketing where
            permitted.
          </Section>

          <Section title="4. Cookies & Similar Technologies">
            We may use cookies and similar technologies to enhance user experience, analyze traffic, and remember
            preferences. You can control cookies through your browser settings; disabling cookies may affect site
            functionality.
          </Section>

          <Section title="5. Sharing of Information">
            We do not sell personal information. We may share data with trusted service providers who assist in
            operations (e.g., hosting, analytics), subject to contractual confidentiality and security obligations, or as
            required by law.
          </Section>

          <Section title="6. Data Security">
            We implement reasonable administrative, technical, and physical safeguards to protect information. However,
            no method of transmission or storage is completely secure.
          </Section>

          <Section title="7. Data Retention">
            We retain personal information only as long as necessary for the purposes described in this policy, unless a
            longer period is required by law or to resolve disputes and enforce agreements.
          </Section>

          <Section title="8. Your Rights">
            Subject to applicable law, you may request access, correction, deletion, or restriction of your personal
            information, or object to certain processing. To exercise these rights, contact
            maniora.official@gmail.com.
          </Section>

          <Section title="9. Children's Privacy">
            Our website and services are not directed to children under the age of 13. We do not knowingly collect
            personal information from children.
          </Section>

          <Section title="10. International Transfers">
            If we transfer information across borders, we take steps to ensure appropriate protections in accordance
            with applicable law.
          </Section>

          <Section title="11. Updates to This Policy">
            We may update this Privacy Policy from time to time. Material changes will be indicated by updating the
            "Last updated" date above.
          </Section>

          <Section title="Contact">
            If you have questions about this policy, contact us at maniora.official@gmail.com.
          </Section>
        </Container>
      </Box>
    </>
  );
};

const Section = ({ title, children }) => (
  <Box sx={{ mb: 3.5 }}>
    <Typography variant="h5" sx={{ mt: 1, mb: 1.2, fontWeight: 600, color: 'white' }}>{title}</Typography>
    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.8 }}>{children}</Typography>
  </Box>
);

export default Privacy;


