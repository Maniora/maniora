# MANIORA Website

A stunning, modern website for MANIORA - a digital agency specializing in website development, redesign, maintenance, and social media management.

## 🚀 Features

- **Modern Design**: Futuristic, minimal design with Helvetica Neue font
- **Responsive**: Fully responsive across all devices
- **Animations**: Smooth scroll animations with Framer Motion
- **Contact Form**: EmailJS integration for sending emails
- **Google Sheets**: Form submissions saved to Google Sheets
- **SEO Optimized**: React Helmet for meta tags and SEO
- **Material UI**: Beautiful components with Tailwind CSS styling

## 🛠️ Tech Stack

- **Frontend**: React.js with Vite
- **Styling**: Tailwind CSS + Material UI
- **Animations**: Framer Motion
- **Email**: EmailJS
- **Data Storage**: Google Sheets via Apps Script
- **Font**: Helvetica Neue
- **Deployment**: Vercel/Netlify ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd maniora-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## ⚙️ Configuration

### EmailJS Setup

1. **Create EmailJS Account**
   - Go to [EmailJS](https://www.emailjs.com/)
   - Sign up for a free account

2. **Configure Email Service**
   - Add your email service (Gmail, Outlook, etc.)
   - Note your Service ID

3. **Create Email Template**
   - Create a new email template
   - Use variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`, `{{service}}`
   - Note your Template ID

4. **Update Configuration**
   - Open `src/pages/Contact.jsx`
   - Replace the placeholder values:
   ```javascript
   const emailjsConfig = {
     serviceId: 'YOUR_EMAILJS_SERVICE_ID',
     templateId: 'YOUR_EMAILJS_TEMPLATE_ID',
     publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
   };
   ```

### Google Sheets Integration

1. **Create Google Sheet**
   - Create a new Google Sheet
   - Add headers: Name, Email, Message, Service, Timestamp

2. **Create Google Apps Script**
   - Go to [Google Apps Script](https://script.google.com/)
   - Create a new project
   - Replace the code with:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    const row = [
      data.name,
      data.email,
      data.message,
      data.service,
      data.timestamp
    ];
    
    sheet.appendRow(row);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. **Deploy as Web App**
   - Click "Deploy" > "New deployment"
   - Choose "Web app"
   - Set access to "Anyone"
   - Copy the Web App URL

4. **Update Configuration**
   - Open `src/pages/Contact.jsx`
   - Replace the script URL:
   ```javascript
   const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';
   ```

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  'maniora-red': '#FF2C1F',
  'maniora-black': '#000000',
  'maniora-gray': '#E0E0E0',
}
```

### Content
- Update company information in components
- Replace placeholder images with your own
- Modify services and portfolio items
- Update contact information

### Branding
- Replace "MANIORA" with your brand name
- Update logo and favicon
- Modify social media links

## 📱 Pages

1. **Home** (`/`) - Hero section with services overview
2. **About** (`/about`) - Company mission, vision, and timeline
3. **Services** (`/services`) - Detailed service offerings
4. **Portfolio** (`/portfolio`) - Project showcase with filtering
5. **Contact** (`/contact`) - Contact form with EmailJS integration

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Custom domain setup available

### Netlify
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Manual Deployment
1. Run `npm run build`
2. Upload `dist` folder to your hosting provider

## 📧 Contact Form Features

- **EmailJS Integration**: Sends emails directly to your inbox
- **Google Sheets**: Stores all submissions in a spreadsheet
- **Form Validation**: Client-side validation for better UX
- **Loading States**: Visual feedback during submission
- **Success/Error Messages**: User-friendly notifications

## 🔧 Development

### Project Structure
```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── App.jsx        # Main app component
├── main.jsx       # Entry point
└── index.css      # Global styles
```

### Key Components
- `Navbar.jsx` - Navigation with mobile menu
- `Footer.jsx` - Footer with social links
- `Home.jsx` - Landing page with hero section
- `Contact.jsx` - Contact form with EmailJS
- `Services.jsx` - Service offerings
- `Portfolio.jsx` - Project showcase
- `About.jsx` - Company information

## 🎯 Performance

- **Lazy Loading**: Images and components load on demand
- **Optimized Build**: Vite for fast development and builds
- **SEO Ready**: Meta tags and structured data
- **Mobile First**: Responsive design for all devices

## 📈 Analytics

Add Google Analytics by updating `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions:
- Email: maniora.official@gmail.com
- Create an issue in the repository

---

**MANIORA** - Transforming digital experiences through innovation and excellence. 