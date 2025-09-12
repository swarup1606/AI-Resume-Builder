# Resume Templates

This directory contains different resume template components for the AI Resume Builder.

## Available Templates

1. **Classic Template** (`ClassicTemplate.jsx`)
   - Clean and professional layout
   - Traditional resume format
   - Simple borders and spacing

2. **Modern Template** (`ModernTemplate.jsx`)
   - Sleek design with bold headers
   - Gradient backgrounds
   - Enhanced shadows and modern styling

3. **Creative Template** (`CreativeTemplate.jsx`)
   - Colorful and eye-catching design
   - Glassmorphism effects
   - Decorative elements and rounded corners

4. **Minimal Template** (`MinimalTemplate.jsx`)
   - Simple and elegant layout
   - Clean white background
   - Minimal borders and maximum whitespace

5. **Executive Template** (`ExecutiveTemplate.jsx`)
   - Professional with sidebars
   - Two-column layout
   - Dark sidebar with light main content

6. **Tech Template** (`TechTemplate.jsx`)
   - Modern tech-focused design
   - Green color scheme
   - Tech-inspired patterns and effects

## How to Add New Templates

1. Create a new template component in this directory
2. Follow the naming convention: `[TemplateName]Template.jsx`
3. Import and use the existing preview components
4. Add the template to the `TemplateWrapper.jsx` switch statement
5. Add the template to the `TemplateSelector.jsx` templates array

## Template Structure

Each template should:
- Accept `resumeInfo` as a prop
- Use the existing preview components
- Apply custom styling and layout
- Maintain responsive design
- Use the theme color from `resumeInfo.themeColor`
