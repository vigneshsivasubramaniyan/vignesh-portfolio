# Dynamic Portfolio Website

This portfolio has been converted from a static HTML file to a dynamic, modular website with separated concerns (HTML, CSS, JavaScript).

## 🎯 Key Features

### ✨ Dynamic Content Loading
- **Projects** are loaded from `assets/js/data.js` - easily update your portfolio by editing the data file
- **Guides** are dynamically rendered with smooth animations
- **Contact Information** is centrally managed and auto-generated

### 🎨 Enhanced Animations
- Smooth scroll progress indicator
- Fade-in animations for sections
- Hover effects on cards and buttons
- Typing effect on subtitle
- Parallax scrolling on hero section
- Cards animate when scrolling into view

### 🚀 Performance Optimizations
- Lazy loading for images
- Debounced scroll events
- Intersection Observer for animations
- Modular JavaScript architecture

### 📱 Fully Responsive
- Mobile-first design
- Tablet and desktop optimized
- Touch-friendly interactions

## 📁 File Structure

```
Portfolio/
├── index.html              # Clean HTML structure
├── assets/
│   ├── css/
│   │   └── style.css       # All styling (extracted from inline)
│   ├── js/
│   │   ├── data.js         # Portfolio data configuration
│   │   ├── main.js         # Main JavaScript functionality
│   │   └── chat-widget.js  # Chatbot widget
│   ├── images/
│   │   ├── profile.jpg     # Your profile image
│   │   ├── vs-logo.ico     # Favicon
│   │   └── chatbot_icon.png # Chatbot icon
│   ├── guides/             # Your guide HTML files
│   └── resume/             # Your resume PDF
```

## 🔧 How to Customize

### Update Projects
Edit `assets/js/data.js` and modify the `projects` array:

```javascript
projects: [
    {
        title: "Your Project Name",
        description: "Project description",
        techStack: ["Tech1", "Tech2"],
        githubUrl: "https://github.com/username/repo"
    }
]
```

### Update Guides
Edit the `guides` array in `assets/js/data.js`:

```javascript
guides: [
    {
        icon: "🔧",
        title: "Guide Title",
        description: "Guide description",
        url: "assets/guides/your-guide.html"
    }
]
```

### Update Contact Info
Modify the `contactInfo` array in `assets/js/data.js`

### Change Colors and Styling
Edit `assets/css/style.css` - look for color variables like:
- `#3498db` - Primary blue color
- `#2c3e50` - Dark text color
- `#f8fafc` - Background color

### Configure Chatbot
Update the `config.chatbot` object in `assets/js/data.js` to point to your webhook:

```javascript
chatbot: {
    webhook: {
        url: 'YOUR_WEBHOOK_URL',
        route: 'general'
    }
}
```

## 🎪 Interactive Features

1. **Scroll Progress Bar** - Shows reading progress at the top
2. **Active Navigation** - Nav links highlight based on current section
3. **Smooth Scrolling** - Click nav links for smooth scroll to sections
4. **Animated Cards** - Cards fade in as you scroll
5. **Tech Badge Click** - Click any tech badge to copy to clipboard
6. **Contact Form** - Integrated with webhook for form submissions
7. **Chat Widget** - AI chatbot in bottom-right corner

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 Notes

- The HTML structure remains unchanged as requested
- All inline CSS has been moved to `assets/css/style.css`
- All inline JavaScript has been moved to `assets/js/main.js`
- Content is now data-driven from `assets/js/data.js`
- Enhanced with modern JavaScript features (ES6+)
- Modular architecture for easy maintenance

## 🚀 Deployment

1. Upload all files to your web server
2. Ensure directory structure is maintained
3. Update the webhook URLs in `data.js` for contact form and chatbot
4. Test all features in your production environment

## 💡 Tips

- Keep `data.js` updated with your latest projects
- Add your actual profile image to `assets/images/profile.jpg`
- Customize colors in `style.css` to match your brand
- The chatbot widget is a placeholder - integrate with your preferred solution

---

**Made with ❤️ using Vanilla JavaScript, CSS3, and HTML5**
