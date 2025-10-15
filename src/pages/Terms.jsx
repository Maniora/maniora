import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import { Helmet } from 'react-helmet';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | MANIORA</title>
        <meta name="description" content="Read MANIORA's Terms and Conditions covering usage, services, payments, intellectual property, confidentiality, and liability." />
        <meta property="og:title" content="Terms and Conditions | MANIORA" />
        <meta property="og:description" content="Terms governing the use of MANIORA's website and services." />
        <meta property="og:image" content="/logo2White.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://maniora.in/terms" />
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
              Terms and Conditions
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
              <Box sx={{ width: 48, height: 4, borderRadius: 2, background: 'linear-gradient(90deg, #FF2C1F, #FF6B35)' }} />
            </Box>
            
          </Box>

          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, mb: 3 }}>
            These Terms and Conditions ("Terms") govern your access to and use of MANIORA's website and services.
            By accessing our site or engaging our services, you agree to be bound by these Terms.
          </Typography>

          <Section title="1. Acceptance of Terms">
            By using our website or engaging our services, you confirm that you have read, understood, and agree to these
            Terms. If you do not agree, please discontinue use of our site and services.
          </Section>

          <Section title="2. Services & Engagement">
            We provide custom web development and digital services. Project scope, timelines, and deliverables will be
            defined in a written proposal or agreement. Changes to scope may impact cost and timeline.
          </Section>

          <Section title="3. Payments & Invoicing">
            Unless otherwise agreed in writing, a project may require an advance to initiate work, with remaining
            payments tied to milestones or delivery. Invoices are due upon receipt. Late payments may pause work and
            may incur reasonable charges.
          </Section>

          <Section title="4. Client Responsibilities">
            You agree to provide timely feedback, content, and approvals necessary for delivery. You represent that
            provided materials do not infringe third‑party rights and that you have authority to use them.
          </Section>

          <Section title="5. Intellectual Property">
            Unless specified otherwise, we retain ownership of our pre‑existing materials, frameworks, and know‑how.
            Upon final payment, you receive a license or ownership to project deliverables as outlined in your proposal.
          </Section>

          <Section title="6. Third‑Party Services & Dependencies">
            Projects may rely on third‑party platforms, libraries, or APIs. Their availability or changes are outside
            our control. You agree to comply with applicable third‑party terms and fees.
          </Section>

          <Section title="7. Confidentiality">
            Each party may access confidential information of the other. Both parties agree to protect such information
            and use it only for fulfilling the project, except where disclosure is required by law.
          </Section>

          <Section title="8. Warranties & Disclaimer">
            We provide services using reasonable skill and care. Except as expressly stated, the services are provided
            "as is" without warranties of any kind, whether express or implied.
          </Section>

          <Section title="9. Limitation of Liability">
            To the maximum extent permitted by law, MANIORA will not be liable for indirect, incidental, special,
            consequential, or punitive damages, or any loss of profits, revenue, or data.
          </Section>

          <Section title="10. Termination">
            Either party may terminate an engagement for material breach if not cured within a reasonable period after
            written notice. Upon termination, amounts for work performed up to the termination date become due.
          </Section>

          <Section title="11. Governing Law & Dispute Resolution">
            These Terms are governed by the laws of Telangana, India, without regard to conflicts of law principles.
            Disputes will first be addressed through good‑faith negotiations; if unresolved, they may be submitted to
            the competent courts in Hyderabad, Telangana.
          </Section>

          <Section title="12. Changes to These Terms">
            We may update these Terms from time to time. Continued use of the site or services after changes constitutes
            acceptance of the updated Terms.
          </Section>

          <Section title="Contact">
            For any questions, contact us at info@maniora.in.
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

export default Terms;


