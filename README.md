# Maycie Furniture & Fixture Trading Website

A beautiful, modern, and fully responsive static website for **Maycie Furniture & Fixture Trading** - a premium furniture trading company.

![Maycie Furniture](https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80)

## 🌟 Features

- **Modern & Elegant Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Elements**: 
  - Smooth scroll navigation
  - Animated sections on scroll
  - Product card hover effects
  - Gallery lightbox viewer
  - Mobile-friendly hamburger menu
- **Contact Form**: Ready-to-use contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Loading**: Optimized images and efficient code

## 📁 Project Structure

```
maycie-website/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles and animations
├── js/
│   └── script.js       # Interactive JavaScript features
├── images/             # Folder for local images (optional)
└── README.md           # This file
```

## 🎨 Sections

1. **Navigation Bar**: Fixed navigation with smooth scrolling
2. **Hero Section**: Eye-catching hero with call-to-action buttons
3. **About Section**: Company information and key features
4. **Products Section**: Showcase of furniture categories
5. **Gallery Section**: Visual portfolio with lightbox effect
6. **Testimonials**: Customer reviews
7. **Contact Section**: Contact form and business information
8. **Footer**: Site links and social media

## 🚀 Getting Started

### Option 1: Open Directly in Browser

1. Download or clone this project
2. Navigate to the `maycie-website` folder
3. Double-click `index.html` to open in your default browser

### Option 2: Use Live Server (Recommended for Development)

1. Install [VS Code](https://code.visualstudio.com/)
2. Install the "Live Server" extension
3. Right-click on `index.html` and select "Open with Live Server"

### Option 3: Deploy to Web Server

Upload all files to your web hosting service via FTP:
- Upload `index.html` to the root directory
- Upload `css/` and `js/` folders
- Upload `images/` folder if you have local images

## 🎯 Customization Guide

### Change Colors

Edit the CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #2c3e50;      /* Main dark color */
    --secondary-color: #c7956d;    /* Gold/brown accent */
    --accent-color: #e8b96e;       /* Light gold */
}
```

### Update Business Information

Edit the contact section in `index.html`:
- Address
- Phone numbers
- Email addresses
- Business hours

### Add Your Own Images

Replace the Unsplash image URLs in `index.html` with your own images:
1. Save images to the `images/` folder
2. Update the `src` attributes:
   ```html
   <img src="images/your-image.jpg" alt="Description">
   ```

### Modify Content

All content is in `index.html`:
- Company name and tagline
- About text
- Product categories
- Testimonials
- Footer information

## 📱 Responsive Breakpoints

- Desktop: 1200px and above
- Tablet: 768px - 1199px
- Mobile: Below 768px

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🎨 Fonts Used

- **Playfair Display**: Elegant serif for headings
- **Poppins**: Clean sans-serif for body text

Fonts are loaded from Google Fonts (requires internet connection).

## 📸 Images

Current images are from [Unsplash](https://unsplash.com) (free to use). 

**To use your own images:**
1. Take high-quality photos of your furniture
2. Optimize images (recommended: 1920x1080 for hero, 800x600 for products)
3. Save to `images/` folder
4. Update image URLs in HTML

## 🔧 Features to Add (Optional)

If you want to enhance the website:
- Add a blog section
- Integrate e-commerce functionality
- Add customer login system
- Implement email functionality for contact form
- Add Google Maps for showroom location
- Add product filtering/search
- Integrate social media feeds

## 📞 Contact Form Backend

The contact form currently shows a success message. To make it functional:

### Option 1: Use FormSubmit (Free, No Backend Needed)
```html
<form action="https://formsubmit.co/your@email.com" method="POST">
```

### Option 2: Use Netlify Forms (If hosting on Netlify)
Add `netlify` attribute to form tag

### Option 3: PHP Backend
Create `contact.php` to handle form submissions

## 🎭 Performance Tips

- Compress images before uploading
- Use WebP format for better compression
- Minify CSS and JS for production
- Enable caching on your web server
- Use a CDN for faster loading

## 📄 License

This is a custom website created for Maycie Furniture & Fixture Trading. 
Free to use and modify for your business needs.

## 👨‍💻 Support

For customizations or questions about this website, feel free to reach out!

---

**Built with ❤️ for Maycie Furniture & Fixture Trading**

*Crafting Quality Furniture for Your Perfect Space*

